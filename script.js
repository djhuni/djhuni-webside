/* ==========================================
   DJ HuNi Premium Website
   script.js
========================================== */

/* ==========================
   MENU PO PRZEWINIĘCIU
========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(9,9,9,.95)";
        header.style.padding = "14px 0";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(0,0,0,.20)";
        header.style.padding = "22px 0";
        header.style.boxShadow = "none";

    }

});

/* ==========================
   SCROLL TO TOP
========================== */

const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        scrollTopBtn.style.display = "flex";

    } else {

        scrollTopBtn.style.display = "none";

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

/* ==========================
   ANIMOWANE LICZNIKI
========================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = +counter.dataset.target;

        let current = 0;

        const step = Math.ceil(target / 80);

        const timer = setInterval(() => {

            current += step;

            if (current >= target) {

                current = target;

                clearInterval(timer);

            }

            counter.textContent = current + "+";

        }, 25);

        counterObserver.unobserve(counter);

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});
  /* ==========================================
   MENU MOBILNE
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});

/* Zamknij menu po kliknięciu w link */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});

/* ==========================================
   FAQ
========================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {

        const opened = answer.style.display === "block";

        document.querySelectorAll(".faq-answer").forEach(el => {

            el.style.display = "none";

        });

        if (!opened) {

            answer.style.display = "block";

        }

    });

});

/* ==========================================
   LIGHTBOX GALERII
========================================== */

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeLightbox = document.querySelector(".close-lightbox");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = image.src;

        lightboxImg.alt = image.alt;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});

/* ==========================================
   PŁYNNE PRZEWIJANIE
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});
  /* ==========================================
   ANIMACJE POJAWIANIA SIĘ SEKCJI
========================================== */

const sections = document.querySelectorAll("section");

const sectionObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

sections.forEach(section => {

    section.classList.add("hidden");

    sectionObserver.observe(section);

});

/* ==========================================
   AKTYWNA POZYCJA MENU
========================================== */

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ==========================================
   EFEKT PARALLAX HERO
========================================== */

const heroImage = document.querySelector(".hero-image img");

if (heroImage && window.innerWidth > 992) {

    document.addEventListener("mousemove", (e) => {

        const x = (window.innerWidth / 2 - e.clientX) / 40;
        const y = (window.innerHeight / 2 - e.clientY) / 40;

        heroImage.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}

/* ==========================================
   ROK W STOPCE
========================================== */

const footerYear = document.querySelector(".footer-year");

if (footerYear) {

    footerYear.textContent = new Date().getFullYear();

}

/* ==========================================
   START
========================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

console.log("%cDJ HuNi Premium Website",
"color:#d4af37;font-size:18px;font-weight:bold;");
/* ==========================================
        PREMIUM REVIEWS SLIDER
========================================== */

const reviews = [

{
    stars:"★★★★★",
    name:"Bartosz Wereski",
    source:"google",
    text:"Z całego serca polecamy Mateusza! Profesjonalizm od pierwszego kontaktu aż do końca imprezy. Goście bawili się do samego rana."
},

{
    stars:"★★★★★",
    name:"Zuzanna Rutkowska",
    source:"google",
    text:"Serdecznie dziękujemy za wspaniałą oprawę muzyczną naszego wesela. Wszystko przebiegło perfekcyjnie."
},

{
    stars:"★★★★★",
    name:"Julia Kasprzak",
    source:"facebook",
    text:"DJ HuNi stworzył niesamowitą atmosferę. Muzyka idealnie dobrana do gości i pełny parkiet przez całą noc."
},

{
    stars:"★★★★★",
    name:"Natalia i Paweł",
    source:"facebook",
    text:"Pełen profesjonalizm, świetny kontakt i fantastyczna zabawa. Polecamy z całego serca."
},

{
    stars:"★★★★★",
    name:"Anna i Michał",
    source:"google",
    text:"Najlepszy DJ jakiego mogliśmy wybrać. Dziękujemy za niezapomnianą noc."
},

{
    stars:"★★★★★",
    name:"Kasia i Damian",
    source:"facebook",
    text:"Wszystko dopięte na ostatni guzik. Goście zachwyceni. Jeszcze raz dziękujemy!"
};

const reviewsTrack = document.getElementById("reviewsTrack");

reviews.forEach(review=>{

const icon = review.source==="google"
? "images/google.png"
: "images/facebook.png";

reviewsTrack.innerHTML += `

<div class="review-card">

<div class="stars">${review.stars}</div>

<p>${review.text}</p>

<div class="review-author">

<div>

<strong>${review.name}</strong>

</div>

<div class="review-source">

<img src="${icon}" alt="${review.source}">

<span>${review.source}</span>

</div>

</div>

</div>

`;

});/* ==========================================
        AUTO SLIDER
========================================== */

let reviewIndex = 0;
let autoSlide;

function moveReviews() {

    const cards = document.querySelectorAll(".review-card");

    if(cards.length === 0) return;

    let cardWidth = cards[0].offsetWidth + 30;

    reviewIndex++;

    if(reviewIndex >= cards.length){

        reviewIndex = 0;

    }

    reviewsTrack.style.transform =
        `translateX(-${reviewIndex * cardWidth}px)`;

}

function startSlider(){

    autoSlide = setInterval(moveReviews,5000);

}

function stopSlider(){

    clearInterval(autoSlide);

}

startSlider();

reviewsTrack.addEventListener("mouseenter",stopSlider);

reviewsTrack.addEventListener("mouseleave",startSlider);

/* ==========================================
        SWIPE MOBILE
========================================== */

let startX = 0;

reviewsTrack.addEventListener("touchstart",(e)=>{

    startX = e.touches[0].clientX;

});

reviewsTrack.addEventListener("touchend",(e)=>{

    let endX = e.changedTouches[0].clientX;

    if(startX-endX>50){

        moveReviews();

    }

    if(endX-startX>50){

        reviewIndex--;

        if(reviewIndex<0){

            reviewIndex=document.querySelectorAll(".review-card").length-1;

        }

        let cardWidth=document.querySelector(".review-card").offsetWidth+30;

        reviewsTrack.style.transform=
        `translateX(-${reviewIndex*cardWidth}px)`;

    }

});

/* ==========================================
        RESPONSIVE
========================================== */

window.addEventListener("resize",()=>{

    reviewIndex=0;

    reviewsTrack.style.transform="translateX(0)";

});
