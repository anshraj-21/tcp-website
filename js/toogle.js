const menuBar = document.querySelector(".right-menu");
const menuBarBox = document.querySelector(".right-menu-box");
const icon = document.querySelector(".menu-icon");

menuBar.addEventListener('click',()=>{
    console.log("clicked")
    menuBarBox.classList.toggle("active");
    icon.classList.toggle("fa-xmark");
    icon.classList.toggle("fa-bars");  
})
