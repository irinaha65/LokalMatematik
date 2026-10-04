const texElements={ //\\bigg\\{\\begin{array} \\dfrac{a-1}{b-1}a+1 +456.9=-196.00-13x \\cr 3y = -196.00-13x\\end{array}"
  "beginSystem":'\\[  \\Biggl \\{ \\begin{array} \\ ',
  "endSystem":' \\end{array} \\]',
  "eqvBrake":' \\cr ',
  "space":' \\quad ',
  "alfa_s":' \\alpha',
  "betta_s":' \\beta',
  "omega_s":' \\omega',
  "delta_l":' \\Delta',
  "omega_l":' \\Omega',
  "superscript":' ^ ', //https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference
  "subscript":' _ ',  //x_i^2: x2i, \log_2 x: log2x.
  "curly_braces_r":' \\} ',
  "curly_braces_l":' \\{ ',
  "fraction":function(a,b){
    return ' {'+a+ ' \\over '+ b+'} '; },
    "sqrt": ' \\sqrt ', //\sqrt{x^3}
    "lim": ' \\lim_{x\\to 0} ',
    "pq":' \\begin{array}\\   x^2 + px +q = 0 \\cr  x_1,_2 = {-p \\over 2} \\pm \\sqrt{({-p \\over 2})^2-q} \\\\ \\end{array} '  ,
    "ekvsys":'\\begin{array}\\ Additionsmetoden:  \\cr\\ \\begin{array}\\ '+ 
    ' \\bigg\\{\\begin{array}\\ ax + by  = d \\cr -ax + ey  = c  \\end{array} \\cr by + ey  = d + c \\end{array} \\cr '+
    '\\ Substitutionsmetoden:  \\cr\\ \\begin{array}\\ '+ 
    ' \\bigg\\{\\begin{array}\\ x + by  = d \\cr ax + ey  = c  \\end{array} \\cr x= d - by \\cr a(d - by) + ey  = c \\end{array} '+
    '\\end{array}'  ,
    "ekv":'\\begin{array}\\  ax + b  = cx + d \\cr ax - cx = d - b  \\cr  (a-c) x = d - b  \\cr   x = {(d - b) \\over (a-c)} '+
    '\\end{array}'  ,
    "fr":'\\begin{array}\\ Förkorta  \\quad med  \\quad c:   \\quad  {(-a ) \\over b}  = {(-a/c) \\over (b/c)}  \\cr '+
    ' Förlänga  \\quad med  \\quad c:  \\quad  {(-a )\\over b}  = {(-ac) \\over (bc)}  \\cr '+
  '  Addera: \\quad  {a \\over b} \\pm {c \\over d} = {(ad \\pm cb) \\over (bd)}  \\cr '+
     
   '  Multiplicera: \\quad  {a \\over b} * {c \\over d} = {(ac) \\over( bd)}  \\cr '+
     '  Dividera: \\quad  {({a \\over b}) \\over ({c \\over d}) }= {a \\over d} * {b \\over c} = {ad \\over bc} '+
     ' \\end{array} '  ,
     "bl":'\\begin{array}\\ Term + term = summa, a + b  = c \\cr '+ 
     'Term - term = differensen, a - c = b  \\cr '+
     'Faktor * faktor = produkt, a * b = c  \\cr '+
     ' {Täljare \\over nämnare}  = kvot, {a \\over b} = c '+
     '\\end{array}'  ,
};
    
var elements = {
   "app": $(".app"),
  "tex":$("#eqv"),
  "help":$("#help"),
   "output_eqvX": $("#output-task"),
   "outputDiv": $(".equationDiv")

    };

var mode;
var level;
  var imgName; 
  var cache = {
        "ansX": null,
        "ansY": null,
        "ansX_2": null,
        "ansY_2": null,
    };
      //exkl = min value
 function  getRandom(max,exkl){
        var x=0;
        while(x==0)
          {   var random_sign =
             Math.cos( Math.PI * Math.round( Math.random() ) );//1 or -1
               x = random_sign*Math.floor(Math.random() * max + exkl);  
             
            }
         
         return x;    
  }

  function  getRandomSign(){
  
     return   Math.cos( Math.PI * Math.round( Math.random() ) );  
}


//save answers and tips to json
//localStorage
 
 async function reactTask(ek){
  showAnswerTips(ek);

}

function showAnswerTips(ek){
  addToLocals({x:ek['x'],y:ek['y'],x_2:ek['x_2'],
          y_2:ek['y_2'],answer:ek['ans'],mode:mode,level:level,
          tips2:ek['tips2'],tips1:ek['tips1'],points:parseInt(level),
        image:imgName});

  let eq=(ek['eq1']).replaceAll("+ -", "-").replaceAll("- +", "-").replaceAll("- -", "+");
  console.log(eq);
 document.getElementById('eqv').innerHTML=eq;
//  console.log( document.getElementById("eqv").innerHTML);
//elements.output_eqvX.html(ek['eq2']);
//  convert();

}



function reactTaskWithoutMath(ek){
  showAnswerTips(ek);


  // var container=document.getElementsByTagName("mjx-container");
  // var image=document.getElementById("image-output");
 //  node.innerHTML=
 //document.getElementById("eqv").innerHTML.trim();
//console.dir(node);

  
 //  convertHelp();
   //document.getElementById('textareaAnswerMath').innerHTML=document.getElementById("textareaAnswer1").innerHTML.trim();

  }

  function reactTaskWithHelp(ek){
    showAnswerTips(ek);
 
     
//  convertHelp();
 
    }