 function convert() {
        //
        //  Get the TeX input
        //
   
 
        var input = document.getElementById("eqv").innerHTML.trim();
      console.log(input);
        var output = document.getElementById('output-eqvX');

    
   MathJax.tex2chtmlPromise(input).then((node) => {
    output.innerHTML='';
    output.append(node);
    MathJax.startup.document.clear();
    MathJax.startup.document.updateDocument();
});
    }
    
   