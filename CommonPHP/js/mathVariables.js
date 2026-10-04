const texElements = { //\\bigg\\{\\begin{array} \\dfrac{a-1}{b-1}a+1 +456.9=-196.00-13x \\cr 3y = -196.00-13x\\end{array}"
  "beginSystem": ' \\bigg\\{\\begin{array}\\ ',
  "endSystem": ' \\end{array} ',
  "eqvBrake": ' \\cr ',
  "space": ' \\quad ',
  "alfa_s": ' \\alpha',
  "betta_s": ' \\beta',
  "omega_s": ' \\omega',
  "delta_l": ' \\Delta',
  "omega_l": ' \\Omega',
  "superscript": ' ^ ', //https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference
  "subscript": ' _ ',  //x_i^2: x2i, \log_2 x: log2x.
  "curly_braces_r": ' \\} ',
  "curly_braces_l": ' \\{ ',
  "fraction": function (a, b) {
    return ' {' + a + ' \\over ' + b + '} ';
  },
  "sqrt": ' \\sqrt ', //\sqrt{x^3}
  "lim": ' \\lim_{x\\to 0} ',
  "pq": ' \\begin{array}\\   x^2 + px +q = 0 \\cr  x_1,_2 = {-p \\over 2} \\pm \\sqrt{({-p \\over 2})^2-q} \\\\ \\end{array} ',
  "ekvsys": '\\begin{array}\\ Additionsmetoden:  \\cr\\ \\begin{array}\\ ' +
    ' \\bigg\\{\\begin{array}\\ ax + by  = d \\cr -ax + ey  = c  \\end{array} \\cr by + ey  = d + c \\end{array} \\cr ' +
    '\\ Substitutionsmetoden:  \\cr\\ \\begin{array}\\ ' +
    ' \\bigg\\{\\begin{array}\\ x + by  = d \\cr ax + ey  = c  \\end{array} \\cr x= d - by \\cr a(d - by) + ey  = c \\end{array} ' +
    '\\end{array}',
  "ekv": '\\begin{array}\\  ax + b  = cx + d \\cr ax - cx = d - b  \\cr  (a-c) x = d - b  \\cr   x = {(d - b) \\over (a-c)} ' +
    '\\end{array}',
  "fr": '\\begin{array}\\ Förkorta  \\quad med  \\quad c:   \\quad  {(-a ) \\over b}  = {(-a/c) \\over (b/c)}  \\cr ' +
    ' Förlänga  \\quad med  \\quad c:  \\quad  {(-a )\\over b}  = {(-ac) \\over (bc)}  \\cr ' +
    '  Addera: \\quad  {a \\over b} \\pm {c \\over d} = {(ad \\pm cb) \\over (bd)}  \\cr ' +

    '  Multiplicera: \\quad  {a \\over b} * {c \\over d} = {(ac) \\over( bd)}  \\cr ' +
    '  Dividera: \\quad  {({a \\over b}) \\over ({c \\over d}) }= {a \\over d} * {b \\over c} = {ad \\over bc} ' +
    ' \\end{array} ',
  "bl": '\\begin{array}\\ Term + term = summa, a + b  = c \\cr ' +
    'Term - term = differensen, a - c = b  \\cr ' +
    'Faktor * factor = produkt, a * b = c  \\cr ' +
    ' {Täljare \\over nämnare}  = kvot, {a \\over b} = c ' +
    '\\end{array}',
  "volume": '\\begin{array}\\ ' +
    'Volymen av en kub \\quad V = a^3 \\cr ' +
    'Volymen av en rektangulär prisma \\quad V = a * b * c \\cr ' +
    'Volymen av en cylinder \\quad V = \\pi r^2 h \\cr ' +
    'Volymen av en kon \\quad V = {1 \\over 3} \\pi r^2 h \\cr ' +
    'Volymen av en klot \\quad V = {4 \\over 3} \\pi r^3  ' +
    '\\end{array}',
  "area": '\\begin{array}\\ ' +
    'Arean av en kvadrat \\quad A = a^2 \\cr ' +
    'Arean av en rektangel \\quad A = a * b \\cr ' +
    'Arean av en triangel \\quad A = {1 \\over 2} b h \\cr ' +
    'Arean av en cirkel \\quad A = \\pi r^2 \\cr ' +
    'Arean av en parallellogram \\quad A = b h  ' +
    '\\end{array}',
  "total_area": '\\begin{array}\\ ' + 'Mantel area av cylinder\\  S = 2\pi r h, ' +
    '\\cr  r - radie av basen,   h - höjden \\cr' +
    '\\end{array}',
  "trig": '\\begin{array}\\ ' +
    'cosinussatsen: a²=b²+ c²−2bc⋅cosA  \\cr ' +
    'sinussatsen \\quad {a \\over sinA} = {b \\over sinB} = {c \\over sinC} \\cr ' +
    '\\end{array}',
};

var elements = {


};
/*
  Genereras i genfrac.js
var decimalFractions1 = [
  {
    dec: 0.5, a: 1, b: 2, b_10: 10,
    //fracs: [1 / 2, 2 / 4, 3 / 6, 4 / 8, 5 / 10, 6 / 12, 7 / 14, 8 / 16, 9 / 18, 10 / 20, 11 / 22, 12 / 24],
    taljareMultiplayer: 1,// vad som helst ska vara täljare
    fracsMultiplayer: 2 //nämnare gånger fracsMultiplayer
  },

  {
    dec: 0.2, a: 1, b: 5, b_10: 10,
    //fracs: [1 / 5, 2 / 10, 3 / 15, 4 / 20, 5 / 25, 6 / 30, 7 / 35, 8 / 40, 9 / 45, 10 / 50, 11 / 55, 12 / 60],
    taljareMultiplayer: 1,// random tal  *1
    fracsMultiplayer: 5 //samma tal *5
  },
  {
    dec: 0.4, a: 2, b: 5, b_10: 10,
    //fracs: [2 / 5, 4 / 10, 6 / 15, 8 / 20, 10 / 25, 12 / 30, 14 / 35, 16 / 40, 18 / 45, 20 / 50, 22 / 55, 24 / 60],
    taljareMultiplayer: 2,// random tal  *2
    fracsMultiplayer: 5 //samma tal *5
  }
  ,
  {
    dec: 0.6, a: 3, b: 5, b_10: 10,
    //fracs: [3 / 5, 6 / 10, 9 / 15, 12 / 20, 15 / 25, 18 / 30, 21 / 35, 24 / 40, 27 / 45, 30 / 50, 33 / 55, 36 / 60],
    taljareMultiplayer: 3,// random tal  *3
    fracsMultiplayer: 5 //samma tal *5
  },
  {
    dec: 0.8, a: 4, b: 5, b_10: 10,
    //fracs: [4 / 5, 8 / 10, 12 / 15, 16 / 20, 20 / 25, 24 / 30, 28 / 35, 32 / 40, 36 / 45, 40 / 50, 44 / 55, 48 / 60],
    taljareMultiplayer: 4,// random tal  *4
    fracsMultiplayer: 5 //samma tal *5
  }

  /*3/8	6/16	9/24	12/32	15/40	18/48	21/56	24/64	27/72	30/80	33/88	36/96	.375
  5 / 8	10/16	15/24	20/32	25/40	30/48	35/56	40/64	45/72	50/80	55/88	60/96	.625
  7/8	14/16	21/24	28/32	35/40	42/48	49/56	56/64	63/72	70/80	77/88	84/96	.875
  1 / 9	2/18	3/27	4/36	5/45	6/54	7/63	8/72	9/81	10/90	11/99	12/108	.111
  2/9	4/18	6/27	8/36	10/45	12/54	14/63	16/72	18/81	20/90	22/99	24/108	.222
  4 / 9	8/18	12/27	16/36	20/45	24/54	28/63	32/72	36/81	40/90	44/99	48/108	.444
  5/9	10/18	15/27	20/36	25/45	30/54	35/63	40/72	45/81	50/90	55/99	60/108	.555
  7 / 9	14/18	21/27	28/36	35/45	42/54	49/63	56/72	63/81	70/90	77/99	84/108	.777
  8/9	16/18	24/27	32/36	40/45	48/54	56/63	64/72	72/81	80/90	88/99	96/108	.888

]
var decimalFractions2 = [
  //// random tal  *a / samma tal *b
  {
    dec: 0.15, a: 3, b: 20, b_10: 100,

  },
  {
    dec: 0.25, a: 1, b: 4, b_10: 100,
    // fracs: [1 / 4, 2 / 8, 3 / 12, 4 / 16, 5 / 20, 6 / 24, 7 / 28, 8 / 32, 9 / 36, 10 / 40, 11 / 44, 12 / 48],

  },
  {
    dec: 0.75, a: 3, b: 4, b_10: 100,
    //fracs: [3 / 4, 6 / 8, 9 / 12, 12 / 16, 15 / 20, 18 / 24, 21 / 28, 24 / 32, 27 / 36, 30 / 40, 33 / 44, 36 / 48],

  },


  /*3/8	6/16	9/24	12/32	15/40	18/48	21/56	24/64	27/72	30/80	33/88	36/96	.375
  5 / 8	10/16	15/24	20/32	25/40	30/48	35/56	40/64	45/72	50/80	55/88	60/96	.625
  7/8	14/16	21/24	28/32	35/40	42/48	49/56	56/64	63/72	70/80	77/88	84/96	.875
  1 / 9	2/18	3/27	4/36	5/45	6/54	7/63	8/72	9/81	10/90	11/99	12/108	.111
  2/9	4/18	6/27	8/36	10/45	12/54	14/63	16/72	18/81	20/90	22/99	24/108	.222
  4 / 9	8/18	12/27	16/36	20/45	24/54	28/63	32/72	36/81	40/90	44/99	48/108	.444
  5/9	10/18	15/27	20/36	25/45	30/54	35/63	40/72	45/81	50/90	55/99	60/108	.555
  7 / 9	14/18	21/27	28/36	35/45	42/54	49/63	56/72	63/81	70/90	77/99	84/108	.777
  8/9	16/18	24/27	32/36	40/45	48/54	56/63	64/72	72/81	80/90	88/99	96/108	.888*/

/*]


var decimalFractions3 = [

  {
    dec: 0.138, a: 69, b: 500, b_10: 1000,

  },
  {
    dec: 0.175, a: 7, b: 40, b_10: 1000,
    //fracs: [2 / 3, 4 / 6, 6 / 9, 8 / 12, 10 / 15, 12 / 18, 14 / 21, 16 / 24, 18 / 27, 20 / 30, 22 / 33, 24 / 36],

  },


  {
    dec: 0.125, a: 1, b: 8, b_10: 1000,
    //fracs: [1 / 8, 2 / 16, 3 / 24, 4 / 32, 5 / 40, 6 / 48, 7 / 56, 8 / 64, 9 / 72, 10 / 80, 11 / 88, 12 / 96],

  }

]*/
var tipsAnswer = {
  "textareaAnswer1": $("#textareaAnswer1"),
  /*  "textareaAnswer2":$("#textareaAnswer2"),
    "textareaAnswer3":$("#textareaAnswer3"),
    "textareaAnswer4":$("#textareaAnswer4"),
    "textareaTips3":$("#textareaTips3"),*/
  "textareaTips2": $("#textareaTips2"),
  "textareaTips1": $("#textareaTips1"),
  "textTips1": $("#textTips1"),
  "textTips2": $("#textTips2"),
}
//  let output=document.getElementById
var variables = {
  errorsX: 0,
  errorsY: 0,
  successX: 0,
  successY: 0,
  combo: 1,
  score: 0,
  checked: 1
};

var cache = {
  "ansX": null,
  "ansY": null,
};
$(document).ready(function () {
  createModal();
  console.log("Ajax Code Here")
  elements = {
    "app": $(".app")[0],
    "tex": $("#eqv")[0],
    "inputX": $("#answerX")[0],
    "inputY": $("#answerY")[0],
    "points": $("#pointsIn")[0],
    "menu": $("#formRadio")[0], // alla radiobuttons
    "menuDiv": $(".menuDiv")[0],
    "output_eqvX": $("#output-task")[0],
    "outputDiv": $(".equationDiv")[0],
    "output_eqvSystem": $("#output-eqvSystem")[0],
    "pointsFactor": $("#pointsFactor"),
    "form": $("#form1")[0],
    "form1": $("#form1")[0],
    "labelAns1": $("#labelAns1")[0],
    "labelAns2": $("#labelAns2")[0],
    "combo": $(".combo")[0],
    "help": $(".help")[0],
    "helpname": $("#helpname")[0],
    "textareaAnswerMath": $("#textareaAnswerMath")[0],
    "textareaHelpMath": $("#textareaHelpMath")[0],
    "textareaHelp": $("#textareaHelp")[0],
    "task": $("#task")[0],
    'gameBtn': $("#gameBtn")[0],
    "saveBtn": $("#saveBtn")[0],
    "eqv": $("#eqv")[0],
    "eqv_tipsrows": $("#eqv-tipsrows")[0],
    "output_fraction": $("#output-fraction")[0],
    "fraction-content": $("#fraction-content")[0],
    "output_eqvX": $("#output-eqvX")[0],
    "answerBlock": $("#answerDiv")[0],
    "rocket": $("#rocket")[0],
    "level": $("#level")[0],
    "showAnswerBtn": $(".showAnswerBtn")[0],
    "img_out": $("#img-out")[0]
  };

  $("#answerX").keypress(function (event) {
    //console.dir(elements);
    if (event.keyCode == 13) {
      event.preventDefault();
      if (!elements.inputY || Object.keys(elements.inputY).length === 0 || elements.inputY.style.display == "none") {
        //elements.saveBtn.focus();
        savePoints();
      }
      else {
        elements.inputY.focus();
      }

    }


  });
  $("#answerY").keypress(function (event) {
    console.dir(event);
    if (event.keyCode == 13) {
      event.preventDefault();
      // elements.saveBtn.focus();
      savePoints();
    }

  });
  console.log(elements);
});
//exkl = min value
function getRandom(max, exkl) {
  var x = 0;
  while (x == 0) {
    var random_sign =
      Math.cos(Math.PI * Math.round(Math.random()));//1 or -1
    x = random_sign * Math.floor(Math.random() * max + exkl);

  }

  return x;
}

function getRandomSign() {

  return Math.cos(Math.PI * Math.round(Math.random()));
}


function getRandomGame() {
  variables.checked = getRandomInt(1, 5)
  console.log(variables.checked);
  return variables.checked;
}
function isClass(el, cla) {
  // console.log(el);
  let classListY = el.classList//.split(/\s+/);

  if (classListY != null) for (let i = 0; i < classListY.length; i++) {
    if (classListY[i] === cla) {
      return true;
    }
  }
  return false;
}





function successX() {
  elements.inputX.classList.remove("error");
  elements.inputX.classList.add("success");
  //console.dir(elements.inputX);
}
function errorX() {
  elements.inputX.classList.remove("success");
  elements.inputX.classList.add("error");


}

function successY() {
  elements.inputY.classList.remove("error");
  elements.inputY.classList.add("success");

}

function errorY() {
  elements.inputY.classList.remove("success");
  elements.inputY.classList.add("error");


}
function showElement(el) {
  //console.log(el);
  if (el == null) return;
  el.style.display = "block";

}
function hideElement(el) {
  if (el == null) return;
  el.style.display = "none";
}
function iniElements() {

  // variables.checked = elements.menu.val();  //get checked value    
  elements.tex.style.display = true;
  //console.log(elements);
  showElement(elements.form1);

  if (elements.saveBtn)
    showElement(elements.saveBtn);
  hideElement(elements.textareaAnswerMath);
  elements.textareaAnswer1
  if (elements.textareaAnswer1) showElement(elements.textareaAnswer1);
  // console.log(elements.inputX);
  // elements.inputX.value("");
  // elements.inputY.value("");
  // elements.inputX.removeClass("success"); elements.inputY.removeClass("success");

}
function hideAnswerY() {
  hideElement(elements.labelAns2);
  hideElement(elements.answerY);
  elements.answerY.classList.add("success");
}


function reactTask(ek) {
  showAnswerTips(ek);
  if (tipsAnswer.textareaAnswer1 != null) {
    tipsAnswer.textareaAnswer1.innerHTML = "Rätt svar :  " + ek['ans'];

    convertAnswer();

    /*    textareaAnswer2.html();
        textareaAnswer3.html();
        textareaAnswer4.html();
        textareaTips3.html();*/
    tipsAnswer.textareaTips2.html(ek['tips2']);
    tipsAnswer.textareaTips1.html(ek['tips1']);
  }
  else convert();
}





function showAnswerTips(ek) {
  cache.ansX = parseFloat(ek['x']);
  cache.ansY = parseFloat(ek['y']);
  let eq = (ek['eq1']).replaceAll("+ -", "-").replaceAll("- +", "-").replaceAll("- -", "+");

  elements.tex.innerHTML = eq;
  //  console.log( document.getElementById("eqv").innerHTML);
  elements.output_eqvX.html(ek['eq2']);
  //  convert();
  elements.inputX.focus();
  elements.combo.html(parseFloat(variables.checked) * 1);
  elements.pointsFactor.val(1);  // hela poängen
  console.log(elements.combo.html());
  tipsAnswer.textTips1.style.display = "none";
  tipsAnswer.textTips2.style.display = "none";
}



function reactTaskWithoutMath(ek) {
  showAnswerTips(ek);
  if (tipsAnswer.textareaAnswer1 != null) {
    elements.textareaAnswerMath.innerHTML = "Rätt svar :  " + ek['ans'];


    tipsAnswer.textareaTips2.html(ek['tips2']);
    tipsAnswer.textareaTips1.html(ek['tips1']);

  }

  //document.getElementById('output-eqvX').innerHTML=document.getElementById("eqv").innerHTML.trim();


  //document.getElementById('textareaAnswerMath').innerHTML=document.getElementById("textareaAnswer1").innerHTML.trim();

}

function reactTaskWithHelp(ek) {
  showAnswerTips(ek);
  if (tipsAnswer.textareaAnswer1 != null) {
    elements.textareaAnswerMath.innerHTML = "Rätt svar :  " + ek['ans'];


    tipsAnswer.textareaTips2.html(ek['tips2']);
    tipsAnswer.textareaTips1.html(ek['tips1']);

  }

  convertHelp();
}