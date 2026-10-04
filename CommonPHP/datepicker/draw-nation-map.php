<?php
include_once $_SERVER['DOCUMENT_ROOT'] . '/CommonPHP/blocks/includes.php';
if (isset($_GET["start"]) && isset($_GET["end"])) {
  $utDressins = NationPerUtMapper::getNationTotalInterval($_GET["start"], $_GET["end"]);
} else {
  $utDressins = NationPerUtMapper::getNationTotalInterval(date("Y-m-d"), date("Y-m-d"));
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

  <title>Statistik</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <script type="text/javascript" src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
  <script type="text/javascript" src="moment.min.js"></script>
  <!--https://habr.com/ru/post/304296/-->

  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  <script type="text/javascript" src="https://www.google.com/jsapi"></script>
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
  <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.orange-deep_purple.min.css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <style type="text/css">
    body {
      font: 14px sans-serif;
      text-align: center;
    }
  </style>
  <script type="text/javascript">
    // iso to name conversion
    // https://gist.github.com/maephisto/9228207
    <?php
    $sql = 'SELECT * FROM countries ';
    $countries = DataMapper::executeRows($sql);

    ?>
    var isoCountries = {
      //'IT': 'Italy',
      //'JO': 'Jordan',
      //'LB': 'Lebanon',
      <?php
      foreach ($countries as $value) {
        echo ("'" . $value["SV"] . "': '" . $value["EN"] . "',");
      }
      ?>
    };
    console.dir(isoCountries);

    function getCountryName(countryCode) {
      if (isoCountries.hasOwnProperty(countryCode)) {
        return isoCountries[countryCode];
      } else {
        return countryCode;
      }
    };

    // Load the Visualization API and the corechart package.
    google.charts.load('current', {
      'packages': ['geochart'],
      'mapsApiKey': '.'
    });

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawRegionsMap);

    // Callback that creates and populates a data table,
    // instantiates the chart, passes in the data and
    // draws it.
    function drawRegionsMap() {
      // Create the data table.
      var data = google.visualization.arrayToDataTable([
        ['Country', 'Popularity'],
        ['Danmark', 3],
        ['England', 2],
        ['Sverige', 24],
        <?php
        //Array ( [0] => Array ( [ID] => 8 [Name] => Danmark [Antal] => 2 )
        // [1] => Array ( [ID] => 5 [Name] => England [Antal] => 4 ) 
        // [2] => Array ( [ID] => 6 [Name] => Holland [Antal] => 2 ) 
        // [3] => Array ( [ID] => 9 [Name] => Kina [Antal] => 0 ) 
        // [4] => Array ( [ID] => 1 [Name] => Sverige [Antal] => 2 )
        // [5] => Array ( [ID] => 7 [Name] => Tyskland [Antal] => 0 ) ) )
        // foreach  ($utDressins as $key => $val) {
        //  echo("['".$utDressins[$key]["Name"]."', ". $utDressins[$key]["Antal"]."],");
        //}
        ?>
      ]);
      console.dir(data);

      // Set chart options
      var options = {
        colorAxis: {
          colors: ['#c1c1cd', '#53556e']
        },
        legend: 'none',
        backgroundColor: '#efefef'
      };

      // Create new data table for iso and full country name
      var dataMod = new google.visualization.DataTable();
      dataMod.addColumn('string', 'Country');
      dataMod.addColumn('number', 'Members');

      // Adding rows with iso and full country name
      var numRows = data.getNumberOfRows();

      for (var i = 0; i < numRows; i++) {
        dataMod.addRows([
          [{
            v: String(data.getValue(i, 0)),
            f: String(getCountryName(data.getValue(i, 0)))
          }, data.getValue(i, 1)],
        ]);
      };

      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
      chart.draw(dataMod, options);

    }
  </script>
</head>

<body>

  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  <div id="regions_div" style="width: 900px; height: 500px;"></div>
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