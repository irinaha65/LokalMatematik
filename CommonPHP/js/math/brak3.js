//easier 
function getRandomGame() {
    variables.checked = getRandomInt(1, 5)
    console.log(variables.checked);
    return variables.checked;
}
function genEqEasy1() {
    var a = 1
    var b = getRandomPositiveExklArray(3, 9, [a]);
    var x = new Fraction(a, b);

    var c = getRandomPositiveExklArray(2, 9, [1]);;  //hela delen
    //andra bråket     

    var sum = x.add(c, 1); // adderar hela delen


    //console.dir(sum);
    var IDs = new Object();
    let sign = getRandomSign()
    let sign1 = (sign > 0) ? ' ' : ' - ';

    IDs['eq1'] = '<p>' + getFractionBlandad(sign1 + '&nbsp;' + c + '&nbsp;',
        Math.abs(a), b) + ' = </p>';


    IDs['ans'] = '<p>' + getFractionBlandad(sign1 + '&nbsp;', sum.n, sum.d) + '</p>';
    answer = sign1 + sum.n + '/ ' + sum.d;
    taljare = sign1 + '(' + c * b + ' + ' + Math.abs(a) + ')';
    tipsArray = [];
    tipsArray.push('Multiplicera hela delen med nämnaren och plusa på i täljaren ',
        '<p>' + getFractionBlandad('', taljare, b),
        'Förkorta svaret så långt det går');

    points = 3;
    IDs['x'] = sum.n * sum.s * sign;  //with sign
    IDs['y'] = sum.d;
    return (IDs);

}

//medel1 
function genEqMed1() {
    var a = getRandomPositiveExklArray(1, 9, [1])
    var b = getRandomPositiveExklArray(3, 9, [a]);
    var x = new Fraction(a, b); // positiv
    var c = getRandomPositiveExklArray(1, 9, [1]); //hela delen

    var sum = x.add(c, 1); // adderar hela delen

    //console.dir(sum);
    var IDs = new Object();
    let sign = getRandomSign()
    let sign1 = (sign > 0) ? ' ' : ' - ';
    taljare = sign1 + '(' + c * b + ' + ' + Math.abs(a) + ')';
    IDs['eq1'] = '<p>' + getFractionBlandad(sign1 + '&nbsp;' + c + '&nbsp;',
        Math.abs(a), b) + ' = </p>';
    let str = getFractionDiv(sign1 + '&nbsp;' + sum.n, ' ' + sum.d + ' ')
    //console.log(str);
    IDs['ans'] = '<p>' + str + '</p>';
    answer = sign1 + sum.n + '/ ' + sum.d;

    tipsArray = [];
    tipsArray.push('Multiplicera hela delen med nämnaren och plusa på i täljaren ',
        '<p>' + getFractionBlandad('', taljare, b) + ' =  </p>',
        'Förkorta svaret så långt det går');

    points = 4;
    IDs['x'] = sum.n * sum.s * sign;  //with sign
    IDs['y'] = sum.d;
    return (IDs);

}
//+  / ett blandad+  ett vanlig +
function genEqMed2() {
    var a = getRandomPositiveExklArray(1, 9, [1])
    var b = getRandomPositiveExklArray(3, 9, [a]);
    var x = new Fraction(a, b); // positiv
    var c = getRandomPositiveExklArray(1, 9, [1]); //hela delen

    var sum = x.add(c, 1); // adderar hela delen

    //andra bråket     
    var d = getRandomPositiveExklArray(1, 9, [0]) * getRandomSign();
    var e = getRandomPositiveExklArray(3, 9, [0, 1, 2, b]);
    let signA = getRandomSign();
    sum.n *= signA;

    var sum1 = sum.add(d, e); // resultat 
    //console.dir(sum1);


    var IDs = new Object();


    let sign1 = (signA > 0) ? '' : ' - ';
    let sign2 = (d > 0) ? ' + ' : ' - ';
    IDs['eq1'] = '<p>' + getFractionBlandad(sign1 + c, Math.abs(a), b) + getFractionBlandad(sign2,
        Math.abs(d), e) + ' =  <p>';
    IDs['ans'] = '<p>' + getFractionBlandad((sum1.s > 0) ? '' : ' - ', sum1.n, ' ' + sum1.d + ' ') + '</p>';
    answer = (sum1.s > 0) ? '' : ' - ' + sum1.n + '/ ' + sum1.d;
    var mgn = getLowestCommonMultiple(b, e);
    tipsArray = [];
    tipsArray.push('Skriv första bråket i enkel form , Multiplicera hela delen med nämnaren och plusa på i täljaren ',
        '<p>' + getFractionBlandad(sign1, c * b + Math.abs(a), b) + getFractionBlandad(sign2,
            Math.abs(d), e) + ' = ? <p>',
        'Förläng bråken till gemensam nämnare',
        'MGN för ' + b + ' och ' + e + ' är ' + mgn,
        '<p>' + getFractionBlandad(sign1, (c * b + Math.abs(a)) * mgn / b, mgn) +
        getFractionBlandad(sign2, Math.abs(d) * mgn / e, mgn) + ' = ? <p>',
        'Lägg ihop täljare ',
        '<p>' + getFractionBlandad('', sign1 + (c * b + Math.abs(a)) * mgn / b + sign2 + Math.abs(d) * mgn / e, mgn) + ' = ? <p>',
        'Förkorta svaret så långt det går');

    points = 8;

    IDs['x'] = sum1.n * sum1.s;  //with sign
    IDs['y'] = sum1.d;
    return (IDs);

}
//* två mbråk
function genEqHard1() {
    var a = getRandomPositiveExklArray(1, 5, [0]);
    var b = getRandomPositiveExklArray(3, 9, [0, 1, 2, a]);
    var x = new Fraction(a, b);
    //console.log(" a=  " + a + ", b=" + b);
    var c = getRandomPositiveExklArray(1, 9, [1]); //hela delen

    var sum = x.add(c, 1); // adderar hela delen
    //andra bråket     
    let signA = getRandomSign();
    sum.n *= signA;
    var d = getRandomPositiveExklArray(1, 5, [0]);
    var e = getRandomPositiveExklArray(3, 7, [0, 1, 2, b, d]);

    var sum1 = sum.mul(d, e);  //c a/b * d/e
    //tredje bråket     
    var f = getRandomPositiveExklArray(1, 9, [0]) * getRandomSign();
    var g = getRandomPositiveExklArray(3, 9, [0, 1, 2, b, d, e]);
    var sum2 = sum1.add(f, g);  //c a/b * d/e + f/g
    //console.dir(sum2);
    var IDs = new Object();
    let sign1 = (signA > 0) ? ' ' : ' - ';
    let sign2 = (f > 0) ? ' + ' : ' - ';
    IDs['eq1'] = '<p>' + getFractionBlandad(sign1 + c, a, b) + ' &#x22C5; '

        + getFractionDiv(Math.abs(d), e) + getFractionBlandad(sign2, Math.abs(f), g) + ' =  </p>';
    IDs['ans'] = '<p>' + getFractionBlandad((sum1.s > 0) ? '' : ' - ', sum2.n, ' ' + sum2.d + ' ') + '</p>';
    answer = (sum1.s > 0) ? '' : ' - ' + sum2.n + '/ ' + sum2.d;
    var mgn = getLowestCommonMultiple(b * e, g);
    tipsArray = [];
    tipsArray.push('Skriv första bråket i enkel form , Multiplicera hela delen med nämnaren och plusa på i täljaren ',
        '<p>' + getFractionBlandad(sign1, c * b + Math.abs(a), b) + ' &#x22C5; ' +
        getFractionBlandad((d > 0) ? ' ' : ' - ', Math.abs(d), e) + getFractionBlandad(sign2,
            Math.abs(f), g) + ' = ? </p>',
        'Utför multiplikationen mellan första och andra bråket',
        ' Multiplicera in täljare och nämnare för sig',
        '<p>' + getFractionBlandad(sign1, (c * b + Math.abs(a)) * d, b * e) + getFractionBlandad(sign2,
            Math.abs(f), g) + ' = ? </p>',
        'Förläng bråken till gemensam nämnare',
        'MGN för ' + b * e + ' och ' + g + ' är ' + mgn,
        '<p>' + getFractionBlandad(sign1, ((c * b + Math.abs(a)) * d) * mgn / (b * e), mgn) +
        getFractionBlandad(sign2, Math.abs(f) * mgn / g, mgn) + ' = ? </p>',
        'Lägg ihop täljare och förkorta svaret så långt det går');

    points = 12;
    IDs['x'] = sum2.n * sum2.s;  //with sign
    IDs['y'] = sum2.d;
    return (IDs);
}
//mult  and divition
function genEqHard2() {
    var a = getRandomPositiveExklArray(1, 5, [0]);
    var b = getRandomPositiveExklArray(3, 8, [0, 1, 2, a]);
    var x = new Fraction(a, b);
    //console.log(" a=  " + a + ", b=" + b);
    var c = getRandomPositiveExklArray(1, 9, [1]); //hela delen

    var sum = x.add(c, 1); // adderar hela delen
    //andra bråket     
    let signA = getRandomSign();
    sum.n *= signA;
    var d = getRandomPositiveExklArray(1, 5, [0]);
    var e = getRandomPositiveExklArray(3, 9, [0, 1, 2, b, d]);

    var sum1 = sum.add(d, e);  //c a/b + d/e
    //tredje bråket     
    var f = getRandomPositiveExklArray(1, 5, [0]) * getRandomSign();
    var g = getRandomPositiveExklArray(3, 9, [0, 1, 2, b, d, e, f]);
    var sum2 = sum1.add(f, g);  //c a/b + d/e + f/g
    //console.dir(sum2);
    var IDs = new Object();
    let sign1 = (signA > 0) ? ' ' : ' - ';
    let sign2 = (f > 0) ? ' + ' : ' - ';
    IDs['eq1'] =

        '<p>' + getFractionBlandad(sign1 + c, a, b) + (' + ')

        + getFractionDiv(Math.abs(d), e) + getFractionBlandad(sign2, Math.abs(f), g) + ' =  </p>';
    IDs['ans'] = '<p>' + getFractionBlandad((sum2.s > 0) ? '' : ' - ', sum2.n, ' ' + sum2.d + ' ') + '</p>';
    answer = (sum2.s > 0) ? '' : ' - ' + sum2.n + '/ ' + sum2.d;
    var mgn1 = getLowestCommonMultiple(b, e);
    var mgn2 = getLowestCommonMultiple(sum1.d, g);
    tipsArray = [];
    tipsArray.push('Skriv första bråket i enkel form , Multiplicera hela delen med nämnaren och plusa på i täljaren ',
        '<p>' + getFractionBlandad(sign1, c * b + Math.abs(a), b) + getFractionBlandad(' + ', Math.abs(d), e) +
        getFractionBlandad(sign2, Math.abs(f), g) + ' = ? </p>',
        'Förläng första och andra bråken till gemensam nämnare', 'MGN för ' + b + ' och ' + e + ' är ' + mgn1,
        '<p>' + getFractionBlandad('', sign1 + (c * b + a) * mgn1 / b + ' + ' + Math.abs(d) * mgn1 / e, mgn1) +
        getFractionBlandad(sign2, Math.abs(f), g) + ' = ? </p>',
        'Förkorta första bråket',
        '<p>' + getFractionBlandad(' ', sum1.n * sum1.s, sum1.d) +
        getFractionBlandad(sign2, Math.abs(f), g) + ' = ? </p>',
        'Förläng bråken till gemensam nämnare', 'MGN för ' + sum1.d + ' och ' + g + ' är ' + mgn2,
        '<p>' + getFractionBlandad(' ', sum1.n * sum1.s * mgn2 / sum1.d, mgn2) +
        getFractionBlandad(sign2, Math.abs(f) * mgn2 / g, mgn2) + ' = ? </p>',
        'Lägg ihop täljare och förkorta svaret så långt det går');

    points = 12;
    IDs['x'] = sum2.n * sum2.s;  //with sign
    IDs['y'] = sum2.d;
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

    //console.log(minigame)//random  level
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
    //console.dir(ek);

    var eq = (ek['eq1'])
    eqv.innerHTML = '<span style="font-size:0.7em; font-style: italic;color:blue"> Svara på enklaste bråkform, t.ex. 1 /4 : </span><br>' + eq;
    //console.dir(elements.eqv);
    elements.points.innerHTML = ""
    document.getElementById("eqv")
        .style.fontSize = null;
    answer = ek['x'] + "/" + ek['y'];
    elements.textareaAnswerMath.innerHTML = "<p>Rätt svar : </p><div class='d-flex flex-row justify-content-around'>" + ek['ans'] + '</div></p>';
    elements.textareaAnswerMath.classList.add("mathfont");
    document.getElementById("task").innerHTML = "";

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