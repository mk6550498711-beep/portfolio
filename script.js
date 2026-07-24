// Mobile Menu
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
};

// Active Navbar on Scroll
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){

            navLinks.forEach(link=>{
                link.classList.remove("active");
                document.querySelector(".navbar a[href*="+id+"]")
                .classList.add("active");
            });

        }

    });

    // Sticky Header
    let header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 100);

    // Close Menu
    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");

};

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });
    });
});

// Typing Effect
const text = [
    "Software Engineering",
    "Web Developer",
    
    "AI /ML"
];

let index = 0;
let char = 0;

const typing = document.querySelector(".home-content h3 span");

function type(){

    if(char < text[index].length){

        typing.textContent += text[index].charAt(char);
        char++;
        setTimeout(type,100);

    }else{

        setTimeout(erase,1500);

    }

}

function erase(){

    if(char > 0){

        typing.textContent = text[index].substring(0,char-1);
        char--;

        setTimeout(erase,50);

    }else{

        index++;

        if(index >= text.length){
            index = 0;
        }

        setTimeout(type,300);

    }

}
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    navbar.classList.toggle("active");
};

typing.textContent="";
type();
