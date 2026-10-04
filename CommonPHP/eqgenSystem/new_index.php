 <?php
  include_once '../classes.php';

  $mode = $value = '';
  $imgName = $mode . '-' . $value . '-' . date("YmdHis") . '.png';
  //MÅSTE ÄNDRA I BROWSER DOWNLOAD PATH!
  $url = 'C:/images/' . $imgName;
  //echo $url;



  ?>

 <!DOCTYPE html>
 <html lang="sv" xmlns="http://www.w3.org/1999/xhtml">

 <head>
   <title>Minigame</title>
   <!-- Placed at the end of the document so the pages load faster -->
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
   <!-- <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script> -->
   <script src="bootstrap.min.js"></script>

   <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
   <script src="ie10-viewport-bug-workaround.js"></script>
   <script src="https://storage.googleapis.com/code.getmdl.io/1.0.6/material.min.js">
   </script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js"></script>

   <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.0/FileSaver.min.js">

   </script>
   <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
   <script>
     MathJax = {
       tex: {
         packages: ['base'], // extensions to use
         inlineMath: [
           ['$', '$'],
           ['\\(', '\\)']
         ],
         //  displayMath: [             // start/end delimiter pairs for display math
         //    ['$$', '$$'],
         //   ['\\[', '\\]']
         //  ],
         /*  svg: {
           scale: 1,                      // global scaling factor for all expressions
           minScale: .5,                  // smallest scaling factor to use
           mtextInheritFont: false,       // true to make mtext elements use surrounding font
           merrorInheritFont: true,       // true to make merror text use surrounding font
           mathmlSpacing: false,          // true for MathML spacing rules, false for TeX rules
           skipAttributes: {},            // RFDa and other attributes NOT to copy to the output
           exFactor: .5,                  // default size of ex in em units
           displayAlign: 'center',        // default for indentalign when set to 'auto'
           displayIndent: '0',            // default for indentshift when set to 'auto'
           fontCache: 'local',            // or 'global' or 'none'
           localID: null,                 // ID to use for local font cache (for single equation processing)
           internalSpeechTitles: true,    // insert <title> tags with speech content
           titleID: 0                     // initial id number to use for aria-labeledby titles
         },*/
         processEscapes: true, // use \$ to produce a literal dollar sign
         processEnvironments: true, // process \begin{xxx}...\end{xxx} outside math mode
         processRefs: true, // process \ref{...} outside of math mode
         digits: /^(?:[0-9]+(?:\{,\}[0-9]{3})*(?:\.[0-9]*)?|\.[0-9]+)/,
         // pattern for recognizing numbers
         tags: 'none', // or 'ams' or 'all'
         tagSide: 'right', // side for \tag macros
         tagIndent: '0.8em', // amount to indent tags
         useLabelIds: true, // use label name rather than tag for ids
         maxMacros: 1000, // maximum number of macro substitutions per expression
         maxBuffer: 5 * 1024, // maximum size for the internal TeX string (5K)
         baseURL: // URL for use with links to tags (when there is a <base> tag in effect)
           (document.getElementsByTagName('base').length === 0) ?
           '' : String(document.location).replace(/#.*$/, ''),
         formatError: // function called when TeX syntax errors occur
           (jax, err) => jax.formatError(err)
       }
     };
   </script>
   <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>

   </style>

 </head>

 <body id="game-body">



   <p id="help"></p>
   <div class="equationDiv w-100">


     <h4>
       <div id="output-task"></div>
     </h4>

     <h2 id="eqv-out" class="equation">


       <br />
       <br />
       <span class="MathJax_Preview">
         <div id="output-eqvX"></div>

         <p id="eqv"></p>

         <br />
         <br />
         <br />
         <br />
     </h2>

   </div>

   </div>


   <script src=" fraction.min.js"></script>

   <script src="locals.js?v=8"></script>
   <script src="mathVariables.js?v=42"></script>
   <script src="ekvSyst1.js?v=15"></script>

   <script>
     setMode(<?php echo ('"' . $mode . '"') ?>);
     setLevel(<?php echo ('"' . $value . '"') ?>);
     //const d = new Date();
     //let text = d.toISOString();
     imgName = <?php echo ('"' . $imgName . '"') ?>;
     /* function firstFunction(_callback){
    // do some asynchronous work
    // and when the asynchronous stuff is complete
    _callback();    
}*/

     function secondFunction() {

       // call first function and pass in a callback function which
       // first function runs when it has completed
       run(function() {
         console.log('huzzah, I\'m done!');
         setTimeout(() => {
           //vänta tills konvertering är klar
           var node = //document.getElementById('my-node');
             document.getElementById('eqv-out'); //to image
           /*
           domtoimage.toPng(node).then((dataUrl) => {
            var link = document.createElement('a');
            link.id="bild";
            //mode+level+text - name för fil, ska spara i databasen med JSONdata
            //from localstorage
            //
            console.dir(localStorage.getItem("JSONdata"));
            //var nameFile=//mode+level+text+'.png'

            link.download = imgName;//nameFile;
            link.href = dataUrl;
            //link.click()
            }
            
            );
           */
           domtoimage.toPng(node).then(function(dataUrl) {

             //  var img = new Image();
             //  img.src = dataUrl;
             //	img.id="bild";
             localStorage.setItem('url', dataUrl);
             window.location.replace("https://www.hagmantrading.se/MathKing/eqgenSystem/GenEkv.php?url=1");
             // add the text node to the newly created div

             //     document.body.appendChild(img);

           }).then(function() {
             node.style.display = "none";
           }).catch(function(error) {
             console.error('oops, something went wrong!', error);
           });


         }, 2000);


       });
     }
     secondFunction();


     //window.location.replace("https://www.hagmantrading.se/MathKing/eqgenSystem/GenEkv.php?url=1");
     /*var link = document.createElement('a');
      link.id="bild";
      //mode+level+text - name för fil, ska spara i databasen med JSONdata
      //from localstorage
      //
      //console.dir(localStorage.getItem("JSONdata"));
      //var nameFile=//mode+level+text+'.png'

      //link.download = imgName;//nameFile;
      link.href = "https://www.hagmantrading.se/MathKing/eqgenSystem/GenEkv.php?url=1";
      link.click();*/
   </script>
 </body>
 <footer>
 </footer>

 </html>