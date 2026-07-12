/* ==========================
   AOS Animation
========================== */

AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: "ease-in-out"
});

/* ==========================
   Navbar Background on Scroll
========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.padding = "12px 0";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
    } else {
        navbar.style.padding = "18px 0";
        navbar.style.boxShadow = "0 10px 35px rgba(0,0,0,.05)";
    }

});

/* ==========================
   Active Navigation
========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
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

/* ==========================
   Smooth Hover Animation
========================== */

const cards = document.querySelectorAll(
    ".service-card, .project-card, .timeline-item, .about-card"
);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});