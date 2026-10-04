

window.onload = function (e) {
  // heart shape from https://thenounproject.com/icon/heart-1545381/
  var heart = confetti.shapeFromPath({
    path: 'M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -76,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 38,0 57,18 76,56z',
    matrix: [0.03333333333333333, 0, 0, 0.03333333333333333, -5.566666666666666, -5.533333333333333]
  });

  var duration = 15 * 1000;
  var animationEnd = Date.now() + duration;


  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    //var particleCount = 50 * (timeLeft / duration);
    var defaults = {
      startVelocity: 30, spread: 360, ticks: 60, zIndex: 0,
      scalar: 2,


      origin: { y: -0.1 },

    };
    // since particles fall down, start a bit higher than random
    confetti({
      ...defaults, particleCount: 50 * (timeLeft / duration), origin: { x: randomInRange(0.3, 0.7), y: Math.random() - 0.2 }
    });
    confetti({
      ...defaults, particleCount: 50 * (timeLeft / duration), origin: { x: randomInRange(0.3, 0.7), y: Math.random() - 0.2 },
      shapes: [heart],
      colors: ['#f93963', '#a10864', '#ee0b93']
    });
  }, 250);
}

