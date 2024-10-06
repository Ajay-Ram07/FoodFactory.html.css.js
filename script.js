let menu=document.querySelector("#navToggle");
let navbar=document.querySelector(".navList");

menu.addEventListener('click',function() {
    navbar.classList.toggle("active");
});

window.onscroll = () =>{
    navbar.classList.remove("active");
};