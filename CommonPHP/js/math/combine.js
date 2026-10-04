//blandade räknesätt
const operations = [["bilda ett tal som ligger så nära ", " som möjligt ", "ca"],
["bilda största möjliga talet. ", " ", "max"],
["bilda minsta möjliga talet.", " ", "min"]];
let result = 0, wrong = 0, right = 0;
let minNumber = 0, caNumber = 0; //nummer att närma sig till
let bonus = 1;

elements.output_eqvX.style.display = "block";
tipsArray = [];


//skapa array med random operation och tal
function randomOperation() {
    nI = -1;
    while (nI < 0 || nI > 2) { nI = getRandomInt(0, 2); }

    console.dir(nI);
    console.dir(operations);
    return operations[nI];
}
// difficulty function
// will be used to indicate highest value for random function
function difficulty() {
    //console.dir(mathQuiz.diff);


    if (variables.checked == 6) { variables.checked = Math.abs(getRandom(5, 1)) }
    //console.log(checked);//random  level
    switch ("" + variables.checked) {
        case "1"://  elements.menu.id("easy").checked)
            value = 4;
            points = 3;
            minNumber = 1;
            bonus = 1; caNumber = 1000;
            break;
        case "2": value = 5;
            minNumber = 3;
            points = 4;
            bonus = 2; caNumber = 5000; break;

        case "3": value = 6;
            minNumber = 8;
            points = 5;
            bonus = 3; caNumber = 50000; break;
        case "4": value = 7;
            minNumber = 3;
            points = 6;
            bonus = 3; caNumber = 700000; break;
        case "5": value = 5;
            points = 7;
            minNumber = 1; bonus = 1; caNumber = 40000; break;

    }

    return value;
}





// reset values for each operation
function resetValues() {
    answer = 0;
    result = 0;
}


function calculate(level = 1, minigame = 0) {
    run()

    elements.img_out.innerHTML = "";
    hideElement(elements.saveBtn);
    hideAnswer()
}
function run() {
    iniElements();
    //let eqv = document.getElementById("output-eqvX");
    //  elements.labelAns1.innerHTML = (" ");
    document.getElementById("helpname").style.display = "none";
    document.getElementById("textareaHelp").style.display = "none";
    document.getElementById("showgeogebra").style.display = "none";
    document.getElementById("eqv-tipsrows").innerHTML = '';
    elements.inputX.classList.remove("success");
    elements.inputX.value = '';
    elements.inputX.classList.remove("error");
    elements.inputX.focus();
    elements.output_eqvX.innerHTML = '';
    elements.task.innerHTML = '';
    //document.getElementById("output-eqvX" ).style.display = "none";
    // reset answer and result variable
    resetValues();
    var output = numericString(difficulty()).split(''); //array meed siffror


    alla = permutator(output);//console.log(alla);  // alla möjliga kombinationer
    allaTal = [talFromSiffror(alla[0])]; k = 1;//console.dir(allaTal);
    while (k < alla.length) {
        allaTal.push(talFromSiffror(alla[k])); k += 1;//console.dir(allaTal); // tal from kombinationer
    }
    caTalUppgift = roundnum(middle(allaTal), caNumber);
    console.dir(caTalUppgift);

    res = 0; siff = "";


    op1 = randomOperation();
    console.dir(op1);
    // store result of both
    str1 = arrayToString(output);
    str2 = stringUppgift(op1);
    console.log(result);
    // now ask user
    //answer = window.prompt(+);
    var ek = new Object();
    ek['eq-row1'] = "Här är siffror: ";
    ek['eq-row2'] = "" + str1;
    ek['eq-row3'] = "" + str2;

    ek['ans'] = answer = result;
    ek['x'] = result;
    ek['y'] = 0;
    tipsArray = ["Flytta om siffror ", "Siffror ska " + str2];
    cache.ansX = parseFloat(ek['x']);

    console.dir(ek);

    document.getElementById("showhelp").style.display = "none";

    if (ek['eq-row1'] != null) {

        const para = document.createElement("p");

        var eq = (ek['eq-row1']).replaceAll("+ -", "-").replaceAll("- +", "-").replaceAll("- -", "+");

        para.innerHTML = eq;
        elements.output_eqvX.appendChild(para);


        if (ek['eq-row2'] != null) {
            const para2 = document.createElement("p");

            para2.id = "eq-row2";
            para2.innerHTML = ek['eq-row2'];

            elements.output_eqvX.appendChild(para2);
        }



        if (ek['eq-row3'] != null) {
            const para2 = document.createElement("p");

            para2.id = "eq-row3";
            para2.innerHTML = ek['eq-row3'];
            elements.output_eqvX.appendChild(para2);
        }


    }
    else {
        if (ek['eq1'] != null) {
            var eq = (ek['eq1']).replaceAll("+ -", "-").replaceAll("- +", "-").replaceAll("- -", "+");
            elements.output_eqvX.innerHTML = eq;
        }
    }
    createTipsEq(tipsArray)
    elements.output_eqvX.style.height = "auto";

    pointsFactor = 1;
    elements.textareaAnswerMath.innerHTML = "Rätt svar :  " + ek['ans'];
}
function stringUppgift(op) {

    switch (op[2]) {
        case "ca": result = nearest(allaTal, caNumber); console.log(result);
            return op[0] + caNumber + op[1];
        case "min":
            result = allaTal.reduce(function (p, v) {
                return (p < v ? p : v);
            });
            console.log(result);
            return op[0];
        case "max": result = allaTal.reduce(function (p, v) {
            return (p > v ? p : v);
        }); console.log(result);
            return op[0];

    }
}

function validateX() {
    let svars = elements.inputX.value.split("/");

    let svarX = parseInt(svars[0])
    answerChecker(svarX, result)
}
function answerChecker(answer, result) {

    // if correct answer
    if (parseFloat(answer) == result) {
        successX();
    }

    // if wrong answer
    else
        errorX();

}


