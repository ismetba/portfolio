let mobileMenu = document.querySelector(".mobile-menu");
let menuBtn = document.getElementById("menu-btn");
let menuCloseBtn =document.getElementById("menu-close-btn");
menuBtn.addEventListener("click",()=>{
    mobileMenu.classList.toggle("d-none")
});
menuCloseBtn.addEventListener("click",()=>{
    mobileMenu.classList.toggle("d-none")
});
document.addEventListener("click",(e)=>{
if(!mobileMenu.contains(e.target) && e.target != menuBtn && !mobileMenu.classList.contains("d-none")){
    mobileMenu.classList.toggle("d-none")
}
})