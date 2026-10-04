 <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
 
     <script type="text/x-mathjax-config;executed=true">
     MathJax.Hub.Config({
  config: ["Safe.js"],
  jax: ["input/TeX","input/MathML","output/HTML-CSS","output/NativeMML", "output/SVG"],
  extensions: ["tex2jax.js","mml2jax.js","MathMenu.js","MathZoom.js"],
  SVG: {
    useGlobalCache: false
  },
  TeX: {
    extensions: ["AMSmath.js","AMSsymbols.js","noErrors.js","noUndefined.js"],
    Macros: {
      textsf: ['\\mathord{\\sf{\\text{#1}}}', 1], 
      texttt: ['\\mathord{\\tt{\\text{#1}}}', 1], 
      vline: ['\\smash{\\large\\lvert}', 0],
      le: ['\\leqslant', 0],
      ge: ['\\geqslant', 0],
      phi: ['\\varphi', 0], // греческая фи, как принято в нашей нотации
      EDS: ['\\mathscr{E}', 0], // красивая буква для ЭДС
      arctg: ['\\mathop{\\rm arctg}\\nolimits', 0],
      ch: ['\\mathop{\\rm ch}\\nolimits', 0],
      ctg: ['\\mathop{\\rm ctg}\\nolimits', 0],
      sh: ['\\mathop{\\rm sh}\\nolimits', 0],
      arcctg: ['\\mathop{\\rm arcctg}\\nolimits', 0],
      cosec: ['\\mathop{\\rm cosec}\\nolimits', 0],
      cth: ['\\mathop{\\rm cth}\\nolimits', 0],
      tg: ['\\mathop{\\rm tg}\\nolimits', 0],
      th: ['\\mathop{\\rm th}\\nolimits', 0]
    },
    noErrors: { disabled: true }, // для возврата к TeX в случае проблем с mathjax
    noUndefined: { disabled: true } // для возврата к TeX в случае проблем с mathjax
  },
  tex2jax: {
      inlineMath: [ ['$$','$$'], ["\\(","\\)"] ],
      displayMath: [ ["\\[","\\]"] ]
  },
  menuSettings: {
    zoom: "Hover",
    zscale: "200%"
  },
  skipStartupTypeset: true,
  messageStyle: "none",
  showMathMenu: false, // отключает мею по правой клавише
  preRemoveClass: "MathJax_Preview_Alternative", // для возврата к TeX в случае проблем с mathjax
  "HTML-CSS": { scale: 120} // для увеличения размера формул
});

// Для исправления ошибок в формулах, содержащих команду \nulldelimiterspace
MathJax.Hub.Register.StartupHook("TeX Jax Ready", function () {
  var TEX = MathJax.InputJax.TeX;
  var PREFILTER = TEX.prefilterMath;
  TEX.Augment({
    prefilterMath: function (math,displaymode,script) {
      math = math.replace(/\\nulldelimiterspace/g, "0em");
      return PREFILTER.call(TEX,math,displaymode,script);
    }
  });
});

// Для большого размера всех дробей. Аналог команды \everymath{\displaystyle}
MathJax.Hub.Register.StartupHook("TeX Jax Ready", function () {
  var TEX = MathJax.InputJax.TeX;
  var PREFILTER = TEX.prefilterMath;
  TEX.Augment({
    prefilterMath: function (math,displaymode,script) {
      math = "\\displaystyle{"+math+"}";
      return PREFILTER.call(TEX,math,displaymode,script);
    }
  });
});

// для возврата к TeX в случае проблем с mathjax
MathJax.Hub.Typeset_source = MathJax.Hub.Typeset;
MathJax.Hub.Typeset = function(node, callback) {
  return MathJax.Hub.Typeset_source(node, function() {
    var jax = MathJax.Hub.getAllJax(node);
    for (var i = 0, m = jax.length; i < m; i++) {
      var math = jax[i];
      if (!math.texError) {
        var pre = math.SourceElement().previousSibling.previousSibling;
        if (pre && pre.className !== "MathJax_Preview") {
          pre = pre.previousSibling;
        };
        if (pre && pre.className === "MathJax_Preview") {
          pre.innerHTML = "";
        };
      } else {
        var pre = math.SourceElement().previousSibling;
        if (pre && pre.className === "MathJax") {
          pre.innerHTML = "";
        };
      };
    };
    return callback;
  });
};
     </script>
     <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>