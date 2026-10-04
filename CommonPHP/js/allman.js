const IMAGE_PATH = "https://frozenland.servegame.com/CommonPHP/images/";



function tecken(n) {
	var tecken = 1;
	if (n < 0) {
		tecken = -1;
	}
	if (n == 0) {
		tecken = 0;
	}
	return tecken;
}

function blandaArray(tabell) {
	var hjalpPlats;
	var slumpIndex;
	for (var i = tabell.length - 1; i > 0; i--) {
		slumpIndex = slumpTal(0, i - 1, true);
		hjalpPlats = tabell[i];
		tabell[i] = tabell[slumpIndex];
		tabell[slumpIndex] = hjalpPlats;
	}
	return tabell;
}

function getRandomFloat(min, max) {
	return Math.random() * (max - min) + min;
}
function fyllUppgifter(typArray) {
	uppgiftTyp.splice(0, uppgiftTyp.length);
	for (var i = 0; i < typArray.length; i++) {
		uppgiftTyp.push(typArray[i]);
	}
	if (typArray.length < 3) {
		for (var i = 0; i < typArray.length; i++) {
			uppgiftTyp.push(typArray[i]);
		}
	}
	blandaArray(uppgiftTyp);
}


function tangentUpp(event) {

	document.getElementById('ratt').style.display = 'none';
	document.getElementById('fel').style.display = 'none';
	document.getElementById("kommentar").innerHTML = "";

	var e = event.keyCode || event.charCode;
	if (e != 13 && e != 10) {
		return;
	}
	if (fardig) {
		geUppgift();
	} else {
		if (document.getElementById("skrivetSvar").value != "") { kolla(); }
	}
}
function hideAnswer() {
	hideElement(elements.textareaAnswerMath);
	// document.getElementById('customAnswer').style.display = 'none';
	//showElement(elements.saveBtn)
	showElement(elements.answerBlock)

}
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max + 1);
	return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
let timer; // пока пустая переменная
let timerTal = 30; // стартовое значение обратного отсчета
function setCountdown(t) {
	timerTal = t;
	console.log(timerTal);
	timer = setInterval(countdown, 1000);

}

function countdown() {  // функция обратного отсчета

	//console.log(elements.rocket);
	document.getElementById("level").innerHTML = "Nivå :" + level;
	document.getElementById("rocket").innerHTML = "" + timerTal
	//pointsInput.innerHTML=points*(timerTal);
	timerTal--; // уменьшаем число на единицу
	if (timerTal < 0) {
		clearInterval(timer); // таймер остановится на нуле
		alert('Tiden är slut');
		gameOver();
	}

}
function alphaNumericString(length) {
	var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
		retVal = "";
	for (var i = 0, n = charset.length; i < length; ++i) {
		retVal += charset.charAt(Math.floor(Math.random() * n));
	}
	return retVal;
}


function numericString(length) {
	var charset = "0123456789",
		retVal = "";
	for (var i = 0, n = charset.length; i < length; ++i) {
		retVal += charset.charAt(Math.floor(Math.random() * n));
	}
	return retVal;
}
function arrayToString(arr) {
	strarr = "";
	for (m = 0; m < arr.length; m++) { strarr += arr[m] + ', '; } return strarr;
}

function nearest(arr, tal) {
	att = arr.reduce((a, b) => {
		return Math.abs(b - tal) < Math.abs(a - tal) ? b : a;
	}); return att;
}
//function to find the median
function middle(arr) {
	var middle = Math.floor(arr.length / 2);


	if (arr.length % 2 === 0) {
		return arr[middle - 1];
	} else {
		return arr[middle];
	}
}
//permutationer av siffror
//https://askdev.ru/q/perestanovki-v-javascript-21569/
function permutator(inputArr) {
	var results = [];

	function permute(arr, memo) {
		var cur, memo = memo || [];

		for (var i = 0; i < arr.length; i++) {
			cur = arr.splice(i, 1);
			if (arr.length === 0) {
				results.push(memo.concat(cur));
			}
			permute(arr.slice(), memo.concat(cur));
			arr.splice(i, 0, cur[0]);
		}

		return results;
	}

	return permute(inputArr);
}
function talFromSiffror(r5) {
	tal1 = 0;
	for (i = 0; i < r5.length; i++) {
		tal1 += r5[i] * Math.pow(10, i);
	} //console.log(tal1);
	return tal1;
}
//rundar till närmaste
function roundnum(num, caNumber) {
	return Math.round(num / caNumber) * caNumber;
}
const apiRequest = async (url) => {
	const resp = await fetch(url); // *** Note: Added `url` here
	if (!resp.ok) {
		throw new Error("HTTP status " + resp.status);
	}
	return resp.json();
};
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}



function getMittPunkt(x1, y1, x2, y2) {
	let x = (x1 + x2) / 2;
	let y = (y1 + y2) / 2;
	return { x: x, y: y };
}
function getLenghtOfTheLine(corner1, corner2) {

	return Math.sqrt(Math.pow(corner2.x - corner1.x, 2) + Math.pow(corner2.y - corner1.y, 2));
}
function getIntLengt(corner1, corner2) {

	let l = Math.sqrt(Math.pow(corner2.x - corner1.x, 2) + Math.pow(corner2.y - corner1.y, 2));
	while (Math.floor(l) != l) {
		corner2.x = corner2.x + 0.01;
		corner2.y = corner2.y + 0.01;

		l = Math.sqrt(Math.pow(corner2.x - corner1.x, 2) + Math.pow(corner2.y - corner1.y, 2));
	}
	return [corner2, l];
}
const letters = "abcdefghijklmnopqrstuvwxyz";

$(function () {
	$("#btnSave").click(() => {
		html2canvas(document.querySelector("#widget"),
			{ allowTaint: true }).then(canvas => {
				elements.img_out.appendChild(canvas);

				//  canvas.toBlob(function (blob) {
				//       saveAs(blob, "ekv.png");
				//   });
				var a = document.createElement('a');
				a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
				a.download = 'ekv.jpg';
				a.click();
			});

	});
});
function saveScore() {
	window.location.href = "https://frozenland.servegame.com/MathGameWebb/public/games/gamesBlocks/testLevel.php?points=" + document.getElementById("pointsIn").innerHTML;
}
