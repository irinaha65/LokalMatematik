
document.getElementById('eqvTyp').innerHTML = "canvas"
var ctx, canvas

//var answer; deklareras i huvudfilen
//easier equation 2 st 
function getRandomGame() {
    variables.checked = getRandomInt(1, 5)
    console.log(variables.checked);
    return variables.checked;
}
var height = 200;
var radius = 80;
var points = 0;
var tipsArray = [];
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

    console.dir(task);
    task['eq1'] = '<p>' + task.question() + ' </p>';
    answer = task['x'] = task['ans'] = task.answer().toFixed(2);
    tipsArray = task.tipsArray;

    points = 3;


    return (task);


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
            tipsArray: ['Volym av en cylinder är V = π𝑟²ℎ',],
            drawTask: function () {

                getCilnder(ctx, radius, height)

                function getCilnder(ctx, radius, height) {
                    // Cylinderparametrar
                    const andel = radius / height
                    const centerX = 100;
                    const topY = 300 - height - 30; // Toppen av cylindern
                    radius = 80;
                    height = 200 * andel;

                    // Rita övre ellips (toppen)
                    ctx.beginPath();
                    ctx.ellipse(centerX, topY, radius, 30, 0, 0, 2 * Math.PI);
                    ctx.strokeStyle = 'blue';
                    ctx.stroke();

                    // Rita nedre ellips (botten)
                    ctx.beginPath();
                    ctx.ellipse(centerX, topY + height, radius, 30, 0, 0, 2 * Math.PI);
                    ctx.strokeStyle = 'blue';
                    ctx.stroke();

                    // Rita vänstra sidan
                    ctx.beginPath();
                    ctx.moveTo(centerX - radius, topY);
                    ctx.lineTo(centerX - radius, topY + height);
                    ctx.stroke();

                    // Rita högra sidan
                    ctx.beginPath();
                    ctx.moveTo(centerX + radius, topY);
                    ctx.lineTo(centerX + radius, topY + height);
                    ctx.stroke();

                    // Rita radie r
                    ctx.beginPath();
                    ctx.moveTo(centerX, topY);
                    ctx.lineTo(centerX + radius - 20, topY + 20);
                    ctx.strokeStyle = 'purple';
                    ctx.stroke();
                    ctx.font = "16px Arial";
                    ctx.fillText("r", centerX + radius / 2 - 10, topY - 10);

                    // Rita höjd h
                    ctx.beginPath();
                    ctx.moveTo(centerX + radius - 20, topY + 20);
                    ctx.lineTo(centerX + radius - 20, topY + height + 20);
                    ctx.strokeStyle = 'green';
                    ctx.stroke();
                    ctx.fillStyle = 'black';
                    ctx.fillText("h", centerX + radius / 2 + 30, topY + height - 10);
                    // Rita  ellips (halv)
                    // Set the dash pattern
                    ctx.setLineDash([10, 5]); // First value is dash length, second is gap

                    ctx.beginPath();
                    ctx.ellipse(centerX, topY + height / 2, radius, 30, 0, 0, 2 * Math.PI);
                    ctx.strokeStyle = 'grey';
                    ctx.stroke();
                }
            }
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

            tipsArray: ['Volym av en cylinder är V = π𝑟²ℎ'],
            drawTask: function () {

                getCilnder(ctx, radius, height)

                function getCilnder(ctx, radius, height) {
                    // Cylinderparametrar
                    const andel = radius / height
                    const centerX = 100;
                    const topY = 300 - height - 30; // Toppen av cylindern
                    radius = 80;
                    height = 200 * andel;

                    // Rita övre ellips (toppen)
                    ctx.beginPath();
                    ctx.ellipse(centerX, topY, radius, 30, 0, 0, 2 * Math.PI);
                    ctx.strokeStyle = 'blue';
                    ctx.stroke();

                    // Rita nedre ellips (botten)
                    ctx.beginPath();
                    ctx.ellipse(centerX, topY + height, radius, 30, 0, 0, 2 * Math.PI);
                    ctx.strokeStyle = 'blue';
                    ctx.stroke();

                    // Rita vänstra sidan
                    ctx.beginPath();
                    ctx.moveTo(centerX - radius, topY);
                    ctx.lineTo(centerX - radius, topY + height);
                    ctx.stroke();

                    // Rita högra sidan
                    ctx.beginPath();
                    ctx.moveTo(centerX + radius, topY);
                    ctx.lineTo(centerX + radius, topY + height);
                    ctx.stroke();

                    // Rita radie r
                    ctx.beginPath();
                    ctx.moveTo(centerX, topY);
                    ctx.lineTo(centerX + radius - 20, topY + 20);
                    ctx.strokeStyle = 'purple';
                    ctx.stroke();
                    ctx.font = "16px Arial";
                    ctx.fillText("r", centerX + radius / 2 - 10, topY - 10);

                    // Rita höjd h
                    ctx.beginPath();
                    ctx.moveTo(centerX + radius - 20, topY + 20);
                    ctx.lineTo(centerX + radius - 20, topY + height + 20);
                    ctx.strokeStyle = 'green';
                    ctx.stroke();
                    ctx.fillStyle = 'black';
                    ctx.fillText("h", centerX + radius / 2 + 30, topY + height - 10);
                    // Rita  ellips (halv)
                    // Set the dash pattern
                    ctx.setLineDash([10, 5]); // First value is dash length, second is gap

                    ctx.beginPath();
                    ctx.ellipse(centerX, topY - height, radius, 30, 0, 0, 2 * Math.PI);
                    ctx.strokeStyle = 'grey';
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(centerX - radius, topY);
                    ctx.lineTo(centerX - radius, topY - height);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(centerX + radius, topY);
                    ctx.lineTo(centerX + radius, topY - height);
                    ctx.stroke();
                }
            }

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
                'Cylinders sida är en rektangel', 'Mantelarean : 𝐴 = 2𝜋𝑟ℎ '],
            drawTask: function () {

                getCilnder(ctx, radius, height)

                function getCilnder(ctx, radius, height) {

                    // Cylinderparametrar
                    const cyl = {
                        x: 100,
                        y: 100,
                        width: radius * 2,      // diameter
                        height: height,
                        edge: 10        // för ellipsens vertikala "höjd"
                    };
                    // 🌓 Mörkare baksida (höger halva)
                    ctx.fillStyle = "#999999"; // mörkgrå

                    ctx.beginPath();
                    // Start vid mitten-toppen
                    ctx.moveTo(cyl.x, cyl.y);
                    // Gå ner längs höger sida
                    ctx.lineTo(cyl.x + cyl.width, cyl.y);
                    // Gå ner längs höger sida
                    ctx.lineTo(cyl.x + cyl.width, cyl.y + cyl.height);
                    ctx.closePath();
                    ctx.fill();
                    // Höger halva av topp-ellips
                    ctx.ellipse(
                        cyl.x + cyl.width / 2,
                        cyl.y,
                        cyl.width / 2,
                        cyl.edge,
                        0,
                        0,
                        Math.PI * 2
                    );
                    ctx.fill();


                    ctx.fillStyle = "#cccccc"; // 🔸 Välj din färg för manteln

                    ctx.beginPath();

                    // Vänster sida av manteln (start vid topp)
                    ctx.moveTo(cyl.x, cyl.y);

                    // Övre ovalbåge
                    ctx.ellipse(
                        cyl.x + cyl.width / 2,
                        cyl.y,
                        cyl.width / 2,
                        cyl.edge,
                        0,
                        0,
                        Math.PI * 2
                    );

                    // Höger kant
                    ctx.lineTo(cyl.x + cyl.width, cyl.y + cyl.height);

                    // Nedre ovalbåge
                    ctx.ellipse(
                        cyl.x + cyl.width / 2,
                        cyl.y + cyl.height,
                        cyl.width / 2,
                        cyl.edge,
                        0,
                        0,
                        Math.PI
                    );

                    // Tillbaka till startpunkt
                    ctx.closePath();

                    // Fyll manteln
                    ctx.fill();

                    // (valfritt) Rita kantlinje
                    ctx.strokeStyle = "black";
                    ctx.stroke();
                }
            }
        },


    ];

    let task = nivå2[getRandomInt(0, nivå2.length - 1)];
    task.r = getRandomPositiveExklArray(20, 50, [0]);
    task.h = getRandomPositiveExklArray(50, 200, [0]);

    radius = task.r;
    height = task.h;
    //console.dir(sum);

    console.dir(task);
    task['eq1'] = '<p>' + task.question() + ' </p>';
    answer = task['x'] = task['ans'] = task.answer().toFixed(2);
    tipsArray = task.tipsArray;

    points = 6;


    return (task);



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

    console.dir(task);
    task['eq1'] = '<p>' + task.question() + ' </p>';
    answer = task['x'] = task['ans'] = task.answer().toFixed(2);
    tipsArray = task.tipsArray;

    points = 9;


    return (task);


}

function genEqHard2() {                               // Vilket värde har x om 1/2+1/3+x=1
    let task = new Object();
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
                    'Hur mycket vätska finns det totalt i cylindern efter dessa tre steg? Svara i ml '
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
            drawTask: function () {
                const cyl = {
                    x: 100,
                    y: 60,
                    width: 100,
                    height: 200,
                    edge: 20
                };
                const nivåer = 3;
                const nivåHöjder = [0, cyl.height / 4, (cyl.height + cyl.height / 4) / 2, cyl.height];
                const färger = ["#00bfff", "#00cc99", "#9966cc"]; // blå, grönblå, lila
                let aktuellNivå = 0;
                const stegTid = 1200;
                const etiketter = ["1/4", "1/2", "500 ml"];
                function ritaCylinder3(nivåIndex) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                    // 1. Toppoval
                    ctx.fillStyle = "#ccc";
                    ctx.beginPath();
                    ctx.ellipse(cyl.x + cyl.width / 2, cyl.y, cyl.width / 2, cyl.edge, 0, 0, Math.PI * 2);
                    ctx.fill();

                    // 2. Mantel (väggar)
                    ctx.fillStyle = "#e0e0e0";
                    ctx.fillRect(cyl.x, cyl.y, cyl.width, cyl.height);



                    // 4. Rita vätskenivåer
                    for (let i = 0; i < nivåIndex; i++) {

                        const nivåTop = cyl.y + cyl.height - nivåHöjder[i + 1];
                        const nivåHöjd = nivåHöjder[i + 1] - nivåHöjder[i];
                        console.log(nivåHöjd)
                        ctx.fillStyle = färger[i];
                        ctx.fillRect(cyl.x, nivåTop, cyl.width, nivåHöjd);

                        // Yta (oval) endast för översta nivån

                        ctx.beginPath();
                        ctx.ellipse(cyl.x + cyl.width / 2, nivåTop, cyl.width / 2, cyl.edge, 0, 0, Math.PI * 2);
                        ctx.fill();
                        // Yta (oval) endast för botten av  nivån

                        ctx.beginPath();
                        ctx.ellipse(cyl.x + cyl.width / 2, nivåTop + nivåHöjd, cyl.width / 2, cyl.edge, 0, 0, Math.PI);
                        ctx.fill();
                        ctx.strokeStyle = "black";
                        ctx.beginPath();
                        ctx.ellipse(cyl.x + cyl.width / 2, nivåTop, cyl.width / 2, cyl.edge, 0, 0, Math.PI * 2);
                        ctx.stroke();
                        // 🏷 Textetikett från uppgiften
                        const text = etiketter[i];
                        ctx.fillStyle = "black";
                        ctx.font = "14px sans-serif";
                        ctx.fillText(text, cyl.x + cyl.width + 10, nivåTop + nivåHöjd / 2 + 5);
                        if (i == 0) {
                            // 🔹 Måttlinje från nivå till etikett
                            ctx.strokeStyle = "gray";
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(cyl.x + cyl.width, nivåTop + nivåHöjd / 2);
                            ctx.lineTo(cyl.x + cyl.width + 8, nivåTop + nivåHöjd / 2);
                            ctx.stroke();
                        }
                        else {
                            // 🔹 Måttlinje från nivå till etikett
                            ctx.strokeStyle = "gray";
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(cyl.x + cyl.width, nivåTop + nivåHöjd);
                            ctx.lineTo(cyl.x + cyl.width + 8, nivåTop + nivåHöjd);
                            ctx.lineTo(cyl.x + cyl.width + 8, nivåTop);
                            ctx.lineTo(cyl.x + cyl.width, nivåTop);
                            ctx.stroke();
                        }

                    }

                    // 5. Botten – främre halva
                    ctx.fillStyle = färger[0];
                    ctx.beginPath();
                    ctx.ellipse(cyl.x + cyl.width / 2, cyl.y + cyl.height, cyl.width / 2, cyl.edge, 0, 0, Math.PI);
                    ctx.fill();

                    // 6. Konturer
                    ctx.strokeStyle = "black";
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.ellipse(cyl.x + cyl.width / 2, cyl.y, cyl.width / 2, cyl.edge, 0, 0, Math.PI * 2);
                    ctx.moveTo(cyl.x, cyl.y);
                    ctx.lineTo(cyl.x, cyl.y + cyl.height);
                    ctx.moveTo(cyl.x + cyl.width, cyl.y);
                    ctx.lineTo(cyl.x + cyl.width, cyl.y + cyl.height);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.ellipse(cyl.x + cyl.width / 2, cyl.y + cyl.height, cyl.width / 2, cyl.edge, 0, 0, Math.PI);
                    ctx.stroke();
                    // 7. Text
                    ctx.fillStyle = "black";
                    ctx.font = "12px sans-serif";
                    ctx.fillText(`Steg: ${nivåIndex} / 3`, cyl.x + 20, cyl.y + cyl.height + 30);
                }

                function startAnimation3() {
                    aktuellNivå = 0;
                    // document.getElementById("status").textContent = "Fyller steg...";

                    function nästaSteg() {
                        if (aktuellNivå < nivåer) {
                            aktuellNivå++;
                            ritaCylinder3(aktuellNivå);
                            setTimeout(nästaSteg, stegTid);
                        } else {
                            // document.getElementById("status").textContent = "✔ Alla steg fyllda!";
                        }
                    }

                    ritaCylinder3(0);
                    setTimeout(nästaSteg, stegTid);
                }

                startAnimation3();

            },
            tipsArray: ['Volym av en cylinder är V = π𝑟²ℎ', 'Räkna hela volymen och dess andelar som fylls i två första steg ', 'Plussa på alla fyllningar']
        },
        {
            r: 10, h: 30,
            question: function () {
                return 'Cylinder med radie ' + this.r + ' cm fylls med hastigheten 150 ml/min.<br />' +
                    'Hur lång tid tar det tills vattennivån når 10 cm ? Svara i minuter '
            },
            drawTask: function () {

                const r = 3; // cm
                const maxHöjd = 10; // cm
                const fyllHastighet = 150; // cm³/min
                const målVolym = Math.PI * r * r * maxHöjd;
                const totalTid = målVolym / fyllHastighet;
                const totalSek = totalTid * 60;

                const cyl = {
                    x: 100,
                    y: 50,
                    width: 100,
                    height: 200,
                    edge: 20
                };

                let nivå = 0;
                let tid = 0;
                const fps = 30;
                const nivåPerFrame = maxHöjd / (totalSek * fps);

                function drawCylinder1(nivåCm) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    const nivåPx = (nivåCm / maxHöjd) * cyl.height;
                    const vattenY = cyl.y + cyl.height - nivåPx;

                    // 1. Toppoval (ovanifrån)
                    ctx.fillStyle = "#ccc";
                    ctx.beginPath();
                    ctx.ellipse(cyl.x + cyl.width / 2, cyl.y, cyl.width / 2, cyl.edge, 0, 0, Math.PI * 2);
                    ctx.fill();

                    // 2. Mantel (väggar)
                    ctx.fillStyle = "#e0e0e0";
                    ctx.fillRect(cyl.x, cyl.y, cyl.width, cyl.height);



                    // 4. Vattenmantel
                    ctx.fillStyle = "#0095dd";
                    ctx.fillRect(cyl.x, vattenY, cyl.width, nivåPx);

                    // 5. Vattenyta (oval)
                    ctx.fillStyle = "#0095dd";
                    ctx.beginPath();
                    ctx.ellipse(cyl.x + cyl.width / 2, vattenY, cyl.width / 2, cyl.edge, 0, 0, Math.PI * 2);
                    ctx.fill();

                    // 6. Botten – främre halva (ljusare skugga)
                    ctx.fillStyle = "#0095dd";
                    ctx.beginPath();
                    ctx.ellipse(cyl.x + cyl.width / 2, cyl.y + cyl.height, cyl.width / 2, cyl.edge, 0, 0, Math.PI, false);
                    ctx.fill();

                    // 7. Konturlinjer
                    ctx.strokeStyle = "black";
                    ctx.lineWidth = 1.5;

                    // Topplinje
                    ctx.beginPath();
                    ctx.ellipse(cyl.x + cyl.width / 2, cyl.y, cyl.width / 2, cyl.edge, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // 5. Vattenyta (oval)
                    ctx.fillStyle = "#ccc";
                    ctx.beginPath();
                    ctx.ellipse(cyl.x + cyl.width / 2, vattenY, cyl.width / 2, cyl.edge, 0, 0, Math.PI * 2);
                    ctx.stroke();
                    // 6. Botten – främre halva (ljusare skugga)
                    ctx.fillStyle = "#0095dd";
                    ctx.beginPath();
                    ctx.ellipse(cyl.x + cyl.width / 2, cyl.y + cyl.height, cyl.width / 2, cyl.edge, 0, 0, Math.PI, false);
                    ctx.stroke();
                    // Sidlinjer
                    ctx.beginPath();
                    ctx.moveTo(cyl.x, cyl.y);
                    ctx.lineTo(cyl.x, cyl.y + cyl.height);
                    ctx.moveTo(cyl.x + cyl.width, cyl.y);
                    ctx.lineTo(cyl.x + cyl.width, cyl.y + cyl.height);
                    ctx.stroke();
                    // Text
                    ctx.fillStyle = "black";
                    ctx.font = "12px sans-serif";
                    ctx.fillText(`Nivå: ${nivåCm.toFixed(1)} cm`, cyl.x + 10, cyl.y + cyl.height + 30);
                    //  ctx.fillText(`Tid: ${(tid / 60).toFixed(2)} min`, cyl.x + 10, cyl.y + cyl.height + 50);
                }

                function animera1() {

                    if (nivå < maxHöjd) {
                        nivå += nivåPerFrame;
                        tid += 1 / fps;
                        drawCylinder1(nivå);
                        idAnimation = requestAnimationFrame(animera1);
                    } else {
                        drawCylinder1(maxHöjd);
                        document.getElementById("status").textContent =
                            `✔ Färdig!  `;

                    }
                }

                drawCylinder1(0);
                animera1();
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

    task = nivå5[getRandomInt(0, nivå5.length - 1)];
    task.r = getRandomPositiveExklArray(20, 50, [0]);
    task.h = getRandomPositiveExklArray(80, 200, [0]);

    radius = task.r;
    height = task.h;

    console.dir(task);
    task['eq1'] = '<p>' + task.question() + ' </p>';
    answer = task['x'] = task['ans'] = task.answer().toFixed(2);
    tipsArray = task.tipsArray;
    points = 15;
    return (task);
}


//This runs on line 200 within validate function                                                                                                                RUN - RUN - RUN
function run() {
    iniElements(); var ek = [];
    document.getElementById('canvas-container').innerHTML =
        ' <p id="status"></p><canvas id="myCanvas" width="300" height="300"></canvas>';
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
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

    var eq = (ek['eq1'])
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
    createAnswerCache(ek);
    console.dir(tipsArray);
    createTipsEq(tipsArray);
    elements.img_out.innerHTML = "";
    elements.inputX.type = "text"
    elements.inputX.value = "";
    elements.inputX.focus();
    hideElement(elements.saveBtn);
    hideAnswer()
    if (typeof ek.drawTask === 'function') ek.drawTask()
    else draw();
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
    let inp = elements.inputX.value;
    inp = inp.replace(",", ".");
    let svarX = parseFloat(inp).toFixed(2)

    console.log("cache.ansx " + cache.ansX + "    svarx " + svarX);
    if (svarX == parseFloat(cache.ansX).toFixed(2)) successX();
    else
        errorX();

}




function draw() {
    document.getElementById('canvas-container').innerHTML =
        '<canvas id="myCanvas" width="300" height="300"></canvas>';
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    getCilnder(ctx, radius, height)
}
function getCilnder(ctx, radius, height) {
    // Cylinderparametrar
    const andel = radius / height
    const centerX = 100;
    const topY = 250 - height - 30; // Toppen av cylindern
    radius = 80;
    height = 200 * andel;

    // Rita övre ellips (toppen)
    ctx.beginPath();
    ctx.ellipse(centerX, topY, radius, 30, 0, 0, 2 * Math.PI);
    ctx.strokeStyle = 'blue';
    ctx.stroke();

    // Rita nedre ellips (botten)
    ctx.beginPath();
    ctx.ellipse(centerX, topY + height, radius, 30, 0, 0, 2 * Math.PI);
    ctx.strokeStyle = 'blue';
    ctx.stroke();

    // Rita vänstra sidan
    ctx.beginPath();
    ctx.moveTo(centerX - radius, topY);
    ctx.lineTo(centerX - radius, topY + height);
    ctx.stroke();

    // Rita högra sidan
    ctx.beginPath();
    ctx.moveTo(centerX + radius, topY);
    ctx.lineTo(centerX + radius, topY + height);
    ctx.stroke();

    // Rita radie r
    ctx.beginPath();
    ctx.moveTo(centerX, topY);
    ctx.lineTo(centerX + radius - 20, topY + 20);
    ctx.strokeStyle = 'purple';
    ctx.stroke();
    ctx.font = "16px Arial";
    ctx.fillText("r", centerX + radius / 2 - 10, topY - 10);

    // Rita höjd h
    ctx.beginPath();
    ctx.moveTo(centerX + radius - 20, topY + 20);
    ctx.lineTo(centerX + radius - 20, topY + height + 20);
    ctx.strokeStyle = 'green';
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fillText("h", centerX + radius / 2 + 30, topY + height - 10);
}

