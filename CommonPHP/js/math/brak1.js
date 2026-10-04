//var answer; deklareras i huvudfilen
//easier equation 2 st 
function getRandomGame() {
    variables.checked = getRandomInt(1, 5)
    console.log(variables.checked);
    return variables.checked;
}
function genEqEasy1() {
    var a = getRandomPositiveExklArray(1, 6, [0]);
    var b = getRandomPositiveExklArray(3, 9, [a]);
    a *= getRandomSign();
    console.log(" a=  " + a + ", b=" + b);
    var x = new Fraction(a, b);


    //andra bråket     
    var c = Math.abs(getRandomPositiveExklArray(1, 6, [b])) * getRandomSign();
    var d = b;


    // summa:
    var sum = x.add(c, d);

    //console.dir(sum);
    var IDs = new Object();
    let sign1 = (x.s > 0) ? ' ' : ' - ';
    let sign2 = (c > 0 && d > 0) ? ' + ' : ' - ';
    var taljare = ' ' + a + ' + ' + c;
    taljare = replaseAllminusplus(taljare);
    IDs['eq1'] = '<p>' + getFractionBlandad(sign1, Math.abs(a), b)
        + getFractionBlandad(sign2, Math.abs(c), d) + ' = ?</p>';
    IDs['ans'] = sum.d == 1 ? '' + sum.n * sum.s : getFractionDiv('' + sum.n * sum.s, ' ' + sum.d + ' ');
    answer = sum.d == 1 ? '' + sum.n * sum.s : '' + sum.n * sum.s + ' / ' + sum.d;
    tipsArray = [];
    tipsArray.push('Lägg ihop täljare ',
        '<p>' + getFractionBlandad('', taljare, b) + ' = ?</p>',
        'Förkorta svaret så långt som möjligt');

    points = 3;
    IDs['x'] = sum.n * sum.s;  //with sign
    IDs['y'] = sum.d;

    return (IDs);


}


//medel1 : en konstant
function genEqMed1() {


    var a = getRandomPositiveExklArray(2, 6, [0]);
    var b = getRandomPositiveExklArray(3, 9, [0, 1, 2, a]);
    a *= getRandomSign();
    console.log(" a=  " + a + ", b=" + b);
    var x = new Fraction(a, b);
    console.dir(x);

    //andra bråket     
    var c = getRandomPositiveExklArray(1, 6, [0]);
    var d = getRandomPositiveExklArray(3, 8, [0, 1, 2, b, c]);
    c *= getRandomSign();

    // summa:
    var sum = x.add(c, d);




    var IDs = new Object();
    let sign1 = (x.s > 0) ? ' ' : ' - ';
    let sign2 = (c > 0 && d > 0) ? ' + ' : ' - ';


    IDs['eq1'] = '<p>' + getFractionBlandad(sign1, Math.abs(a), b)
        + getFractionBlandad(sign2, Math.abs(c), d) + ' = ?</p>';

    tipsArray = [];
    var mgn = getLowestCommonMultiple(b, d);
    var taljare = ' ' + a * mgn / b + ' + ' + c * mgn / d;
    taljare = replaseAllminusplus(taljare);
    tipsArray.push('Hitta minsta gemensamma nämnaren(MGN)',
        'MGN för ' + b + ' och ' + d + ' är ' + mgn,
        'Förläng första bråket med ' + mgn / b,
        '<p>' + getFractionBlandad(sign1, Math.abs(a) * mgn / b, mgn) +
        getFractionBlandad(sign2, Math.abs(c), d) + ' = ?</p>',
        'Förläng andra bråket med ' + mgn / d,
        '<p>' + getFractionBlandad(sign1, Math.abs(a) * mgn / b, mgn) +
        getFractionBlandad(sign2, Math.abs(c) * mgn / d, mgn) + ' = ?</p>',

        'Lägg ihop täljare ',
        '<p>' + getFractionDiv(taljare, mgn) + ' = ?</p>',
        'Förkorta svaret så långt som möjligt');

    IDs['x'] = sum.n * sum.s;  //with sign
    IDs['y'] = sum.d;

    IDs['ans'] = sum.d == 1 ? '' + sum.n * sum.s : getFractionDiv('' + sum.n * sum.s, ' ' + sum.d + ' ');
    answer = sum.d == 1 ? '' + sum.n * sum.s : '' + sum.n * sum.s + ' / ' + sum.d;

    points = 6;
    return (IDs);

}
//+ och *
function genEqMed2() {
    var a = getRandomPositiveExklArray(2, 6, [0]);
    var b = getRandomPositiveExklArray(3, 9, [0, 1, 2, a]);
    a *= getRandomSign();
    var x = new Fraction(a, b);

    console.log(" a=  " + a + ", b=" + b);

    //andra bråket     
    var c = getRandomPositiveExklArray(1, 6, [0]);
    var d = getRandomPositiveExklArray(3, 9, [0, 1, 2, b, c]);
    c *= getRandomSign();
    e = getRandomPositiveExklArray(2, 8, [0]); // faktor

    // summa:  //a/b + e*c/d
    var sum = x.add(c * e, d);
    var mgn = getLowestCommonMultiple(b, d);
    console.dir(sum);
    var IDs = new Object();
    let sign1 = (x.s > 0) ? ' ' : ' - ';
    let sign2 = (e * c > 0 && d > 0) ? ' + ' : ' - ';
    IDs['eq1'] = '<p>' + getFractionBlandad(sign1, Math.abs(a), b) +
        getFractionBlandad(sign2 + Math.abs(e) + ' &#x22C5; ',
            Math.abs(c), d) + ' = ?</p>';


    var taljare = '' + a * mgn / b + ' + ' + c * e * mgn / d;
    taljare = replaseAllminusplus(taljare);

    tipsArray = [];
    tipsArray = [];
    tipsArray.push('Utför multiplikationen först',
        'Multiplicera andra bråket med ' + Math.abs(e),
        '<p>' + getFractionBlandad(sign1, Math.abs(a), b) +
        getFractionBlandad(sign2, Math.abs(e * c), d) + ' = ?</p>',
        'Hitta minsta gemensamma nämnaren(MGN)',
        'MGN för ' + b + ' och ' + d + ' är ' + mgn,
        'Förläng första bråket med ' + Math.abs(mgn / b),
        '<p>' + getFractionBlandad(sign1, Math.abs(a * mgn / b), mgn) +
        getFractionBlandad(sign2, Math.abs(c * e), d) + ' = ?</p>',
        'Förläng andra bråket med ' + Math.abs(mgn / d),
        '<p>' + getFractionBlandad(sign1, Math.abs(a * mgn / b), mgn) +
        getFractionBlandad(sign2, Math.abs(c * e * mgn / d), mgn) + ' = ?</p>',

        'Lägg ihop täljare ',
        '<p>' + getFractionDiv(taljare, mgn) + ' = ?</p>',
        'Förkorta svaret så långt som möjligt');

    IDs['x'] = sum.n * sum.s;  //with sign
    IDs['y'] = sum.d;

    IDs['ans'] = sum.d == 1 ? '' + sum.n * sum.s : getFractionDiv('' + sum.n * sum.s, ' ' + sum.d + ' ');
    answer = sum.d == 1 ? '' + sum.n * sum.s : '' + sum.n * sum.s + ' / ' + sum.d;
    points = 9;
    return (IDs);

}
//* två mbråk
function genEqHard1() {
    var a = getRandomPositiveExklArray(2, 6, [0]);
    var b = getRandomPositiveExklArray(3, 9, [0, 1, 2, a]);
    a *= getRandomSign();
    var x = new Fraction(a, b);

    console.log(" a=  " + a + ", b=" + b);

    //andra bråket     
    var c = getRandomPositiveExklArray(1, 6, [0]);
    var d = getRandomPositiveExklArray(3, 6, [0, 1, 2, b, c]);



    var sum = x.mul(c, d);  //a/b * C/d

    //tredje bråket     
    var e = getRandomPositiveExklArray(1, 8, [0]);
    var f = getRandomPositiveExklArray(3, 6, [0, 1, 2, b, d, e]);
    e *= getRandomSign();
    var sum2 = sum.add(e, f);  //a/b * c/d + e/f

    var mgn = getLowestCommonMultiple(b * d, f);



    var IDs = new Object();
    let sign1 = (sum.s > 0) ? ' ' : ' - ';
    let sign2 = (e > 0 && f > 0) ? ' + ' : ' - ';
    IDs['eq1'] = '<p>' + getFractionBlandad(
        sign1, Math.abs(a), b) + ' &#x22C5; ' +
        getFractionDiv(c, d) + getFractionBlandad(sign2, Math.abs(e), f) + ' = ? </p>';




    //  sign1 + texElements.fraction('' + Math.abs(a), ' ' + Math.abs(b) + ' ') +
    //' * '+texElements.fraction(''+ Math.abs(c),' '+ Math.abs(d)+' ')+sign2
    //+  texElements.fraction(''+ Math.abs(e),' '+ Math.abs(f)+' ')+' = ?'; 

    var taljare = '' + (a * c * mgn / (b * d)) + ' + ' + e * mgn / f;
    taljare = replaseAllminusplus(taljare);
    tipsArray = [];
    tipsArray.push('Utför multiplikationen först',
        ' Multiplicera in täljare och nämnare för sig',

        '<p>' + getFractionBlandad(sign1, Math.abs(a * c), b * d) + getFractionBlandad(sign2,
            Math.abs(e), f) + ' = ? </p>',

        'Hitta minsta gemensamma nämnaren(MGN)',
        'MGN för ' + b * d + ' och ' + f + ' är ' + mgn,
        'Förläng första bråket med ' + mgn / (b * d),
        '<p>' + getFractionBlandad(sign1, Math.abs(a * c * mgn) / (b * d), mgn) +
        getFractionBlandad(sign2, Math.abs(e), f) + ' = ? </p>',
        'Förläng andra bråket med ' + mgn / f,
        '<p>' + getFractionBlandad(sign1, Math.abs(a * c * mgn) / (b * d), mgn),
        getFractionBlandad(sign2, Math.abs(e * mgn) / f, mgn) + ' = ? </p>',
        'Lägg ihop täljare ',
        '<p>' + getFractionDiv(taljare, mgn) + ' = ? </p>',
        'Förkorta svaret så långt det går');

    IDs['x'] = sum2.n * sum2.s;  //with sign
    IDs['y'] = sum2.d;
    IDs['ans'] = sum2.d == 1 ? '' + sum2.n * sum2.s : getFractionDiv('' + sum2.n * sum2.s, ' ' + sum2.d + ' ');
    answer = sum2.d == 1 ? '' + sum2.n * sum2.s : '' + sum2.n * sum2.s + ' / ' + sum2.d;
    points = 12;
    return (IDs);
}
//mult  and divition
function genEqHard2() {                               // Vilket värde har x om 1/2+1/3+x=1

    var a = getRandomPositiveExklArray(1, 5, [0]);
    var b = getRandomPositiveExklArray(3, 6, [0, 1, 2, a]);

    var x = new Fraction(a, b);
    console.dir(x);
    console.log(" a=  " + a + ", b=" + b);
    var c = getRandomPositiveExklArray(1, 5, [0]);
    var d = getRandomPositiveExklArray(3, 6, [0, 1, 2, c, b]);



    var sum1 = x.add(c, d);  //e/f / g/h
    //console.dir(sum1);
    var sum2 = sum1.add(-1);
    var sum2 = sum2.mul(-1);
    console.dir(sum2);
    var mgn = getLowestCommonMultiple(b, d);
    //console.dir(sum2);
    var IDs = new Object();
    var sign1 = (a > 0) ? ' ' : ' - ';
    var sign2 = (c > 0) ? ' ' : ' - ';
    var taljare = '' + (a * mgn / (b)) + ' + ' + (c * mgn / (d));
    taljare = replaseAllminusplus(taljare);
    IDs['eq1'] = '<p> Vilket värde har 𝑥 om </p><p>' + getFractionBlandad(sign1,
        Math.abs(a), b) + getFractionBlandad(sign2 == ' ' ? ' + ' : sign2, Math.abs(c), d)
        + '+ 𝑥  = 1 ? </p>';
    // IDs['ans'] = getFractionAnswer('', getFractionDiv('' + sum.n, ' ' + sum.d + ' ')); 
    //   answer= sum.n+'/ ' + sum.d
    tipsArray = [];
    tipsArray.push(
        'Hitta minsta gemensamma nämnaren(MGN)',
        'MGN för ' + b + ' och ' + d + ' är ' + mgn,
        'Förläng första bråket med ' + mgn / (b) + ' och andra bråket med ' + mgn / d,
        '<p>' + getFractionBlandad(sign1, Math.abs(a * mgn) / (b), mgn) +
        getFractionBlandad(sign2 == ' ' ? ' + ' : sign2, Math.abs(c * mgn) / d, mgn) + '+ 𝑥  = 1 </p>',

        'Lägg ihop täljare ',
        '<p>' + getFractionDiv((a * mgn / (b)) + (c * mgn / (d)), mgn) + '+ 𝑥  = 1  </>',

        ' Flytta &nbsp;' + getFractionDiv((a * mgn / (b)) + (c * mgn / (d)), mgn) + '&nbsp; till höger led med motsatt tecken ',
        '<p> 𝑥  = 1 - &nbsp;' + getFractionDiv((a * mgn / (b)) + (c * mgn / (d)), mgn) + ' </>',
        'Förkorta svaret så långt det går');
    IDs['x'] = sum2.n * sum2.s;  //with sign
    IDs['y'] = sum2.d;
    IDs['ans'] = sum2.d == 1 ? '' + sum2.n * sum2.s : getFractionDiv('' + sum2.n * sum2.s, ' ' + sum2.d + ' ');
    answer = sum2.d == 1 ? '' + sum2.n * sum2.s : '' + sum2.n * sum2.s + ' / ' + sum2.d;
    points = 15;
    return (IDs);
}


//This runs on line 200 within validate function                                                                                                                RUN - RUN - RUN
function run() {
    iniElements(); var ek = [];
    elements.helpname.innerHTML = "Räkna med bråk:"
    elements.textareaHelp.innerHTML = '';
    elements.textareaHelpMath.innerHTML = texElementDivs.fr;
    elements.textareaHelpMath.classList.add("mathfont");
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
    let eqv = elements.eqv
    eqv.style.fontSize = "1em";
    eqv.innerHTML = eq;
    //console.dir(eqv.innerHTML);
    elements.points.innerHTML = "" + roundDecimalsZeros(points.toFixed(2));

    elements.textareaHelpMath.innerHTML = texElementDivs.fr;
    elements.textareaHelpMath.classList.add("mathfont");
    elements.textareaAnswerMath.innerHTML = "<p>Rätt svar : </p><div class='d-flex flex-row justify-content-around'>" + ek['ans'] + '</div></p>';
    elements.textareaAnswerMath.classList.add("mathfont");
    elements.task.innerHTML = "Skriv svaret i enklaste bråkform. t.ex. 1/4 ";
    createAnswerCache(ek);
    console.dir(tipsArray);
    createTipsEq(tipsArray);
    elements.img_out.innerHTML = "";
    elements.inputX.type = "text"
    elements.inputX.value = "";
    elements.inputX.focus();
    hideElement(elements.saveBtn);
    hideAnswer()
}

/*function validateY() {

    var svarY = parseInt(elements.inputY.val()) ;
    console.log("cache.ansY " + cache.ansY + "    svarY " + svarY);
    if (svarY == parseInt(cache.ansY) ) successY();

    else
        if (cache.ansY == 1 && (svarY == '' || svarY == 1)) successY()

        else errorY();


}*/

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




