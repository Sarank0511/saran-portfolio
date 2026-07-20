const menu = document.getElementById("menu");
const nav = document.querySelector("nav ul");


menu.addEventListener("click",()=>{

    nav.classList.toggle("active");

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


// Button animation

const button=document.querySelector(".btn");
button.addEventListener("mouseover",()=>{
button.style.transform="scale(1.1)";
});

button.addEventListener("mouseout",()=>{
button.style.transform="scale(1)";
});