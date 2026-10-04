//blandade räknesätt
let tipsArray = [];
const operations = [[" + ", " summan av ", " ökas med "],
[" - ", " differensen mellan ", " minskas med "],
[" * ", " produkten av ", " multipliceras med "],
[" / ", " kvoten av ", " divideras med "]];
document.getElementById('eqvTyp').innerHTML = 1
/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */

//skapa array med random operation och tal
function randomOperation() {
    nI = -1;
    while (nI < 0 || nI > 4) { nI = getRandom(5, 0); }

    console.dir(nI);
    return operations[nI - 1];
}
//easier equation 2 st 
function genEqEasy1() {
    var a = Math.abs(getRandom(5, 1));
    var b = a;
    while (b == a) { var b = Math.abs(getRandom(5, 2)); }

    //andra bråket     
    var c = Math.abs(getRandom(8, 3));
    var d = c;
    while (d == c) { var d = Math.abs(getRandom(8, 3)); }

    //console.dir(sum);
    var IDs = uppgift(a, b, c, d);
    points = 10;
    return (IDs);
}

//medel1 : en konstant
function genEqMed1()//ax+y=b   x+cy=d
{
    var a = getRandom(7, 1);
    var b = a;
    while (b == a) { var b = Math.abs(getRandom(8, 2)); }

    var c = Math.abs(getRandom(8, 4));

    while (a == c) { var c = Math.abs(getRandom(8, 4)); }

    var d = b;
    while (b == d) { var d = Math.abs(getRandom(9, 2)); }
    //console.dir(sum);
    var IDs = uppgift(a, b, c, d);
    points = 12;
    return (IDs);

}
//+ och *
function genEqMed2() {
    var a = getRandom(15, 1);
    var b = a;
    while (b == a) { var b = Math.abs(getRandom(8, 2)); }

    var c = getRandom(8, 4);

    while (a == c) { var c = Math.abs(getRandom(15, 4)); }

    var d = b;
    while (b == d) { var d = getRandom(9, 2); }
    //console.dir(sum);
    var IDs = uppgift(a, b, c, d);
    points = 14;
    return (IDs);

}
//* två mbråk
function genEqHard1() {
    var a = getRandom(7, 1);
    var b = a;
    while (b == a) { var b = Math.abs(getRandom(8, 2)); }

    var c = Math.abs(getRandom(8, 4));

    while (a == c) { var c = Math.abs(getRandom(8, 4)); }

    var d = b;
    while (b == d) { var d = Math.abs(getRandom(9, 2)); }
    //console.dir(sum);
    var IDs = uppgift(a, b, c, d);
    points = 16;
    return (IDs);

}
//+ och *
function genEqMed2() {
    var a = getRandom(15, 1);
    var b = a;
    while (b == a) { var b = Math.abs(getRandom(25, 6)); }

    var c = getRandom(15, 4);

    while (a == c) { var c = getRandom(15, 4); }

    var d = b;
    while (b == d) { var d = getRandom(9, 2); }
    //console.dir(sum);
    var IDs = uppgift(a, b, c, d);
    points = 18;
    return (IDs);
}
//mult  and divition
function genEqHard2() {                               //(ax+b)/c=z+ey  dy=t+fx
    var a = getRandom(15, 1);
    var b = a;
    while (b == a) { var b = getRandom(25, 6); }

    var c = getRandom(15, 4);

    while (a == c) { var c = getRandom(15, 4); }

    var d = b;
    while (b == d) { var d = getRandom(9, 2); }
    //console.dir(sum);
    var IDs = uppgift(a, b, c, d);
    points = 20;
    return (IDs)
}




//This runs on line 200 within validate function                                                                                                                RUN - RUN - RUN
/*function run() {
    iniElements(); var ek = [];
    //hideAnswerY();
    document.getElementById("helpname").innerHTML = "Fyra räknesätt";
    document.getElementById("textareaHelp").innerHTML = '';
    var helpdiv = document.getElementById("textareaHelpMath");
    helpdiv.innerHTML = texElementDivs.bl;
    helpdiv.classList.add("mathfont");
    document.getElementById("showgeogebra").style.display = "none";
    document.getElementById("eqv").innerHTML = '';
    elements.labelAns1.html(" ");

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
    console.dir(elements);
    //reactTaskWithoutMath(ek)
    showThreeRowsEqv(ek);
    console.log(points);
    pointsFactor = 1;
    document.getElementById('pointsIn').innerHTML = "" + roundDecimalsZeros(points.toFixed(2));
}

*/
//This runs on line 200 within validate function                                                                                                                RUN - RUN - RUN
function run() {
    iniElements(); var ek = [];

    elements.helpname.innerHTML = "Fyra räknesätt"
    elements.textareaHelp.innerHTML = '';
    elements.textareaHelpMath.innerHTML = texElementDivs.bl;

    showElement(elements.form1);
    elements.inputX.type = "number"
    hideElement(elements.saveBtn);
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

    let eqv = document.getElementById("eqv")
    eqv.style.fontSize = "1.5em";
    showThreeRowsEqv(ek);
    //console.dir(eqv.innerHTML);
    elements.points.innerHTML = "" + roundDecimalsZeros(points.toFixed(2));

    elements.textareaHelpMath.innerHTML = texElementDivs.fr;
    elements.textareaHelpMath.classList.add("mathfont");
    elements.textareaAnswerMath.innerHTML = "<p>Rätt svar : </p><div class='d-flex flex-row justify-content-around'>" + ek['ans'] + '</div></p>';
    elements.textareaAnswerMath.classList.add("mathfont");
    document.getElementById("task").innerHTML = ""
    createAnswerCache(ek);
    answer = parseInt(cache.ansX);
    elements.inputX.classList.remove("success");

    elements.inputX.classList.remove("error");
    createTipsEq(tipsArray);
    elements.img_out.innerHTML = "";
    elements.inputX.type = "text"
    elements.inputX.value = "";
    elements.inputX.focus();
    hideElement(elements.saveBtn);
    hideAnswer()
}


function validateX() {
    let svars = elements.inputX.value.split("/");

    let svarX = parseInt(svars[0])
    let svarY = parseInt(svars[1]) ? parseInt(svars[1]) : 1;
    console.log("cache.ansX " + parseInt(cache.ansX) + "    svarx " + svarX);
    if (svarX == parseInt(cache.ansX) &&
        (svarY == parseInt(cache.ansY) ||
            (cache.ansY == 1 && (svarY == '' || svarY == 1)))) successX();
    else
        errorX();
    console.log("cache.ansY " + parseInt(cache.ansY) + "    svary " + svarY);

}
function uppgift(number1, number2, number3, number4) {

    op1 = randomOperation();
    op2 = randomOperation();
    op3 = randomOperation();
    console.dir(op3);
    // store result of both
    result1 = getOperation(op1, number1, number2);
    result2 = getOperation(op2, number3, number4);
    resultUppgift = getOperationUppgift(op3, result1, result2);
    //result = resultUppgift[3].toFixed(3);
    console.log("-------------------");
    // now ask user

    var IDs = new Object();

    IDs['eq-row1'] = "Räkna ut " + op3[1];//resultUppgift[1];
    IDs['eq-row2'] = "(" + result1[1] + ")";
    IDs['eq-row3'] = "och (" + result2[1] + ")";
    IDs['ans'] = parseFloat(resultUppgift[3]);
    tipsArray = [];
    tipsArray.push('1.Räkna ut parenteserna för sig ',
        result1[0], result1[3].toFixed(3).replaceAll(".000", " "), result2[0],
        result2[3].toFixed(3).replaceAll(".000", " "),
        '2. Räkna ut' + op3[1] + ' resultat från parenteserna');
    IDs['tips1'] = '1.Räkna ut parenteserna för sig ';
    IDs['tips1-row2'] = result1[0];
    IDs['tips2-row2'] = result1[3].toFixed(3).replaceAll(".000", " ");
    IDs['tips2'] = '2. Räkna ut' + op3[1] + ' resultat från parenteserna';
    IDs['tips1-row3'] = result2[0];
    IDs['tips2-row3'] = result2[3].toFixed(3).replaceAll(".000", " ");
    IDs['x'] = parseFloat(resultUppgift[3]);
    IDs['y'] = 0;
    console.dir(IDs);
    return (IDs);
}
function getOperation(op, num1, num2) {
    res = 0;
    switch (op[0]) {
        case " + ": res = num1 + num2; break;
        case " - ": res = num1 - num2; break;
        case " / ": res = num1 / num2; break;
        case " * ": res = num1 * num2; break;
    }


    return ["" + num1 + op[0] + num2, "" + op[1] + num1 + " och " + num2, "" + num1 + op[0] + num2, res];
}
function getOperationUppgift(op, num1, num2) {
    res = 0;
    console.dir(op);
    console.dir(num1);
    console.dir(num2);
    switch (op[0]) {
        case " + ": res = num1[3] + num2[3]; break;
        case " - ": res = num1[3] - num2[3]; break;
        case " / ": res = num1[3] / num2[3]; break;
        case " * ": res = num1[3] * num2[3]; break;
    }


    return ["" + num1[0] + op1[0] + num2[0], "" + op[1] + "(" + num1[1] + ")" + " och " + "(" + num2[1] + ")",
    "" + num1[2] + op1[0] + num2[2], res];
}


function showTips1Row2() {
    document.getElementById('eq-row2').style.display = "none";
    document.getElementById('tips1-row2').style.display = "block";
    //changePoints(0.1);
}
function showTips2Row2() {
    document.getElementById('tips1-row2').style.display = "none";
    document.getElementById('tips2-row2').style.display = "block";
    //changePoints(0.3);
}
function showTips1Row3() {
    document.getElementById('eq-row3').style.display = "none";
    document.getElementById('tips1-row3').style.display = "block";
    //changePoints(0.1);
}
function showTips2Row3() {
    document.getElementById('tips1-row3').style.display = "none";
    document.getElementById('tips2-row3').style.display = "block";
    //changePoints(0.3);
}
function showThreeRowsEqv(ek) {
    cache.ansX = parseFloat(ek['x']);
    cache.ansY = parseFloat(ek['y']);
    console.dir(ek);
    var eqv = document.getElementById("output-eqvX");
    eqv.innerHTML = "";
    document.getElementById('textareaAnswerMath').innerHTML = "Rätt svar :  " + roundDecimalsZeros(ek['ans'].toFixed(3));
    if (ek['eq-row1'] != null) {

        const para = document.createElement("p");

        var eq = (ek['eq-row1']).replaceAll("+ -", "-").replaceAll("- +", "-").replaceAll("- -", "+");

        para.innerHTML = eq;
        eqv.appendChild(para);
        if (ek['eq-row2'] != null) {
            const para2 = document.createElement("p");
            para2.classList.add("clickable");
            para2.title = "Klick för hjälp";
            para2.addEventListener("click", showTips1Row2);
            para2.id = "eq-row2";

            var eq = (ek['eq-row2']).replaceAll("+ -", "-").replaceAll("- +", "-").replaceAll("- -", "+");
            para2.innerHTML = eq;

            eqv.appendChild(para2);
        }
        if (ek['tips1-row2'] != null) {
            const para21 = document.createElement("p");
            para21.title = "Klick för mer hjälp";
            para21.classList.add("clickable");
            para21.addEventListener("click", showTips2Row2);
            para21.id = "tips1-row2";
            para21.style.display = "none";
            para21.style.backgroundColor = "yellow";
            var eq = (ek['tips1-row2']).replaceAll("+ -", "-").replaceAll("- +", "-").replaceAll("- -", "+");
            para21.innerHTML = '( ' + eq + ' )';
            para21.style.padding = "10px";
            para21.style.borderRadius = "20px";
            eqv.appendChild(para21);

        }
        if (ek['tips2-row2'] != null) {
            const para22 = document.createElement("p");
            para22.title = "Klick för svaret";
            para22.classList.add("clickable");
            para22.addEventListener("click", showAnswer);
            para22.id = "tips2-row2";
            para22.style.backgroundColor = "orange";
            para22.style.display = "none";
            var eq = (ek['tips2-row2']).replaceAll("+ -", "-").replaceAll("- +", "-").replaceAll("- -", "+");
            para22.innerHTML = '( ' + eq + ' )';
            para22.style.padding = "10px";
            para22.style.borderRadius = "20px";
            eqv.appendChild(para22);

        }

        if (ek['eq-row3'] != null) {
            const para2 = document.createElement("p");
            para2.title = "Klick för hjälp";
            para2.classList.add("clickable");
            para2.addEventListener("click", showTips1Row3);
            para2.id = "eq-row3";

            var eq = (ek['eq-row3']).replaceAll("+ -", "-").replaceAll("- +", "-").replaceAll("- -", "+");
            para2.innerHTML = eq;
            eqv.appendChild(para2);
        }
        if (ek['tips1-row3'] != null) {
            const para21 = document.createElement("p");
            para21.title = "Klick för mer hjälp";
            para21.classList.add("clickable");
            para21.addEventListener("click", showTips2Row3);
            para21.id = "tips1-row3";
            para21.style.display = "none";
            para21.style.backgroundColor = "yellow";
            var eq = (ek['tips1-row3']).replaceAll("+ -", "-").replaceAll("- +", "-").replaceAll("- -", "+");
            para21.innerHTML = 'och ( ' + eq + ' )';
            para21.style.padding = "10px";
            para21.style.borderRadius = "20px";
            eqv.appendChild(para21);

        }
        if (ek['tips2-row3'] != null) {
            const para22 = document.createElement("p");
            para22.title = "Klick för svaret";
            para22.classList.add("clickable");
            para22.addEventListener("click", showAnswer);
            para22.id = "tips2-row3";
            para22.style.backgroundColor = "orange";
            para22.style.display = "none";
            var eq = (ek['tips2-row3']).replaceAll("+ -", "-").replaceAll("- +", "-").replaceAll("- -", "+");
            para22.innerHTML = 'och ( ' + eq + ' )';
            para22.style.padding = "10px";
            para22.style.borderRadius = "20px";
            eqv.appendChild(para22);

        }
    }
    else {
        if (ek['eq1'] != null) {
            var eq = (ek['eq1']).replaceAll("+ -", "-").replaceAll("- +", "-").replaceAll("- -", "+");
            document.getElementById('eqv').innerHTML = eq;
        }
    }
    // convertHelp();
}
