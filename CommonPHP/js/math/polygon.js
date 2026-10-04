

document.getElementById('eqvTyp').innerHTML = "canvas"
//var answer; deklareras i huvudfilen
//easier equation 2 st 
function getRandomGame() {
    variables.checked = getRandomInt(1, 5)
    console.log(variables.checked);
    return variables.checked;
}
let height = 200;
let radius = 80;
let points = 0;
let tipsArray = [];
function genEqEasy1() {
    const nivå1 = [
        {
            r: 80, h: 200,
            question: function () {
                return 'En cylinder har radien 𝑟 = ' + this.r
                    + ' cm och höjden ℎ = ' + this.h +
                    ' cm. Beräkna volymen'
            },

            answer: function () {
                return Math.PI * this.r * this.r * this.h
            },
            tipsArray: ['Volym av en cylinder är V = π𝑟²ℎ',]
        },
        {
            r: 20, h: 5,
            question: function () {
                return 'Beräkna radien av en cylinder med volymen V = ' +
                    (Math.PI * this.r * this.r * this.h).toFixed(2) +
                    'cm³ och höjden ℎ = ' + this.h + ' cm.'
            },
            answer: function () {
                return this.r
            },
            tipsArray: ['Volym av en cylinder är V = π𝑟²ℎ', 'Bryt ut r från formlen', '𝑟²=V/πℎ']

        },
        {
            r: 10, h: 15,
            question: function () {
                return 'En konservburk är formad som en cylinder med diameter d = ' + this.r * 2 +
                    'cm och höjden ℎ = ' + this.h +
                    ' cm.<br/>Beräkna ytan av burkens sidor (mantelarean)'
            },

            answer: function () {
                return 2 * Math.PI * this.r * this.h
            },
            tipsArray: ['Botten- och toppareor är cirkulära',
                'Cylinders sida är en rektangel', 'Mantelarean : 𝐴 = 2𝜋𝑟ℎ ']

        },

    ];


    let task = nivå1[getRandomInt(0, nivå1.length - 1)];
    task.r = getRandomPositiveExklArray(20, 100, [0]);
    task.h = getRandomPositiveExklArray(40, 200, [0]);
    radius = task.r;
    height = task.h;
    //console.dir(sum);
    var IDs = new Object();
    console.dir(task);
    IDs['eq1'] = '<p>' + task.question() + ' </p>';
    answer = IDs['x'] = IDs['ans'] = task.answer().toFixed(2);
    tipsArray = task.tipsArray;

    points = 3;


    return (IDs);


}


//medel1 : en konstant
function genEqMed1() {

    const nivå2 = [
        {
            r: 80, h: 200,
            question: function () {
                return 'En cylinder har radien 𝑟 = ' + this.r
                    + 'cm och höjden ℎ = ' + this.h +
                    ' cm.<br/>Den kapas horisontellt på mitten. Vad blir volymen av vardera del?'
            },

            answer: function () {
                return Math.PI * this.r * this.r * this.h / 2
            },
            tipsArray: ['Volym av en cylinder är V = π𝑟²ℎ',]
        },
        {
            r: 20, h: 10,
            question: function () {
                return 'En cylinder har radien 𝑟 = ' + this.r
                    + 'm och höjden ℎ = ' + this.h +
                    ' m.<br/>Hur mycket högre blir en cylinder om volymen ska fördubblas men radien förblir densamma?'
            },

            answer: function () {
                return 2 * this.h
            },

            tipsArray: ['Volym av en cylinder är V = π𝑟²ℎ']

        },
        {
            r: 10, h: 10,
            question: function () {
                return 'Beräkna totala begränsningsarean av en cylinder med radie ' + this.r + ' cm och höjd ' + this.h + ' cm.'
            },


            answer: function () {
                return 2 * Math.PI * this.r * this.h + 2 * (Math.PI * this.r * this.r)
            },


            tipsArray: ['Botten- och toppareor är cirkulära',
                'Cylinders sida är en rektangel', 'Mantelarean : 𝐴 = 2𝜋𝑟ℎ ']

        },

    ];

    let task = nivå2[getRandomInt(0, nivå2.length - 1)];
    task.r = getRandomPositiveExklArray(20, 50, [0]);
    task.h = getRandomPositiveExklArray(50, 200, [0]);

    radius = task.r;
    height = task.h;
    //console.dir(sum);
    var IDs = new Object();
    console.dir(task);
    IDs['eq1'] = '<p>' + task.question() + ' </p>';
    answer = IDs['x'] = IDs['ans'] = task.answer().toFixed(2);
    tipsArray = task.tipsArray;

    points = 6;


    return (IDs);



}
//+ och *
/**En vattenbehållare är cylindrisk och har en höjd på 1,5 meter samt en radie på 0,4 meter. Hur mycket vatten (i liter) ryms i den när den är full?
(1 liter = 1 dm³)

En etikett ska sättas runt mantelytan av en burk (cylinder). Hur stor måste etiketten vara om burken har höjd 12 cm och diameter 7 cm?

En cylinder har volym 500 cm³. Om radien ökas med 20 %, hur mycket ökar volymen? */
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
/*Nivå 4 – Algebra och problem med variabler

𝑉
=
200
𝜋
V=200π cm³. Skriv ett uttryck för höjden 
ℎ
h i termer av radien 
𝑟
r.

En cylindrisk burk ska konstrueras för att rymma exakt 1 liter vätska. Hur bör radie och höjd förhålla sig för att minimera materialåtgången (dvs. begränsningsytan)?

Visa att om man tredubblar radien och halverar höjden, så blir volymen 4,5 gånger så stor. */
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
/* 
13. En cylinder fylls med vätska i 3 steg
En tom cylinder fylls i tre omgångar:
– Först 1/4 av volymen
– Sen 1/2 av den återstående volymen
– Till sist 500 ml

Cylinder har höjd 20 cm och radie 5 cm.
Hur mycket vätska finns totalt i cylindern efter dessa tre steg?

📌 Tränar: bråkräkning + volymberäkning

14. En etikett ska täcka 80 % av mantelytan
En etikett ska fästas runt en burk. Den ska täcka 80 % av mantelytan.
Burken har radie 4 cm och höjd 12 cm.
Hur stor yta ska etiketten ha?

📌 Tränar: procent + area av mantelyta

15. Vattennivå stiger i en cylinder
En vertikal cylinder (r = 3 cm) fylls med vatten med konstant hastighet: 150 ml per minut.
Hur lång tid tar det tills vattennivån når 10 cm?

📌 Tränar: volym → höjd, hastighet → tid

Vill du att jag lägger in dessa tre uppgifter i HTML + JavaScript också?






Du sade:
visa facit


ChatGPT sade:
Absolut! Här kommer facit till de tre nivå 5-uppgifterna (utan optimering) – med uträkningar och förklaringar:

🟣 Uppgift 13: Cylinder fylls i tre steg
Cylinder: radie = 5 cm, höjd = 20 cm
Total volym:

𝑉
=
𝜋
𝑟
2
ℎ
=
𝜋
⋅
5
2
⋅
20
=
𝜋
⋅
25
⋅
20
=
500
𝜋
≈
1570.80
 
cm
3
V=πr 
2
 h=π⋅5 
2
 ⋅20=π⋅25⋅20=500π≈1570.80cm 
3
 
Steg för steg:

Första fyllning:

1
4
⋅
1570.80
=
392.70
 
cm
3
4
1
​
 ⋅1570.80=392.70cm 
3
 
Återstående volym:

1570.80
−
392.70
=
1178.10
1570.80−392.70=1178.10
Andra fyllning:

1
2
⋅
1178.10
=
589.05
2
1
​
 ⋅1178.10=589.05
Tredje fyllning: 500 ml = 500 cm³

👉 Total mängd vätska:

392.70
+
589.05
+
500
=
1481.75
 
cm
3
392.70+589.05+500= 
1481.75cm 
3
 
​
 
🟣 Uppgift 14: Etikett täcker 80 % av mantelytan
Cylinder:

radie = 4 cm

höjd = 12 cm

mantelyta:

𝐴
=
2
𝜋
𝑟
ℎ
=
2
⋅
𝜋
⋅
4
⋅
12
=
96
𝜋
≈
301.59
 
cm
2
A=2πrh=2⋅π⋅4⋅12=96π≈301.59cm 
2
 
80 % av mantelytan:

0.8
⋅
301.59
=
241.27
 
cm
2
0.8⋅301.59= 
241.27cm 
2
 
​
 
🟣 Uppgift 15: Vattennivå stiger
Cylinder:

radie = 3 cm

mål: höjd = 10 cm

volym som ska fyllas:

𝑉
=
𝜋
𝑟
2
ℎ
=
𝜋
⋅
3
2
⋅
10
=
90
𝜋
≈
282.74
 
cm
3
V=πr 
2
 h=π⋅3 
2
 ⋅10=90π≈282.74cm 
3
 
Vattnet fylls med 150 ml/min = 150 cm³/min

Tid:

282.74
150
≈
1.89
 
minuter
 
(
≈
1
 
minut och
 
53
 
sekunder
)
150
282.74
​
 ≈ 
1.89minuter
​
 (≈1minut och53sekunder)
 */
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
    iniElements(); var ek = [];
    elements.helpname.innerHTML = "Räkna med cylinder:"
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
    elements.task.innerHTML = "Avrunda svaret till två decimaler om det behövs";
    createAnswerCache(ek);
    console.dir(tipsArray);
    createTipsEq(tipsArray);

    elements.inputX.type = "text"
    elements.inputX.value = "";
    elements.inputX.focus();
    hideElement(elements.saveBtn);
    hideAnswer()
    polygon = TRIANGLAR[0];

    let a = getRandomPositiveExklArray(60, 100, [0]);
    let b = getRandomPositiveExklArray(40, 120, [0, a]);
    let tr = generateTriangleWithTwoIntegerSides(a, b);
    console.log(tr);
    polygon.corners = tr.corners;
    polygon.angles = [];
    polygon.lengths = [{ letter: letters[0], length: a }, { letter: letters[1], length: b },
    { letter: letters[2], length: tr.c }];

    let angleA = calculateAngle(polygon.corners[1], polygon.corners[0], polygon.corners[2]);
    console.log(angleA)
    // draw the angle symbols on corners
    for (var i = 0; i < polygon.corners.length - 2; i++) {
        polygon.angles[i] = calculateAngle(polygon.corners[i], polygon.corners[i + 1], polygon.corners[i + 2]);
        drawAngleSymbol(polygon.angles[i], polygon.corners[i + 1]);
        //  polygon.lengths[i] = { letter: letters[i], length: getLenghtOfTheLine(polygon.corners[i], polygon.corners[i + 1]) }

    }
    // draw the last 2 angle symbols
    var n = polygon.corners.length;
    polygon.angles[n - 2] = calculateAngle(polygon.corners[n - 2], polygon.corners[n - 1], polygon.corners[0]);
    //drawAngleSymbol(polygon.angles[n - 2], polygon.corners[n - 1]);

    //drawAngleSymbol(polygon.angles[n - 1], polygon.corners[0]);
    polygon.angles[n - 1] = calculateAngle(polygon.corners[n - 1], polygon.corners[0], polygon.corners[1]);
    console.dir(polygon);
    draw();
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



let TRIANGLAR = [
    {//x min=15, y min=10, x max=200, y max=200
        corners: [{ x: 15, y: 100 }, { x: 70, y: 100 }, { x: 25, y: 30 }],
        angles: [],
        lengths: [],
    },
];
var ctx, polygon;

// draw everything
function draw() {
    document.getElementById('canvas-container').innerHTML =
        '<canvas id="myCanvas" width="300" height="300"></canvas>';
    const canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');

    getPolygon();
}

var PI2 = Math.PI * 2;

var rectStrokeStyle = "black";
function getPolygon() {
    /*  corners.push({
            x: 10,
            y: 100
        });*/

    // === Parametrar ===
    const a = 120;     // Sida AB
    const b = 90;     // Sida AC
    const angleC_deg = 38; // Vinkel mellan dem (∠A i grader)
    drawTriangleWithTwoSidesAndAngleBetween(a, b, angleC_deg)

    //drawAll();

}
function drawTriangleWithTwoSidesAndAngleBetween(a = 150, b = 100, angleA_deg = 60) {


    const angleA_rad = angleA_deg * Math.PI / 180;

    // === Cosinussatsen för att få tredje sidan ===
    const c = Math.sqrt(a ** 2 + b ** 2 - 2 * a * b * Math.cos(angleA_rad));

    // === Sinussatsen för att få övriga vinklar ===
    const sinB = (a * Math.sin(angleA_rad)) / c;
    const sinC = (b * Math.sin(angleA_rad)) / c;
    const angleB_rad = Math.asin(Math.min(1, Math.max(-1, sinB)));
    const angleC_rad = Math.asin(Math.min(1, Math.max(-1, sinC)));
    const angleB_deg = angleB_rad * 180 / Math.PI;
    const angleC_deg = angleC_rad * 180 / Math.PI;

    // === Triangelpunkter ===
    const Ax = 50, Ay = 300;
    const Bx = Ax + a, By = Ay;
    const Cx = Ax + b * Math.cos(angleA_rad);
    const Cy = Ay - b * Math.sin(angleA_rad);

    // === Rita triangeln ===
    ctx.beginPath();
    ctx.moveTo(Ax, Ay);
    ctx.lineTo(Bx, By);
    ctx.lineTo(Cx, Cy);
    ctx.closePath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.stroke();



    // === Rita bågar i alla hörn ===
    drawAngleArc(Ax, Ay, { x: Bx, y: By }, { x: Cx, y: Cy }, `${angleA_deg.toFixed(0)}°`, "orange");
    drawAngleArc(Bx, By, { x: Cx, y: Cy }, { x: Ax, y: Ay }, `${angleB_deg.toFixed(0)}°`, "green");
    drawAngleArc(Cx, Cy, { x: Ax, y: Ay }, { x: Bx, y: By }, `${angleC_deg.toFixed(0)}°`, "red");

    // === Märk hörn ===
    ctx.fillStyle = "black";
    ctx.font = "16px Arial";
    ctx.fillText("A", Ax - 10, Ay + 20);
    ctx.fillText("B", Bx + 5, By + 20);
    ctx.fillText("C", Cx + 5, Cy - 5);



}
// === Funktion för att rita vinkelbåge ===
function drawAngleArc(cx, cy, fromPt, toPt, label, color, offset = 30) {
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