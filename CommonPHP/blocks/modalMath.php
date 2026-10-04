<!-- The Modal -->
<div id="myModal" class="modal main-minigame ">
  <span class="close" style="color:black; z-index: 100;" onclick="closeModal()">&times;</span>
  <!-- Modal content -->
  <div class="modal-content container" id="modal-content">
    <div class="equationDiv w-100">
      <div id="eqvTyp" hidden>1</div>

      <h2 class="equation container-lg" id="equationDiv">



    </div>
    </h2>



    <div class=" row">

      <div id="eqv-tipsrows" class="col-7"></div>
      <div class="col-1">
        <?php include $_SERVER['DOCUMENT_ROOT'] . '/CommonPHP/blocks/formelbladButton.php';
        ?>

        <?php include $_SERVER['DOCUMENT_ROOT'] . '/CommonPHP/blocks/geogebraButton.php'; ?>
      </div>
      <div class="col-4">

        <?php
        include $_SERVER['DOCUMENT_ROOT'] . '/CommonPHP/blocks/icke_draggable.php';
        ?>
      </div>

      <div id="form1" class="row">



        <div class="container">
          <div id="answerBlock" class="row">

            <input id="pointsFactor" type="number" value="1" hidden />




          </div>



        </div>

        <?php

        include $_SERVER['DOCUMENT_ROOT'] . '/CommonPHP/blocks/geogebra.php'; ?>
        <div id='pointsIn' style="display:none"></div>


      </div>

    </div>
  </div>

</div>
</div>
<?php include($_SERVER['DOCUMENT_ROOT'] . "/CommonPHP/blocks/boostarp.php"); ?>
<script src="https://frozenland.servegame.com/CommonPHP/js/mathVariables.js"></script>
<script src="https://frozenland.servegame.com/CommonPHP/js/mathWithoutMatJax.js"></script>
<script src="https://frozenland.servegame.com/CommonPHP/js/html2canvas.min.js"></script>
<script>
  // Get the modal
  var modal = document.getElementById("myModal");


  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];



  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    closeModal();
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      closeModal();
    }
  }
  function closeModal() {
    // When the user clicks on the button, open the modal
    elements.img_out.innerHTML = "";
    modal.style.display = "none";
    if (gameOverFlag) {
      gameOverFlag = false;
      location.reload();
    }

  }
  function createModal() {
    // When the user clicks on the button, open the modal
    let e = document.getElementById('eqvTyp').innerHTML;
    let eqv = document.getElementById('equationDiv');
    switch (e) {
      case '1': default:
        eqv.innerHTML = getModalWithOneAnswer();
        break;
      case '2':
        eqv.innerHTML = getModalWithTwoAnswers();
        break;
      case 'buttons':
        eqv.innerHTML = getAnswersButtons();
        break;
      case 'canvas':
        eqv.innerHTML = getModalWIthCanvas();
        break;

      case 'text':
        eqv.innerHTML = getModalWithTextAnswer();
        break;
      case 'textCanvas':
        eqv.innerHTML = getModalWithTextAnswerAndCanvas();
        break;
      case 'canvas2':
        eqv.innerHTML = getModalWithTwoAnswersAndCanvas();
        break;
    }
  }
  function getModalWithTextAnswer() {
    return '<div class="row" id="widget">' +

      '<div class="col-md-12">' +


      MathJaxSpan +
      '<div id="output-fraction" class="mathfont" style="display:none; font-weight:normal; padding-bottom: 10px;">' +
      '<div id="fraction-content"></div></div></div>' +
      ' <div id="textareaAnswerMath" style="display:none; color:red"></div>' +
      '<div id="answerDiv" class=" flex-column">Endast svar:' +

      '<label for ="answerX" id="labelAns1" style="width:80px; display:none" ></label>' +
      '<input class="ansX   " tabindex="1" onchange="validateX()" id="answerX" style="width:100%;"/>' +
      ' <h4 id="task" class="avrunda">  </h4>' +
      '<div> <button id="saveBtn" class="btn btn-info   ps-5 pe-5" onclick=" savePoints();" id="gameBtn"> Svara' +
      '</button>' +



      '</div>' +
      '</div></div>' + btnImg

  }
  function getModalWithOneAnswer() {
    return '<div class="row" id="widget" >' +
      '<div class="col-md-9">' +

      MathJaxSpan +
      '<div id="output-fraction" class="mathfont" style="display:none; font-weight:normal; padding-bottom: 10px;">' +
      '<div id="fraction-content"></div></div> ' +
      ' <div id="textareaAnswerMath" style="display:none; color:red"></div></div>' +
      '<div id="answerDiv" class="col-md-2 me-5 flex-column"><h5>Endast svar:</h5>' +

      '<label for ="answerX" id="labelAns1" style="width:80px; display:none" ></label>' +
      '<input class="ansX   " tabindex="1" onchange="validateX()" id="answerX" style="width:200px;"/>' + '</div>' +
      ' <h4 id="task" class="avrunda"> Räkna ut värdet för uttrycket. Avrundra svaret till 2 decimaler </h4>' +
      '<div> <button id="saveBtn" class="btn btn-info   ps-5 pe-5" onclick=" savePoints();" id="gameBtn"> Svara' +
      '</button></div>' + '</div>' + '</div>' + btnImg



  }
  function getModalWithTwoAnswers() {
    return '<div class="flex-row d-flex row justify-content-center align-items-center" id="widget">' +
      '<div id="bracket" class="bracket2line  col-2" > &#x7B;</div>' +
      ' <div class="col-8" >' +
      MathJaxSpan +
      '<div id="output-fraction" class="mathfont" style="display:none; font-weight:normal; padding-bottom: 10px;">' +
      '<div id="fraction-content"></div></div></div>' + '</div >' +
      ' <div id="textareaAnswerMath" style="display:none; color:red"></div>' +
      //class="flex-column d-flex justify-content-left align-items-left"
      '<div id="answerDiv"  >' +
      '<div  >Endast svar: </div> ' + '<div  > <label for ="answerX" id="labelAns1" style="width:80px" ></label>' +

      '	<input class="ansX  " type="number" tabindex="1" onchange="validateX()" id="answerX" style="width:200px;  "/></div>' +

      '<div  ><label id="labelAns2" for ="answerY" style="width:80px"  ></label>' +

      '<input class="ansY" type="number" tabindex="2" onchange="validateY()" id="answerY"  style="width:200px;  "/></div>' +
      ' <h4 id="task" class="avrunda"> Räkna ut värdet för uttrycket. Avrundra svaret till 2 decimaler </h4>' +
      ' <button id="saveBtn" class="btn btn-info   ps-5 pe-5" onclick=" savePoints();" id="gameBtn" hidden> Svara' +
      '</button>' +



      '</div>' + btnImg


  }
  const MathJaxSpan = ' <span class="MathJax_Preview " >' +
    '<div id="output-eqvX"></div>' +

    '<p id="eqv"></p>' +
    '<div id="output-eqvSystem" class="mathfont" style="display:none;">' +

    '<div id="output-content" class="f"></div>' +
    '</div></span>';
  function getAnswersButtons() {
    return '<div class="flex-row d-flex row justify-content-center align-items-center" id="widget">' +
      '<div id="bracket" hidden > &#x7B;</div>' +
      ' <div class="col-8" >' +
      MathJaxSpan +
      '<div id="output-fraction" class="mathfont" style="display:none; font-weight:normal; padding-bottom: 10px;">' +
      '<div id="fraction-content"></div></div></div>' +
      ' <div id="textareaAnswerMath" style="display:none; color:red"></div>' +
      //class="flex-column d-flex justify-content-left align-items-left"
      '<div id="answerDiv" class="col-4 me-5 ">' +
      '   <div  class="row">' +
      '<p id="issue" class="text-default" style="font-size: 72px"></p>' +
      '<input id="num1" type="hidden"/>' +
      '<input id="num2" type="hidden"/>' +

      '<div class="btn-group-lg d-flex ">' +

      '<button id="btn0" type="button" class="btn btn-primary answerButton" style="font-size: 36px; margin-right:10px"></button>' +
      '<button id="btn1" type="button" class="btn btn-success answerButton" style="font-size: 36px; margin-right:10px"></button>' +
      '<button id="btn2" type="button" class="btn btn-info answerButton" style="font-size: 36px; margin-right:10px"></button>' +
      '<button id="btn3" type="button" class="btn btn-warning answerButton" style="font-size: 36px; margin-right:10px"></button>' +
      '<button id="btn4" type="button" class="btn btn-danger answerButton" style="font-size: 36px "></button>' +
      '<input class="ansX   "   hidden id="answerX" />' + '</div >' + '</div>' + '</div>' +
      ' <h4 id="task" class="avrunda" >   Avrundra svaret till 2 decimaler . Tryck på rätt svar!</h4>' +

      '<div class="btn-group-lg">' +
      '<button id="btn5" type="button" class="btn btn-outline btn-default answer">Skip</button>' +
      '</div>' + '</div>' + btnImg;
  }
  const btnImg = '<input type="button" id="btnSave" value="Spara img" class="btn" />' +

    '<div id="img-out" hidden></div>';
  function getModalWithTextAnswerAndCanvas() {
    return '<div class="row" id="widget">' + '<div class="col-md-6">' +
      MathJaxSpan + '<div id="answerDiv" class=" flex-column">Endast svar:' +

      '<label for="answerX" id="labelAns1" style="width:80px; display:none" ></label>' +
      '<input class="ansX   " tabindex="1" onchange="validateX()" id="answerX" style="width:100%;" />' +
      ' <h4 id="task" class="avrunda"> Räkna ut värdet för uttrycket. Avrundra svaret till 2 decimaler </h4>' +
      ' <button id="saveBtn" class="btn btn-info   ps-5 pe-5" onclick=" savePoints();" id="gameBtn"> Svara' +
      '</button>' + '</div>' + '</div>' +

      ' <div id="canvas-container" class="col-md-6" ></div>' +
      ' <div id="textareaAnswerMath" style="display:none; color:red"></div>' +
      '</div></div >' + btnImg

  }
  function getModalWIthCanvas() {
    return '<div class="row" id="widget">' +

      '<div class="col-md-6">' +

      MathJaxSpan +
      '<div id="output-fraction" class="mathfont" style="display:none; font-weight:normal; padding-bottom: 10px;">' +
      '<div id="fraction-content"></div></div>' +


      ' <div id="textareaAnswerMath" style="display:none; color:red"></div>' +

      '<div id="answerDiv" class="row"><h5>Endast svar:</h5>' +

      '<label for ="answerX" id="labelAns1" style="width:80px; display:none" ></label>' +
      '<input class="ansX   " tabindex="1" onchange="validateX()" id="answerX" style="width:200px;margin-left:20px"/>' +
      ' <h4 id="task" class="avrunda"> Räkna ut värdet för uttrycket. Avrundra svaret till 2 decimaler </h4>' +
      ' <button id="saveBtn" class="btn btn-info   ps-5 pe-5" onclick=" savePoints();" id="gameBtn"> Svara' +
      '</button>' + '</div>' + '</div>' +
      ' <div id="canvas-container" class="col-md-6" ></div></div></div>' +
      btnImg

  }
  function getModalWithTwoAnswersAndCanvas() {
    return '<div class="row" id="widget">' +

      '<div class="col-md-6">' +

      MathJaxSpan +
      '<div id="output-fraction" class="mathfont" style="display:none; font-weight:normal; padding-bottom: 10px;">' +
      '<div id="fraction-content"></div></div>' +


      ' <div id="textareaAnswerMath" style="display:none; color:red"></div>' +

      '<div id="answerDiv" class="row"><h5>Endast svar:</h5>' +



      '<div  > <label for ="answerX" id="labelAns1" style="width:80px" ></label>' +

      '	<input class="ansX  " type="number" tabindex="1" onchange="validateX()" id="answerX" style="width:200px;  "/></div>' +

      '<div  ><label id="labelAns2" for ="answerY" style="width:80px"  ></label>' +

      '<input class="ansY" type="number" tabindex="2" onchange="validateY()" id="answerY"  style="width:200px;  "/></div>' +
      ' <h4 id="task" class="avrunda"> Räkna ut värdet för uttrycket. Avrundra svaret till 2 decimaler </h4>' +
      ' <button id="saveBtn" class="btn btn-info   ps-5 pe-5" onclick=" savePoints();" id="gameBtn"> Svara' +
      '</button>' + '</div>' + '</div>' +
      ' <div id="canvas-container" class="col-md-6" ></div></div></div>' +
      btnImg

  }
  function drawButtons(ans) {
    ans = shuffleArray(ans);

    for (var ii = 0; ii <= 4; ii++) {
      let btn = document.getElementById("btn" + ii); btn.innerHTML = ans[ii];
      btn.onclick = function () { elements.inputX.value = this.innerHTML; savePoints(); };
    }
  } </script>