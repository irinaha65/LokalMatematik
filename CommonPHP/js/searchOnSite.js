function myFunction(val) {
   console.log(val);
   var pattern = val.toLowerCase();
   var divToScroll="";
  // var targetId = "";
   var divs = document.getElementsByClassName("col-md-2");
  // console.dir(divs);
   for (var i = 0; i < divs.length; i++) {
      var para = divs[i].getElementsByTagName("p");
     
       for(var j=0; j<para.length;j++){  
          
           var index = para[j].innerText.toLowerCase().indexOf(pattern);
           if (index !== -1) {
        // targetId = divs[i].parentNode.id;
              para[j].innerHTML = para[j].innerHTML.replace(eval("/"+pattern+"/gi"),
              "<a name="+pattern+i+" style='background:yellow'>"+pattern+"</a>"); //Заменяем найденный текст ссылками с якорем;
  if(divToScroll===""){divToScroll='#'+pattern+i;}
      }
   }
   }
   //lastResFind=textToFind; // сохраняем фразу для поиска, чтобы в дальнейшем по ней стереть все ссылки
  window.location = divToScroll;//перемещаем скрол к пervomu

}
