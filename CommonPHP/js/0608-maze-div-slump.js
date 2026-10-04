/* 
 * 
 * create slump labirynt
 */


let myCurrentPosition = [1, 1];

let maze, walls;
let min, max;
const TileSize = 20;

const mazeDivId = 'maze';
let timer;
let timerTal = 30; // start value to rocket
//global functions implementation
moveLeft = () => { moveMe(KEY_LEFT_ARROW) }
moveRight = () => { moveMe(KEY_RIGHT_ARROW) }
moveUp = () => { moveMe(KEY_UP_ARROW) }
moveDown = () => { moveMe(KEY_DOWN_ARROW) }
let mazeDiv;
let height;
let width;
let points;
let finish;
nextLevel = function () {
    clearTimeout(timer);
    let g = window.loadLevel(window.currentLevel + 1);
    if (g) window.runGame();
    else {
        document.getElementById('complete').setAttribute('style', 'display:block');
    }
};
document.getElementById('description').innerHTML = 'Träffa den röda pricken innan tiden rinner ut'


window.runGame = () => {
    document.getElementById('game-content').innerHTML =
        `
        <style>
        /*
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
*/
/*
    Created on : 5 aug. 2020, 22:51:56
    Author     : irihag
*/

#maze {
 
box-shadow: 5px 5px gray;

}
#rocket{
    margin-bottom: 20px;
  margin-left: 40%;
  font-size: 3em;
  color: red;
}
.center{margin: auto;
  width: 80%;
  display: flex;
align-content: center;}
.block {
  float: left;

  background-color:#45a049 ;
}

.wall {
  background-color: #000;
}


.me {

  background-color: #0000CC;
  border-radius: 100%;

}

.finish {
 float: left;
  background-color: #f31d1d;
}
main{
    color:white;
}

.center {
  text-align: center
}

        
        
        </style>
        
        
        <div class="center">
        <div id='maze' class="block"></div>
      
       <div id="buttons-container" class="d-flex flex-column  justify-content-center align-items-center">
    <div class="row"> <button onclick="moveMe(KEY_UP_ARROW)" style="background-color:transparent"><span >
          &uarr;
        </span></button></div>
    <div class="row">
      <button onclick="moveMe(KEY_LEFT_ARROW)" style="background-color:transparent"><span >
         &larr;
        </span></button>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
      <button onclick="moveMe(KEY_RIGHT_ARROW)" style="background-color:transparent"><span >
         &rarr;
        </span></button>
    </div>
    <div class="row">
      <button onclick="moveMe(KEY_DOWN_ARROW)" style="background-color:transparent"><span >
          &darr;
        </span></button>
    </div></div>
  </div>`
    window.loadLevel(0);
    min = window.currentLevel * 10 + 15;
    max = min + 5;

    mazeDiv = document.getElementById(mazeDivId);
    mazeDiv.innerHTML = '';
    myCurrentPosition = [1, 1];
    maze = []; walls = [];
    //window.

    //create maze for level


    switch (max) {
        case 20:
        default:
            height = 22;
            width = 12;
            points = 10;
            break;
        //level 1
        case 30:
            //level 2
            height = 22;
            width = 17;
            points = 20;
            break;
        //level 1
        case 40:
            //level 2
            height = 25;
            width = 17;
            points = 30;
            break;
        case 50:
            //level 3
            height = 30 + 2;
            width = 17;
            points = 40;
            break;
    }

    height = height % 2 === 0 ? height + 1 : height;
    width = width % 2 === 0 ? width + 1 : width;
    console.log(width, height)
    mazeDiv.setAttribute('style', 'height:' + height * TileSize + 'px; width:' + (width * TileSize + 1) + 'px');
    for (let y = 0; y < height; y++) {
        maze[y] = [];
        for (let x = 0; x < width; x++) {
            maze[y][x] = 'wall'
            let el = mazeDiv.appendChild(document.createElement("div"));
            el.className = 'block wall';
            el.setAttribute('style', 'height:' + TileSize + 'px; width:' + TileSize + 'px');
            el.setAttribute('id', y + '-' + x);
        }
    }

    console.dir(myCurrentPosition);
    amaze(myCurrentPosition[0], myCurrentPosition[1], true);
    while (walls.length !== 0) {
        let randomWall = walls[Math.floor(Math.random() * walls.length)],
            host = randomWall[2],
            opposite = [(host[0] + (randomWall[0] - host[0]) * 2), (host[1] + (randomWall[1] - host[1]) * 2)];
        if (valid(opposite[0], opposite[1])) {
            if (maze[opposite[0]][opposite[1]] === 'maze') walls.splice(walls.indexOf(randomWall), 1);
            else amaze(randomWall[0], randomWall[1], false), amaze(opposite[0], opposite[1], true);
        } else walls.splice(walls.indexOf(randomWall), 1);
    }
    document.getElementById(myCurrentPosition[0] + '-' + myCurrentPosition[1]).className = 'block me';
    //document.getElementById('1-1').setAttribute('style', 'height:' + TileSize + 'px; width:' + TileSize + 'px');
    finish = document.getElementById(getRandomInt(5, height - 1)
        // (parseInt(height) - 1)
        + '-' + getRandomInt(10, width - 1));
    //(parseInt(width) - 1))
    finish.className = 'block finish';

    timerTal = 20 + currentLevel * 2;
    //console.dir(maze);
    countdown(); // вызов функции
}

function moveMe(arrowCode) {
    console.log(arrowCode)
    let newPosition = [myCurrentPosition[0] + ((arrowCode - 39) % 2), myCurrentPosition[1] + ((arrowCode - 38) % 2)];
    //level complete
    if (finish.id === newPosition[0] + '-' + newPosition[1]) {
        nextLevel(); //kom till finish
        // document.getElementById('complete').setAttribute('style', 'display:block');
        // window.location.href = "https://frozenland.servegame.com/MathGameWebb/public/games/gamesBlocks/testLevel.php?points=" + timerTal;
    }
    if (valid(newPosition[0], newPosition[1]) && maze[newPosition[0]][newPosition[1]] !== 'wall') {


        document.getElementById(myCurrentPosition[0] + '-' + myCurrentPosition[1]).className = 'block';
        myCurrentPosition = newPosition;
        document.getElementById(myCurrentPosition[0] + '-' + myCurrentPosition[1]).className = 'block me';

    }
}
function countdown() {  // 
    rocket.style.display = "block"
    console.log(timerTal, rocket)
    rocket.innerHTML = timerTal;
    pointsInput.innerHTML = points * (timerTal);
    timerTal--; // 
    if (timerTal < 0) {
        clearTimeout(timer); // 
        gameOver.style.display = "block";
        //alert('Tiden är slut');
        // saveScore();
    }
    else {
        timer = setTimeout(countdown, 1000);
    }
}
function amaze(y, x, addBlockWalls) {
    maze[y][x] = 'maze';
    document.getElementById(y + '-' + x).className = 'block';
    if (addBlockWalls && valid(y + 1, x) && (maze[y + 1][x] === 'wall')) walls.push([y + 1, x, [y, x]]);
    if (addBlockWalls && valid(y - 1, x) && (maze[y - 1][x] === 'wall')) walls.push([y - 1, x, [y, x]]);
    if (addBlockWalls && valid(y, x + 1) && (maze[y][x + 1] === 'wall')) walls.push([y, x + 1, [y, x]]);
    if (addBlockWalls && valid(y, x - 1) && (maze[y][x - 1] === 'wall')) walls.push([y, x - 1, [y, x]]);
}

function valid(a, b) {
    return (a < height && a >= 0 && b < width && b >= 0) ? true : false;
};