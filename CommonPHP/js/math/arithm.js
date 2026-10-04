
var minNumber = value = 0;
var typeOfNumber = '';
var points = 0;
var ek = [];
let isModal = false;
document.getElementById('eqvTyp').innerHTML = 1
//  hideAnswerY();

function calculate(hard, game) {

  switch (hard) {
    case 1: genEqEasy1(); break;
    case 2: genEqMed1(); break;
    case 3: genEqMed2(); break;
    case 4: genEqHard1(); break;
    case 5: genEqHard2(); break;
    default: genEqHard2(); break;
  }
  run();
}


function genEqEasy1() {
  value = 10;
  minNumber = 1;
  points = 1;
  console.log(value);
  ek = [];

  goMetod();

}
const minigames = ['Multiplikation', 'Addition', 'Subtraktion', 'Division']
function goMetod() {
  typeOfNumber = minigames[getRandomInt(0, 3)]

  //variables.checked
  switch (typeOfNumber) {
    case 'Multiplikation':
      multiplication();
      break;
    case 'Addition':
    default: addition();
      break;
    case 'Subtraktion': subtraction(); break;
    case 'Division': division(); break;


  }
}

function genEqMed1() {
  value = 20;
  minNumber = 2;
  points = 3;
  goMetod();
}
function genEqMed2() {
  value = 30;
  minNumber = 3;
  points = 6;
  goMetod();
}
function genEqHard1() {
  value = 100;
  minNumber = 6;
  points = 10;
  goMetod();
}
function genEqHard2() {
  value = 144;
  minNumber = 7;
  points = 15;
  goMetod();
}




// function to generate random number
function ranNumber() {
  //console.log( minNumber);
  // used difficulty function to determine how big the random number will be
  return Math.floor(Math.random() * value) + minNumber;
}

function addition() {
  var IDs = new Object();


  // get two random numbers
  number1 = ranNumber();
  number2 = ranNumber();

  // store result of both
  result = number1 + number2;

  // now ask user
  IDs['eq1'] = " " + number1 + " + " + number2 + " = ?";

  answer = IDs['x'] = IDs['ans'] = result;

  IDs['y'] = null;
  console.log(IDs)
  ek = IDs;

}

function subtraction() {

  number1 = ranNumber();
  number2 = ranNumber();
  result = number1 - number2;
  var IDs = new Object();


  // now ask user
  IDs['eq1'] = " " + number1 + " - " + number2 + " = ?";

  answer = IDs['x'] = IDs['ans'] = result;

  IDs['y'] = null;
  ek = IDs;
}

function multiplication() {

  number1 = ranNumber();
  number2 = ranNumber();
  result = number1 * number2;

  var IDs = new Object();


  // now ask user
  IDs['eq1'] = " " + number1 + " ⋅ " + number2 + " = ?";

  answer = IDs['x'] = IDs['ans'] = result;
  console.dir(IDs)
  ek = IDs;
}

function division() {
  //resetValues();
  number1 = ranNumber();
  number2 = ranNumber();
  result = parseFloat(number1 / number2);

  var IDs = new Object();


  // now ask user
  IDs['eq1'] = " " + number1 + " / " + number2 + " = ?";

  answer = IDs['x'] = IDs['ans'] = result;

  IDs['y'] = null;
  ek = IDs;

}


//This runs on line 200 within validate function                
function run() {
  tipsArray = [];
  errorX();
  cache.ansX = answer;
  hideAnswer();
  console.dir(ek);
  elements.helpname.innerHTML = "Fyra räknesätt";

  document.getElementById("showgeogebra").style.display = "none";
  elements.textareaHelpMath.innerHTML = texElementDivs.bl;
  elements.textareaHelpMath.classList.add("mathfont");
  hideElement(elements.textareaHelpMath);
  showElement(elements.output_eqvX)

  elements.output_eqvX.classList.add("mathfont");

  elements.eqv_tipsrows.innerHTML = '';

  var eq = (ek['eq1'])

  eqv.innerHTML = replaseAllminusplus(eq);

  elements.points.innerHTML = "" + roundDecimalsZeros(points.toFixed(2));
  showElement(elements.form1);
  elements.textareaAnswerMath.innerHTML = "Rätt svar :  " +
    toFixed3string(ek['ans']);
  elements.textareaAnswerMath.classList.add("mathfont");
  hideElement(elements.saveBtn);
  elements.inputX.type = "number"
  elements.inputX.value = "";

  elements.inputX.classList.remove("error", "success");
  createTipsEq(tipsArray);
}

/*  fixa i huvudfilen
 function savePoints( ) {
   console.dir(answer);
       if (isClass(elements.inputX, 'success') ) {
         //elements.points.val(parseFloat(elements.points.val())+ p);
         alert("Helt rätt!");
         if (isModal) answered();
         else  saveScore();

       }
       else {
         
         alert("Nästan rätt! Rätt svar är " + answer);
         if (isModal) closeModal();
       }


       document.getElementById("form1").style.display = 'none';
       document.getElementById('gameBtn').focus();
}*/

function validateX() {

  var svarX = parseFloat(elements.inputX.value).toFixed(2)

  console.log("cache.ansx " + cache.ansX + "    svarx " + svarX);
  if (svarX == parseFloat(cache.ansX).toFixed(2)) successX();
  else
    errorX();


}