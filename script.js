const menu = document.getElementById("menu");

const navLinks = document.querySelector("nav ul");


menu.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});




// Smooth scrolling

document.querySelectorAll("a").forEach(link=>{


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
