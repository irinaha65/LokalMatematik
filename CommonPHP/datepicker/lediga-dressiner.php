<?php
include_once $_SERVER['DOCUMENT_ROOT'] . '/CommonPHP/blocks/includes.php';

//Utils::saveLog("------------------drw ".$_GET["start"].$_GET["end"]);
if (isset($_GET["start"]) && isset($_GET["end"])) {
  $utDressins = BokingMapper::getFreeDressinInterval($_GET["start"], $_GET["end"]);
} else {
  $utDressins = BokingMapper::getFreeDressinInterval(date("Y-m-d"), date("Y-m-d"));
}
//print_r($utDressins);
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

  <title>Lediga dressiner</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <script type="text/javascript" src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
  <script type="text/javascript" src="moment.min.js"></script>
  <link rel="stylesheet" href="../styles/main.css" />
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
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
          title: 'Lediga dressiner inom datum-intervalen',
          subtitle: 'Enkel och Tandem ',

        },
        bars: 'horizontal' // Required for Material Bar Charts.
      };

      var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
      var hei = (data.getNumberOfRows() * 30 + 100) + 'px';
      if (data.getNumberOfRows() * 30 + 100 < 200) {
        hei = '200px';
      }
      document.getElementById('columnchart_material').style.height = hei;
      chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  </script>

  <?php echo (navBarFromView()); ?>

  <main class="mdl-layout__content">


    <div id="columnchart_material" style="width: 800px; padding:5px 5px 5px;"></div>


    <button class="mdl-float-button mdl-button mdl-button--icon mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" data-upgraded=",MaterialButton" style=" right:90px; background-color: rgb(124,77,255);" onclick="addUt()" title="Ny bokning">
      <i class="material-icons">add</i>
      <script>
        function addUt() {
          window.location = "../view/newBoking.php";
        }
      </script>
    </button>

    <button class="mdl-float-button mdl-button mdl-button--icon mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" data-upgraded=",MaterialButton" style=" right:50px; background-color: blue;" onclick="dressUt()" title="Dressiner">
      <i class="material-icons">pedal_bike</i>
      <script>
        function dressUt() {
          window.location = "../view/dressin-table.php";
        }
      </script>
    </button>
    <button class="mdl-float-button mdl-button mdl-button--icon mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" data-upgraded=",MaterialButton" onclick="hemUt()" title="OK">
      <i class="material-icons">home</i> </button>
    <script type="text/javascript">
      function hemUt() {
        window.location = "date-range.php";

      }
    </script>
  </main>

  </div>

  <script src="https://storage.googleapis.com/code.getmdl.io/1.0.6/material.min.js">
  </script>
  </body>

</html>