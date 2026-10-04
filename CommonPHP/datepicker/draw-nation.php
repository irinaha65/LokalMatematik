<?php
include_once(dirname(__DIR__)."/classes.php")  ; 
session_start();
Utils::saveLog("drw ".$_GET["start"].$_GET["end"]);
if(isset($_GET["start"])&& isset($_GET["end"]))
{
    $utDressins=NationPerUtMapper::getNationTotalInterval($_GET["start"],$_GET["end"]);

}
else {
$utDressins=NationPerUtMapper::getNationTotalInterval(date("Y-m-d"),date("Y-m-d"));
 
}
  //Array ( [0] => Array ( [ID] => 8 [Name] => Danmark [Antal] => 2 )
  // [1] => Array ( [ID] => 5 [Name] => England [Antal] => 4 ) 
  // [2] => Array ( [ID] => 6 [Name] => Holland [Antal] => 2 ) 
  // [3] => Array ( [ID] => 9 [Name] => Kina [Antal] => 0 ) 
  // [4] => Array ( [ID] => 1 [Name] => Sverige [Antal] => 2 )
  // [5] => Array ( [ID] => 7 [Name] => Tyskland [Antal] => 0 ) ) )
$natsArray=$utDressins[0];
$persArray=$utDressins[1];
$sum=0;
$table ='<table style="
    width: 50%;
    border-collapse: collapse;
    margin: auto;
     border: 1px solid rgb(124,77,255);
 ">';
$table .='<thead><tr><th style=" 
   
    padding: 3px 7px 2px 7px;
   border: 1px solid rgb(124,77,255);
    text-align: center;
    padding: 5px;
    background-color: 



rgb(124,77,255);
    color: rgb(12, 11, 11);
  ">Nation</th><th style=" 
   border: 1px solid rgb(124,77,255);
    padding: 3px 7px 2px 7px;
  
    text-align: center;
    padding: 5px;
    background-color: 



rgb(124,77,255);
    color: rgb(12, 11, 11);
  ">Antal</th></tr></thead><tbody>';
foreach  ($natsArray as $key => $val) {
    if($natsArray[$key]["Antal"]>0)
    {$table .='<tr><td style=" 
    border: 1px solid rgb(124,77,255);
    padding: 3px 7px 2px 7px;
  ">'.$natsArray[$key]["Name"].'</td><td style=" 
    border: 1px solid rgb(124,77,255);
    padding: 3px 7px 2px 7px;
  ">';
  $table .= $natsArray[$key]["Antal"].'</td></tr>';
 }
}
 $table .= ' </tbody></table>';
$table.='<h4>Totalt : '.$persArray[$key]["Antal"]
        .' personer varav '.$persArray[$key]["Barn"].' barn.</h4>';
    function redirect($page) {
        header('Location: ' . $page);
        exit;
      }
?>

<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8"/>
   
    <title>Statistik</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

<script type="text/javascript" src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
<script type="text/javascript" src="moment.min.js"></script>

<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
   <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.orange-deep_purple.min.css" />
   <link rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
<style type="text/css">
        body{ font: 14px sans-serif; text-align: center; }


</style>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
     
      function drawChart() {

   var data = google.visualization.arrayToDataTable([
       ['Nation', 'Antal'],
  <?php   foreach  ($natsArray as $key => $val) {
  echo("['".$natsArray[$key]["Name"]."', ". $natsArray[$key]["Antal"]."],");}
?>  ]);
        

    
        var options = {
          title: 'Fördelning efter nationaliteter under perioden \n\
              <?php echo(date("Y-m-d", strtotime($_GET["start"]))
                      .' - '.date("Y-m-d", strtotime($_GET["end"])));?>',
           
        };

        var chart = new google.visualization.PieChart(document.getElementById('columnchart_material'));

        chart.draw(data, options);
      }

       

    
    </script>
</head>
<body>
   
  
  
    <div id="columnchart_material" style="width: 800px; height: 400px;"></div>
    <div > 
    <?php echo($table);?>
        <p>  Om antal personer stämmer inte med fördelningen efte nationaliteter kolla 
            om nationaliteter angivna på alla uthyrningar </p>
    </div>
      <button class="mdl-float-button mdl-button mdl-button--icon mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" 
       data-upgraded=",MaterialButton"   onclick="dressUt()" title="OK">
         <i class="material-icons">home</i> </button>
    <script type="text/javascript">
        function dressUt(){
        window.location = "date-range.php";
        
  }  </script>
    
<script src="https://storage.googleapis.com/code.getmdl.io/1.0.6/material.min.js">
</script></body>
</html>