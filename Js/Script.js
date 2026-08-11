alert("Script Loaded");
// ===============================
// LUXURY ENVELOPE OPENING
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const loadingScreen = document.getElementById("loading-screen");
    const openBtn = document.getElementById("openEnvelope");
    const flap = document.querySelector(".flap");
    const letter = document.querySelector(".letter");

    if (!loadingScreen || !openBtn || !flap || !letter) return;

    document.body.style.overflow = "hidden";

    openBtn.addEventListener("click", () => {

       flap.style.transform = "rotateX(180deg)";

        setTimeout(() => {
            letter.style.transform = "translateY(-120px)";
        }, 500);

        setTimeout(() => {
            loadingScreen.style.opacity = "0";
            loadingScreen.style.visibility = "hidden";
            loadingScreen.style.pointerEvents = "none";
            document.body.style.overflowY = "auto";
        }, 2200);

    });

});

const weddingDate = new Date("October 24, 2026 00:00:00").getTime();

setInterval(function(){

const now = new Date().getTime();

const distance = weddingDate - now;

document.getElementById("days").innerHTML =
Math.floor(distance/(1000*60*60*24));

document.getElementById("hours").innerHTML =
Math.floor((distance%(1000*60*60*24))/(1000*60*60));

document.getElementById("minutes").innerHTML =
Math.floor((distance%(1000*60*60))/(1000*60));

document.getElementById("seconds").innerHTML =
Math.floor((distance%(1000*60))/1000);

},1000);
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.15
});

reveals.forEach((section) => observer.observe(section));

const particleContainer = document.getElementById("particles");

if (particleContainer) {

    for(let i = 0; i < 30; i++){

        const p = document.createElement("span");

        p.className = "particle";

        p.style.left = Math.random() * 100 + "vw";

        p.style.animationDuration =
            (10 + Math.random() * 10) + "s";

        p.style.animationDelay =
            Math.random() * 10 + "s";

        p.style.width =
            (2 + Math.random() * 4) + "px";

        p.style.height = p.style.width;

        particleContainer.appendChild(p);
    }
}

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightbox-image");

const closeLightbox = document.getElementById("close-lightbox");

galleryImages.forEach(image=>{

    image.addEventListener("click",()=>{

        lightbox.classList.add("active");

        lightboxImage.src=image.src;

    });

});

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("music-btn");

let playing = false;

musicBtn.addEventListener("click", () => {

    if(!playing){

        music.play();
        musicBtn.innerHTML = "❚❚";
        playing = true;

    }else{

        music.pause();
        musicBtn.innerHTML = "♫";
        playing = false;

    }

});

const progress = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const percentage = (scrollTop / docHeight) * 100;

    progress.style.width = percentage + "%";

});
