
document.getElementById('eqvTyp').innerHTML = "canvas"
var ctx, canvas

var points = 0;
var tipsArray = [];

var visibles = {}

var polygon = new Object();
//var answer; deklareras i huvudfilen
//easier equation 2 st 
function getRandomGame() {
    variables.checked = 1//getRandomInt(1, 5)
    console.log(variables.checked);
    return variables.checked;
}


polygon.corners = [];
polygon.angles = [];
polygon.lengths = [];
function genEqEasy1() {

    // === Parametrar ===

    const a = slumpTal(100, 200, false);     // Sida AB
    const b = slumpTal(120, 200, false);     // Sida AC
    const angleA_deg = slumpTal(25, 67, false); // Vinkel mellan dem (∠A i grader)
    getPolygon(a, b, angleA_deg);
    //skapa uppgifter från polygon värden
    const nivå1 = [
        {
            question: function () {
                visibles = { angleA: false, angleB: false, angleC: true, sidea: true, lengtha: true, sideb: true, lengthb: true, sidec: true, lengthc: false }
                return 'I en triangel ABC är ∠C = ' + polygon.angles[0] +
                    '°, sidor a = ' + polygon.lengths[0] + ' cm och b = '
                    + polygon.lengths[1] + ' cm. Beräkna längden på sida c. Svara i cm'

            },

            answer: function () {
                return polygon.lengths[2] + ' cm'
            },
            tipsArray: ['Använd cosinussatsen: a²=b²+c²−2bc⋅cosα',]
        }, {
            question: function () {
                visibles = { angleA: false, angleB: false, angleC: true, sidea: true, lengtha: true, sideb: true, lengthb: true, sidec: false }
                return '    I en triangel har du sidorna a = ' + polygon.lengths[0] + ' cm och b = ' + polygon.lengths[1] +
                    ' cm samt vinkel ∠C = ' + polygon.angles[0] +
                    '°. Beräkna arean av triangeln. Svara i cm²'

            },

            answer: function () {
                //konvertera till radianer
                return (polygon.lengths[0] * polygon.lengths[1] * Math.sin((polygon.angles[0]) * Math.PI / 180) / 2).toFixed(2)
            },
            tipsArray: ['  Använd formeln: A = ½ab·sin(C)',]
        },



    ];


    let task = nivå1[getRandomInt(0, nivå1.length - 1)];

    task['eq1'] = '<p>' + task.question() + ' </p>';

    answer = task.x = task.answer.ans = task.answer();
    tipsArray = task.tipsArray;
    points = 3;
    console.dir(polygon);
    draw();
    return (task);


}


//medel1 : en konstant
function genEqMed1() {



    let task = {
        question: function () {
            visibles = { angleA: false, angleB: false, angleC: true, sidea: true, lengtha: true, sideb: true, lengthb: true, sidec: false }
            return '    Två observatörer står 120 m ifrån varandra. De ser ett drönare i luften (punkt C). ' +
                'Från punkt A ser man upp i en vinkel på 32°, och från B i en vinkel på 47°.' +
                'Beräkna hur högt drönaren befinner sig. Svara i meter'

        },

        answer: function () {
            return 47.41
        },
        drawTask: function () {
            drawDronareUppgift();
        },
        tipsArray: ['Punkten A och B är på marken, C är drönaren i luften.',

            'Vi känner till basen: AB = 120 m',

            'Vi känner till vinklar vid A och B: ∠CAB = 32°, ∠CBA = 47°',

            ' Vi vill ha höjden från punkt C till sidan AB.',
            'Beräkna tredje vinkeln i triangeln (∠C):<br/> ∠𝐶=180°−32°−47°=101°',
            'Använd sinussatsen',
            'AC/sin(47°)=120/sin(101°)', ' AC = 120⋅sin(47°)/sin(101°) ',
            '𝐴𝐶≈120⋅ 0.7314 / 0.9816', '𝐴𝐶≈87.77 / 0.9816'
            , 'Använd höjdformeln i triangel (från vinkel ∠A)',
            'h=AC⋅sin(32°)', 'h≈89.45⋅sin(32°)≈89.45⋅0.5299 m']
    }


    task['eq1'] = '<p>' + task.question() + ' </p>';

    answer = task.x = task.answer.ans = task.answer();
    tipsArray = task.tipsArray;

    points = 6;


    return (task);



}

function genEqMed2() {
    const nivå3 = [
        {
            r: 80, h: 200,
            question: function () {
                return 'En vattenbehållare är cylindrisk och har en höjd på ' + this.h + ' meter samt en radie på ' + this.r + ' meter. Hur mycket vatten (i liter) ryms i den när den är full?'
            },

            answer: function () {
                return (Math.PI * this.r * this.r * this.h) * 1000 // cm³ till liter
            },



            tipsArray: ['Volym av en cylinder är V = π𝑟²ℎ', '1 liter = 1 dm³']
        },
        {
            r: 20, h: 10,
            question: function () {
                return 'En cylinder har volym ' + (Math.PI * this.r * this.r * this.h).toFixed(2)
                    + ' cm³. Om radien ökas med 20 %, med hur många procent ökar volymen? Svara i procent'
            },

            answer: function () {
                const V1 = Math.PI * this.r * this.r * this.h;
                const r2 = this.r * 1.2;
                const V2 = Math.PI * r2 * r2 * this.h;
                const diff = V2 - V1;
                return (diff / V1) * 100;
            },
            tipsArray: ['Volym av en cylinder är V = π𝑟²ℎ', 'Räkna volym för den nya radien', 'Jämför två volymvärden']

        },
        {
            r: 10, h: 10,
            question: function () {
                return 'En etikett ska sättas runt hela mantelytan av en burk (cylinder). Hur stor area måste etiketten ha om burkens höjd är ' +
                    this.h + ' cm och diameter är ' + this.r * 2 + ' cm?'
            },


            answer: function () {
                return 2 * Math.PI * this.r * this.h
            },

            tipsArray: ['Mantelarean : 𝐴 = 2𝜋𝑟ℎ ']

        },

    ];

    let task = nivå3[getRandomInt(0, nivå3.length - 1)];
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

    points = 9;


    return (IDs);


}

function genEqHard1() {
    const nivå4 = [
        {
            r: 80, h: 200,
            question: function () {
                return 'En cylinder har volym V = ' + (Math.PI * this.r * this.r * this.h).toFixed(2) +
                    ' cm³ och en radie på ' + this.r +
                    ' cm. <br/>Hur mycket ökar volymen när radien fördubblas (men höjden är konstant). Ange ökningen i procent.'
            },

            answer: function () {
                const V1 = Math.PI * this.r * this.r * this.h;
                const V2 = Math.PI * (2 * this.r) ** 2 * this.h;
                return ((V2 - V1) / V1) * 100;
            },
            tipsArray: ['Volym av en cylinder är V = π𝑟²ℎ', 'Räkna volym för den nya radien', 'Jämför två volymvärden']
        },
        {
            r: 20, h: 10,
            question: function () {
                return 'En cylinder har volym ' + (Math.PI * this.r * this.r * this.h).toFixed(2)
                    + ' cm³ och radie ' + this.r + '<br/> Beräkna höjden '
            },

            answer: function () {
                return this.h
            },
            tipsArray: ['Volym av en cylinder är V = π𝑟²ℎ', 'Bryt ut ℎ från formlen', 'ℎ = V / (π𝑟²)']

        },
        {
            r: 10, h: 10,
            question: function () {
                return 'Visa hur volymen ändras när både radie och höjd ökar med 10 %.<br/>Svara i procent'
            },



            answer: function () {
                const V1 = Math.PI * this.r * this.r * this.h;
                const r2 = this.r * 1.1;
                const h2 = this.h * 1.1;
                const V2 = Math.PI * r2 * r2 * h2;
                const diff = V2 - V1;
                return (diff / V1) * 100;
            },
            tipsArray: ['Volym av en cylinder är V = π𝑟²ℎ', 'Räkna volym med de nya värden', 'Jämför två volymvärden']

        },

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
        {
            r: 80, h: 200,
            question: function () {
                return 'En tom cylinder fylls med vätska i 3 steg:<br/>' +

                    '-Först 1/4 av volymen<br/>' +
                    '-Sen 1/2 av den återstående volymen<br/>' +
                    '– Till sist 500 ml <br /> ' +

                    'Cylinder har höjd ' + this.h +
                    ' cm och radie ' + this.r + ' cm.<br/>' +
                    'Hur mycket vätska finns det totalt i cylindern efter dessa tre steg ? '
            },

            answer: function () {
                const radie = this.r;
                const hojd = this.h;
                const volymTotal = Math.PI * radie * radie * hojd; // ≈1570.8

                const fyllning1 = volymTotal / 4;
                const kvar = volymTotal - fyllning1;
                const fyllning2 = kvar / 2;
                const fyllning3 = 500; // ml = cm³

                return fyllning1 + fyllning2 + fyllning3;
            },
            tipsArray: ['Volym av en cylinder är V = π𝑟²ℎ', 'Räkna hela volymen och dess andelar som fylls i två första steg ', 'Plussa på alla fyllningar']
        },
        {
            r: 10, h: 30,
            question: function () {
                return 'Cylinder med radie ' + this.r + ' cm fylls med hastigheten 150 ml/min.<br />' +
                    'Hur lång tid tar det tills vattennivån når 10 cm ? Svara i minuter '
            },

            answer: function () {
                return (Math.PI * this.r * this.r * 10) / 150
            }, // Volym vid 10 cm

            tipsArray: ['Volym av en cylinder är V = π𝑟²ℎ', 'Räkna volym av önskad nivå', 'Dela volymen med hastigheten för att få tid i minuter']

        },
        {
            r: 10, h: 10,
            question:
                function () {
                    return 'En etikett täcker 80 % av mantelytan på en cylindrisk burk.<br />' +
                        'Beräkna etikettens yta om burkens radie är ' + this.r + ' cm och höjd ' + this.h + ' cm.<br />' +
                        'Ange svaret i cm²'
                },

            answer: function () {
                return 2 * Math.PI * this.r * this.h * 0.8
            },

            tipsArray: ['Mantelarean : 𝐴 = 2𝜋𝑟ℎ ']

        },

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
    elements.inputX.type = "number"
    iniElements(); var ek = [];
    elements.helpname.innerHTML = "Räkna med trigonometri:"
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
    document.getElementById('canvas-container').innerHTML =
        '<canvas id="myCanvas" width="600" height="300"></canvas>';
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    cancelAnimationFrame(idAnimation);
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
    eqv.style.fontSize = "0.8em";
    eqv.innerHTML = eq;
    //console.dir(eqv.innerHTML);
    elements.points.innerHTML = "" + roundDecimalsZeros(points.toFixed(2));

    elements.textareaHelpMath.innerHTML = texElementDivs.trig;
    elements.textareaHelpMath.classList.add("mathfont");
    elements.textareaAnswerMath.innerHTML = "<p>Rätt svar : </p><div class='d-flex flex-row justify-content-around'>" + ek['ans'] + '</div></p>';
    elements.textareaAnswerMath.classList.add("mathfont");
    elements.task.innerHTML = "Avrunda svaret till två decimaler om det behövs";
    createAnswerCache(ek);
    console.dir(tipsArray);
    createTipsEq(tipsArray);

    elements.inputX.type = "text"
    elements.inputX.value = "";
    elements.inputX.focus();
    hideElement(elements.saveBtn);
    hideAnswer()
    console.log(ek)
    if (typeof ek.drawTask === 'function') ek.drawTask()
    else draw();

    // 
}



function validateX() {
    let inp = elements.inputX.value;
    inp = inp.replace(",", ".");
    let svarX = parseFloat(inp).toFixed(2)

    console.log("cache.ansx " + cache.ansX + "    svarx " + svarX);
    if (svarX == parseFloat(cache.ansX).toFixed(2)) successX();
    else
        errorX();

}




// draw everything
function draw() {

    drawTriangleWithTwoSidesAndAngleBetween(polygon)

}


function getPolygon(a, b, angleA_deg) {


    // === Parametrar ==

    const angleA_rad = angleA_deg * Math.PI / 180;

    // === Cosinussatsen för att få tredje sidan ===
    const c = Math.sqrt(a ** 2 + b ** 2 - 2 * a * b * Math.cos(angleA_rad));

    // === Sinussatsen för att få övriga vinklar ===
    const sinB = (a * Math.sin(angleA_rad)) / c;

    const angleB_rad = Math.asin(Math.min(1, Math.max(-1, sinB)));

    const angleB_deg = angleB_rad * 180 / Math.PI;
    const angleC_deg = 180 - angleB_deg - angleA_deg;

    // === Triangelpunkter ===
    const Ax = 20, Ay = 200;
    const Bx = Ax + a, By = Ay;
    const Cx = Ax + b * Math.cos(angleA_rad);
    const Cy = Ay - b * Math.sin(angleA_rad);
    polygon.corners = [{ x: Ax, y: Ay }, { x: Bx, y: By }, { x: Cx, y: Cy }
    ];
    polygon.angles = [angleA_deg.toFixed(0), angleB_deg.toFixed(0), angleC_deg.toFixed(0)];
    polygon.lengths = [b, a, c.toFixed(2)];

    console.dir(polygon);



    //drawAll();

}
function drawTriangleWithTwoSidesAndAngleBetween(polygon) {
    console.dir(polygon);

    // === Rita triangeln ===
    ctx.beginPath();
    ctx.moveTo(polygon.corners[0].x, polygon.corners[0].y);
    for (let i = 1; i < polygon.corners.length; i++) {
        ctx.lineTo(polygon.corners[i].x, polygon.corners[i].y);
    }


    ctx.closePath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.stroke();



    // === Rita bågar i alla hörn ===
    drawAngleArc(polygon.corners[0].x, polygon.corners[0].y, polygon.corners[1], polygon.corners[2], " ", "orange");
    drawAngleArc(polygon.corners[1].x, polygon.corners[1].y, polygon.corners[2], polygon.corners[0], " ", "green");
    drawAngleArc(polygon.corners[2].x, polygon.corners[2].y, polygon.corners[0], polygon.corners[1], " ", "red");

    // === Märk hörn ===
    console.dir(visibles)
    ctx.font = "12px Arial";
    if (visibles.angleC) {
        ctx.fillStyle = "orange";
        ctx.fillText(`∠C = ${polygon.angles[0]}°`, polygon.corners[0].x - 20, polygon.corners[0].y + 20);
    }

    if (visibles.angleB) {
        ctx.fillStyle = "red";
        ctx.fillText(`∠B = ${polygon.angles[1]}°`, polygon.corners[2].x + 5, polygon.corners[2].y - 5);
    }
    if (visibles.angleA) {
        ctx.fillStyle = "green";
        ctx.fillText(`∠A = ${polygon.angles[2]}°`, polygon.corners[1].x - 20, polygon.corners[1].y + 20);
    }

    // === Visa sidlängder ===
    ctx.fillStyle = "darkblue";
    let txt = ""
    if (visibles.sideb) {
        txt += 'b= ' + (visibles.lengthb ? +polygon.lengths[1] : '? ')
    }

    ctx.fillText(txt, (polygon.corners[0].x + polygon.corners[1].x) / 2 - 15, polygon.corners[0].y + 15);
    txt = ""
    if (visibles.sidea)
        txt += 'a=' + (visibles.lengtha ? polygon.lengths[0] : '? ')

    ctx.fillText(txt, (polygon.corners[0].x + polygon.corners[2].x) / 2 - 40, (polygon.corners[0].y + polygon.corners[2].y) / 2);
    txt = ""
    if (visibles.sidec) {
        txt += 'c=' + (visibles.lengthc ? polygon.lengths[2] : '?')
    }
    console.log(visibles.sidec)
    ctx.fillText(txt, (polygon.corners[1].x + polygon.corners[2].x) / 2 + 30, (polygon.corners[1].y + polygon.corners[2].y) / 2);



}
// === Funktion för att rita vinkelbåge ===
function drawAngleArc(cx, cy, fromPt, toPt, label, color, offset = 20) {
    const dx1 = fromPt.x - cx, dy1 = fromPt.y - cy;
    const dx2 = toPt.x - cx, dy2 = toPt.y - cy;
    const start = Math.atan2(dy1, dx1);
    const end = Math.atan2(dy2, dx2);

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(cx, cy, offset, start, end, true);
    ctx.stroke();

    // Text mitt i bågen
    const midAngle = (start + end) / 2;
    const tx = cx + offset * Math.cos(midAngle);
    const ty = cy + offset * Math.sin(midAngle);
    ctx.fillStyle = color;
    ctx.font = "14px Arial";
    ctx.fillText(label, tx - 10, ty + 5);
}
function drawDronareUppgift() {
    // === Grunddata ===
    const angleA_deg = 32;
    const angleB_deg = 47;
    const angleC_deg = 180 - angleA_deg - angleB_deg;
    const AB = 120;

    // === Skala och punkter ===
    const scale = 3;
    const Ax = 50, Ay = 250;
    const Bx = Ax + AB * scale, By = Ay;

    // === Sinusberäkningar ===
    const angleA_rad = angleA_deg * Math.PI / 180;
    const sinC = Math.sin(angleC_deg * Math.PI / 180);
    const sinB = Math.sin(angleB_deg * Math.PI / 180);
    const AC = AB * sinB / sinC;
    const AC_scaled = AC * scale;

    let progress = 0;  // animation 0 → 1

    function drawFrame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // === Räkna punkt C:s läge efter "progress" av lyft ===
        const curr_AC = AC_scaled * progress;
        const Cx = Ax + curr_AC * Math.cos(angleA_rad);
        const Cy = Ay - curr_AC * Math.sin(angleA_rad);

        // === Rita triangeln ===
        ctx.beginPath();
        ctx.moveTo(Ax, Ay);
        ctx.lineTo(Bx, By);
        ctx.lineTo(Cx, Cy);
        ctx.closePath();
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 2;
        ctx.stroke();

        // === Höjdlinje från C till marken ===
        ctx.beginPath();
        ctx.moveTo(Cx, Cy);
        ctx.lineTo(Cx, Ay);
        ctx.setLineDash([5, 5]);
        ctx.strokeStyle = "orange";
        ctx.stroke();
        ctx.setLineDash([]);

        // === Märk hörn ===
        ctx.fillStyle = "black";
        ctx.font = "16px Arial";
        ctx.fillText("A", Ax - 10, Ay + 20);
        ctx.fillText("B", Bx + 5, By + 20);
        ctx.fillText("C", Cx + 5, Cy - 5);

        // === Skriv höjdvärde ===
        const h = curr_AC * Math.sin(angleA_rad);
        ctx.fillStyle = "green";
        ctx.fillText(`h ≈ ${h.toFixed(1)} m`, Cx + 5, Cy + (Ay - Cy) / 2);

        // === Vinklar och sidor ===
        ctx.fillStyle = "black";
        ctx.fillText("32°", Ax + 10, Ay - 10);
        ctx.fillText("47°", Bx - 40, By - 10);
        ctx.fillText("120 m", (Ax + Bx) / 2 - 20, Ay + 20);

        // === Nästa frame ===
        if (progress < 1) {
            progress += 0.01;
            idAnimation = requestAnimationFrame(drawFrame);
        }
    }

    // Starta animationen
    drawFrame();
}