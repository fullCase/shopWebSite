const nav = document.getElementById("navbar");
const subMenuBtn = document.getElementById("subMenuBtn");
const navUl = document.getElementById("navMainList");

subMenuBtn.addEventListener("click", function(){
   if(navUl.clientWidth){
      navUl.classList.remove("active");
   }
   else{
      navUl.classList.add("active");
   }
});


function openSubMenu(){
   
}