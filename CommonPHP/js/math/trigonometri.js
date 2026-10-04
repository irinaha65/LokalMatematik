
document.getElementById('eqvTyp').innerHTML = "canvas"
var ctx, canvas

var points = 0;
var tipsArray = [];

var visibles = {}

var polygon = new Object();
//var answer; deklareras i huvudfilen
//easier equation 2 st 
function getRandomGame() {
    variables.checked = 3//getRandomInt(1, 5)
    console.log(variables.checked);
    return variables.checked;
}


polygon.corners = [];
polygon.angles = [];
polygon.lengths = [];
function genEqEasy1() {

    // === Parametrar ===

    const a = slumpTal(45, 85, false);     // Sida AB

    const angleA_deg = slumpTal(25, a / 2, false); // Vinkel mellan dem (∠A i grader)
    const b = (a * Math.cos((angleA_deg) * Math.PI / 180)).toFixed(2);
    const c = (a * Math.sin((angleA_deg) * Math.PI / 180)).toFixed(2); // Sida AB

    //skapa uppgifter från polygon värden
    const nivå1 = [
        //rätvinkliga trianglar
        {
            question: function () {
                visibles = { angleA: true, angleB: false, angleC: false, sidea: true, lengtha: true, sideb: false, lengthb: false, sidec: true, lengthc: false }
                return ' En rätvinklig triangel har en hypotenusa = ' + a + ' cm och en vinkel på  ' + angleA_deg +
                    '°.  Bestäm längen på sidan som är motstående mot den kända vinkeln. Svara i cm'

            },
            angles: [angleA_deg],
            lengths: [a],
            answer: function () {
                //konvertera till radianer
                return (this.lengths[0] * Math.sin((this.angles[0]) * Math.PI / 180)).toFixed(2)
            },
            tipsArray: ['  Använd formeln: a = c·sin(A)',],
            drawTask: function () {
                drawRattvinkligTriangle(this)

            }
        },
        {
            question: function () {
                visibles = { angleA: true, angleB: false, angleC: false, sidea: true, lengtha: true, sideb: true, lengthb: false, sidec: false, lengthc: false, }
                return ' En rätvinklig triangel har en hypotenusa = ' + a + ' cm och en vinkel på  ' + angleA_deg +
                    '°.  Bestäm längen på sidan som är närliggande till den kända vinkeln. Svara i cm'

            },
            angles: [angleA_deg],
            lengths: [a],
            answer: function () {
                //konvertera till radianer
                return (this.lengths[0] * Math.cos((this.angles[0]) * Math.PI / 180)).toFixed(2)
            },
            tipsArray: ['  Använd formeln: b = c·cos(A)',],
            drawTask: function () {
                drawRattvinkligTriangle(this)

            }
        },
        /*En rätvinklig triangel har en vinkel på 30° och hypotenusan är 10 cm.
        a) Bestäm motstående sida.
        b) Bestäm närliggande sida.
        
        💡 Använd sin(30°) = 0,5 och cos(30°) ≈ 0,866 */

        {
            question: function () {
                visibles = { angleA: false, angleB: false, angleC: false, sidea: true, lengtha: true, sideb: true, lengthb: true, sidec: false, lengthc: false }
                return ' En rätvinklig triangel har en hypotenusa = ' + a + ' cm och en katet = ' + b +
                    'cm.  Bestäm vinkel som är närliggande till den kända sidan. Svara i grader'

            },
            angles: [angleA_deg],
            lengths: [a, b],
            answer: function () {
                //konvertera till radianer
                return this.angles[0];
                Math.floor(Math.acos(b / a) * Math.PI / 180)
            },
            tipsArray: ['  Använd formeln: cos(A)=b/c',],
            drawTask: function () {
                drawRattvinkligTriangle(this)

            }
        },
        {
            question: function () {
                visibles = { angleA: false, angleB: false, angleC: false, sidea: true, lengtha: true, sideb: false, lengthb: false, sidec: true, lengthc: true }
                return ' En rätvinklig triangel har en hypotenusa = ' + a + ' cm och en katet = ' + b +
                    'cm.  Bestäm vinkel som är motstående till den kända sidan. Svara i grader'

            },
            angles: [angleA_deg],
            lengths: [a, b, c],
            answer: function () {
                //konvertera till radianer
                return this.angles[0];

            },
            tipsArray: ['  Använd formeln: sin(A)=a/c',],
            drawTask: function () {
                drawRattvinkligTriangle(this)

            }
        },
    ];


    let task = nivå1[getRandomInt(0, nivå1.length - 1)];

    task['eq1'] = '<p>' + task.question() + ' </p>';

    answer = task.x = task.answer();
    tipsArray = task.tipsArray;
    points = 3;


    return (task);


}


//medel1 : en konstant
function genEqMed1() {
    const a = slumpTal(45, 78, false);     // Sida AB

    const angleA_deg = slumpTal(25, a / 2, false); // Vinkel mellan dem (∠A i grader)
    const b = (a * Math.cos((angleA_deg) * Math.PI / 180)).toFixed(2);

    getPolygon(a, b, angleA_deg);
    const nivå2 = [
        {
            question: function () {
                visibles = { angleA: false, angleB: false, angleC: true, sidea: true, lengtha: true, sideb: true, lengthb: true, sidec: true, lengthc: false }
                return 'I en triangel ABC är ∠C = ' + polygon.angles[0] +
                    '°, sidor a = ' + polygon.lengths[0] + ' cm och b = '
                    + polygon.lengths[1] + ' cm. Beräkna längden på sida c. Svara i cm'

            },

            answer: function () {
                return polygon.lengths[2].toFixed(2)
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
        }, {
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
    ]

    let task = nivå2[getRandomInt(0, nivå2.length - 1)];

    task['eq1'] = '<p>' + task.question() + ' </p>';

    answer = task.x = task.answer();
    tipsArray = task.tipsArray;

    points = 6;


    return (task);



}

function genEqMed2() {
    /**En backe lutar 15° uppåt.
En cyklist cyklar 200 meter längs backen.

a) Hur högt upp kommer cyklisten (höjdskillnad)? */
    // === Parametrar ===



    //skapa uppgifter från polygon värden
    const nivå3 = [
        //rätvinkliga trianglar
        {
            b: slumpTal(16, 45, false),    // Sida AB

            angleA_deg: slumpTal(15, 48, false), // Vinkel mellan dem (∠A i grader)
            question: function () {
                return ' En backe lutar ' + this.angleA_deg + '° uppåt. En cyklist cyklar ' +
                    this.b + ' meter längs backen. Hur högt upp kommer cyklisten(höjdskillnad) ?  Svara i meter'

            },

            answer: function () {

                return (this.b * Math.sin(this.angleA_deg)).toFixed(2)
            },
            tipsArray: ['  Använd formeln: a = c·sin(A)',],
            drawTask: function () {


                // 🔧 Parametrar
                const vinkelGrad = this.angleA_deg;
                const vinkelRad = vinkelGrad * Math.PI / 180;
                const längd = this.b; // 200 meter simuleras i pixlar

                // Skala så det får plats
                const skala = 1.2;
                const vägLängd = längd / skala; // i pixlar

                // Startpunkt längst ner till vänster
                const startX = 20;
                const startY = 280;

                // Slutpunkt längs lutningen
                const endX = startX + vägLängd * Math.cos(vinkelRad) * 10;
                const endY = startY - vägLängd * Math.sin(vinkelRad) * 10;

                // Cyklistens position
                let t = 0;

                function ritaBacke() {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                    // 🔹 Backlinje
                    ctx.beginPath();
                    ctx.moveTo(startX, startY);
                    ctx.lineTo(endX, endY);
                    ctx.strokeStyle = "#888";
                    ctx.lineWidth = 4;
                    ctx.stroke();

                    // 🔺 Höjdlinje
                    ctx.beginPath();
                    ctx.moveTo(endX, endY);
                    ctx.lineTo(endX, startY);
                    ctx.setLineDash([5, 5]);
                    ctx.strokeStyle = "#aaa";
                    ctx.stroke();
                    ctx.setLineDash([]);

                    // 🔸 Marklinje
                    ctx.beginPath();
                    ctx.moveTo(startX, startY);
                    ctx.lineTo(endX, startY);
                    ctx.strokeStyle = "#aaa";
                    ctx.stroke();

                    // 🧮 Etiketter
                    ctx.fillStyle = "black";
                    ctx.font = "14px sans-serif";
                    ctx.fillText(längd + " m", (startX + endX) / 2 - 30, (startY + endY) / 2 - 10);
                    ctx.fillText("Höjd ≈ ?", endX + 10, (startY + endY) / 2);
                    ctx.fillText(vinkelGrad + "°", startX + 40, startY - 10);

                    // 🔻 Vinkelbåge
                    ctx.beginPath();
                    ctx.arc(startX, startY, 30, -vinkelRad, 0, false);
                    ctx.strokeStyle = "#555";
                    ctx.stroke();

                    // 🚲 Cyklist
                    const cykelX = startX + t * Math.cos(vinkelRad);
                    const cykelY = startY - t * Math.sin(vinkelRad);
                    ctx.beginPath();
                    ctx.arc(cykelX, cykelY, 8, 0, Math.PI * 2);
                    ctx.fillStyle = "blue";
                    ctx.fill();

                    // 🚶‍♀️ Kropp
                    ctx.beginPath();
                    ctx.moveTo(cykelX, cykelY);
                    ctx.lineTo(cykelX, cykelY - 15);
                    ctx.strokeStyle = "black";
                    ctx.stroke();

                    t += 1.2;
                    if (t < vägLängd * 10) {
                        idAnimation = requestAnimationFrame(ritaBacke);
                    }
                }

                // Starta animation
                ritaBacke();
            }
        },
        /**Från en fyr ser man två båtar:

Båt A ligger 4 km bort i riktning 40°

Båt B ligger 6 km bort i riktning 110°

a) Hur långt är det mellan båtarna?
b) Vilken vinkel är det mellan deras riktningar? */
        {
            a: slumpTal(8, 18, false),     // Sida AB

            angleB_deg: slumpTal(93, 118, false), // Vinkel till horizonten
            b: slumpTal(4, 23, false),    // Sida AB

            angleA_deg: slumpTal(5, 18, false), // Vinkel till horizonten
            question: function () {
                return ' Från en fyr ser man två båtar:<br/>Båt A ligger ' +
                    this.b + ' km bort i riktning nordost (' +
                    this.angleA_deg + '° från öst).<br/> Båt B ligger ' +
                    this.a + ' km bort i riktning nordväst (' + (this.angleB_deg) +
                    '° från väst).<br/> Hur långt är det mellan båtarna? Svara i km.'

            },

            answer: function () {

                return (Math.sqrt(this.a ** 2 + this.b ** 2 - 2 * this.a * this.b * Math.cos((this.angleB_deg - this.angleA_deg) * Math.PI / 180))).toFixed(2)
            },
            tipsArray: ['  Använd cosinussatsen',],
            drawTask: function () {


                // 🔧 Skala
                const skala = 10; // 1 km = 50 px

                // Fyrtornet i mitten nedtill
                const fyr = { x: 100, y: 200 };

                // Båt A: 4 km i riktning 40°
                const vAdg = this.angleA_deg
                const vA = vAdg * Math.PI / 180;
                const aX = fyr.x + this.b * skala * Math.cos(vA);
                const aY = fyr.y - this.b * skala * Math.sin(vA);

                // Båt B: 6 km i riktning 110°
                const vBdg = this.angleB_deg
                const vB = vBdg * Math.PI / 180;
                const bX = fyr.x + this.a * skala * Math.cos(vB);
                const bY = fyr.y - this.a * skala * Math.sin(vB);

                // 🚀 Proportionell förflyttning: 0 → 1
                let progress = 0;

                function ritaScen() {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    // 🟡 1. Horisontell streckad linje (referenslinje)
                    ctx.setLineDash([5, 5]);
                    ctx.beginPath();
                    ctx.moveTo(fyr.x - 80, fyr.y);
                    ctx.lineTo(fyr.x + 150, fyr.y); // Österut
                    ctx.strokeStyle = "#888";
                    ctx.stroke();
                    ctx.setLineDash([]);

                    // 🧭 2. Vinkelbåge till Båt A (40° från horisont)
                    ritaVinkelbåge(fyr.x, fyr.y, 30, 0, -vA, vAdg + "°", fyr.x + 40, fyr.y + 10, true);

                    // 🧭 3. Vinkelbåge till Båt B (110° från horisont)
                    ritaVinkelbåge(fyr.x, fyr.y, 40, Math.PI, -vB, vBdg + "°", fyr.x - 40, fyr.y - 10, false);
                    // 🗼 Fyrtorn
                    ctx.beginPath();
                    ctx.arc(fyr.x, fyr.y, 8, 0, Math.PI * 2);
                    ctx.fillStyle = "#ff4444";
                    ctx.fill();
                    ctx.font = "14px sans-serif";
                    ctx.fillText("Fyr", fyr.x + 10, fyr.y - 10);

                    // Båt A – interpolerad position
                    const curAX = fyr.x + progress * (aX - fyr.x);
                    const curAY = fyr.y + progress * (aY - fyr.y);
                    ctx.beginPath();
                    ctx.arc(curAX, curAY, 6, 0, Math.PI * 2);
                    ctx.fillStyle = "#4477ff";
                    ctx.fill();
                    ctx.fillText("Båt A", curAX + 8, curAY - 15);

                    // Båt B – interpolerad position
                    const curBX = fyr.x + progress * (bX - fyr.x);
                    const curBY = fyr.y + progress * (bY - fyr.y);
                    ctx.beginPath();
                    ctx.arc(curBX, curBY, 6, 0, Math.PI * 2);
                    ctx.fillStyle = "#33cc66";
                    ctx.fill();
                    ctx.fillText("Båt B", curBX + 20, curBY - 10);

                    // Triangel när båtarna är framme
                    if (progress >= 1) {
                        ctx.beginPath();
                        ctx.moveTo(fyr.x, fyr.y);
                        ctx.lineTo(aX, aY);
                        ctx.lineTo(bX, bY);
                        ctx.closePath();
                        ctx.strokeStyle = "#444";
                        ctx.stroke();

                        // Avstånd mellan båtarna
                        ctx.fillStyle = "black";
                        ctx.fillText("Avstånd ≈ ? km", (aX + bX) / 2 + 10, (aY + bY) / 2 - 5);
                        getCompassIcon(280, 70)
                    }

                    // ⏩ Uppdatera progress
                    if (progress < 1) {
                        progress += 0.01;
                        id = requestAnimationFrame(ritaScen);
                    }
                }

                ritaScen();

            }
        }
    ];

    let task = nivå3[getRandomInt(0, nivå3.length - 1)];

    task['eq1'] = '<p>' + task.question() + ' </p>';

    answer = task.x = task.answer();
    tipsArray = task.tipsArray;

    points = 9;


    return (task);



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
    cancelAnimationFrame(idAnimation);
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
    elements.textareaAnswerMath.innerHTML = "<p>Rätt svar : </p><div class='d-flex flex-row justify-content-around'>" + answer + '</div></p>';
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
    const Bx = Ax + a * 5, By = Ay;
    const Cx = Ax + b * Math.cos(angleA_rad) * 5;
    const Cy = Ay - b * Math.sin(angleA_rad) * 5;
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
    const angleB_rad = angleB_deg * Math.PI / 180;
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
        ctx.fillText("32°", Ax + 40, Ay - 10);
        ctx.beginPath();
        ctx.arc(Ax, Ay, 30, 0, -angleA_rad, true);
        ctx.stroke();
        ctx.fillText("47°", Bx - 60, By - 10);
        ctx.beginPath();
        console.log(angleB_rad)
        ctx.arc(Bx - 10, By, 30, Math.PI, Math.PI + Math.round(angleB_rad + 0.02, 2), false);
        ctx.stroke();
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
function drawRattvinkligTriangle(obj) {
    // 🔺 Triangeldata
    const startX = 10;
    const startY = 280;
    const a = obj.lengths[0] * 5
    // const vinkelGrad = 30;
    const vinkelRad = obj.angles[0] * Math.PI / 180;

    // Beräkna sidor
    const motstående = Math.sin(vinkelRad) * a;     // ca 50
    const närliggande = Math.cos(vinkelRad) * a;    // ca 86.6

    // 🔷 Punkter i triangeln
    const A = { x: startX, y: startY };                        // rät vinkel
    const B = { x: A.x + närliggande, y: A.y };                // intilliggande sida
    const C = { x: B.x, y: B.y - motstående };                 // motstående + hypotenusa till A

    // 🔹 Rita triangel
    ctx.beginPath();
    ctx.moveTo(A.x, A.y);
    ctx.lineTo(B.x, B.y);
    ctx.lineTo(C.x, C.y);
    ctx.closePath();

    ctx.fillStyle = "#ccf";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();

    // 🔢 Märk ut sidor
    ctx.fillStyle = "black";
    ctx.font = "14px sans-serif";
    let txt = ""
    if (visibles.sidea)
        txt += 'c=' + (visibles.lengtha ? obj.lengths[0] + " cm" : '? ')

    ctx.fillText(txt, (A.x + C.x) / 2 - 20, (A.y + C.y) / 2);      // hypotenusa
    txt = ""
    if (visibles.sidec)
        txt += 'a=' + (visibles.lengthc ? obj.lengths[1] + " cm" : '? ')

    ctx.fillText(txt, (B.x + C.x) / 2 + 5, (B.y + C.y) / 2);         // motstående
    txt = ""
    if (visibles.sideb)
        txt += 'b=' + (visibles.lengthb ? obj.lengths[1] + " cm" : '? ')

    ctx.fillText(txt, (A.x + B.x) / 2 - 15, A.y + 15);         // närliggande

    // 🔺 Vinkel 30°
    ctx.beginPath();
    ctx.arc(A.x, A.y, 30, 0, -vinkelRad, true);
    ctx.stroke();
    if (visibles.angleA) {
        ctx.fillStyle = "green";
        ctx.fillText(obj.angles[0] + "°", A.x + 32, A.y - 5);
    }


    // 🔳 Rät vinkelmarkering
    ctx.beginPath();
    ctx.moveTo(B.x - 10, B.y);
    ctx.lineTo(B.x - 10, B.y - 10);
    ctx.lineTo(B.x, B.y - 10);
    ctx.stroke();
}
function getCompassIcon(cx, cy) {

    // Centrum och radie
    console.log(cx, cy)
    const r = 40;
    ctx.fillStyle = "#000";
    // 🟠 Rita ytterring
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.strokeStyle = "#444";
    ctx.lineWidth = 2;
    ctx.stroke();

    // 🔺 Riktningspilar (N, E, S, W)
    ctx.font = "12px sans-serif";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("N", cx, cy - r + 12);
    ctx.fillText("S", cx, cy + r - 12);
    ctx.fillText("E", cx + r - 12, cy);
    ctx.fillText("W", cx - r + 12, cy);

    // 🔺 Röd nordpil (riktad uppåt)
    ctx.beginPath();
    ctx.moveTo(cx, cy - 20);
    ctx.lineTo(cx - 6, cy);
    ctx.lineTo(cx + 6, cy);
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();

    // 🔻 Grå sydpil (riktad nedåt)
    ctx.beginPath();
    ctx.moveTo(cx, cy + 20);
    ctx.lineTo(cx - 6, cy);
    ctx.lineTo(cx + 6, cy);
    ctx.closePath();
    ctx.fillStyle = "#888";
    ctx.fill();


    // 🔘 Inre cirkel (design)
    ctx.beginPath();
    ctx.arc(cx, cy, 4, 0, Math.PI * 2);
    ctx.fillStyle = "#222";
    ctx.fill();
}
// 🔄 Hjälpfunktion: rita vinkelbåge
function ritaVinkelbåge(cx, cy, radie, startV, slutV, label, labelX, labelY, moturs) {
    ctx.beginPath();
    ctx.arc(cx, cy, radie, startV, slutV, moturs);
    ctx.strokeStyle = "#aa00aa";
    ctx.stroke();

    ctx.fillStyle = "#aa00aa";
    ctx.fillText(label, labelX, labelY);
}
