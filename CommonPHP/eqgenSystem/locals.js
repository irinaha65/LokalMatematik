//hanterar info i localstorage
function clearLocals(){
  items= [];

    localStorage.setItem("eqvations",JSON.stringify(items));
}
function getLocals(){
  return JSON.parse( localStorage.getItem("eqvations"));
}
function addToLocals(item){
    console.dir(item);
     var items=[]; 
  
   items= JSON.parse( localStorage.getItem("eqvations"));
 if(!items){
   

    items=[{item}];
} 
else {items.push({item}); }
  localStorage.setItem("eqvations",JSON.stringify(items));

}