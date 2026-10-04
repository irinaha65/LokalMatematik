document.getElementById('eqvTyp').innerHTML = 'textCanvas'
var ctx, canvas

var points = 0;
var tipsArray = [];
var deltaY = 1;
//var answer; deklareras i huvudfilen
//easier equation 2 st 
function getRandomGame() {
    variables.checked = 3//getRandomInt(1, 5)
    console.log(variables.checked);
    return variables.checked;
}

function sign(k) {
    return k > 0 ? '+ ' : '- ';
}
function led(k) {
    if (k === 0 || k === 1 || k === -1) return '';


    return `${Math.abs(k)}`;
}
function polynom4(a, b, c, d, e) {
    /**x⁴ (x + 2)³
🧠 Unicode exponenter:

² = \u00B2

³ = \u00B3

⁴ = \u2074

⁵ = \u2075

 */

    const uttryck = taBortEttor(`${a}x\u2074 ${sign(b)}${led(b)}x\u00B3 ${sign(c)}${led(c)}x\u00B2 ${sign(d)}${led(d)}x ${sign(e)}${Math.abs(e)}`);
    console.log(uttryck)
    return uttryck.replace(/\s+/g, ' ').trim();
}
function polynom3Answer(b, c, d, e) {


    const uttryck = taBortEttor(`${sign(b)}${led(b)}x^3 ${sign(c)}${led(c)}x^2 ${sign(d)}${led(d)}x ${sign(e)}${Math.abs(e)}`);
    console.log(uttryck)
    return uttryck.replace(/\s+/g, ' ').trim();
}
function polynom3(b, c, d, e, x = 'x') {
    /**x⁴ (x + 2)³
🧠 Unicode exponenter:

² = \u00B2

³ = \u00B3

⁴ = \u2074

⁵ = \u2075

 */

    const uttryck = taBortEttor(`${b}${x}\u00B3 ${sign(c)}${led(c)}${x}\u00B2 ${sign(d)}${led(d)}${x} ${sign(e)}${Math.abs(e)}`);
    console.log(uttryck)
    return uttryck.replace(/\s+/g, ' ').trim();
}
function getPolynom2(a, b, c, x = 'x') {
    let uttryck = `${a}${x}² ${sign(b)}${led(b)}${x}`
    if ('' + c != '0' && '' + c != '') {
        uttryck += ` ${sign(c)}${Math.abs(c)}`;
    }

    uttryck = taBortEttor(uttryck);
    return uttryck.replace(/\+\s-/, '- ').replace(/^\+\s/, '').trim();
}
function getPolynom2Answer(a, b, c, x = 'x') {


    let uttryck = `${a}${x}^2 ${sign(b)}${led(b)}${x}`
    if ('' + c != '0' && '' + c != '') {
        uttryck += ` ${sign(c)}${Math.abs(c)}`;
    }
    uttryck = taBortEttor(uttryck);
    return uttryck.replace(/\+\s-/, '- ').replace(/^\+\s/, '').trim();
}
function getPolynom1(b, c) {


    let uttryck = `${sign(b)}${led(b)}x ${sign(c)}${Math.abs(c)}`;
    uttryck = taBortEttor(uttryck);
    return uttryck.replace(/\+\s-/, '- ').replace(/^\+\s/, '').trim();
}


function genEqEasy1() {


    const nivå1 = [
        //rätvinkliga trianglar
        {
            a: slumpTal(-5, 5),
            b: slumpTal(-10, 10),
            c: slumpTal(-10, 10),
            d: slumpTal(-10, 10),
            question: function () {

                return `Ett föremåls position ges av formeln<br/>s(t) = ${polynom3(this.a, this.b, this.c, this.d, 't')}<br/>Bestäm hastigheten vid tiden 
𝑡`;
            },
            s: function (t) {

                return this.a * t ** 3 - this.b * t ** 2 + this.c * t + this.d;
            },
            answers: function () {

                return [getPolynom2(3 * this.a, 2 * this.b, this.c, 't'), getPolynom2Answer(3 * this.a, 2 * this.b, this.c, 't')]
            },

            tipsArray: [" Använd formeln: (kx^n)' = knx^(n-1)",],
            drawTask: function () {
                elements.textareaHelpMath.innerHTML = texElementDivs.hastighet;
                elements.task.innerHTML = "Derivera ";
                function animera() {
                    ritaAxlar();
                    ritaFunktion();
                    ritaPunkt(tid);
                    tid += 0.01;
                    if (tid <= totalTid)
                        idAnimation = requestAnimationFrame(animera);
                }


                animera();


            },
            updateCanvas: function () {
                ritaAxlar();
                ritaFunktion();
                ritaPunkt(tid);
            }

        },

    ];


    let task = nivå1[getRandomInt(0, nivå1.length - 1)];

    task['eq1'] = '<p>' + task.question() + ' </p>';

    answer = task.answers()[0];
    tipsArray = task.tipsArray;
    points = 3;


    return (task);


}


//medel1 : en konstant
function genEqMed1() {



    function drawRect(x) {
        const y = 10 - x;
        //  const area = x * y;

        //  lengthVal.textContent = x.toFixed(1);
        //   areaInfo.innerHTML = `Area = ${area.toFixed(2)} m²`;//Bredd = ${y.toFixed(1)}, 

        // Rensa canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Skala rektangel för att passa canvas (multiplicera med 20)
        const scale = 20;
        const rectWidth = x * scale;
        const rectHeight = y * scale;

        ctx.fillStyle = '#4CAF50';
        ctx.fillRect(50, 50, rectWidth, rectHeight);

        // Rita ram
        ctx.strokeStyle = '#000';
        ctx.strokeRect(50, 50, rectWidth, rectHeight);
        ctx.fillStyle = 'black';
        ctx.font = "14px Arial";
        ctx.fillText("x", 50 + rectWidth / 2, 40);
    }

    const nivå2 = [
        {

            a: 2,
            b: slumpTal(10, 100),//omkrets

            question: function () {
                //  <p>Ändra längden: <input type="range" min="0" max="10" step="0.1" id="lengthSlider" value="5">
                // och hitta x som ger den maximala area
                return ` <h2> Rektangulär grässmatta har en sida med längden x m.</h2>
                <p>Omkretsen är ${this.b} m. Skapa en funktion för area A = ?</p>
              
                <span id="lengthVal"></span></p>
              
                <p id="areaInfo"></p>`;
            },

            answers: function () {

                return [getPolynom2(-1, this.b / 2, '', 'x'), getPolynom2Answer(-1, this.b / 2, '', 'x'), ' x(' + this.b / 2 + '-x)']
            },

            tipsArray: ["Uttryck den andra sidan genom x", "y = omkrets/2 - x", "Använd formeln: A = xy",],
            drawTask: function () {
                elements.textareaHelpMath.innerHTML = texElementDivs.area;

                elements.task.innerHTML = "Skriv ditt uttryck";



                /*  slider.addEventListener('input', () => {
                      const x = parseFloat(slider.value);
                      drawRect(x);
                  });*/

                drawRect(this.a); // Startvärde
            },
            updateCanvas: function () {
                console.log(deltaY)
                this.a = this.a + deltaY / 10
                drawRect(this.a);
            }

        },
        {

            a: 2,
            b: slumpTal(10, 100),//omkrets

            question: function () {
                //  <p>Ändra längden: <input type="range" min="0" max="10" step="0.1" id="lengthSlider" value="5">
                // och hitta x som ger den maximala area
                return ` <h2> Rektangulär grässmatta har en sida med längden x m.</h2>
                <p>Omkretsen är ${this.b} m. Skapa en funktion för area A och hitta x som ger den maximala arean</p>
              
                <span id="lengthVal"></span></p>
              
                <p id="areaInfo"></p>`;
            },

            answers: function () {

                return [(this.b / 4).toFixed(2)]
            },

            tipsArray: ["Uttryck den andra sidan genom x", "y = omkrets/2 - x", "Använd formeln: A = xy", "Derivera", "Hitta x då första derivata är 0"],
            drawTask: function () {
                elements.textareaHelpMath.innerHTML = texElementDivs.area;

                elements.task.innerHTML = "Avrunda svaret till två decimaler om det behövs";



                /*  slider.addEventListener('input', () => {
                      const x = parseFloat(slider.value);
                      drawRect(x);
                  });*/

                drawRect(this.a); // Startvärde
            },
            updateCanvas: function () {
                console.log(deltaY)
                this.a = this.a + deltaY / 10
                drawRect(this.a);
            }

        },

    ]

    let task = nivå2[getRandomInt(0, nivå2.length - 1)];

    task['eq1'] = '<p>' + task.question() + ' </p>';

    answer = task.answers()[0];

    tipsArray = task.tipsArray;

    points = 6;


    return (task);



}

function genEqMed2() {
    const width = canvas.width;
    const height = canvas.height;
    const origin = { x: width / 2, y: height / 2 }; // koordinatsystemets nollpunkt
    const scale = 20; // px per enhet
    // Funktion och derivata
    function f(x) {
        return x * x;
    }

    function f_prime(x) {
        return 2 * x;
    }

    function drawAxes() {
        ctx.strokeStyle = "#888";
        ctx.beginPath();
        ctx.moveTo(0, origin.y);
        ctx.lineTo(width, origin.y); // x-axel
        ctx.moveTo(origin.x, 0);
        ctx.lineTo(origin.x, height); // y-axel
        ctx.stroke();
    }

    function drawFunction() {
        ctx.strokeStyle = "blue";
        ctx.beginPath();
        for (let px = 0; px <= width; px++) {
            const x = (px - origin.x) / scale;
            const y = f(x);
            const py = origin.y - y * scale;
            if (px === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.stroke();
    }

    function drawTangent(x0) {
        const y0 = f(x0);
        const m = f_prime(x0);

        // Tangentlinjens ekvation: y = m(x - x0) + y0
        const x1 = x0 - 5;
        const x2 = x0 + 5;
        const y1 = m * (x1 - x0) + y0;
        const y2 = m * (x2 - x0) + y0;

        const px1 = origin.x + x1 * scale;
        const py1 = origin.y - y1 * scale;
        const px2 = origin.x + x2 * scale;
        const py2 = origin.y - y2 * scale;

        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(px1, py1);
        ctx.lineTo(px2, py2);
        ctx.stroke();

        // punkt på kurvan
        const px = origin.x + x0 * scale;
        const py = origin.y - y0 * scale;
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, 2 * Math.PI);
        ctx.fill();
    }

    function draw(xMouse) {
        ctx.clearRect(0, 0, width, height);
        drawAxes();
        drawFunction();

        const x0 = (xMouse - origin.x) / scale;
        drawTangent(x0);
    }


    const nivå3 = [
        {
            a: 2,
            b: slumpTal(10, 100),//omkrets

            question: function () {
                //  <p>Ändra längden: <input type="range" min="0" max="10" step="0.1" id="lengthSlider" value="5">
                // och hitta x som ger den maximala area
                return ` 
          
            <p id="areaInfo"></p>`;
            },

            answers: function () {

                return ['2']
            },

            tipsArray: [],
            drawTask: function () {



                canvas.addEventListener("mousemove", e => {
                    draw(e.offsetX);
                });

                // första visning
                draw(origin.x);
            }

        },

    ]

    let task = nivå3[getRandomInt(0, nivå3.length - 1)];

    task['eq1'] = '<p>' + task.question() + ' </p>';

    answer = task.x = task.answers()[0];
    tipsArray = task.tipsArray;

    points = 9;


    return (task);



}

function genEqHard1() {
    const nivå4 = [


    ];

    let task = nivå4[getRandomInt(0, nivå4.length - 1)];
    task.r = getRandomPositiveExklArray(20, 50, [0]);
    task.h = getRandomPositiveExklArray(90, 200, [0]);

    radius = task.r;
    height = task.h;
    //console.dir(sum);
    var IDs = new Object();
    console.dir(task);
    IDs['eq1'] = '<p>' + task.question() + ' </p>';
    answer = IDs['x'] = IDs['ans'] = task.answer().toFixed(2);
    tipsArray = task.tipsArray;

    points = 12;
    return (IDs);
}

function genEqHard2() {                               // Vilket värde har x om 1/2+1/3+x=1

    const nivå5 = [

    ];

    let task = nivå5[getRandomInt(0, nivå5.length - 1)];
    task.r = getRandomPositiveExklArray(20, 50, [0]);
    task.h = getRandomPositiveExklArray(80, 200, [0]);

    radius = task.r;
    height = task.h;
    //console.dir(sum);
    var IDs = new Object();
    console.dir(task);
    IDs['eq1'] = '<p>' + task.question() + ' </p>';
    answer = IDs['x'] = IDs['ans'] = task.answer().toFixed(2);
    tipsArray = task.tipsArray;
    points = 15;
    return (IDs);
}


//This runs on line 200 within validate function                                                                                                                RUN - RUN - RUN
function run() {
    elements.inputX.type = "text"
    iniElements(); var ek = [];
    elements.helpname.innerHTML = ""
    elements.textareaHelp.innerHTML = '';
    elements.textareaHelpMath.innerHTML = texElementDivs.fr;
    elements.textareaHelpMath.classList.add("mathfont");
    showElement(elements.output_fraction);
    // let eqv = document.getElementById("fraction-content");
    // eqv.style.fontSize = "2em";
    //  eqv.classList.add("mathfont");

    elements.eqv_tipsrows.innerHTML = '';
    document.getElementById('canvas-container').innerHTML =
        ' <p id="status"></p><canvas id="myCanvas" width="400" height="400"></canvas>';
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');

}

function calculate(level = 1, minigame = 0) {
    cancelAnimationFrame(idAnimation);
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
    eqv.style.fontSize = "0.6em";
    eqv.innerHTML = eq;
    //console.dir(eqv.innerHTML);
    elements.points.innerHTML = "" + roundDecimalsZeros(points.toFixed(2));


    elements.textareaHelpMath.classList.add("mathfont");
    elements.textareaAnswerMath.innerHTML = "<p>Rätt svar : </p><div class='d-flex flex-row justify-content-around'>" + answer + '</div></p>';
    elements.textareaAnswerMath.classList.add("mathfont");

    createTextAnswerCache3(ek);
    console.dir(tipsArray);
    createTipsEq(tipsArray);

    elements.inputX.type = "text"
    elements.inputX.value = "";
    elements.inputX.focus();
    hideElement(elements.saveBtn);
    hideAnswer()
    console.log(ek)

    if (typeof ek.drawTask === 'function') ek.drawTask()

    canvas.addEventListener("wheel", (event) => {
        console.log("wheel")
        event.preventDefault();
        deltaY = event.deltaY * 0.1;
        offsetY += -event.deltaY * 0.1;
        ek.updateCanvas();
    });

    // 
}

let pxPerSek = 30;
let pxS = 1;
const offsetX = 20;
let offsetY = 300;
const totalTid = 30;
let tid = 0;

function ritaRutnät() {
    ctx.strokeStyle = "#eee";
    for (let t = 0; t <= totalTid; t++) {
        const x = offsetX + t * pxPerSek;
        ctx.beginPath();
        ctx.moveTo(x, 50);
        ctx.lineTo(x, 370);
        ctx.stroke();
    }
    for (let y = 50; y <= 370; y += 50) {
        ctx.beginPath();
        ctx.moveTo(offsetX, y);
        ctx.lineTo(750, y);
        ctx.stroke();
    }
}

function ritaAxlar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ritaRutnät();
    ctx.strokeStyle = "#888";
    ctx.beginPath();
    ctx.moveTo(offsetX, 50);
    ctx.lineTo(offsetX, 370);
    ctx.moveTo(offsetX, offsetY);
    ctx.lineTo(370, offsetY);
    ctx.stroke();
}

function ritaFunktion() {
    ctx.beginPath();
    ctx.strokeStyle = "blue";

    for (let t = 0; t <= totalTid; t += 0.05) {
        const x = offsetX + t * pxPerSek;
        const y = offsetY - ek.s(t) * pxS;
        if (t === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();
}

function ritaPunkt(t) {
    const x = offsetX + t * pxPerSek;
    const y = offsetY - ek.s(t) * pxS;
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, 2 * Math.PI);
    ctx.fill();
}

function validateX() {
    errorX();
    let inp = elements.inputX.value;
    inp = inp.replace(",", ".");


    console.dir(cache.ansX);
    cache.ansX.forEach((ans) => {
        if (arSammaDerivata(ans, inp) || arSamma(ans, inp)) { successX(); }
    })



}
/**Rensa svaret innan jämförelse
Lägg till denna funktion för att ta bort:

onödiga mellanslag

"1x" → "x"

"-1x" → "-x"

js
Kopiera
Redigera
 */
function normaliseraUttryck(uttryck) {
    return uttryck
        .replace(/\s+/g, '')         // ta bort alla mellanslag
        .replace(/\b1(?=[a-zA-Z])/g, '')   // byt ut 1x → x
        .replace(/\b-1(?=[a-zA-Z])/g, '-').replaceAll('t', 'x'); // byt ut -1x → -x
}
function arSammaDerivata(rättSvar, elevSvar) {
    /**const elevSvar = document.getElementById("svar").value;
      const elevF = math.parse(rensa1or(elevSvar)).compile();
      const korrektF = math.parse(korrektDerivata).compile();

      const testX = [-2, -1, 0, 1, 2];
      try {
        for (let x of testX) {
          const v1 = korrektF.evaluate({x});
          const v2 = elevF.evaluate({x});
          if (Math.abs(v1 - v2) > 1e-6) {
            visaResultat("❌ Fel svar. Försök igen!", false);
            return;
          }
        }
        visaResultat("✅ Rätt svar!", true);
      } */
    try {

        const f1 = math.parse(normaliseraUttryck(rättSvar)).compile();
        const f2 = math.parse(normaliseraUttryck(elevSvar)).compile();

        const testvärden = [-2, -1, 0, 1, 2];
        for (let x of testvärden) {
            const v1 = f1.evaluate({ x });
            const v2 = f2.evaluate({ x });
            if (Math.abs(v1 - v2) > 1e-6) return false;
        }
        return true;
    } catch (e) {
        return false; // Ogiltigt uttryck
    }
}


