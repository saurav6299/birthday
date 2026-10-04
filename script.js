const bgMusic = document.getElementById("bgMusic");

bgMusic.volume = 1;

window.addEventListener("load", function () {

    bgMusic.play()
        .then(() => {
            console.log("🎵 Music started automatically");
        })
        .catch((error) => {
            console.log("Autoplay blocked by browser:", error);
        });

});
document.addEventListener("click", function startMusic() {

    bgMusic.play();

    document.removeEventListener("click", startMusic);

});
/* =========================================
   SMOOTH SCROLL
========================================= */

function scrollToStory() {

    document
        .getElementById("story")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
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


/* =========================================
   FLOATING HEARTS
========================================= */

const heartsContainer =
    document.querySelector(".hearts-container");


function createHeart() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = ["♥", "♡", "❤", "💕"][
        Math.floor(Math.random() * 4)
    ];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (10 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 7) + "s";

    heartsContainer.appendChild(heart);


    setTimeout(() => {
        heart.remove();
    }, 12000);

}

setInterval(createHeart, 800);


/* =========================================
   SURPRISE MODAL
========================================= */

const surpriseModal =
    document.getElementById("surpriseModal");


function openSurprise() {

    surpriseModal.classList.add("show");

    document.body.style.overflow = "hidden";

    createCelebration();

}


function closeSurprise() {

    surpriseModal.classList.remove("show");

    document.body.style.overflow = "";

}


/* Close modal when clicking outside */

surpriseModal.addEventListener("click", function(event) {

    if (event.target === surpriseModal) {
        closeSurprise();
    }

});


/* ESC key */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeSurprise();
        closeLightbox();

    }

});


/* =========================================
   CELEBRATION HEARTS
========================================= */

function createCelebration() {

    for (let i = 0; i < 35; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.innerHTML = ["❤️", "💕", "💗", "💖", "✨"][
                Math.floor(Math.random() * 5)
            ];

            heart.style.position = "fixed";
            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.top =
                Math.random() * 100 + "vh";

            heart.style.fontSize =
                (15 + Math.random() * 25) + "px";

            heart.style.zIndex = "10000";

            heart.style.pointerEvents = "none";

            document.body.appendChild(heart);


            heart.animate(
                [
                    {
                        transform: "translateY(0) scale(0)",
                        opacity: 0
                    },

                    {
                        transform: "translateY(-100px) scale(1)",
                        opacity: 1
                    },

                    {
                        transform: "translateY(-250px) scale(0.5)",
                        opacity: 0
                    }
                ],
                {
                    duration: 2500,
                    easing: "ease-out"
                }
            );


            setTimeout(() => {
                heart.remove();
            }, 2500);

        }, i * 70);

    }

}


/* =========================================
   GALLERY LIGHTBOX
========================================= */

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightbox-image");


function openLightbox(image) {

    lightboxImage.src = image.src;

    lightbox.classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeLightbox() {

    lightbox.classList.remove("show");

    document.body.style.overflow = "";

}


/* =========================================
   IMAGE ERROR HANDLER
========================================= */

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("error", function() {

        this.style.background =
            "linear-gradient(135deg,#ffd5df,#fff0f4)";

        this.style.minHeight = "150px";

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".timeline-item, .reason-card, .memory-card, .gallery-item, .letter-wrapper"
);


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(30px)";

    element.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(element);

});


/* =========================================
   MOUSE PARALLAX HERO
========================================= */

const hero = document.querySelector(".hero");

hero.addEventListener("mousemove", event => {

    if (window.innerWidth < 800) return;

    const x =
        (window.innerWidth / 2 - event.clientX) / 50;

    const y =
        (window.innerHeight / 2 - event.clientY) / 50;

    document.querySelectorAll(".polaroid").forEach(
        (photo, index) => {

            const multiplier = index % 2 === 0 ? 1 : -1;

            photo.style.marginLeft =
                x * multiplier + "px";

            photo.style.marginTop =
                y * multiplier + "px";

        }
    );

});


/* =========================================
   DOUBLE CLICK HEART
========================================= */

document.addEventListener("dblclick", event => {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left = event.clientX + "px";
    heart.style.top = event.clientY + "px";

    heart.style.fontSize = "35px";

    heart.style.zIndex = "9999";

    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);


    heart.animate(

        [
            {
                transform: "scale(0)",
                opacity: 0
            },

            {
                transform: "scale(1.5)",
                opacity: 1
            },

            {
                transform: "translateY(-80px) scale(1)",
                opacity: 0
            }

        ],

        {
            duration: 1000
        }

    );


    setTimeout(() => {
        heart.remove();
    }, 1000);

});
