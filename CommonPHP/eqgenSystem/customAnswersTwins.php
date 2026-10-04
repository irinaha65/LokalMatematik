          <table class=" tt-noborder tt-space">
              <tbody><tr>
                 <td ><label id="labelAns1"></label></td>
                 <td>  
             <input class="ansX"  type="number"  tabindex="1" width="100"
             onchange="validateX()"  id="answerX"/></td>
             <td><button id="saveBtn"   style="font-size: 1.5em; width:auto; height:2em;"
              class="btn btn-info ml-20" 
               onclick=" savePoints();" id="gameBtn"> Svara </button>  </td>
               <td ><div id="showhelp" style="height: 2em; width:300px; font-size:1.5em" class="btn btn-warning" >
Visa formelblad</div>  </td></tr>
             
             <tr><td ><label id="labelAns2"></label></td><td> 
                 <input class="ansY"
             width="100"  type="number"  tabindex="2" 
             onchange="validateY()" id="answerY"/>
            </td><td  class=" ml-20" ><span  >  värd  </span>
            <span class="combo"  id="pointsToGet">1</span>
            <span  >  poäng  </span></td><td><div id="showgeogebra" 
            style="height: 2em; width:300px; font-size:1.5em" class="btn btn-success" 
           <?php if(!$minigame->getGeogebra_need()) {echo("hidden");}?>  >
Visa grafritare</div> </td></tr></tbody></table>
            

    
     <base></base>
 