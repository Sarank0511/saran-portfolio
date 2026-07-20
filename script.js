// Mobile Menu

const menu = document.getElementById("menu");

const navLinks = document.querySelector("nav ul");


menu.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});




// Close menu after clicking link

document.querySelectorAll("nav ul li a")
.forEach(link=>{


link.addEventListener("click",()=>{

    navLinks.classList.remove("active");

});


});




// Smooth Scroll

document.querySelectorAll("a")
.forEach(link=>{


link.addEventListener("click",(e)=>{


if(link.hash){


e.preventDefault();


document.querySelector(link.hash)
.scrollIntoView({

behavior:"smooth"

});


}


});


});




// Button Hover Animation

const button=document.querySelector(".btn");


button.addEventListener("mouseover",()=>{

button.style.transform="scale(1.1)";

});


button.addEventListener("mouseout",()=>{

button.style.transform="scale(1)";

});
