

document.addEventListener('keydown', (event) => {
 console.log(event.key);
 console.log(event.keyCode);

 
if(event.keyCode==45){
  
co();
 }
 
});

 
function co() {
var aa,bb;
var a=0,b=0;
 var table = document.getElementById("OnLine");
 var cells = table.getElementsByTagName("tr");

 for(var i=1;i<cells.length;i++){

   aa=parseInt(cells[i].getElementsByTagName("td")[3].innerText); 
   bb=parseInt(cells[i].getElementsByTagName("td")[4].innerText);
   console.log(aa,bb);
 a=a+aa;
 b=b+bb;
   console.log(a,b);

 }

 var div = document.getElementById("tab-data");
 div.innerText=div.innerText+"c"+a+"n"+b;
 }

