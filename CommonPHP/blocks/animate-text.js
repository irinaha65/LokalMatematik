< !DOCTYPE html >
  <html lang="en">

    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>Glide</title>
      <style>
        @import url(https://fonts.googleapis.com/css2?family=Eater&display=swap);
        @import url(https://fonts.googleapis.com/css2?family=Tourney:ital,wght@0,100..900;1,100..900&display=swap);

        .text-danger {
          font - family: "Eater", serif;
        font-weight: 400;
        font-style: normal;
        color: red;
}
        .text-ok {
          font - family: "Tourney", serif;
        font-optical-sizing: auto;
        font-weight: 600;
        font-style: italic;
        color: green;
        font-variation-settings:
        "wdth" 100;
}
        .text{height:50px;
        width:50px;
        margin: 30px 30px 30px 30px;
    }

        body {

          background - color:black;
}

        .test{
          margin - left: 20px;
}

      </style>


      <div class="test">
        <div class="text text-ok">ERROR</div>

      </div>
      <script src="../../node_modules/animejs/lib/anime.min.js"></script>
      <script>
        document.title = "Min nya sidtitel!";
/*var easingsAnimation = (function() {

  var easingVisualizerEl = document.querySelector('.easing-visualizer');
        var barsWrapperEl = easingVisualizerEl.querySelector('.bars-wrapper');
        var dotsWrapperEl = easingVisualizerEl.querySelector('.dots-wrapper');
        var barsFragment = document.createDocumentFragment();
        var dotsFragment = document.createDocumentFragment();
        var numberOfBars = 91;
        var duration = 450;
        var animation;

        fitElementToParent(easingVisualizerEl, 0);

        for (var i = 0; i < numberOfBars; i++) {
    var barEl = document.createElement('div');
        var dotEl = document.createElement('div');
        barEl.classList.add('bar');
        dotEl.classList.add('dot');
        dotEl.classList.add('color-red');
        barsFragment.appendChild(barEl);
        dotsFragment.appendChild(dotEl);
  }

        barsWrapperEl.appendChild(barsFragment);
        dotsWrapperEl.appendChild(dotsFragment);

        function play() {
    
    var easings = [];
        for (let ease in anime.penner) easings.push(ease);
        easings.push('steps('+anime.random(5, 20)+')');
        easings.push('steps('+anime.random(5, 20)+')');
        easings.push('cubicBezier(0.545, 0.475, 0.145, 1)');
        var ease = easings[anime.random(0, easings.length - 1)];

        animation = anime.timeline({
          duration: duration,
        easing: ease,
        complete: play
    })
        .add({
          targets: '.easing-visualizer .bar',
        scaleY: anime.stagger([1, 44], {easing: ease, from: 'center', direction: 'reverse'}),
        delay: anime.stagger(7, {from: 'center'})
    })
        .add({
          targets: '.easing-visualizer .dot',
        translateY: anime.stagger(['-160px', '160px'], {easing: ease, from: 'last'}),
        delay: anime.stagger(7, {from: 'center'})
    }, 0);

  }

        play();
  
})();*/
        anime({
          targets: '.text',
        keyframes:[
        {translateX:350, scale: 1},
        {translateY:50, scale: 2},
        {translateX:-50, scale: 3},
        {translateY:-50, scale: 2}
        ]
        ,
        //rotateZ: 360,

        duration:5000,
        direction: "alternate",
        easing:"linear",
        loop:true,
});

      </script>