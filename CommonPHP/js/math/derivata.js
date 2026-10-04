
document.getElementById('eqvTyp').innerHTML = 'text'
var ctx, canvas

var points = 0;
var tipsArray = [];

//var answer; deklareras i huvudfilen
//easier equation 2 st 
function getRandomGame() {
    variables.checked = 1 //getRandomInt(1, 5)
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
function polynom3(b, c, d, e) {
    /**x⁴ (x + 2)³
🧠 Unicode exponenter:

² = \u00B2

³ = \u00B3

⁴ = \u2074

⁵ = \u2075

 */

    const uttryck = taBortEttor(`${b}x\u00B3 ${sign(c)}${led(c)}x\u00B2 ${sign(d)}${led(d)}x ${sign(e)}${Math.abs(e)}`);
    console.log(uttryck)
    return uttryck.replace(/\s+/g, ' ').trim();
}
function getPolynom2(a, b, c) {


    let uttryck = `${a}x² ${sign(b)}${led(b)}x ${sign(c)}${Math.abs(c)}`;
    uttryck = taBortEttor(uttryck);
    return uttryck.replace(/\+\s-/, '- ').replace(/^\+\s/, '').trim();
}
function getPolynom1(b, c) {


    let uttryck = `${sign(b)}${led(b)}x ${sign(c)}${Math.abs(c)}`;
    uttryck = taBortEttor(uttryck);
    return uttryck.replace(/\+\s-/, '- ').replace(/^\+\s/, '').trim();
}

function genEqEasy1() {

    // === Parametrar ===



    //skapa uppgifter från polygon värden
    //ax^2+bx+c
    // Derivera: f'(x) = 2a x + b
    const nivå1 = [
        //rätvinkliga trianglar
        {
            a: getRandomInt(-5, 5),
            b: getRandomInt(-10, 10),
            c: getRandomInt(-10, 10),
            question: function () {

                return `Derivera: <br/>f(x) = ${getPolynom2(this.a, this.b, this.c)}`;
            },

            answers: function () {
                let pol = getPolynom1(2 * this.a, this.b)
                return [pol, pol]
            },
            tipsArray: [" Använd formeln: (kx^n)' = knx^(n-1)",],

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



    /*function kontrollera() {
        const elevSvar = document.getElementById("svar").value;
        const elevF = math.parse(taBortEttor(elevSvar)).compile();
        const korrektF = math.parse(korrektDerivata).compile();

        const testX = [-2, -1, 0, 1, 2];
        try {
            for (let x of testX) {
                const v1 = korrektF.evaluate({ x });
                const v2 = elevF.evaluate({ x });
                if (Math.abs(v1 - v2) > 1e-6) {
                    visaResultat("❌ Fel svar. Försök igen!", false);
                    return;
                }
            }
            visaResultat("✅ Rätt svar!", true);
        } catch {
            visaResultat("🚫 Ogiltigt uttryck!", false);
        }
    }*/


    const nivå2 = [
        {
            a: slumpTal(-3, 3),
            b: slumpTal(-5, 5),
            c: slumpTal(-8, 8),
            d: slumpTal(-5, 5),
            e: slumpTal(-9, 9),
            question: function () {
                const pol = polynom4(this.a, this.b, this.c, this.d, this.e)
                return "Derivera: <br />f(x) = " + pol;

                // Derivata: 4a x^3 + 3b x^2 + 2c x + d


            },

            answers: function () {
                return [polynom3(4 * this.a, 3 * this.b, 2 * this.c, this.d),
                polynom3Answer(4 * this.a, 3 * this.b, 2 * this.c, this.d)]
            },

            tipsArray: [" Använd formeln: (kx^n)' = knx ^ (n - 1)",]
        }
    ]

    let task = nivå2[getRandomInt(0, nivå2.length - 1)];

    task['eq1'] = '<p>' + task.question() + ' </p>';

    answer = task.answers()[0];

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
    ]

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
    elements.inputX.type = "text"
    iniElements(); var ek = [];
    elements.helpname.innerHTML = "Derivera:"
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
    // document.getElementById('canvas-container').innerHTML =
    //     '<canvas id="myCanvas" width="600" height="300"></canvas>';
    //canvas = document.getElementById('myCanvas');
    // ctx = canvas.getContext("2d");
    // cancelAnimationFrame(idAnimation);
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

    elements.textareaHelpMath.innerHTML = texElementDivs.derivata;
    elements.textareaHelpMath.classList.add("mathfont");
    elements.textareaAnswerMath.innerHTML = "<p>Rätt svar : </p><div class='d-flex flex-row justify-content-around'>" + answer + '</div></p>';
    elements.textareaAnswerMath.classList.add("mathfont");
    elements.task.innerHTML = "Skriv ditt uttryck";
    createTextAnswerCache(ek);
    console.dir(tipsArray);
    createTipsEq(tipsArray);

    elements.inputX.type = "text"
    elements.inputX.value = "";
    elements.inputX.focus();
    hideElement(elements.saveBtn);
    hideAnswer()
    console.log(ek)


    // 
}



function validateX() {
    let inp = elements.inputX.value;
    inp = inp.replace(",", ".");


    console.log("cache.ansx " + cache.ansX + "cache.ansY " + cache.ansY + "    svarx " + inp);
    if (arSammaDerivata(cache.ansX, inp) || arSammaDerivata(cache.ansY, inp)) successX();
    else
        errorX();

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
        .replace(/\b-1(?=[a-zA-Z])/g, '-'); // byt ut -1x → -x
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


