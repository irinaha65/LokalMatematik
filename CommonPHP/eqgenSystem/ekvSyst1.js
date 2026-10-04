
  //easier equation 2 st 
  function genEqEasy1()
    {
       var  x= getRandom(10,1);
       var y=   getRandom(10,1); //x+y=a   bx+y=c
     
      var b = getRandom( 25,2);
     
      var IDs = new Object();
   
     IDs['eq1'] = texElements.beginSystem+' x + y = '+(x+y)+
     texElements.eqvBrake+' '+b + "x + y = " + (b*x+y) +texElements.endSystem; 
     //IDs['eq2'] = "       (2)  " + b + "x + y = " + (b*x+y) ;
     IDs['tips1'] = 'Grafisk lösning visar punkten som är gemensam för bägge ekvationerna '; 
     IDs['tips2'] = 'Uttryck y genom x från den första och sät in i den andra';
    
      IDs['x'] = x; 
      IDs['y'] = y;   
      return (IDs);
      
    }
   

  
 //medel1 : en konstant
 function genEqMed1()//ax+y=b   x+cy=d
  {
      var  x= getRandom(10,1);
      var y=   getRandom(10,1);
      //var x = getRandom(10,1);  // returns a random integer from 1 to 10
      var a = getRandom(10,2);
      
      var c = getRandom( 25,2);
     
      var IDs = new Object();
   
      IDs['eq1'] = texElements.beginSystem+a+"x + y = " + (a*x+y).toFixed(2)+
      texElements.eqvBrake+' x + ' + c + "y = " + (x+c*y).toFixed(2)+texElements.endSystem;
      //a+"x + y = " + (a*x+y).toFixed(2) ;
      //IDs['eq2'] = "      (2)    x + " + c + "y = " + (x+c*y).toFixed(2) ;
      IDs['tips1'] = 'Grafisk lösning visar punkten som är gemensam för bägge ekvationerna '; 
      IDs['tips2'] = 'Uttryck y genom x från den första och sät in i den andra';
     
      IDs['x'] = x; 
       IDs['y'] = y;   
       return (IDs);
       
     }
    //två konstanter
   function genEqMed2()  //ax+by=z   cx+dy=t
    {
      var a = getRandom(25, 5);
      var b = getRandom( 30,10);
      var c = -a;
      var d = getRandom(10,3);
      var  x= getRandom(10,1)-0.1;
      var y=   getRandom(10,1);

      var IDs = new Object();
      IDs['eq1'] = texElements.beginSystem+a+"x + "+b+"y = " + (a*x+b*y).toFixed(2) +
      texElements.eqvBrake + c + "x + " + d + "y = " + (c*x+d*y).toFixed(2)+texElements.endSystem;
      //a+"x + "+b+"y = " + (a*x+b*y).toFixed(2) ;
      //IDs['eq2'] = "   (2)   "+c+"x + " + d + "y = " + (c*x+d*y).toFixed(2) ;
      IDs['tips1'] = 'Grafisk lösning visar punkten som är gemensam för bägge ekvationerna '; 
      IDs['tips2'] = 'Addera raderna för att eliminera x';
     
      IDs['x'] = x; 
       IDs['y'] = y;   
       return (IDs);
      
    }
 //equations with x on both sides
function genEqHard1()  //ax+by=z+ex  cx+dy=t
 {
      var e = getRandom(10,2);
      var a = getRandom(25, 5);
      var b = getRandom( 30,10)-0.1;
      var c = getRandom(10,3)-0.1;
      var d = getRandom(10,3);
      var  x= getRandom(10,1)+0.1;
      var y=   getRandom(20,1);

      var IDs = new Object();
      IDs['eq1'] =texElements.beginSystem+a+"x + "+b+"y = " + ((a-e)*x+b*y).toFixed(2)+" + "+e+"x " +
      texElements.eqvBrake + c + "x + " + d + "y = " + (c*x+d*y).toFixed(2)+texElements.endSystem;
      // " "+a+"x + "+b+"y = " + ((a-e)*x+b*y).toFixed(2)+" + "+e+"x " ;
   //   IDs['eq2'] = "         "+c+"x + " + d + "y = " + (c*x+d*y).toFixed(2) ;
   IDs['tips1'] = 'Grafisk lösning visar punkten som är gemensam för bägge ekvationerna '; 
   IDs['tips2'] = 'Uttryck y genom x från den första och sät in i den andra';
  
   IDs['x'] = x; 
       IDs['y'] = y;   
       return (IDs);
   
}
 //equations with x on both sides and divition
function genEqHard2()
 {                               //(ax+b)/c=z+ey  dy=t+fx
    var f = getRandom(15,1);
      var e = getRandom(10,2);
  //    var a = getRandom(25, 5)+0.1;
      var b = getRandom( 30,10)-0.1;
      var c = getRandom(10,3);
      var d = getRandom(10,3);
      var  x= getRandom(20,1)+0.1;
      var y=   getRandom(20,1)-0.1;
//$$x+1\over\sqrt{1-x^2}\label{ref1}$$
//https://www.tutorialspoint.com/tex_commands/dfrac.htm
      var IDs = new Object();
  //    IDs['eq1'] = "svår: "+'  \\bigg\\{\\begin{array} 3x +7z = 20 \\cr y - 17z = -3 \\cr 24x + 15y = 7\\end{array}'
      
   //   '\\begin{pmatrix}a   b\\\\ c    d\\end{pmatrix}'// matrix
    //a=(cd+cy-b)/x
  var  a=((c*d+c*y-b)/x).toFixed(2);
  var z= ((e*y+f)/x).toFixed(2);
   IDs['eq1'] = texElements.beginSystem+texElements.fraction(''+a+'x + '+b,' '+c+' ')+ ' = '+d+' +  y '+
   texElements.eqvBrake+' '+e+'y + '+f+' = '+ z +'x'+texElements.endSystem;
     // IDs['eq2'] = " " + d + "y = " + (d*y-f*x).toFixed(2) +f+"x";
     IDs['tips1'] = 'Grafisk lösning visar punkten som är gemensam för bägge ekvationerna '; 
     IDs['tips2'] = 'Uttryck y genom x från den första och sät in i den andra';
    
     IDs['x'] = x; 
       IDs['y'] = y;   
       return (IDs);
  
 }  
function setMode(_mode){
  mode=_mode;  
  console.log("mode: "+mode);
}
function  setLevel(   _level ){
  
    level=_level;
    console.log("level: "+level);
    }
 //This runs on line 200 within validate function                                                                                                                RUN - RUN - RUN
 function run( _callback )
 {
  console.log(mode+level);
      var ek=[];
  
 // console.dir(elements.menu);
if (level=="6")
{level=Math.abs(getRandom(5,1)).toString();}  
//console.log(checked);//random  level

switch (level){
  case "1"://  elements.menu.id("easy").checked)
          ek=genEqEasy1();
      
           break;
    case "2":ek=genEqMed1(); 
 
    break;
 
   case "3" :  ek=genEqMed2(); 

    break;
    case "4" :  ek=genEqHard1();
  
     break;

    case "5" :ek=genEqHard2();
 
    break;
  
 }   
// iniElements( mode, level );
console.dir(ek);
 reactTask(ek).then(   _callback());			

 //ladda upp bilden till server
 }