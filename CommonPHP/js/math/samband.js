//easier dec a= 1
let tipsArray = [];

let problems1 = [
    /*
    
    answer1
: 
null
answers: "ABB"
bg
: 
""
code
: 
""
image: "1-1.PNG"
moodle
: 
""
name
: 
null
needs
: 
""
notations
: 
null
pointsToEnd: "3"
question
: 
null
rank
: 
"1"
scene_name
: 
""
tips
: 
"Arket är från början vänt så att det kan föras i ritmaskinen, A. Maskinen ritar en horisontell linje.¤¤\r\nDärefter använder vi vridmaskinen, B, för att vrida arket 90° och eftersom den bara vrider 45° i taget så måste den användas 2 gånger.\r\n"
type
: 
"samband1"
_id
: 
"2
    */
    /*{
    eq1: '<img src="' + IMAGE_PATH + '1-2.PNG"/>',
    tipsArray: [

        'Räkna hur många hela kvadrater innehåller varje figur',
        'Två halvor har samma yta som en hel kavdrat ',
    ],
    ans: 'C'
},
{
    eq1: '<img src="' + IMAGE_PATH + '1-1.PNG"/>',
    tipsArray: [
        'Arket är från början vänt så att det kan föras i ritmaskinen, A. och maskinen ritar en horisontell linje.',
        ' Därefter använder vi vridmaskinen, B, för att vrida arket 90° och eftersom den bara vrider 45° i taget så måste den användas 2 gånger.'

    ],
    ans: 'ABB'
}*/
]
var problems2 = [
]

var problems3 = [
]
function getRandomGame() {
    variables.checked = getRandomInt(1, 3)
    console.log(variables.checked);
    return variables.checked;
}
function genEqGrund() {

    points = 5;

    return (problems1[getRandomInt(0, problems1.length - 1)]);

}
//easy with *
function genEqEasy1() {

    points = 8;
    console.dir(problems1);
    return (problems1[getRandomInt(0, problems1.length - 1)]);

}

//medel1 : en konstant
function genEqMed1() {


    points = 10;
    return (problems2[getRandomInt(0, problems2.length - 1)]);

}
//två konstanter
function genEqMed2() {

    points = 15;

    return (problems3[getRandomInt(0, problems3.length - 1)]);

}

//equations with &#119961; on both sides
function genEqHard1() {

    points = 16;
    return (IDs);

}
//equations with &#119961; on both sides and divition
function genEqHard2() {

    points = 18;
    return (IDs);


}
function initProblems() {

    //fetch('https://frozenland.servegame.com/CommonPHP/api/apiQuestion.php?type=samband1').
    apiRequest('https://frozenland.servegame.com/CommonPHP/api/apiQuestion.php?type=samband1')
        // .then(json => problems1 = JSON.parse(json)
        // ).then();
        .then(data => problems1 = data).then(() => {
            problems1.forEach(element => {
                // element.tipsArray = JSON.parse(element.tips);
                console.log(element.tips);
            });
        })
    apiRequest('https://frozenland.servegame.com/CommonPHP/api/apiQuestion.php?type=samband3')
        // .then(json => problems1 = JSON.parse(json)
        // ).then();
        .then(data => problems3 = data).then(() => {
            problems3.forEach(element => {
                // element.tipsArray = JSON.parse(element.tips);
                console.log(element.tips);
            });
        })
    apiRequest('https://frozenland.servegame.com/CommonPHP/api/apiQuestion.php?type=samband2')
        // .then(json => problems1 = JSON.parse(json)
        // ).then();
        .then(data => problems2 = data).then(() => {
            problems2.forEach(element => {
                // element.tipsArray = JSON.parse(element.tips);
                console.log(element.tips);
            });
        })
}
function getProblemDiv(prob) {
    var div = document.createElement("div");

    tipsArray = [];

    tipsArray = (JSON.parse("" + prob.tips));


    div.innerHTML = prob.question;
    if (prob.image) {
        var img = document.createElement("img");
        img.src = IMAGE_PATH + prob.image;
        img.classList.add("problemImage");

        div.appendChild(img);


    }


    cache.ansX = [];
    cache.ansX = (JSON.parse("" + prob.answers));

    answer = cache.ansX.toString();



    console.dir(cache);
    return div;
}
//This runs on line 200 within validate function                                                                                                                RUN - RUN - RUN
function run() {
    var ek = [];

    // console.dir(elements.menu);
    elements.helpname.innerHTML = "Fyra räknesätt";
    elements.textareaHelpMath.innerHTML = texElementDivs.bl;
    elements.textareaHelpMath.classList.add("mathfont");
    elements.output_eqvX.style.display = "block";
    elements.output_eqvX.classList.add("mathfont");
    elements.labelAns1.innerHTML = "";
    elements.eqv_tipsrows.innerHTML = '';
    //  hideAnswerY();


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



    let eq = getProblemDiv(ek);
    console.dir(eq.innerHTML);
    eqv.innerHTML = eq.innerHTML;

    //ocument.getElementById('pointsIn').innerHTML = "" + roundDecimalsZeros(points.toFixed(2));
    elements.textareaAnswerMath.innerHTML = "Exempel på rätt svar:  " + (answer);
    elements.textareaAnswerMath.classList.add("mathfont");
    elements.textareaAnswerMath.style.display = "none";

    elements.form1.style.display = "block"

    elements.task.innerHTML = ""

    showElement(elements.inputX)
    elements.inputX.value = "";
    elements.inputX.type = "text";
    elements.answerBlock.style.display = "flex";
    elements.inputX.focus();
    hideElement(elements.labelAns2);
    hideElement(elements.inputY);
    hideElement(elements.saveBtn);
    console.dir(tipsArray);
    createTipsEq(tipsArray);
}


function savePoints() {

    if (validateX()) {
        //elements.points.val(parseFloat(elements.points.val())+ p);
        alert("Helt rätt!");
        saveScore();

    } else {

        alert("Nästan rätt! Rätt svar är " + answer);
    }


    document.getElementById("form1").style.display = 'none';
    document.getElementById('gameBtn').focus();
}





function validateX() {


    if (cache.ansX.includes(elements.inputX.value.toUpperCase())) {
        elements.inputX.classList.add('success'); return true
    }
    return false

}
