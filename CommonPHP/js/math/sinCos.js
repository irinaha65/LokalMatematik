let circleX = 200;
let circleY = 150;
let circleRadius = 75;

let graphX = 50;
let graphY = 300;
let graphAmplitude = 50;
let graphPeriod = 360;

document.getElementById('eqvTyp').innerHTML = "canvas2"

var points = 0;
var tipsArray = [];
var deltaY = 1;
//var answer; deklareras i huvudfilen
//easier equation 2 st 
function getRandomGame() {
    variables.checked = 1//getRandomInt(1, 5)
    console.log(variables.checked);
    return variables.checked;
}
/* V
 */
let myP5;

const angles = [30, 45, 60, 105, 135, 150, 210, 225, 240, 300, 315, 330]
function genEqEasy1() {
    let i = getRandomInt(0, angles.length - 1)
    let a = angles[i]
    console.log(i)
    console.log("angle", a)
    let b = 180 - a;
    if (b < 0) b = 360 + b;
    const nivå1 = [
        //rätvinkliga trianglar
        {
            x: a,
            y: b,
            question: function () {

                return `Vilka vinklar mellan 0${texElementDivs.grads} och 360${texElementDivs.grads} har sin ${Math.sin(this.x * Math.PI / 180).toFixed(2)}
                `;
            },



            tipsArray: ["sinv = sin(180 " + texElementDivs.grads + " − v)",],

        },

    ];
    console.dir(nivå1)

    let task = nivå1[getRandomInt(0, nivå1.length - 1)];




    tipsArray = task.tipsArray;
    points = 3;


    return (task);


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

function calculate(level = 1, minigame = 0) {
    // This function is called to initialize the sketch
    // It sets up the canvas and other initial settings
    if (!myP5) {
        myP5 = new p5(sketch, document.getElementById('canvas-container'));
    }

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
    console.dir(ek.question());
    answer = texElementDivs.mathX + " = " + toFixed3string(ek['x']) + ", " + texElementDivs.mathY + " = " + toFixed3string(ek['y']);

    var eq = '<p>' + ek.question() + ' </p>';
    let eqv = elements.eqv
    eqv.style.fontSize = "0.6em";

    eqv.innerHTML = eq;
    //console.dir(eqv.innerHTML);
    elements.points.innerHTML = "" + roundDecimalsZeros(points.toFixed(2));

    elements.textareaHelpMath.innerHTML = texElementDivs.fr;
    elements.textareaHelpMath.classList.add("mathfont");
    elements.textareaAnswerMath.innerHTML = "<p>Rätt svar : </p><div class='d-flex flex-row justify-content-around'>" + ek['ans'] + '</div></p>';
    elements.textareaAnswerMath.classList.add("mathfont");
    elements.task.innerHTML = "Avrunda svaret till två decimaler om det behövs";
    answer = "V1 = " + toFixed3string(ek['x']) + ", V2 = " + toFixed3string(ek['y']);

    cache.ansX = parseFloat(ek['x']);
    cache.ansY = parseFloat(ek['y']);
    console.dir(tipsArray);
    createTipsEq(tipsArray);
    elements.img_out.innerHTML = "";
    elements.inputX.type = "number"
    elements.inputX.value = "";
    elements.inputY.type = "number"
    elements.inputY.value = "";
    elements.inputX.focus();
    elements.labelAns2.innerHTML = "v1";
    elements.labelAns1.innerHTML = ("v2");
    hideElement(elements.saveBtn);
    hideAnswer()


    elements.textareaAnswerMath.innerHTML = "<p>Rätt svar : </p><p>" + texElementDivs.mathX + " = " + toFixed3string(ek['x']) + ",</p><p> " + texElementDivs.mathY + " = " + toFixed3string(ek['y']) + '</p>';
    elements.textareaAnswerMath.classList.add("mathfont");
    elements.inputX.value = "";
    elements.answerBlock.style.display = "flex";
    elements.inputX.focus(); elements.inputY.value = "";

    console.dir(tipsArray);
    createTipsEq(tipsArray);

}
const sketch = (p) => {
    p.setup = () => {
        p.frameRate(25);
        p.angleMode(p.DEGREES);
        p.createCanvas(500, 400);
        p.background(200);
    };

    p.draw = () => {

        p.background(0);

        // Set angle based on frameCount, and display current value

        let angle = p.frameCount % 360; // Loop angle from 0 to 360

        p.fill(255);
        p.textSize(20);
        p.textAlign(p.LEFT, p.CENTER);
        p.text(`angle: ${angle}`, 25, 25);

        // Draw circle and diameters

        p.noFill();
        p.stroke(128);
        p.strokeWeight(3);
        p.circle(circleX, circleY, 2 * circleRadius);
        p.line(circleX, circleY - circleRadius, circleX, circleY + circleRadius);
        p.line(circleX - circleRadius, circleY, circleX + circleRadius, circleY);

        // Draw moving points

        let pointX = circleX + circleRadius * p.cos(angle);
        let pointY = circleY - circleRadius * p.sin(angle);

        p.line(circleX, circleY, pointX, pointY);

        p.noStroke();

        p.fill('white');
        p.circle(pointX, pointY, 10);

        p.fill('orange');
        p.circle(pointX, circleY, 10);

        p.fill('red');
        p.circle(circleX, pointY, 10);

        // Draw graph

        p.stroke('grey');
        p.strokeWeight(3);
        p.line(graphX, graphY, graphX + 360, graphY);
        p.line(graphX, graphY - graphAmplitude, graphX, graphY + graphAmplitude);
        p.line(
            graphX + graphPeriod,
            graphY - graphAmplitude,
            graphX + graphPeriod,
            graphY + graphAmplitude
        );

        p.fill('grey');
        p.strokeWeight(1);
        p.textAlign(p.CENTER, p.CENTER);
        p.text('0', graphX, graphY + graphAmplitude + 20);
        p.text('360', graphX + graphPeriod, graphY + graphAmplitude + 20);
        p.text('1', graphX / 2, graphY - graphAmplitude);
        p.text('0', graphX / 2, graphY);
        p.text('-1', graphX / 2, graphY + graphAmplitude);

        p.fill('orange');
        p.text('cos', graphX + graphPeriod + graphX / 2, graphY - graphAmplitude);

        p.fill('red');
        p.text('sin', graphX + graphPeriod + graphX / 2, graphY);

        // Draw cosine curve

        p.noFill();
        p.stroke('orange');
        p.beginShape();
        for (let t = 0; t <= 360; t++) {
            let x = p.map(t, 0, 360, graphX, graphX + graphPeriod);
            let y = graphY - graphAmplitude * p.cos(t);

            p.vertex(x, y);
        }
        p.endShape();

        // Draw sine curve

        p.noFill();
        p.stroke('red');
        p.beginShape();
        for (let t = 0; t <= 360; t++) {
            let x = p.map(t, 0, 360, graphX, graphX + graphPeriod);
            let y = graphY - graphAmplitude * p.sin(t);
            p.vertex(x, y);
        }
        p.endShape();

        // Draw moving line

        let lineX = p.map(angle, 0, 360, graphX, graphX + graphPeriod);
        p.stroke('grey');
        p.line(lineX, graphY - graphAmplitude, lineX, graphY + graphAmplitude);

        // Draw moving points on graph

        let orangeY = graphY - graphAmplitude * p.cos(angle);
        let redY = graphY - graphAmplitude * p.sin(angle);

        p.noStroke();

        p.fill('orange');
        p.circle(lineX, orangeY, 10);

        p.fill('red');
        p.circle(lineX, redY, 10);
    }
    run()
    if (variables.checked) { minigame = variables.checked }
    if (minigame == 6) { minigame = getRandomInt(1, 5) }

    console.log(minigame)//random  level
    ek = new Object();
    cancelAnimationFrame(idAnimation);
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

}
//This runs on line 200 within validate function                                                                                                                RUN - RUN - RUN
function run() {
    iniElements(); var ek = [];

    elements.helpname.innerHTML = "Trigonometri"
    elements.textareaHelp.innerHTML = '';
    elements.textareaHelpMath.innerHTML = texElementDivs.trig;
    elements.textareaHelpMath.classList.add("mathfont");
    showElement(elements.output_fraction);
    // let eqv = document.getElementById("fraction-content");
    // eqv.style.fontSize = "2em";
    //  eqv.classList.add("mathfont");

    elements.eqv_tipsrows.innerHTML = '';
    //hideAnswer();

}