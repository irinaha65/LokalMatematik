<?php
include_once $_SERVER['DOCUMENT_ROOT'] . '/CommonPHP/blocks/includes.php';

//Utils::saveLog("drw ".$_GET["start"].$_GET["end"]);
if (isset($_GET["start"]) && isset($_GET["end"])) {
  $utDressins = BokingMapper::getUpptagnaInterval($_GET["start"], $_GET["end"]);
} else {
  $utDressins = BokingMapper::getUpptagnaInterval(date("Y-m-d"), date("Y-m-d"));
}



function redirect($page)
{
  header('Location: ' . $page);
  exit;
}
?>

<!DOCTYPE html>
<html lang="sv">

<head>
  <meta charset="UTF-8" />

  <title>Statistik</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <script type="text/javascript" src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
  <script type="text/javascript" src="moment.min.js"></script>

  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
  <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.orange-deep_purple.min.css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <style type="text/css">
    body {
      font: 14px sans-serif;
      text-align: center;
    }
  </style>
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  <script type="text/javascript">
    google.charts.load('current', {
      'packages': ['bar']
    });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {


      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Datum');
      data.addColumn('number', 'Enkel');
      data.addColumn('number', 'Tandem');
      <?php
      Utils::saveLog("draw  count " . count($utDressins));

      foreach ($utDressins as $row) {
        echo ("data.addRow(['" . $row[0] . "'," . $row[1] . "," . $row[2] . "]);");
        //     Utils::saveLog("data.addRow(['".$row[0]."',".$row[1].",".$row[2]."]);");
      }
      ?>


      var options = {
        chart: {
          title: 'Upptagna dressiner inom datum-intervalen',
          subtitle: 'Enkel och Tandem : bokade och utlämnade',
        }
      };

      var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  </script>
</head>

<body>



  <div id="columnchart_material" style="width: 800px; height: 400px;"></div>

  <button class="mdl-float-button mdl-button mdl-button--icon mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" data-upgraded=",MaterialButton" onclick="dressUt()" title="OK">
    <i class="material-icons">home</i> </button>
  <script type="text/javascript">
    function dressUt() {
      window.location = "date-range.php";

    }
  </script>

  <script src="https://storage.googleapis.com/code.getmdl.io/1.0.6/material.min.js">
  </script>
</body>

</html>