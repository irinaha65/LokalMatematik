//easier dec a= 1
let tipsArray = [];
document.getElementById('eqvTyp').innerHTML = 2
function getRandomGame() {
    variables.checked = getRandomInt(1, 5)
    console.log(variables.checked);
    return variables.checked;
}
function genEqGrund() {
    let coeff1 = getRandom(10, 2);

    let x = getRandom(18, 2);

    let const1 = coeff1 * x;

    let IDs = new Object();

    IDs['eq1'] = "" + coeff1 + " + &#119961; = " + const1;
    tipsArray = [];
    tipsArray.push(' Flytta ' + coeff1 + ' till höger led med motsatt tecken ',
        "  &#119961; = " + const1 + " - " + coeff1);
    IDs['ans'] = parseFloat(x);
    IDs['x'] = x;
    IDs['y'] = null;
    points = 5;
    return (IDs);

}
//easy with *
function genEqEasy1() {
    //let &#119961; = getRandom(10,1);  // returns a random integer from 1 to 10
    let coeff1 = getRandom(10, 2);
    let x = getRandom(18, 2);
    // let const1 = getRandom( 25,2);

    //let  x=(const1/coeff1).toFixed(3);
    let const1 = coeff1 * x;
    let IDs = new Object();

    IDs['eq1'] =
        " " + coeff1 + "&#119961; = " + const1;
    tipsArray = [];
    tipsArray.push('Dela hela ekvationen på ' + coeff1,
        getFractionBlandad(
            "&#119961; = ", const1, coeff1));

    IDs['ans'] = parseFloat(x);
    IDs['x'] = x;
    IDs['y'] = null;
    points = 8;
    return (IDs);
}

//medel1 : en konstant
function genEqMed1() {

    let a = getRandom(25, 10);
    let b = getRandom(30, 3);
    let x = getRandom(10, 3);
    let c = a * x + b;
    //x=((c -b)/a).toFixed(3);

    let IDs = new Object();
    IDs['eq1'] = "" + a + "&#119961; + " + b
        + " = " + c;
    tipsArray = [];
    tipsArray.push('Flytta ' + b + ' till höger led med motsatt tecken ',
        replaseAllminusplus("" + a + "&#119961; = " + c + " + " + (-b)),
        'Dela hela ekvationen på ' + toFixed3string(a),
        getFractionBlandad("&#119961; = ", c - b, a));


    IDs['ans'] = parseFloat(x);
    IDs['x'] = x;
    IDs['y'] = null;
    points = 10;
    return (IDs);

}
//två konstanter
function genEqMed2() {
    while (true) {
        let a = getRandom(25, -10);
        let b = getRandom(30, -20);
        let x = getRandom(10, 3);
        let c = ((a * x + b) / x);
        if (c == Math.ceil(c)) break;
    }
    let IDs = new Object();
    IDs['eq1'] = " " + a + "&#119961; + "
        + b + " = " + c + "&#119961;";
    tipsArray = [];
    tipsArray.push('Flytta alla &#119961; till vänster led.',
        " " + a + "&#119961; - " + c + "&#119961; " + b + " = 0",
        'Flytta allt utan &#119961; till höger led.',
        replaseAllminusplus(" " + a + "&#119961; - " + c + "&#119961; = " + (-b)),
        'Förenkla ',
        " " + toFixed3string(a - c) + "&#119961;  = " + (-b),
        "Dela hela ekvationen på " + toFixed3string(a - c),

        getFractionBlandad("&#119961;  = ", -b, a - c));
    IDs['ans'] = x;
    IDs['x'] = x;
    IDs['y'] = null;
    points = 12;
    return (IDs);

}

//equations with &#119961; on both sides
function genEqHard1() {
    while (true) {
        let a = getRandom(15, 10);
        let b = getRandom(8, 3);
        let x = getRandom(10, 3);
        let d = getRandom(18, 3);
        let c = ((a * x + b - d) / x);
        if (Math.ceil(c) == c) break;
    }
    let IDs = new Object();
    IDs['eq1'] = " " + a + "&#119961; + " + b + " = " + c + "&#119961; + " + d;
    tipsArray = [];
    tipsArray.push('Flytta alla &#119961; till vänster led.',
        replaseAllminusplus(" " + a + "&#119961; - " + c + "&#119961; + " + b + " = " + d),
        'Flytta allt utan &#119961; till höger led.',
        replaseAllminusplus(" " + a + "&#119961; - " + c + "&#119961; = " + d + " - " + b),
        'Förenkla ',
        " " + toFixed3string(a - c) + "&#119961;  = " + toFixed3string(d - b), "Dela hela ekvationen på " + toFixed3string(a - c),
        getFractionBlandad("&#119961;  = ", toFixed3string(d - b), toFixed3string(a - c)));
    IDs['ans'] = parseFloat(x);
    IDs['x'] = x;
    IDs['y'] = null;
    points = 16;
    return (IDs);

}
//equations with &#119961; on both sides and divition
function genEqHard2() {
    while (true) {
        let a = getRandom(80, 5);
        let b = getRandom(30, 3);

        let c = getRandomPositiveExklArray(2, 9, [0, 1]);
        let d = getRandom(67, 5);
        let x = getRandom(15, 5);
        // x=((e*c-b)/(a-d*c)).toFixed(3);
        let e = ((a * x + b) / c) - d * x;
        if (Math.ceil(e) == e) break;
    }
    let IDs = new Object();
    IDs['eq1'] = getFractionDiv('' + a + "&#119961; + " + b, ' ' + c + ' ') + " = " + d + "&#119961; + " + e;
    console.log(IDs['eq1']);
    tipsArray = [];
    tipsArray.push('Multiplicera hela ekvationen med ' + c,
        getFractionDiv(replaseAllminusplus('(' + a + "&#119961; + " + b + ')' + c), ' ' + c + ' ') + replaseAllminusplus(" = (" + d + "&#119961; + " + e + ")" + c),
        'Förkorta vänster led med ' + c,
        replaseAllminusplus('' + a + "&#119961; + " + b + " = (" + d + "&#119961; + " + e + ")" + c),
        'Multiplicera ' + c + ' in i parentesen ',
        replaseAllminusplus('' + a + "&#119961; + " + b + " = " + d * c + "&#119961; + " + e * c),
        'Flytta alla &#119961; till vänster led  och resten till höger led.',
        replaseAllminusplus('' + a + "&#119961; + " + (-d * c) + "&#119961;   = " + e * c + " + " + (-b)),
        ' Förenkla ',
        '' + roundDecimalsZeros((a - d * c).toFixed(3)) + "&#119961;    = " + roundDecimalsZeros((e * c - b).toFixed(3)),
        'Dela hela ekvationen på ' + roundDecimalsZeros((a - d * c).toFixed(3)),
        getFractionBlandad('&#119961; = ', roundDecimalsZeros((e * c - b).toFixed(3)), roundDecimalsZeros((a - d * c).toFixed(3))
        ));

    IDs['ans'] = parseFloat(x);
    IDs['x'] = x;
    IDs['y'] = null; console.dir(IDs);
    points = 18;
    return (IDs);


}

//This runs on line 200 within validate function                                                                                                                RUN - RUN - RUN
function run() {
    iniElements(); let ek = [];
    elements.helpname.innerHTML = "Att lösa ekvationer ";
    elements.textareaHelpMath.innerHTML = texElementDivs.ekv;
    elements.textareaHelpMath.classList.add("mathfont");
    elements.output_eqvX.style.display = "block";
    elements.output_eqvX.classList.add("mathfont");
    elements.labelAns1.innerHTML = ("&#119961;=");

    elements.eqv_tipsrows.innerHTML = '';
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

    cache.ansX = answer = parseFloat(ek['x']);
    cache.ansY = parseFloat(ek['y']);


    let eq = (ek['eq1'])
    elements.task.innerHTML = "Lös:"
    elements.output_eqvX.innerHTML = replaseAllminusplus(eq);

    elements.textareaAnswerMath.innerHTML = "Rätt svar :  " + roundDecimalsZeros(ek['ans'].toFixed(3));
    elements.textareaAnswerMath.classList.add("mathfont");
    showElement(elements.inputX)
    elements.inputX.value = "";
    elements.answerBlock.style.display = "flex";
    elements.inputX.focus();
    hideElement(elements.labelAns2);
    hideElement(elements.inputY);
    hideElement(elements.saveBtn);
    console.dir(tipsArray);
    createTipsEq(tipsArray);
}



function validateX() {

    let svarX = parseFloat(elements.inputX.value).toFixed(3)

    console.log("cache.ansx " + cache.ansX + "    svarx " + svarX);
    if (svarX == parseFloat(cache.ansX).toFixed(3)) successX();
    else
        errorX();


}
