/*generera linjera ekv system

  * ans = answer
  * gen = generate
  * const = number to be added or subtracted
  * Eq = equation
 */
MathJax = {
 
  tex: {
        // extensions to use
    inlineMath: [              // start/end delimiter pairs for in-line math
      ['\\(', '\\)']
    ],
    displayMath: [             // start/end delimiter pairs for display math
      ['$$', '$$'],
      ['\\[', '\\]']
    ],
   // extensions: ["tex2jax.js", "TeX/noErrors.js", "TeX/AMSsymbols.js", "TeX/AMSmath.js"],
    processEscapes: true,      // use \$ to produce a literal dollar sign
    processEnvironments: true, // process \begin{xxx}...\end{xxx} outside math mode
    processRefs: true,         // process \ref{...} outside of math mode
    digits: /^(?:[0-9]+(?:\{,\}[0-9]{3})*(?:\.[0-9]*)?|\.[0-9]+)/,
                               // pattern for recognizing numbers
    tags: 'all',              // or 'ams' or 'all'
    tagSide: 'right',          // side for \tag macros
    tagIndent: '0.8em',        // amount to indent tags
    useLabelIds: true,         // use label name rather than tag for ids
    multlineWidth: '85%',      // width of multline environment
    maxMacros: 1000,           // maximum number of macro substitutions per expression
    maxBuffer: 5 * 1024,       // maximum size for the internal TeX string (5K)
    baseURL:                   // URL for use with links to tags (when there is a <base> tag in effect)
       (document.getElementsByTagName('base').length === 0) ?
        '' : String(document.location).replace(/#.*$/, ''),
    formatError:               // function called when TeX syntax errors occur
        (jax, err) => jax.formatError(err)
  }
};
/*
  function convert(name,str) {
   
    var new_html = str.trim();
  
      output = document.getElementById(name);
      output.innerHTML = new_html;
      console.dir(output.innerHTML);
      console.dir(output.innerText);
      //
      //  Reset the tex labels (and automatic equation numbers, though there aren't any here).
      //  Get the conversion options (metrics and display settings)
      //  Convert the input to CommonHTML output and use a promise to wait for it to be ready
      //    (in case an extension needs to be loaded dynamically).
      //
      MathJax.texReset();
      var options = MathJax.getMetricsFor(output);
 
      MathJax.tex2chtmlPromise(new_html, options).then(function (node) {
        //
        //  The promise returns the typeset node, which we add to the output
        //  Then update the document to include the adjusted CSS for the
        //    content of the new equation.
        //
        output.appendChild(node);
        MathJax.startup.document.clear();
        MathJax.startup.document.updateDocument();
      }).catch(function (err) {
        //
        //  If there was an error, put the message into the output instead
        //
        output.appendChild(document.createElement('pre')).appendChild(document.createTextNode(err.message));
      }).then(function () {
        //
      
      });
   
 
    }
    */
    function convert() {
      //
      //  Get the TeX input
      //
      var input = document.getElementById("eqv").innerHTML.trim();
      //
      //  Disable the display and render buttons until MathJax is done
      //
     // var display = document.getElementById("display");
     // var button = document.getElementById("render");
   //   button.disabled = display.disabled = true;
      //
      //  Clear the old output
      //
      output = document.getElementById('output-eqvX');
      output.innerHTML = '';
      //
      //  Reset the tex labels (and automatic equation numbers, though there aren't any here).
      //  Get the conversion options (metrics and display settings)
      //  Convert the input to CommonHTML output and use a promise to wait for it to be ready
      //    (in case an extension needs to be loaded dynamically).
      //
      MathJax.texReset();
      var options = MathJax.getMetricsFor(output);
      options.display =true;
      MathJax.tex2chtmlPromise(input, options).then(function (node) {
        //
        //  The promise returns the typeset node, which we add to the output
        //  Then update the document to include the adjusted CSS for the
        //    content of the new equation.
        //
        output.appendChild(node);
        MathJax.startup.document.clear();
        MathJax.startup.document.updateDocument();
      }).catch(function (err) {
        //
        //  If there was an error, put the message into the output instead
        //
        output.appendChild(document.createElement('pre')).appendChild(document.createTextNode(err.message));
      }).then(function () {
        //
        //  Error or not, re-enable the display and render buttons
        //
       // button.disabled = display.disabled = false;
      });
    }
    function convertAnswer() {
      //
      //  Get the TeX input
      //
        //
        var input1 = document.getElementById("eqv").innerHTML.trim();
        //
        //  Disable the display and render buttons until MathJax is done
        //
       // var display = document.getElementById("display");
       // var button = document.getElementById("render");
     //   button.disabled = display.disabled = true;
        //
        //  Clear the old output
        //
        output1 = document.getElementById('output-eqvX');
        output1.innerHTML = '';
      var input2 = document.getElementById("textareaAnswer1").innerHTML.trim();
      //
      //  Disable the display and render buttons until MathJax is done
      //
     // var display = document.getElementById("display");
     // var button = document.getElementById("render");
   //   button.disabled = display.disabled = true;
      //
      //  Clear the old output
      //
      output2 = document.getElementById('textareaAnswerMath');
      output2.innerHTML = '';
      var input3 = document.getElementById("textareaHelp").innerHTML.trim();
      //
      //  Disable the display and render buttons until MathJax is done
      //
     // var display = document.getElementById("display");
     // var button = document.getElementById("render");
   //   button.disabled = display.disabled = true;
      //
      //  Clear the old output
      //
      output3 = document.getElementById('textareaHelpMath');
      output3.innerHTML = '';
      //
      //  Reset the tex labels (and automatic equation numbers, though there aren't any here).
      //  Get the conversion options (metrics and display settings)
      //  Convert the input to CommonHTML output and use a promise to wait for it to be ready
      //    (in case an extension needs to be loaded dynamically).
      //
      MathJax.texReset();
      var options1 = MathJax.getMetricsFor(output1);
      options1.display =true;
      var options2 = MathJax.getMetricsFor(output2);
      options2.display =true;
      var options3 = MathJax.getMetricsFor(output3);
      options3.display =true;
      MathJax.tex2chtmlPromise(input1, options1).then(function (node) {
        //
        //  The promise returns the typeset node, which we add to the output
        //  Then update the document to include the adjusted CSS for the
        //    content of the new equation.
        //
        output1.appendChild(node);
        MathJax.startup.document.clear();
        MathJax.startup.document.updateDocument();
      }).catch(function (err) {
        //
        //  If there was an error, put the message into the output instead
        //
        output1.appendChild(document.createElement('pre')).appendChild(document.createTextNode(err.message));
      }).then(function () {
        //
        //  Error or not, re-enable the display and render buttons
        //
       // button.disabled = display.disabled = false;
      });
      MathJax.tex2chtmlPromise(input2, options2).then(function (node) {
        //
        //  The promise returns the typeset node, which we add to the output
        //  Then update the document to include the adjusted CSS for the
        //    content of the new equation.
        //
        output2.appendChild(node);
        MathJax.startup.document.clear();
        MathJax.startup.document.updateDocument();
      }).catch(function (err) {
        //
        //  If there was an error, put the message into the output instead
        //
        output2.appendChild(document.createElement('pre')).appendChild(document.createTextNode(err.message));
      }).then(function () {
        //
        //  Error or not, re-enable the display and render buttons
        //
       // button.disabled = display.disabled = false;
      });
      MathJax.tex2chtmlPromise(input3, options3).then(function (node) {
        //
        //  The promise returns the typeset node, which we add to the output
        //  Then update the document to include the adjusted CSS for the
        //    content of the new equation.
        //
        output3.appendChild(node);
        MathJax.startup.document.clear();
        MathJax.startup.document.updateDocument();
      }).catch(function (err) {
        //
        //  If there was an error, put the message into the output instead
        //
        output3.appendChild(document.createElement('pre')).appendChild(document.createTextNode(err.message));
      }).then(function () {
        //
        //  Error or not, re-enable the display and render buttons
        //
       // button.disabled = display.disabled = false;
      });
    }

    function  convertHelp(){
      var input3 = document.getElementById("textareaHelp").innerHTML.trim();
 
      output3 = document.getElementById('textareaHelpMath');
      output3.innerHTML = '';
      //
      //  Reset the tex labels (and automatic equation numbers, though there aren't any here).
      //  Get the conversion options (metrics and display settings)
      //  Convert the input to CommonHTML output and use a promise to wait for it to be ready
      //    (in case an extension needs to be loaded dynamically).
      //
      MathJax.texReset();
    
      var options3 = MathJax.getMetricsFor(output3);
      options3.display =true;
    
      MathJax.tex2chtmlPromise(input3, options3).then(function (node) {
        //
        //  The promise returns the typeset node, which we add to the output
        //  Then update the document to include the adjusted CSS for the
        //    content of the new equation.
        //
        output3.appendChild(node);
        MathJax.startup.document.clear();
        MathJax.startup.document.updateDocument();
      }).catch(function (err) {
        //
        //  If there was an error, put the message into the output instead
        //
        output3.appendChild(document.createElement('pre')).appendChild(document.createTextNode(err.message));
      }).then(function () {
        //
        //  Error or not, re-enable the display and render buttons
        //
       // button.disabled = display.disabled = false;
      });
    }