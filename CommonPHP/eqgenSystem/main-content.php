<div id="main-content" >

  <div  class=" main-minigame app"> 
    <div class="gameName ">  Algebra rush!    </div>
    <div class="container">
    <div class="menuDiv " style=" font-size: 1.5em; margin-bottom:50px;"><h2>Välj din nivå</h2>
      
      <select id="formRadio">
         <option value="1">lätt</option>
         <option value="2">medel lätt</option>
         <option value="3">medel</option>
         <option value="4">medel svår</option>
         <option value="5">svår</option>
         <option value="6">blandad</option>
     </select>
      
         </div >  
         <div class="  menuDiv " style="  text-align:center">
            <label>Poängen</label>    <input type="number" name="points" readonly="true"  
            style=" font-size: 1.5em; height:2em; min-width:150px;"
             class="btn  bg-info c11 " id='pointsIn'  value="0"/>
               <input role="button"   value="Spara"
                      class="btn-success rounded "  style="text-align:center; font-size: 1.5em; height:2em;"
                      onClick="saveScore()"/>        <button   class="btn btn-warning" 
                       style=" font-size: 1.5em; height:2em;min-width:150px; margin-bottom:10px;"
                    onclick="run()" id="gameBtn"> Nytt tal </button>  
     </div>
         
         <div class="equationDiv w-100" >
         
        
      <h4>   <div id="output-task" ></div>   </h4>    
     
     <h2 class="equation">  
     
     <span class="MathJax_Preview">
     <div id="output-eqvX" ></div>  
     
     <p id="eqv" hidden ></p>
     </h2>
     
     </div > 
     <div id="form1" style="display:none;">     
       <p>    Avrundra svaret till 2 decimaler </p>
   
     <?php      include  'customAnswersTwins.php';?>
     <?php include  "draggable.php";?>
    <?php      include  'geogebra.php';?>  </div>
  </div>
</div>  
     <div  id="answer" >

<div name="answer"  class="pr-20 mb-2 answer"  >

<textarea id="textareaAnswer1" 
rows="3" class="form-control" style="display:none;">  </textarea>
<div id="textareaAnswerMath"  style="display:none;" class="math-answer">  </div>
</div> 
<!--<div name="answer"  class="mr-2 mb-2"  >
<label >Svar2</label> 
<textarea id="textareaAnswer2"  rows="3"  readonly  class="form-control" >  </textarea>
</div> <div name="answer"  class="mr-2 mb-2"  >
<label >Svar3</label> 
<textarea id="textareaAnswer3"  readonly rows="3" class="form-control" >  </textarea>
</div> <div name="answer"  class="mr-2 mb-2" >
<label >Svar4</label>
<textarea  id="textareaAnswer4"  readonly rows="3" class="form-control" >  </textarea>
</div> -->
</div>
<script>





function showTips1()
 {  document.getElementById('textTips1').style.display = 'block';}
   function showTips2()
 {  document.getElementById('textTips2').style.display = 'block';}
//        function showTips3()
//    {  document.getElementById('textTips3').style.display = 'block';}
</script>

        