// 1. Dynamic Typing Effect for Hero Section
const textElement = document.querySelector(".hero p");
const roles = ["Main ek Web Developer hoon.", "Main ek UI/UX Designer hoon.", "Main Tech Enthusiast hoon."];
let roleIndex = 0;
let characterIndex = 0;

function typeEffect() {
    if (characterIndex < roles[roleIndex].length) {
        textElement.innerHTML += roles[roleIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeEffect, 100); // Har character ki typing speed (100ms)
    } else {
        setTimeout(eraseEffect, 2000); // Pura sentence type hone ke baad 2 second ka pause
    }
}

function eraseEffect() {
    if (characterIndex > 0) {
        textElement.innerHTML = roles[roleIndex].substring(0, characterIndex - 1);
        characterIndex--;
        setTimeout(eraseEffect, 50); // Mitaane ki speed (50ms)
    } else {
        roleIndex = (roleIndex + 1) % roles.length; // Agla role select karein
        setTimeout(typeEffect, 500); // Agla role shuru hone se pehle ka pause
    }
}

// Page load hote hi typing effect shuru karein
document.addEventListener("DOMContentLoaded", () => {
    textElement.innerHTML = ""; // Purana static text clear karein
    typeEffect();
});


// 2. Active Link Highlight on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Agar user kisi section ke andar 150px tak scroll kar chuka hai
        if (window.scrollY >= (sectionTop - 150)) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active");
        }
    });
});
  
