const nav = document.getElementById("navbar");
const subMenuBtn = document.getElementById("subMenuBtn");
const subMenuBtnIcon = document.getElementById("subMenuBtnIcon");
const navUl = document.getElementById("navMainList");

subMenuBtn.addEventListener("click", function(){
   if(navUl.clientWidth){
      navUl.classList.remove("active");
      subMenuBtnIcon.classList.remove("fa-times");
      subMenuBtnIcon.classList.add("fa-bars");
   }
   else{
      navUl.classList.add("active");
      subMenuBtnIcon.classList.remove("fa-bars");
      subMenuBtnIcon.classList.add("fa-times");
   }
});


function openSubMenu(){
   
}
