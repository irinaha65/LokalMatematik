document.getElementById('eqvTyp').innerHTML = 2
let tipsArray = [];
//easier equation 2 st 
function genEqEasy1() {
    var x = getRandomInt(1, 10);
    var y = getRandomInt(1, 10); //x+y=a   bx+y=c

    var b = getRandomInt(2, 10);

    var IDs = new Object();

    IDs['eq1'] = '<div>' + texElementDivs.mathX + ' +' + texElementDivs.mathY + ' = ' + (x + y) + '</div> '
        + '<div> ' + b + texElementDivs.mathX + ' +' + texElementDivs.mathY + " = " + (b * x + y) + '</div>';
    //IDs['eq2'] = "       (2)  " + b + "x + y = " + (b*x+y) ;
    tipsArray = [];
    tipsArray.push('Grafisk lösning visar punkten som är gemensam för bägge ekvationerna ',
        'Uttryck 𝒚 genom 𝑥 från den första ekvationen',
        replaseAllminusplus(texElementDivs.mathY + '= ' + toFixed3string(x + y) + ' - ' + texElementDivs.mathX),
        'och sätt in i den andra',
        replaseAllminusplus(b + texElementDivs.mathX + ' + (' + toFixed3string(x + y) + ' - ' + texElementDivs.mathX + ") = " + (b * x + y)),
        'Öppna parenteser och förenkla',

        replaseAllminusplus('' + (b - 1) + texElementDivs.mathX + ' + ' + toFixed3string(x + y) + " = " + (b * x + y)),

        replaseAllminusplus('' + (b - 1) + texElementDivs.mathX + " = " + (b * x + y) + ' - ' + toFixed3string(x + y)),
        'Dividera med ' + (b - 1),

        '' + texElementDivs.mathX + " = " + ((b * x + y) - (x + y)) / (b - 1),
        'Sätt in värde för ' + texElementDivs.mathX + ' in i uttryck för ' + texElementDivs.mathY,
        replaseAllminusplus(texElementDivs.mathY + '= ' + toFixed3string(x + y) + ' - ' + x),
    );

    IDs['x'] = x;
    IDs['y'] = y;
    points = 15;
    return (IDs);

}



//medel1 : en konstant
function genEqMed1()//ax+y=b   x+cy=d
{
    var x = getRandomInt(1, 10);
    var y = getRandomInt(1, 10);
    //var x = getRandom(10,1);  // returns a random integer from 1 to 10
    var a = getRandomInt(2, 10);

    var c = getRandomInt(2, 15);

    var IDs = new Object();

    IDs['eq1'] = '<div>' + a + texElementDivs.mathX + ' +' + texElementDivs.mathY + '= ' + toFixed3string(a * x + y) + '</div> '
        + '<div> ' + texElementDivs.mathX + ' + ' + c + texElementDivs.mathY + " = " + toFixed3string(x + c * y) + '</div>';

    tipsArray = [];
    tipsArray.push('Grafisk lösning visar punkten som är gemensam för bägge ekvationerna ',
        'Uttryck 𝑥 genom 𝒚  från den andra ekvationen',
        replaseAllminusplus(texElementDivs.mathX + '= ' + (x + c * y) + ' + ' + (-c) + texElementDivs.mathY),
        'och sätt in i den första',
        replaseAllminusplus(a + '(' + (x + c * y) + ' - ' + c + texElementDivs.mathY + ') +' +
            texElementDivs.mathY + '= ' + (a * x + y)),
        'Öppna parenteser och förenkla',

        replaseAllminusplus('' + (a * (x + c * y)) + ' + ' +
            (-c * a) + texElementDivs.mathY + ' + ' + texElementDivs.mathY + " = " + toFixed3string(a * x + y)),
        'Flytta ' + (a * (x + c * y)) + ' åt höger',
        replaseAllminusplus((-c * a + 1) + texElementDivs.mathY + " = " +
            (a * x + y) + ' - ' + (a * (x + c * y))),
        'Dividera med ' + (-c * a + 1),

        '' + texElementDivs.mathY + " = " + getFractionDiv((a * x + y) - (a * (x + c * y)), -c * a + 1),
        'Sätt in värde för ' + texElementDivs.mathY + ' in i uttryck för ' + texElementDivs.mathX,
        replaseAllminusplus(texElementDivs.mathX + '= ' + toFixed3string(x + c * y) + ' - ' + c + getFractionDiv((a * x + y) - (a * (x + c * y)), -c * a + 1)),
    );

    IDs['x'] = x;
    IDs['y'] = y;
    points = 18;
    return (IDs);

}
//två konstanter
function genEqMed2()  //ax+by=z   cx+dy=t
{
    var a = getRandomInt(2, 25);
    var b = getRandomInt(10, 20);
    var c = -a;
    var d = getRandomInt(3, 8);
    var x = getRandomInt(3, 18);
    var y = getRandomInt(1, 10);

    var IDs = new Object();
    IDs['eq1'] = '<div>' + a + texElementDivs.mathX + " + " + b +
        texElementDivs.mathY + " = " + toFixed3string(a * x + b * y) + '</div> '
        + '<div>  ' + c + texElementDivs.mathX + " + " + d + texElementDivs.mathY +
        " = " + toFixed3string(c * x + d * y) + '</div>';
    tipsArray = [];
    tipsArray.push('Grafisk lösning visar punkten som är gemensam för bägge ekvationerna ',
        'Använd addition metoden',
        '' + (b + d) + texElementDivs.mathY + " = " + toFixed3string(c * x + d * y + (a * x + b * y))
    );

    IDs['x'] = x;
    IDs['y'] = y;
    points = 22;
    return (IDs);

}
//equations with x on both sides
function genEqHard1()  //ax+by=z+ex  cx+dy=t
{
    while (true) {
        var e = getRandom(10, 2);
        var a = getRandom(25, 5);
        var b = getRandom(80, 10);
        var c = getRandom(10, 3);
        var d = getRandom(100, 3);
        var x = getRandomInt(1, 10);
        var y = getRandomInt(1, 10);
        var first = (a - e) * x + b * y;
        var second = c * x + d * y;
        if (Math.ceil(first) == first && Math.ceil(second) == second) break;
    }
    var IDs = new Object();
    IDs['eq1'] = '<div>' + a + texElementDivs.mathX + " + " + b + texElementDivs.mathY + " = " +
        toFixed3string(first) + " + " + e + texElementDivs.mathX + '</div> '
        + '<div>  ' + c + texElementDivs.mathX + " + " + d + texElementDivs.mathY + " = " +
        toFixed3string(second) + '</div>';


    tipsArray = [];
    tipsArray.push('Grafisk lösning visar punkten som är gemensam för bägge ekvationerna ',
        'Förenkla den första ekvationen ',
        'Välj en lämplig metod');

    IDs['x'] = x;
    IDs['y'] = y;
    points = 25;
    return (IDs);

}
//equations with x on both sides and divition
function genEqHard2() {                               //(ax+b)/c=z+ey  dy=t+fx
    while (true) {
        var f = getRandom(15, 1);
        var e = getRandom(10, 2);

        var b = getRandom(30, 2);
        var c = getRandom(30, 3);
        var d = getRandom(40, 3);
        var x = getRandom(20, 1);
        var y = getRandom(20, 1);

        //https://www.tutorialspoint.com/tex_commands/dfrac.htm
        var IDs = new Object();

        var a = ((c * d + c * y - b) / x);
        var z = ((e * y + f) / x);
        if (Math.ceil(a) == a && Math.ceil(z) == z) break;
    }
    IDs['eq1'] = '<div class="mb-2">' +
        getFractionDiv(a + texElementDivs.mathX + ' + ' + b, ' ' + c + ' ') +
        ' = ' + d + ' + ' + texElementDivs.mathY + '</div>'
        + e + texElementDivs.mathY + " + " + f + ' = ' + z +
        texElementDivs.mathX;

    tipsArray = [];
    tipsArray.push('Grafisk lösning visar punkten som är gemensam för bägge ekvationerna ',
        'Förenkla den första ekvationen ',
        'Välj en lämplig metod');

    IDs['x'] = x;
    IDs['y'] = y;
    points = 28;
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

    cache.ansX = parseFloat(ek['x']);
    cache.ansY = parseFloat(ek['y']);
    console.dir(ek);
    answer = texElementDivs.mathX + " = " + toFixed3string(ek['x']) + ", " + texElementDivs.mathY + " = " + toFixed3string(ek['y']);

    var eq = (ek['eq1'])

    elements.output_eqvSystem.innerHTML = replaseAllminusplus(eq);

    elements.textareaAnswerMath.innerHTML = "<p>Rätt svar : </p><p>" + texElementDivs.mathX + " = " + toFixed3string(ek['x']) + ",</p><p> " + texElementDivs.mathY + " = " + toFixed3string(ek['y']) + '</p>';
    elements.textareaAnswerMath.classList.add("mathfont");
    elements.inputX.value = "";
    elements.answerBlock.style.display = "flex";
    elements.inputX.focus(); elements.inputY.value = "";

    console.dir(tipsArray);
    createTipsEq(tipsArray);

}

//This runs on line 200 within validate function                                                                                                                RUN - RUN - RUN
function run() {
    tipsArray = [];
    iniElements(); var ek = [];

    // console.dir(elements.menu);
    elements.helpname.innerHTML = "Att lösa ekvationer ";
    var helpdiv = elements.textareaHelpMath;
    helpdiv.innerHTML = texElementDivs.ekvsys;
    helpdiv.classList.add("mathfont");
    elements.output_eqvSystem.style.display = "flex";

    elements.labelAns2.innerHTML = texElementDivs.mathY + "=";
    elements.labelAns1.innerHTML = ("&#119961;=");
    elements.eqv_tipsrows.innerHTML = '';




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

