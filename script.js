/* ==========================================================================
   1. DYNAMIC TYPING EFFECT (Atul Deshmukh Bachchan Portfolio)
   ========================================================================== */
const textElement = document.getElementById("typing-text");

// Aapki qualifications aur accurate academic achievements ki list
const roles = [
    "Main TERI, Ghazipur ka BCA student hoon.",
    "Maine Data Structures & C++ par kaam kiya hai.", 
    "Mera 1st Year Core Score 1071/1400 hai!"
];

let roleIndex = 0;
let characterIndex = 0;

function typeEffect() {
    if (characterIndex < roles[roleIndex].length) {
        textElement.innerHTML += roles[roleIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeEffect, 100); // Har akshar ke type hone ki speed (100ms)
    } else {
        setTimeout(eraseEffect, 2000); // Poora sentence type hone ke baad 2 second hold
    }
}

function eraseEffect() {
    if (characterIndex > 0) {
        textElement.innerHTML = roles[roleIndex].substring(0, characterIndex - 1);
        characterIndex--;
        setTimeout(eraseEffect, 50); // Akshar mitne ki speed (50ms)
    } else {
        roleIndex = (roleIndex + 1) % roles.length; // Agla text loop chalane ke liye
        setTimeout(typeEffect, 500); // Agla sentence shuru hone se pehle brief pause
    }
}

// Page load hote hi typing animation trigger karein
document.addEventListener("DOMContentLoaded", () => {
    if (textElement) {
        typeEffect();
    }
});


/* ==========================================================================
   2. NAVBAR ACTIVE LINK HIGHLIGHT ON SCROLL
   ========================================================================== */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        
        // Jab user scroll karke section ke 150px range me aaye
        if (window.scrollY >= (sectionTop - 150)) {
            currentSection = section.getAttribute("id");
        }
    });

    // Sahi menu item ko active class dena aur baaki ko hatana
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active");
        }
    });
});
        
