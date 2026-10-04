//decimal till bråk
//easier dec a= 1

function genEqEasy1() {
    let a = 1;
    let b = a;
    let x;
    var IDs = new Object();
    /* while (Math.abs(b) <= Math.abs(a) && (a / b).toFixed(2) !== (a / b)) {
 
         b = getRandomPositiveExklArray(2, 8, [0, 3, 6, 7, a]);
         x = new Fraction(a, b);
     }
 
     console.dir(x);
     console.log(" a=  " + a + ", b=" + b);
     //andra bråket     
 
    
     //  let sign1=(x.s >0)?' ':' - ';
     //let sign2=(c>0 && d>0)?' + ':' - ';*/

    decimalFraction = getRandomFrac(0.1)

    /*   {
           dec: 0.5,
           //fracs: [1 / 2, 2 / 4, 3 / 6, 4 / 8, 5 / 10, 6 / 12, 7 / 14, 8 / 16, 9 / 18, 10 / 20, 11 / 22, 12 / 24],
              a: 1, 
              b: 2, b_10: 10,
       },*/

    a = decimalFraction.a;
    b = decimalFraction.b;
    x = decimalFraction.dec;
    IDs['eq1'] = '' + x.toFixed(1) + ' = ';
    points = 3;

    IDs['ans'] = '<p>' + getFractionDiv(a, ' ' + b + ' ') + '</p>';
    IDs['x'] = a
    IDs['y'] = b;
    tipsArray = [];
    tipsArray.push('Börja med att sätta täljaren till :  ' + decimalFraction.dec * decimalFraction.b_10 + ' och nämnaren till ' + decimalFraction.b_10,
        'Förkorta så långt det går',
        'Tips: Täljaren är =  ' + IDs['x']

        // 'testa om ' + getFractionDiv(1, (a / b).toFixed(0)) + ' passar som nämnare',

    );


    return (IDs);


}


function validateX() {

    let svars = elements.inputX.value.split("/");

    let svarX = parseInt(svars[0])
    let svarY = parseInt(svars[1]) ? parseInt(svars[1]) : 1;
    console.log("cache.ansx " + parseInt(cache.ansX) + "    svarx " + svarX);
    if (svarX == parseInt(cache.ansX) &&
        (svarY == parseInt(cache.ansY) ||
            (cache.ansY == 1 && (svarY == '' || svarY == 1)))) successX();
    else
        errorX();
    console.log("cache.ansY " + parseInt(cache.ansY) + "    svary " + svarY);

}


//medel1 : b=5
function genEqMed1() {
    /*  var b = 5;
      var a = b;
      while (Math.abs(b) <= Math.abs(a)) { var a = getRandomPositiveExklArray(2, 20, [0, b]); }
      var x = new Fraction(a, b);
      console.dir(x);
      console.log(" a=  " + a + ", b=" + b);
      //andra bråket     
  
      var IDs = new Object();
  
      IDs['eq1'] = '' + (a / b).toFixed(2) + ' = ';
      tipsArray = [];
      tipsArray.push('Börja med att sätta täljaren till :  ' + (a / b).toFixed(2) * 100 + ' och nämnaren till 100',
          'Förkorta så långt det går', 'Tips: Nämnaren är = 5',
          // 'Hitta ett heltal som ska stå i täljare',
          //  'Börja med ' + getFractionDiv((a / b).toFixed(2) * 100, 100),
  
          //  'Förkorta svaret så långt det går'
      );
  
      points = 5;
  
      IDs['ans'] = '<p>' + getFractionDiv(x.n * x.s, ' ' + x.d + ' ') + '</p>';
  
  
      IDs['x'] = x.n * x.s;  //with sign
      IDs['y'] = x.d;
      return (IDs);
  */
    let a = 1;
    let b = a;
    let x;
    var IDs = new Object();


    decimalFraction = getRandomFrac(0.01);

    a = decimalFraction.a;
    b = decimalFraction.b;
    x = decimalFraction.dec;
    IDs['eq1'] = '' + x.toFixed(2) + ' = ';
    points = 3;

    IDs['ans'] = '<p>' + getFractionDiv(a, ' ' + b + ' ') + '</p>';
    IDs['x'] = a
    IDs['y'] = b;
    tipsArray = [];
    tipsArray.push('Börja med att sätta täljaren till :  ' + decimalFraction.dec * decimalFraction.b_10 + ' och nämnaren till ' + decimalFraction.b_10,
        'Förkorta så långt det går',
        'Tips: Täljaren är =  ' + IDs['x']

        // 'testa om ' + getFractionDiv(1, (a / b).toFixed(0)) + ' passar som nämnare',

    );


    return (IDs);

}
//



function genEqMed2() {
    /*  var a = getRandomPositiveExklArray(2, 9, [0]);
      var b = a;
      while (Math.abs(b) <= Math.abs(a)) { var b = getRandomPositiveExklArray(2, 9, [0, a]); }
      var x = new Fraction(a, b);
      console.dir(x);
  
      var IDs = new Object();
  
      IDs['eq1'] = '' + (a / b).toFixed(2) + ' = ';
      tipsArray = [];
      tipsArray.push('Börja med att sätta täljaren till :  ' + (a / b).toFixed(2) * 100 + ' och nämnaren till 100',
          'Förkorta så långt det går', 'Tips: Täljaren är ett tal mellan 1 och 5',
          //  'Hitta ett heltal som ska stå i nämnare',
          // 'Testa dig fram vilken nämnare ger svaret',
  
          //  'Förkorta svaret så långt det går'
      );
  
      points = 7;
  
      IDs['ans'] = '<p>' + getFractionDiv('' + x.n * x.s, ' ' + x.d + ' ') + '</p>';
  
      IDs['x'] = x.n * x.s;  //with sign
      IDs['y'] = x.d;
      return (IDs);
  */
    let a = 1;
    let b = a;
    let x;
    var IDs = new Object();

    //let ind = getRandomInt(0, decimalFractions3.length - 1);
    decimalFraction = getRandomFrac(0.001);



    a = decimalFraction.a;
    b = decimalFraction.b;
    x = decimalFraction.dec;
    IDs['eq1'] = '' + x.toFixed(3) + ' = ';
    points = 3;

    IDs['ans'] = '<p>' + getFractionDiv(a, ' ' + b + ' ') + '</p>';
    IDs['x'] = a
    IDs['y'] = b;
    tipsArray = [];
    tipsArray.push('Börja med att sätta täljaren till :  ' + decimalFraction.dec * decimalFraction.b_10 + ' och nämnaren till ' + decimalFraction.b_10,
        'Förkorta så långt det går',
        'Tips: Täljaren är =  ' + IDs['x']

        // 'testa om ' + getFractionDiv(1, (a / b).toFixed(0)) + ' passar som nämnare',

    );


    return (IDs);

}
//* 
function genEqHard1() {
    /* var a = getRandomPositiveExklArray(1, 9, [0]);
     var b = a;
     while (Math.abs(b) <= Math.abs(a)) { var b = getRandomPositiveExklArray(2, 9, [0, a]); }
     var x = new Fraction(a, b);
     console.dir(x);
 
 
     var IDs = new Object();
 
     IDs['eq1'] = '' + (a / b).toFixed(2) + ' =   ';
     tipsArray = [];
     tipsArray.push(
         'Börja med att sätta täljaren till :  ' + (a / b).toFixed(2) * 100 + ' och nämnaren till 100',
         'Förkorta så långt det går', 'Tips: Täljaren är ett tal mellan 1 och 10',
         // 'Hitta ett heltal som ska stå i nämnare',
         //   'Testa dig fram vilken nämnare ger svaret',
 
         //   'Förkorta svaret så långt det går'
     );
 
     points = 9;
 
     IDs['ans'] = '<p>' + getFractionDiv('' + x.n * x.s, ' ' + x.d + ' ') + '</p>';
 
 
     IDs['x'] = x.n * x.s;  //with sign
     IDs['y'] = x.d;
     return (IDs);*/
    let a = 1;
    let b = a;
    let x;
    var IDs = new Object();

    //let ind = getRandomInt(0, decimalFractions3.length - 1);
    decimalFraction = getRandomFrac(0.001, 50, 300);



    a = decimalFraction.a;
    b = decimalFraction.b;
    x = decimalFraction.dec;
    IDs['eq1'] = '' + x.toFixed(3) + ' = ';
    points = 9;

    IDs['ans'] = '<p>' + getFractionDiv(a, ' ' + b + ' ') + '</p>';
    IDs['x'] = a
    IDs['y'] = b;
    tipsArray = [];
    tipsArray.push('Börja med att sätta täljaren till :  ' + decimalFraction.dec * decimalFraction.b_10 + ' och nämnaren till ' + decimalFraction.b_10,
        'Förkorta så långt det går',
        'Tips: Täljaren är =  ' + IDs['x']

        // 'testa om ' + getFractionDiv(1, (a / b).toFixed(0)) + ' passar som nämnare',

    );


    return (IDs);
}
//
function genEqHard2() {
    /*  var a = getRandomPositiveExklArray(1, 25, [0]);
      var b = a;
      while (Math.abs(b) <= Math.abs(a)) { var b = getRandomPositiveExklArray(2, 25, [0, a]); }
      var x = new Fraction(a, b);
  
      var IDs = new Object();
  
      IDs['eq1'] = '' + (a / b).toFixed(2) + ' =  ';
  
      tipsArray = [];
      tipsArray.push('Börja med att sätta täljaren till :  ' + (a / b).toFixed(2) * 100 + ' och nämnaren till 100',
          'Förkorta så långt det går', 'Tips: Täljaren är ett tal mellan 2 och 25',
          // 'Hitta ett heltal som ska stå i nämnare',
          // 'Testa dig fram vilken nämnare ger svaret',
  
          //   'Förkorta svaret så långt det går'
      );
  
      points = 12;
  
      IDs['ans'] = '<p>' + getFractionDiv('' + x.n * x.s, ' ' + x.d + ' ') + '</p>';
  
      IDs['x'] = x.n * x.s;  //with sign
      IDs['y'] = x.d;
      return (IDs);*/
    let a = 1;
    let b = a;
    let x;
    var IDs = new Object();

    //let ind = getRandomInt(0, decimalFractions3.length - 1);
    decimalFraction = getRandomFrac(0.001, 250, 900);



    a = decimalFraction.a;
    b = decimalFraction.b;
    x = decimalFraction.dec;
    IDs['eq1'] = '' + x.toFixed(3) + ' = ';
    points = 12;

    IDs['ans'] = '<p>' + getFractionDiv(a, ' ' + b + ' ') + '</p>';
    IDs['x'] = a
    IDs['y'] = b;
    tipsArray = [];
    tipsArray.push('Börja med att sätta täljaren till :  ' + decimalFraction.dec * decimalFraction.b_10 + ' och nämnaren till ' + decimalFraction.b_10,
        'Förkorta så långt det går',
        'Tips: Täljaren är =  ' + IDs['x']

        // 'testa om ' + getFractionDiv(1, (a / b).toFixed(0)) + ' passar som nämnare',

    );


    return (IDs);
}

//This runs on line 200 within validate function                                                                                                                RUN - RUN - RUN
function run() {
    iniElements(); var ek = [];
    elements.helpname.innerHTML = "Räkna med bråk:"
    elements.textareaHelp.innerHTML = '';
    let el =
        document.getElementById("textareaHelpMath");
    el.innerHTML = texElementDivs.fr;
    el.style.display = "block";
    el.classList.add("mathfont");

    showElement(elements.output_fraction);
    // let eqv = document.getElementById("fraction-content");
    // eqv.style.fontSize = "2em";
    //  eqv.classList.add("mathfont");

    elements.eqv_tipsrows.innerHTML = '';
    //hideAnswer();

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

    var eq = (ek['eq1'])

    eqv.innerHTML = '<span style="font-size:0.7em; font-style: italic;color:blue"> Omvandla till enklaste bråkform, t.ex. 1 /4 : </span><br>' + eq;
    //console.dir(eqv.innerHTML);
    elements.points.innerHTML = ""
    document.getElementById("eqv")
        .style.fontSize = "1.5em";
    answer = ek['x'] + "/" + ek['y'];
    elements.textareaAnswerMath.innerHTML = "<p>Rätt svar : </p><div class='d-flex flex-row justify-content-around'>" + ek['ans'] + '</div></p>';
    elements.textareaAnswerMath.classList.add("mathfont");
    document.getElementById("task").innerHTML = " ";

    createAnswerCache(ek);

    createTipsEq(tipsArray);
    elements.img_out.innerHTML = "";
    elements.inputX.type = "text"
    elements.inputX.value = "";
    showElement(elements.inputX)

    elements.inputX.classList.remove("success");
    elements.inputX.focus();
    hideElement(elements.saveBtn);
    hideAnswer()
}
//This runs on line 200 within validate function                                                                                                                RUN - RUN - RUN
/*function run() {

    iniElements(); var ek = [];
    console.dir(elements);
    document.getElementById("helpname").innerHTML = "Räkna med bråk:"
    document.getElementById("textareaHelp").innerHTML = texElements.fr;

    //   console.dir(  document.getElementById("textareaHelp").innerHTML);
    // console.dir(elements.menu);
    elements.labelAns1.html("täljare");
    elements.labelAns2.html("nämnare");
    //document.getElementById("showgeogebra" ).style.display="none";
    if (variables.checked == 6) { variables.checked = Math.abs(getRandom(5, 1)) }
    //console.log(checked);//random  level
    switch ("" + variables.checked) {
        case "1"://  elements.menu.id("easy").checked)
            ek = genEqEasy1();
            break;
        case "2": ek = genEqMed1(); break;

        case "3": ek = genEqMed2(); break;
        case "4": ek = genEqHard1(); break;
        case "5": ek = genEqHard2(); break;

    }
    console.dir(ek);
    var eq = (ek['eq1'])

    eqv.innerHTML = eq;
    //console.dir(eqv.innerHTML);
    document.getElementById('pointsIn').innerHTML = "" + roundDecimalsZeros(points.toFixed(2));
    document.getElementById('fraction-content').style.justifyContent = "center";
    var helpdiv = document.getElementById("textareaHelpMath");
    helpdiv.innerHTML = texElementDivs.fr;
    helpdiv.classList.add("mathfont");
    document.getElementById("textareaAnswerMath").innerHTML = "<p>Rätt svar : </p><div class='d-flex flex-row justify-content-around'>" + ek['ans'] + '</div></p>';
    document.getElementById("textareaAnswerMath").classList.add("mathfont");
    createAnswerCache(ek);
    console.dir(tipsArray);
    createTipsEq(tipsArray);
}*/

