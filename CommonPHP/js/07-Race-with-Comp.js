/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function carClass() {
    this.x = 75;
    this.Y = 75;
    this.speed = 0;
    this.ang = 0;
    this.myCarPic;
    this.name = "Untitled Car";
    this.keyHeld_Gas = false;
    this.keyHeld_Reverse = false;
    this.keyHeld_TurnLeft = false;
    this.keyHeld_TurnRight = false;
    this.type = "user";
    this.controlKeyUp;
    this.controlKeyRight;
    this.controlKeyDown;
    this.controlKeyLeft;

    this.setupInput = function (up, right, down, left) {
        this.controlKeyUp = up;
        this.controlKeyRight = right;
        this.controlKeyDown = down;
        this.controlKeyLeft = left;
    }

    this.move = function () {
        this.speed *= GROUNDSPEED_DECAY_MULT; //friktion, saktar med tiden om man inte håller gasen
        if (this.keyHeld_Gas) { this.speed += DRIVE_POWER; }
        else if (this.keyHeld_Reverse) { this.speed -= REVERSE_POWER; }

        //  console.log(this.ang)
        this.x += Math.cos(this.ang) * this.speed;
        this.y += Math.sin(this.ang) * this.speed;
        carTrackHandling(this);

    };

    this.reset = function (whichImage, carName) {
        this.name = carName;
        this.myCarPic = whichImage;
        this.speed = 0;
        for (row = 0; row < TRACK_ROWS; row++) {
            for (col = 0; col < TRACK_COLS; col++) {
                let arrayIndex = rowColToArrayIndex(col, row);
                //  console.log(arrayIndex);
                if (track_grid[arrayIndex] === TRACK_PLAYERSTART) {
                    track_grid[arrayIndex] = TRACK_ROAD;
                    this.x = TRACK_W * col + TRACK_W / 2;
                    this.y = TRACK_H * row + TRACK_H / 2;
                    return;
                }
            }
        }
    };

    this.draw = function () {

        drawBitMapCenteredWithRotation(this.myCarPic, this.x, this.y, this.ang);

    };

}

//car-comp
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const GROUNDSPEED_DECAY_MULT = 0.8;
const DRIVE_POWER = 0.9;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.025;
const MIN_SPEED_TO_TURN = 0.02;
const TRACK_COMP = 6;
const ROTATE_RIGHT_COMP = 7;
const ROTATE_LEFT_COMP = 8;
const STOP_COMP = 9;
let levelOneComp =
    [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        4, 0, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1,
        1, 6, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 6, 1,
        1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 5, 6, 7, 1,
        1, 1, 4, 4, 1, 6, 6, 1, 1, 5, 6, 6, 4, 6, 1, 1, 1, 6, 6, 1,
        1, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 1, 1, 6, 1, 6, 6, 1,
        1, 8, 6, 5, 6, 4, 1, 1, 6, 6, 1, 1, 6, 1, 6, 6, 1, 6, 6, 1,
        1, 8, 8, 8, 6, 1, 1, 6, 5, 8, 6, 1, 6, 1, 6, 6, 1, 6, 6, 1,
        1, 8, 6, 6, 6, 6, 1, 9, 8, 6, 8, 1, 1, 1, 6, 6, 1, 6, 6, 1,
        1, 8, 6, 6, 6, 8, 6, 9, 6, 6, 6, 6, 6, 8, 8, 6, 5, 6, 7, 1,
        8, 8, 6, 6, 9, 6, 6, 9, 6, 7, 7, 7, 6, 6, 6, 6, 6, 7, 7, 1,
        8, 8, 8, 6, 6, 7, 6, 6, 7, 7, 1, 7, 6, 6, 6, 6, 7, 7, 1, 1,
        1, 3, 3, 4, 1, 7, 7, 7, 7, 7, 1, 6, 7, 7, 6, 6, 7, 1, 4, 1,
        1, 1, 1, 4, 4, 1, 7, 5, 7, 4, 1, 1, 5, 7, 7, 7, 1, 1, 4, 4,
        1, 1, 4, 4, 4, 4, 1, 1, 4, 4, 1, 4, 1, 1, 1, 1, 1, 1, 4, 4];
function carCompClass() {
    this.x = 75;
    this.Y = 75;
    this.type = "comp";
    this.speed = 0;
    this.ang = 0;
    this.myCarPic;
    this.name = "Blixten";
    this.keyHeld_Gas = true;
    this.keyHeld_Reverse = false;
    this.keyHeld_TurnLeft = false;
    this.keyHeld_TurnRight = false;

    this.move = function () {
        this.speed *= GROUNDSPEED_DECAY_MULT * 0.5; //friktion, saktar med tiden om man inte håller gasen
        if (this.keyHeld_Gas) { this.speed += DRIVE_POWER; }
        if (this.keyHeld_Reverse) { this.speed -= REVERSE_POWER; }
        if (Math.abs(this.speed) > MIN_SPEED_TO_TURN) {
            if (this.keyHeld_TurnLeft) { this.ang -= TURN_RATE; }
            if (this.keyHeld_TurnRight) { this.ang += TURN_RATE; }
        }

        this.x += Math.cos(this.ang) * this.speed;
        this.y += Math.sin(this.ang) * this.speed;
        this.trackHandling();
    };
    this.reset = function (whichImage, carName) {
        this.name = carName;
        this.myCarPic = whichImage;
        this.speed = 0;
        for (row = 0; row < TRACK_ROWS; row++) {
            for (col = 0; col < TRACK_COLS; col++) {
                let arrayIndex = rowColToArrayIndex(col, row);
                //  console.log(arrayIndex);
                if (track_grid[arrayIndex] === TRACK_PLAYERSTART) {
                    track_grid[arrayIndex] = TRACK_ROAD;
                    this.x = TRACK_W * col + TRACK_W / 2;
                    this.y = TRACK_H * row + TRACK_H / 2;
                    return;
                }
            }
        }
    };

    this.draw = function () {

        drawBitMapCenteredWithRotation(this.myCarPic, this.x, this.y, this.ang);

    };
    this.trackHandling = function () {

        let carTrackCol = Math.floor(this.x / TRACK_W); //hela tal
        let carTrackRow = Math.floor(this.y / TRACK_H);
        //colorText(carX,carY,carTrackCol+", "+carTrackRow+" : "+trackIndexUnderCar,"yellow");
        if (carTrackCol >= 0 && carTrackCol < TRACK_COLS &&
            carTrackRow >= 0 && carTrackRow < TRACK_ROWS) {
            let tileHere = this.tileTypeAtRowCol(carTrackCol, carTrackRow);
            //   console.dir(tileHere);
            if (tileHere === TRACK_GOAL) {
                pointsInput.value = 0;
                victory(this);

            }

            if (tileHere === ROTATE_RIGHT_COMP) {
                this.keyHeld_TurnRight = true;
            }
            if (tileHere == TRACK_COMP) {
                this.keyHeld_Gas = true; this.keyHeld_TurnRight = false;
                this.keyHeld_TurnLeft = false;
            }
            if (tileHere === ROTATE_LEFT_COMP) {
                this.keyHeld_TurnRight = false; this.keyHeld_TurnLeft = true;
            }
            if (tileHere === STOP_COMP) {
                this.keyHeld_TurnRight = false; this.keyHeld_TurnLeft = false;
                this.angle = 0;
            }
        }

    };
    this.tileTypeAtRowCol = function (col, row) {
        if (col >= 0 && col < TRACK_COLS &&
            row >= 0 && row < TRACK_ROWS) {
            let trackIndexUnderCoord = rowColToArrayIndex(col, row);
            return levelOneComp[trackIndexUnderCoord];
        }
        else {
            return TRACK_WALL;
        }
    };
}

//track
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_GAP = 2;
const TRACK_COLS = 20;
const TRACK_ROWS = 15;
const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_GOAL = 3;
const TRACK_TREE = 4;
const TRACK_FLAG = 5;

const TRACK_PLAYERSTART = 2;
//var track_grid=new Array(TRACK_COLS*TRACK_ROWS);

let levelOne =
    [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        4, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 5, 0, 0, 1,
        1, 1, 4, 4, 1, 0, 0, 1, 1, 5, 0, 0, 4, 0, 1, 1, 1, 0, 0, 1,
        1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1,
        1, 0, 0, 5, 0, 4, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1,
        1, 0, 0, 0, 0, 1, 1, 0, 5, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 3, 3, 4, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 4, 1,
        1, 1, 1, 4, 4, 1, 0, 5, 0, 4, 1, 1, 5, 0, 0, 0, 1, 1, 4, 4,
        1, 1, 4, 4, 4, 4, 1, 1, 4, 4, 1, 4, 1, 1, 1, 1, 1, 1, 4, 4];
//let levelList=[theArena,slamZone];    
let track_grid = [];
function drawTracks() {
    let arrayIndex = 0;
    let drawTileX = 0;
    let drawTileY = 0;
    for (row = 0; row < TRACK_ROWS; row++) {
        for (col = 0; col < TRACK_COLS; col++) {
            let tileKindHere = track_grid[arrayIndex];
            let useImage = trackPics[tileKindHere];
            // colorRect(TRACK_W*col,TRACK_H*row,
            //TRACK_W-TRACK_GAP,TRACK_H-TRACK_GAP,'blue');

            canvasContext.drawImage(useImage, drawTileX, drawTileY);
            arrayIndex++;
            drawTileX += TRACK_W;
            // console.log("inex "+arrayIndex+", tileKindHere "+tileKindHere+", trackpics "+trackPics[tileKindHere].src);
        }
        drawTileX = 0;
        drawTileY += TRACK_H;
    }
}
function returnTileTypeAtRowCol(col, row) {
    if (col >= 0 && col < TRACK_COLS &&
        row >= 0 && row < TRACK_ROWS) {
        let trackIndexUnderCoord = rowColToArrayIndex(col, row);
        return track_grid[trackIndexUnderCoord];
    }
    else {
        return TRACK_WALL;
    }
}
function rowColToArrayIndex(colN, rowN) {
    return rowN * TRACK_COLS + colN;
}


function carTrackHandling(whichCar) {
    //console.dir(whichCar);
    let carTrackCol = Math.floor(whichCar.x / TRACK_W); //hela tal
    let carTrackRow = Math.floor(whichCar.y / TRACK_H);
    //colorText(carX,carY,carTrackCol+", "+carTrackRow+" : "+trackIndexUnderCar,"yellow");
    if (carTrackCol >= 0 && carTrackCol < TRACK_COLS &&
        carTrackRow >= 0 && carTrackRow < TRACK_ROWS) {
        let tileHere = returnTileTypeAtRowCol(carTrackCol, carTrackRow);
        if (tileHere == TRACK_GOAL) {

            victory(whichCar);
        }
        if (tileHere == TRACK_FLAG) {
            pointsInput.value += 100;

        }
        else if (tileHere != TRACK_ROAD) {
            whichCar.speed = 0;
            //  console.dir(whichCar);}

        }
    }
}

//image loading
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let carPic = document.createElement("img");
let otherCarPic = document.createElement("img");

let trackPics = [];


let imageList = [
    { trackType: TRACK_ROAD, theFile: "https://frozenland.servegame.com/CommonPHP/images/road-40.png" },

    { trackType: TRACK_WALL, theFile: "https://frozenland.servegame.com/CommonPHP/images/wall-40.png" },
    { varName: carPic, theFile: "https://frozenland.servegame.com/CommonPHP/images/car-blue-80.png" },
    { varName: otherCarPic, theFile: "https://frozenland.servegame.com/CommonPHP/images/car-red-80.png" },
    { trackType: TRACK_GOAL, theFile: "https://frozenland.servegame.com/CommonPHP/images/road-40-goal.png" },
    { trackType: TRACK_TREE, theFile: "https://frozenland.servegame.com/CommonPHP//images/road-40-tree.png" },
    { trackType: TRACK_FLAG, theFile: "https://frozenland.servegame.com/CommonPHP/images/road-40-flag.png" }
];
//vi måste vänta tills alla bilder är laddade
/*const TRACK_ROAD= 0;
const TRACK_WALL=1;
const TRACK_GOAL=3;
const TRACK_TREE=4;
const TRACK_FLAG=5;
var picToLoad = 0;*/
function loadImageForTrackCode(trackCode, fileName) {
    trackPics[trackCode] = document.createElement("img");
    beginLoadingImage(trackPics[trackCode], fileName);
}
function countAndlaunch() {
    picToLoad--;
    if (picToLoad === 0) { startGame(); }
}
function beginLoadingImage(imgVar, fileName) {

    imgVar.onload = countAndlaunch();
    imgVar.src = fileName;
}

function loadImages() {

    picToLoad = imageList.length;
    for (let i = 0; i < imageList.length; i++) {
        if (imageList[i].varName !== undefined) { beginLoadingImage(imageList[i].varName, imageList[i].theFile); }

        else {
            loadImageForTrackCode(imageList[i].trackType, imageList[i].theFile);
        }
    }
    console.log(imageList)
}

//input
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



let mouseX, mouseY;

function setupInput() {
    canvas.addEventListener('mousemove', function (evt) {
        calculateMousePos(evt);
    });

    // window.addEventListener('keydown', (event) => { keyPressed(event) });
    blueCar.setupInput(KEY_UP_ARROW, KEY_RIGHT_ARROW, KEY_DOWN_ARROW,
        KEY_LEFT_ARROW);
}

function keySet(keyEvent, whichCar, setTo) {

    if (keyEvent.keyCode === whichCar.controlKeyLeft) {
        whichCar.keyHeld_TurnLeft = setTo;
    }
    if (keyEvent.keyCode === whichCar.controlKeyRight) {
        whichCar.keyHeld_TurnRight = setTo;
    }
    if (keyEvent.keyCode === whichCar.controlKeyUp) {
        whichCar.keyHeld_Gas = setTo;
    }
    if (keyEvent.keyCode === whichCar.controlKeyDown) {
        whichCar.keyHeld_Reverse = setTo;
    }



}
moveLeft = () => { blueCar.ang -= 0.05; keyHeld_TurnLeft = true; }
moveRight = () => { blueCar.ang += 0.05; keyHeld_TurnRight = true; }
moveUp = () => { blueCar.speed += 0.5; keyHeld_Gas = true; }
moveDown = () => { blueCar.speed -= 0.5; keyHeld_Reverse = true; }

/*function keyPressed(evt) {
    evt.preventDefault();
    //  console.log("key pressed " + evt.keyCode);
    if (evt.keyCode === KEY_LEFT_ARROW) { }
    if (evt.keyCode === KEY_RIGHT_ARROW) 
    if (evt.keyCode === KEY_UP_ARROW) 
    if (evt.keyCode === KEY_DOWN_ARROW) 
    keySet(evt, blueCar, true);
}*/

function keyReleased(evt) {
    keySet(evt, blueCar, false);
    keySet(evt, redCar, false);
}
function calculateMousePos(evt) {

    let rect = canvas.getBoundingClientRect();
    let root = document.documentElement;
    //	account	for	the	margins,	canvas	position	on	page,	
    //scroll	amount,	etc.	

    mouseX = evt.clientX - rect.left - root.scrollLeft;
    mouseY = evt.clientY - rect.top - root.scrollTop;
    //  console.log(mouseX)
    //to test car in any position
    //carX = mouseX;
    //carY = mouseY;
    //carSpeedX=3;
    // carSpeedY=-4;
    //	 minus	 half height, to center it
    //return { x:mouseX, y:	mouseY }; 
}
//msain

let score = 0;

let blueCar = new carClass();
let redCar = new carCompClass();
let timer; // пока пустая переменная
let timerTal = 3000; // стартовое значение обратного отсчета
let refreshIntervalId;
//blueCar ,redCar

document.getElementById('description').innerHTML =
    'Svänger vänster: &larr; , höger: &rarr;. Fart fram: &uarr; , bak: &darr; '
window.runGame = function () {

    colorRect(0, 0, canvas.width, canvas.height, 'blue');
    colorText(canvas.width / 2 - 100, canvas.height / 2, "LOADING IMAGES", "yellow");


    loadImages(); // вызов функции
};

function countdown() {  // функция обратного отсчета
    rocket.innerHTML = timerTal;
    pointsInput.value = timerTal;
    timerTal--; // уменьшаем число на единицу
    if (timerTal < 0) {
        clearTimeout(timer); // таймер остановится на нуле
        alert('Tiden är slut');
        window.location.href = "testLevel.php?points=0";
    }

}
function startGame() {
    //updatera skärmen
    let framesPerSecond = 30;
    refreshIntervalId = setInterval(updateAll, 1000 / framesPerSecond);

    setupInput();
    loadLevel(levelOne);

}
function loadLevel(whichLevel) {
    track_grid = whichLevel.slice();
    /*
     * Den slice()metoden returnerar ett grunt kopia av en del av en 
     * matris till en ny array-objekt valt från starttill end( endingår ej)
     *  där startoch endrepresenterar index för poster i denna matris.
     *   Den ursprungliga matrisen kommer inte att ändras.
     * 
     */
    blueCar.reset(carPic, "Blue Storm");
    redCar.reset(otherCarPic, "Red Bull");
}
function victory(whichCar) {
    clearInterval(refreshIntervalId);
    console.log(whichCar.name + " VINNER!");
    resultUT.innerHTML = (whichCar.name + " VINNER!"); victoryDiv.style = "display:block;";
}
function out() {
    window.location.href = "https://frozenland.servegame.com/MathGameWebb/public/games/gamesBlocks/testLevel.php?points=" + pointsInput.value;
}
function updateAll() {
    countdown();
    moveEverything();
    drawEverything();
}

function clearScreen() {
    //svart backgrund
    colorRect(0, 0, canvas.width, canvas.height, 'black');
}

function moveEverything() {
    blueCar.move();
    redCar.move();

}


function drawEverything() {
    // clearScreen();
    drawTracks();
    blueCar.draw();
    redCar.draw();
}
