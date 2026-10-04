//easier dec a= 1
let tipsArray = [];

let xMin = -10;
let xMax = 10;
document.getElementById('eqvTyp').innerHTML = 2
function genEqGrund() {
  var x = getRandomInt(xMin, xMax);

  var const1 = getRandom(125, 2);

  var coeff1 = (const1 - x * x).toFixed(2);

  var IDs = new Object();

  IDs['eq1'] = "" + coeff1 + " + &#119961;<sup>2</sup> = " + const1;
  tipsArray = [];
  tipsArray.push("Flytta " + coeff1 + " till högerled med motsatt tecken ",
    replaseAllminusplus(" + &#119961;<sup>2</sup> = " + const1 + " - " + coeff1),
    'Ta roten på högerledet',
    replaseAllminusplus(" + &#119961;<sup>2</sup> = " + getSquareRoot(const1 + " - " + coeff1))
  );
  points = 5
  IDs['x'] = x; IDs['ans'] = "&#119961;<sub>1</sub>=" + x + ",  &#119961;<sub>2</sub>= -" + x;

  IDs['y'] = -x;
  answer = "" + replaseAllminusplus('x = ' + IDs['x'] + ",  " + IDs['y']);
  return (IDs);

}
//easy with *
function genEqEasy1() {
  while (true) {
    var x = getRandomInt(xMin, xMax);
    var const1 = getRandom(125, 2);
    var coeff1 = (const1 / (x * x));
    if (coeff1 == Math.ceil(coeff1) && x != 0) break;
  }
  var IDs = new Object();

  IDs['eq1'] = (" " + coeff1 + "&nbsp;&#119961;<sup>2</sup> = " + const1).replace(".00", "");;
  tipsArray = [];
  tipsArray.push("Dela allt på " + coeff1,
    replaseAllminusplus("&#119961;<sup>2</sup> = " + toFixed3string(const1 / coeff1)),
    'Ta roten på högerledet',
    replaseAllminusplus("&#119961;<sup>2</sup> = " + getSquareRoot(toFixed3string(const1 / coeff1)))
  );
  points = 8

  IDs['x'] = x;
  IDs['y'] = -x; IDs['ans'] = "&#119961;<sub>1</sub>=" + x + ",  &#119961;<sub>2</sub>= -" + x;
  answer = "" + replaseAllminusplus('x = ' + IDs['x'] + ",  " + IDs['y']);
  return (IDs);
}

//medel1 : en konstant
function genEqMed1() {
  while (true) {
    var c = getRandom(25, 10);
    var b = getRandom(30, 3);
    var x = getRandomInt(xMin, xMax);
    a = ((c - b) / (x * x));
    if (a == Math.ceil(a) & x != 0 & a != 0) break;
  }
  var IDs = new Object();
  IDs['eq1'] = ("" + a + "&#119961;<sup>2</sup> + " + b + " = " + c);
  tipsArray = [];
  let const1 = c - b;
  let hl = const1 / (a);
  tipsArray.push(
    "Flytta " + b + " till högerled med motsatt tecken ",
    replaseAllminusplus("" + a + "&#119961;<sup>2</sup> = " + c + " - " + b),

    "Dela allt på " + a,
    replaseAllminusplus("&#119961;<sup>2</sup> = " + getFractionDiv(toFixed3string(const1), a)),
    'Ta roten på högerledet',
    replaseAllminusplus("&#119961;<sup>2</sup> = " + getSquareRoot(hl))
  );
  points = 10


  IDs['x'] = x; IDs['ans'] = "&#119961;<sub>1</sub>=" + x + ",  &#119961;<sub>2</sub>= -" + x;
  IDs['y'] = -x;
  answer = "" + replaseAllminusplus('x = ' + IDs['x'] + ",  " + IDs['y']);
  return (IDs);

}
//två konstanter
function genEqMed2() {
  while (true) {
    var a = getRandom(25, 2);
    var x = getRandomInt(xMin, xMax);
    var b = (x * x + a * x);
    if (b == Math.ceil(b) & x != 0) break;
  }
  var IDs = new Object();
  IDs['eq1'] = ("&#119961;<sup>2</sup> + " + a + "&#119961; = " + b);
  tipsArray = [];
  tipsArray.push(
    "Flytta " + b + " till vänsterled med motsatt tecken ",
    replaseAllminusplus("&#119961;<sup>2</sup> + " + a + "&#119961;  - " + b + " = 0"),

    "Använd lösningsformlen: </br>" + losningsFormel(a, b)
  );
  points = 12;
  IDs['x'] = x; IDs['ans'] = "&#119961;<sub>1</sub>=" + x + ",  &#119961;<sub>2</sub>= -" + x;
  IDs['y'] = -x;
  answer = "" + replaseAllminusplus('x = ' + IDs['x'] + ",  " + IDs['y']);
  return (IDs);

}

//equations with x on both sides
function genEqHard1() {
  while (true) {
    var a = getRandomInt(25, 4);

    var c = getRandom(10, 3);
    var x = getRandomInt(xMin, xMax);
    var b = (c * x * x + a * x);
    if (b == Math.ceil(b) & x != 0) break;
  }
  var IDs = new Object();
  IDs['eq1'] = (c + "&#119961;<sup>2</sup> + " + a + "&#119961; = " + b).replace(".00", "");
  tipsArray = [];
  tipsArray.push(
    "Flytta " + b + " till vänsterled med motsatt tecken ",
    replaseAllminusplus(c + "&#119961;<sup>2</sup> + " + a + "&#119961;  - " + b + " = 0"),

    "Använd lösningsformlen ");
  points = 15
  IDs['x'] = x;
  IDs['ans'] = "&#119961;<sub>1</sub>=" + x + ",  &#119961;<sub>2</sub>= -" + x;
  IDs['y'] = -x;
  answer = "" + replaseAllminusplus('x = ' + IDs['x'] + ",  " + IDs['y']);
  return (IDs);


}
//equations with x on both sides and divition
function genEqHard2() {
  while (true) {
    var a = getRandom(10, 2);
    var b = getRandom(30, 10);

    var c = getRandom(20, 4);

    var x = getRandomInt(xMin, xMax);
    var d = (c * x * x + a * x - b * x);
    if (d == Math.ceil(d)) break;
  }
  var IDs = new Object();
  IDs['eq1'] = (c + "&#119961;<sup>2</sup> + " + a + "&#119961; = " + b + '&#119961; + ' + d).replace(".00", "");
  tipsArray = [];
  tipsArray.push('Flytta allt till vänster ', 'Förenkla och använd lösningsformlen ');
  IDs['x'] = x; IDs['ans'] = "&#119961;<sub>1</sub>=" + x + ",  &#119961;<sub>2</sub>= -" + x;
  IDs['y'] = -x;
  answer = "" + replaseAllminusplus('x = ' + IDs['x'] + ",  " + IDs['y']);
  return (IDs);


}
function calculate(level = 1, minigame = 0) {
  run()
  if (variables.checked) { minigame = variables.checked }
  if (minigame == 6) { minigame = getRandomInt(1, 5) }

  console.log(minigame)//random  level
  switch (minigame) {
    case 1://  elements.menu.id("easy").checked)
      ek = genEqEasy1();
      break;
    case 2: ek = genEqMed1(); break;

    case 3: ek = genEqMed2(); break;
    case 4: ek = genEqHard1(); break;
    case 5: ek = genEqHard2(); break;
    default: ek = genEqEasy1();
      break;
  }

  console.dir(ek);
  cache.ansX = parseFloat(ek['x']);
  cache.ansY = parseFloat(ek['y']);


  let eq = (ek['eq1']);
  elements.output_eqvX.innerHTML = replaseAllminusplus(eq);
  elements.output_eqvX.style.fontSize = "1.1em";
  console.dir(tipsArray);
  //createTipsDatabank(tipsArray);


  elements.output_eqvX.style.fontSize = "1.5em";

  elements.textareaHelpMath.innerHTML = texElementDivs.pq;
  elements.textareaHelpMath.classList.add("mathfont");
  elements.textareaAnswerMath.innerHTML = "<p>Rätt svar : </p><div >" + replaseAllminusplus(ek['ans']) + '</div></p>';
  elements.textareaAnswerMath.classList.add("mathfont");
  elements.task.innerHTML = "Lös:"
  createAnswerCache(ek);


  createTipsEq(tipsArray);
  console.dir(elements.inputX);
  elements.inputX.type = "number"
  elements.inputY.type = "number"
  showElement(elements.inputY)
  elements.answerBlock.style.display = "flex";
  showElement(elements.inputX)
  elements.inputX.value = "";
  elements.inputY.value = "";
  elements.inputX.focus();
  hideElement(elements.saveBtn);
  hideAnswer()
}

function validateY() {


  validateAnswers()

}
function validateX() {

  validateAnswers()


}
function validateAnswers() {
  var svarY = parseFloat(elements.inputY.value).toFixed(3);
  var svarX = parseFloat(elements.inputX.value).toFixed(3)
  if ((svarX == parseFloat(cache.ansY).toFixed(3) &&
    svarY == parseFloat(cache.ansX).toFixed(3))
    || (svarY == parseFloat(cache.ansY).toFixed(3) &&
      svarX == parseFloat(cache.ansX).toFixed(3))
  ) { successX(); successY(); }

  else {
    errorX();
    errorY();
  }


}
//This runs on line 200 within validate function                                                                                                                RUN - RUN - RUN
function run() {
  iniElements(); var ek = [];
  document.getElementById("helpname").innerHTML = "Lösningsformel:"
  document.getElementById("textareaHelp").innerHTML = texElements.pq;
  document.getElementById("geogebra").style.display = "none";
  var helpdiv = document.getElementById("textareaHelpMath");
  helpdiv.innerHTML = texElementDivs.pq;

  elements.inputX.classList.remove("success");

  elements.inputY.classList.remove("success");
  elements.inputX.classList.remove("error");

  elements.inputY.classList.remove("error");
  elements.labelAns1.innerHTML = ("&#119961;<sub>1</sub>");
  elements.labelAns2.innerHTML = ("&#119961;<sub>2</sub>");
  elements.labelAns1.style.display = "block";
  elements.labelAns2.style.display = "block";
}

function createTipsDatabank(tipsarray) {
  var el = document.getElementById("eqv-tipsrows");
  let str = ""
  for (k = 0; k < tipsarray.length; k++) {
    str += '<div >' + replaseAllminusplus(tipsarray[k]) + '</div>'
  }

  str = replaseAllminusplus(str);
  el.innerHTML = str;
  el.style.display = 'block';


}
function saveXmax() {

  let svarY = parseFloat(elements.inputY.val()).toFixed(3);
  xMax = svarY;

}
function saveXmin() {

  let svarX = parseFloat(elements.inputX.val()).toFixed(3)

  xMin = svarX;
}
