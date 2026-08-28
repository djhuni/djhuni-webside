/* ==========================================
   DJ HuNi Premium Website
   script.js — WERSJA POPRAWIONA
========================================== */

document.addEventListener("DOMContentLoaded", () => {


    /* ==========================================
       MENU PO PRZEWINIĘCIU
    ========================================== */

    const header = document.querySelector("header");

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 80) {

            header.style.background = "rgba(9,9,9,.95)";
            header.style.padding = "14px 0";
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

        } else {

            header.style.background = "rgba(0,0,0,.20)";
            header.style.padding = "22px 0";
            header.style.boxShadow = "none";

        }

    }

    window.addEventListener("scroll", updateHeader, {
        passive: true
    });

    updateHeader();



    /* ==========================================
       PRZYCISK DO GÓRY
    ========================================== */

    const scrollTopBtn = document.getElementById("scrollTop");

    function updateScrollTop() {

        if (!scrollTopBtn) return;

        scrollTopBtn.style.display =
            window.scrollY > 600 ? "flex" : "none";

    }

    window.addEventListener("scroll", updateScrollTop, {
        passive: true
    });

    updateScrollTop();


    if (scrollTopBtn) {

        scrollTopBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        });

    }



    /* ==========================================
       ANIMOWANE LICZNIKI
    ========================================== */

    const counters = document.querySelectorAll(".counter");


    if ("IntersectionObserver" in window) {

        const counterObserver =
            new IntersectionObserver((entries) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) return;


                    const counter = entry.target;

                    const target =
                        Number(counter.dataset.target) || 0;

                    let current = 0;

                    const step =
                        Math.max(1, Math.ceil(target / 80));


                    const timer = setInterval(() => {

                        current += step;


                        if (current >= target) {

                            current = target;

                            clearInterval(timer);

                        }


                        counter.textContent =
                            current + "+";


                    }, 25);


                    counterObserver.unobserve(counter);

                });


            }, {

                threshold: 0.5

            });


        counters.forEach(counter => {

            counterObserver.observe(counter);

        });

    }



    /* ==========================================
       MENU MOBILNE
    ========================================== */

    const menuBtn =
        document.querySelector(".menu-btn");

    const nav =
        document.querySelector("nav");


    if (menuBtn && nav) {

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("active");

        });


        document.querySelectorAll("nav a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    nav.classList.remove("active");

                });

            });

    }



    /* ==========================================
       FAQ
    ========================================== */

    document.querySelectorAll(".faq-item")
        .forEach(item => {


            const question =
                item.querySelector(".faq-question");

            const answer =
                item.querySelector(".faq-answer");

            const icon =
                question
                    ? question.querySelector("i")
                    : null;


            if (!question || !answer) return;


            question.addEventListener("click", () => {


                const opened =
                    answer.style.display === "block";


                document.querySelectorAll(".faq-answer")
                    .forEach(el => {

                        el.style.display = "none";

                    });


                document.querySelectorAll(".faq-question i")
                    .forEach(el => {

                        el.classList.remove("fa-minus");

                        el.classList.add("fa-plus");

                    });


                if (!opened) {

                    answer.style.display = "block";


                    if (icon) {

                        icon.classList.remove("fa-plus");

                        icon.classList.add("fa-minus");

                    }

                }

            });

        });



    /* ==========================================
       LIGHTBOX GALERII
    ========================================== */

    const galleryImages =
        document.querySelectorAll(".gallery-item img");

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImg =
        document.getElementById("lightbox-img");

    const closeLightbox =
        document.querySelector(".close-lightbox");


    function closeGalleryLightbox() {

        if (lightbox) {

            lightbox.style.display = "none";

        }

    }


    if (lightbox && lightboxImg) {


        galleryImages.forEach(image => {

            image.addEventListener("click", () => {

                lightbox.style.display = "flex";

                lightboxImg.src = image.src;

                lightboxImg.alt =
                    image.alt || "DJ HuNi";

            });

        });


        lightbox.addEventListener("click", e => {

            if (e.target === lightbox) {

                closeGalleryLightbox();

            }

        });

    }


    if (closeLightbox) {

        closeLightbox.addEventListener(
            "click",
            closeGalleryLightbox
        );

    }


    document.addEventListener("keydown", e => {

        if (e.key === "Escape") {

            closeGalleryLightbox();

        }

    });



    /* ==========================================
       PŁYNNE PRZEWIJANIE STRONY
    ========================================== */

    document.querySelectorAll('a[href^="#"]')
        .forEach(anchor => {


            anchor.addEventListener(
                "click",
                function(e) {


                    const href =
                        this.getAttribute("href");


                    if (!href || href === "#") return;


                    const target =
                        document.querySelector(href);


                    if (target) {

                        e.preventDefault();


                        target.scrollIntoView({

                            behavior: "smooth",
                            block: "start"

                        });

                    }

                });

        });



    /* ==========================================
       AKTYWNA POZYCJA MENU
    ========================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll("nav a");


    function updateActiveMenu() {


        let current = "";


        sections.forEach(section => {


            const sectionTop =
                section.offsetTop - 170;


            if (window.scrollY >= sectionTop) {

                current =
                    section.getAttribute("id") || "";

            }

        });


        navLinks.forEach(link => {


            link.classList.remove("active");


            if (
                current &&
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveMenu,
        { passive: true }
    );



    /* ==========================================
       ROK W STOPCE
    ========================================== */

    const footerYear =
        document.querySelector(".footer-year");


    if (footerYear) {

        footerYear.textContent =
            new Date().getFullYear();

    }



    /* ==========================================
                SLIDER OPINII
    ========================================== */

    const reviewsTrack =
        document.querySelector(".reviews-track");

    const reviewsWrapper =
        document.querySelector(
            ".reviews-track-wrapper"
        );

    const prevBtn =
        document.querySelector(".review-prev");

    const nextBtn =
        document.querySelector(".review-next");

    const dotsBox =
        document.querySelector(".reviews-dots");



    if (reviewsTrack && reviewsWrapper) {


        const cards =
            Array.from(
                reviewsTrack.querySelectorAll(
                    ".review-card"
                )
            );


        let reviewIndex = 0;

        let autoSlide = null;

        let touchStartX = 0;



        /* ==========================================
           ILE OPINII WIDAĆ
        ========================================== */

        function visibleCards() {


            if (window.innerWidth <= 768) {

                return 1;

            }


            if (window.innerWidth <= 1100) {

                return 2;

            }


            return 3;

        }



        /* ==========================================
           MAKSYMALNA POZYCJA
        ========================================== */

        function maxIndex() {

            return Math.max(
                0,
                cards.length - visibleCards()
            );

        }



        /* ==========================================
           SZEROKOŚĆ JEDNEJ OPINII
        ========================================== */

        function cardStep() {


            if (!cards.length) return 0;


            const styles =
                window.getComputedStyle(
                    reviewsTrack
                );


            const gap =
                parseFloat(
                    styles.columnGap ||
                    styles.gap
                ) || 0;


            return (
                cards[0]
                    .getBoundingClientRect()
                    .width
                +
                gap
            );

        }



        /* ==========================================
           KROPKI POD OPINIAMI
        ========================================== */

        function buildDots() {


            if (!dotsBox) return;


            dotsBox.innerHTML = "";


            for (
                let i = 0;
                i <= maxIndex();
                i++
            ) {


                const dot =
                    document.createElement(
                        "button"
                    );


                dot.type = "button";


                dot.setAttribute(
                    "aria-label",
                    `Pokaż opinię ${i + 1}`
                );


                if (i === reviewIndex) {

                    dot.classList.add("active");

                }


                dot.addEventListener(
                    "click",
                    () => {


                        reviewIndex = i;


                        updateSlider();


                        restartAutoSlide();

                    }
                );


                dotsBox.appendChild(dot);

            }

        }



        /* ==========================================
           AKTYWNA KROPKA
        ========================================== */

        function updateDots() {


            if (!dotsBox) return;


            dotsBox
                .querySelectorAll("button")
                .forEach((dot, i) => {


                    dot.classList.toggle(
                        "active",
                        i === reviewIndex
                    );

                });

        }



        /* ==========================================
           PRZESUNIĘCIE SLIDERA
        ========================================== */

        function updateSlider() {


            if (!cards.length) return;


            if (reviewIndex > maxIndex()) {

                reviewIndex = maxIndex();

            }


            if (reviewIndex < 0) {

                reviewIndex = 0;

            }


            reviewsTrack.style.transform =
                `translateX(-${
                    reviewIndex * cardStep()
                }px)`;


            updateDots();

        }



        /* ==========================================
           NASTĘPNA OPINIA
        ========================================== */

        function nextReview() {


            reviewIndex =
                reviewIndex >= maxIndex()
                    ? 0
                    : reviewIndex + 1;


            updateSlider();

        }



        /* ==========================================
           POPRZEDNIA OPINIA
        ========================================== */

        function prevReview() {


            reviewIndex =
                reviewIndex <= 0
                    ? maxIndex()
                    : reviewIndex - 1;


            updateSlider();

        }



        /* ==========================================
           ZATRZYMANIE AUTOMATYCZNEGO SLIDERA
        ========================================== */

        function stopAutoSlide() {


            if (autoSlide) {

                clearInterval(autoSlide);

                autoSlide = null;

            }

        }



        /* ==========================================
           AUTOMATYCZNE PRZEWIJANIE
        ========================================== */

        function startAutoSlide() {


            stopAutoSlide();


            if (
                cards.length >
                visibleCards()
            ) {


                autoSlide =
                    setInterval(
                        nextReview,
                        5500
                    );

            }

        }



        function restartAutoSlide() {

            stopAutoSlide();

            startAutoSlide();

        }



        /* ==========================================
           STRZAŁKA W PRAWO
        ========================================== */

        if (nextBtn) {


            nextBtn.addEventListener(
                "click",
                () => {


                    nextReview();

                    restartAutoSlide();

                }
            );

        }



        /* ==========================================
           STRZAŁKA W LEWO
        ========================================== */

        if (prevBtn) {


            prevBtn.addEventListener(
                "click",
                () => {


                    prevReview();

                    restartAutoSlide();

                }
            );

        }



        /* ==========================================
           ZATRZYMANIE PO NAJECHANIU MYSZKĄ
        ========================================== */

        reviewsWrapper.addEventListener(
            "mouseenter",
            stopAutoSlide
        );


        reviewsWrapper.addEventListener(
            "mouseleave",
            startAutoSlide
        );



        /* ==========================================
           PRZESUWANIE PALCEM
        ========================================== */

        reviewsWrapper.addEventListener(
            "touchstart",
            e => {


                touchStartX =
                    e.touches[0].clientX;


                stopAutoSlide();

            },
            { passive: true }
        );


        reviewsWrapper.addEventListener(
            "touchend",
            e => {


                const touchEndX =
                    e.changedTouches[0].clientX;


                const difference =
                    touchStartX - touchEndX;


                if (difference > 50) {

                    nextReview();

                }


                if (difference < -50) {

                    prevReview();

                }


                startAutoSlide();

            },
            { passive: true }
        );



        /* ==========================================
           ZMIANA ROZMIARU EKRANU
        ========================================== */

        window.addEventListener(
            "resize",
            () => {


                reviewIndex = 0;


                buildDots();


                updateSlider();


                startAutoSlide();

            }
        );



        /* ==========================================
           START SLIDERA
        ========================================== */

        buildDots();

        updateSlider();

        startAutoSlide();

    }



    /* ==========================================
       START STRONY
    ========================================== */

    document.body.classList.add("loaded");


    console.log(
        "%cDJ HuNi Premium Website",
        "color:#d4af37;font-size:18px;font-weight:bold;"
    );


});
/* ===========================================
   DODATKOWE ATRAKCJE - LIGHTBOX
=========================================== */

const extraCards = document.querySelectorAll(".extra-photo-card");

const extrasLightbox = document.getElementById("extrasLightbox");
const extrasLightboxImg = document.getElementById("extrasLightboxImg");
const extrasLightboxTitle = document.getElementById("extrasLightboxTitle");
const extrasLightboxCounter = document.getElementById("extrasLightboxCounter");

const extrasClose = document.querySelector(".extras-close");
const extrasPrev = document.querySelector(".extras-prev");
const extrasNext = document.querySelector(".extras-next");

let currentExtraImages = [];
let currentExtraIndex = 0;
let currentExtraTitle = "";


/* ZDJĘCIA POSZCZEGÓLNYCH ATRAKCJI */

const extraGalleries = {

    dym: [
        "dym1.jpg",
        "dym2.jpg"
    ],

    iskry: [
        "iskry1.jpg",
        "iskry2.jpg",
        "iskry3.jpg",
        "iskry4.jpg",
        "iskry5.jpg"
    ],

    love: [
        "love1.jpg"
    ],

    miny: [
        "miny1.jpg",
        "miny2.jpg",
        "miny3.jpg"
    ],

    banki: [
        "banki1.jpg",
        "banki2.jpg"
    ]

};


/* WYŚWIETLANIE ZDJĘCIA */

function showExtraImage(){

    if(!currentExtraImages.length) return;

    extrasLightboxImg.src =
        currentExtraImages[currentExtraIndex];

    extrasLightboxImg.alt =
        currentExtraTitle;

    extrasLightboxTitle.textContent =
        currentExtraTitle;

    extrasLightboxCounter.textContent =
        `${currentExtraIndex + 1} / ${currentExtraImages.length}`;


    /* Jeśli jest tylko jedno zdjęcie,
       chowamy strzałki */

    if(currentExtraImages.length <= 1){

        extrasPrev.style.display = "none";
        extrasNext.style.display = "none";

    }else{

        extrasPrev.style.display = "flex";
        extrasNext.style.display = "flex";

    }

}


/* OTWIERANIE KAFELKA */

extraCards.forEach(card => {

    card.addEventListener("click", () => {

        const category =
            card.dataset.extra;

        const cardImage =
            card.querySelector("img");

        const title =
            card.querySelector("h3");


        currentExtraTitle =
            title ? title.textContent : "Dodatkowa atrakcja";


        /*
        WIATRAKI:
        ponieważ podmieniłeś zdjęcie ręcznie,
        pobieramy bezpośrednio zdjęcie z kafelka.
        */

        if(category === "wiatraki"){

            currentExtraImages = cardImage
                ? [cardImage.getAttribute("src")]
                : [];

        }else{

            currentExtraImages =
                extraGalleries[category] || [];

        }


        /*
        Awaryjnie:
        jeśli galerii nie znaleziono,
        używamy zdjęcia kafelka.
        */

        if(
            currentExtraImages.length === 0 &&
            cardImage
        ){

            currentExtraImages = [
                cardImage.getAttribute("src")
            ];

        }


        currentExtraIndex = 0;

        showExtraImage();

        extrasLightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


/* NASTĘPNE ZDJĘCIE */

extrasNext.addEventListener("click", event => {

    event.stopPropagation();

    currentExtraIndex++;

    if(
        currentExtraIndex >=
        currentExtraImages.length
    ){
        currentExtraIndex = 0;
    }

    showExtraImage();

});


/* POPRZEDNIE ZDJĘCIE */

extrasPrev.addEventListener("click", event => {

    event.stopPropagation();

    currentExtraIndex--;

    if(currentExtraIndex < 0){
        currentExtraIndex =
            currentExtraImages.length - 1;
    }

    showExtraImage();

});


/* ZAMKNIĘCIE */

function closeExtrasLightbox(){

    extrasLightbox.classList.remove("active");

    document.body.style.overflow = "";

}


extrasClose.addEventListener(
    "click",
    closeExtrasLightbox
);


/* KLIKNIĘCIE W CZARNE TŁO */

extrasLightbox.addEventListener(
    "click",
    event => {

        if(event.target === extrasLightbox){
            closeExtrasLightbox();
        }

    }
);


/* KLAWIATURA */

document.addEventListener("keydown", event => {

    if(
        !extrasLightbox.classList.contains("active")
    ){
        return;
    }


    if(event.key === "Escape"){

        closeExtrasLightbox();

    }


    if(
        event.key === "ArrowRight" &&
        currentExtraImages.length > 1
    ){

        currentExtraIndex++;

        if(
            currentExtraIndex >=
            currentExtraImages.length
        ){
            currentExtraIndex = 0;
        }

        showExtraImage();

    }


    if(
        event.key === "ArrowLeft" &&
        currentExtraImages.length > 1
    ){

        currentExtraIndex--;

        if(currentExtraIndex < 0){
            currentExtraIndex =
                currentExtraImages.length - 1;
        }

        showExtraImage();

    }
/* ===========================================
        PAS EMOCJI - ZMIANA TŁA
=========================================== */

const emotionSlides =
    document.querySelectorAll(".emotion-slide");

if(emotionSlides.length > 1){

    let emotionIndex = 0;

    setInterval(() => {

        emotionSlides[emotionIndex]
            .classList.remove("active");

        emotionIndex++;

        if(emotionIndex >= emotionSlides.length){
            emotionIndex = 0;
        }

        emotionSlides[emotionIndex]
            .classList.add("active");

    }, 6500);

}
});
