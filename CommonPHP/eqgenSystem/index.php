<?php 
include_once '../classes.php';
session_start();

?>

<!DOCTYPE html>
<html lang="sv" xmlns="http://www.w3.org/1999/xhtml">

<head>
   <title>Minigame</title>

  
       <!-- Placed at the end of the document so the pages load faster -->
       <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script> -->
    <script src="bootstrap.min.js"></script>
    <script src="checkbox.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="ie10-viewport-bug-workaround.js"></script>
   <script src="https://storage.googleapis.com/code.getmdl.io/1.0.6/material.min.js">
    </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.0/FileSaver.min.js">

</script> 
<script src=" mathJax.js?v=3"></script>
 <?php      include  'mathJax.php';?>


</head>

  <body id="game-body">

  <div class="wrap">   
     
    <div id="sidebar-right">
    			
  
       <div  id="answer" >

        <div name="answer"  class="pr-20 mb-2 answer"  >

          <textarea id="textareaAnswer1" 
             rows="3" class="form-control" style="display:none;">  </textarea>
          <div id="textareaAnswerMath"  style="display:none;" class="math-answer">  </div>
        </div> 

       </div>
      <script>
        function showTips1()
        {  document.getElementById('textTips1').style.display = 'block';}
        function showTips2()
        {  document.getElementById('textTips2').style.display = 'block';}
//        function showTips3()
//    {  document.getElementById('textTips3').style.display = 'block';}
      </script>

<?php include  "draggable.php";?>
       <?php      include  'geogebra.php';?> 
    </div> 
 

      </div>
      <div id="main-content" >

<div  class=" main-minigame app"> 
  <div class="gameName ">  Algebra rush!    </div>
    <div class="container">
      <div class="menuDiv " style=" font-size: 1.5em; margin-bottom:50px;">
      <h2>Välj din nivå</h2>
    
       <select id="formRadio">
           <option value="1">lätt</option>
          <option value="2">medel lätt</option>
          <option value="3">medel</option>
          <option value="4">medel svår</option>
          <option value="5">svår</option>
          <option value="6">blandad</option>
       </select>
    
  
  </div>
       <script src=" fraction.min.js"></script>

   <div class="  menuDiv " style="  text-align:center">

<script src="mathVariables.js?v=11"></script>
<script src="js.js?v=8"></script>
    
          <label>Poängen</label>    
          <input type="number" name="points" readonly="true"  
          style=" font-size: 1.5em; height:2em; min-width:150px;"
           class="btn  bg-info c11 " id='pointsIn'  value="0"/>
             <input role="button"   value="Spara"
                    class="btn-success rounded "  style="text-align:center; font-size: 1.5em; height:2em;"
                    onClick="saveScore()"/>        <button   class="btn btn-warning" 
                     style=" font-size: 1.5em; height:2em;min-width:150px; margin-bottom:10px;"
                  onclick="run()" id="gameBtn"> Nytt tal </button>  
   </div>
   </div >   
   <div id="form1" style="display:none;">     
              <p>    Avrundra svaret till 2 decimaler </p>
           </div >      
     
      
       <div class="equationDiv w-100" >
       
      
    <h4>   <div id="output-task" ></div>   </h4>    
   
   <h2 id="eqv-out"  class="equation">  
   <div id="image-output" name=""></div>
   <br/>
   <br/>
   <span class="MathJax_Preview">
   <div id="output-eqvX" ></div>  
   
   <p id="eqv" hidden ></p>
<br/>
<br/>
<br/>
<br/>
   </h2>
  
   
   <?php      include  'customAnswersTwins.php';?>   
     
       </div>
      
  </div> 		  
 
  </body>
  <footer> 
</footer>
</html>
