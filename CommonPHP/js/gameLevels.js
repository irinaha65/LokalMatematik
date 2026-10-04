// assets/js/levels.js or inline in your game script
const KEY_LEFT_ARROW = 37;
const KEY_RIGHT_ARROW = 39;
const KEY_UP_ARROW = 38;
const KEY_DOWN_ARROW = 40;

const KEY_A = 65;
const KEY_W = 87;
const KEY_D = 68;
const KEY_S = 83;
window.addEventListener("keydown", function (e) {

    switch (e.key) {
        case "ArrowLeft":
        case "a":
        case "A": e.preventDefault();
            moveLeft();
            break;

        case "ArrowRight":
        case "d":
        case "D": e.preventDefault();
            moveRight();
            break;

        case "ArrowUp":
        case "w":
        case "W": e.preventDefault();
            moveUp();
            break;

        case "ArrowDown":
        case "s":
        case "S": e.preventDefault();
            moveDown();
            break;
    }
});
let canvas, canvasContext;
//grafik common

canvas = document.getElementById('gameCanvas');
canvasContext = canvas.getContext('2d');
let pointsInput = document.getElementById('pointsIn');
let resultUT = document.getElementById('resultUT');
let victoryDiv = document.getElementById('victoryDiv');
let rocket = document.getElementById('rocket');
let gameOver = document.getElementById('gameOver');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
function drawBitMapCenteredWithRotation(useBitmap, atX, atY, withAng) {
    canvasContext.save(); //sparar screen
    canvasContext.translate(atX, atY);
    canvasContext.rotate(withAng);
    canvasContext.drawImage(useBitmap, -useBitmap.width / 2, -useBitmap.height / 2);
    canvasContext.restore();

}

function colorText(topLeftX, topLeftY, someText, fillColor) {
    canvasContext.fillStyle = fillColor;
    //canvasContext.strokeStyle = "#F00";
    canvasContext.font = "italic 20pt Arial";
    canvasContext.fillText(someText, topLeftX, topLeftY);
    //  canvasContext.font = 'bold 30px sans-serif';
    //  canvasContext.strokeText("Stroke text", 20, 100);
}

function colorRect(topLeftX,
    topLeftY, boxWidth, boxHeight, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
};

function colorCircle(centerX, centerY, radius, fillColor) {

    //börjar rita figurer
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    //cirkel-båge : center-x, center-y, radie, från 0 tll 2pi, klockwise 
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
};
window.gameLevels = [
    {
        number: 1,
        speed: 2,
        enemies: 3,
        background: "green",
    },
    {
        number: 2,
        speed: 3,
        enemies: 5,
        background: "orange",
    },
    {
        number: 3,
        speed: 4,
        enemies: 8,
        background: "black",
    },
];
window.currentLevel = 0;
window.loadLevel = function (levelIndex = 0) {
    const level = window.gameLevels[levelIndex];
    if (!level) {
        console.log("Game complete!");
        return false;
    }

    window.currentLevel = levelIndex;
    console.log(`Loading Level ${level.number}`);
    return true;
    // Example: use config
    // canvasContext.fillStyle = level.background;
    //  canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    // startEnemies(level.enemies, level.speed);

}