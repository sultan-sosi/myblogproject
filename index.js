var menuItem=document.getElementById("Menu-icon");
var menubar=document.getElementById("nav");
menuItem.addEventListener("click",()=>{
     if(menubar.className==="hidden"){
        menubar.classList.remove('hidden');
     }else{
        menubar.classList.add('hidden');
     }
    

});