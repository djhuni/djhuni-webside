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
