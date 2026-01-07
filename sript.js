/**
 * Sahil Kirmani Portfolio — Core JavaScript
 * Clean • Stable • Performance-safe
 */

document.addEventListener("DOMContentLoaded", () => {
    console.log("🚀 Portfolio Loaded");

    updateYear();
    setupNavigation();
    setupScrollAnimations();
    setupPageSpecific();
    setupAccessibility();
    setupSound();
});

/* ================= YEAR ================= */
function updateYear() {
    document.querySelectorAll("#year, #current-year").forEach(el => {
        el.textContent = new Date().getFullYear();
    });
}

/* ================= NAV ================= */
function setupNavigation() {
    const page = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("nav a").forEach(link => {
        if (link.getAttribute("href") === page) {
            link.classList.add("active");
        }
    });
}

/* ================= SCROLL ANIMATIONS ================= */
function setupScrollAnimations() {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animated");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    document
        .querySelectorAll(
            ".timeline-item, .education-item, .quality-item, .skill-category"
        )
        .forEach(el => observer.observe(el));
}

/* ================= PAGE SPECIFIC ================= */
function setupPageSpecific() {
    if (document.querySelector(".timeline")) setupExperience();
    if (document.querySelector(".skills-grid")) setupSkills();
    if (document.querySelector(".education-section")) setupAbout();
}

/* ================= EXPERIENCE ================= */
function setupExperience() {
    if (window.innerWidth < 768) {
        document.querySelectorAll(".timeline-header").forEach(header => {
            header.addEventListener("click", () => {
                const desc = header.nextElementSibling;
                desc.style.maxHeight = desc.style.maxHeight
                    ? null
                    : desc.scrollHeight + "px";
            });
        });
    }
}

/* ================= SKILLS ================= */
function setupSkills() {
    document.querySelectorAll(".skill-category").forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-6px) scale(1.02)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0) scale(1)";
        });
    });
}

/* ================= ABOUT ================= */
function setupAbout() {
    document.querySelectorAll(".quality-item").forEach(item => {
        const icon = item.querySelector(".quality-icon");
        if (!icon) return;

        item.addEventListener("mouseenter", () => {
            icon.style.transform = "scale(1.15) rotate(8deg)";
        });

        item.addEventListener("mouseleave", () => {
            icon.style.transform = "scale(1) rotate(0)";
        });
    });
}

/* ================= ACCESSIBILITY ================= */
function setupAccessibility() {
    const skip = document.createElement("a");
    skip.href = "#main";
    skip.textContent = "Skip to content";
    skip.className = "skip-link";
    document.body.prepend(skip);

    document.addEventListener("keydown", e => {
        if (e.key === "Tab") document.body.classList.add("keyboard-nav");
    });

    document.addEventListener("mousedown", () => {
        document.body.classList.remove("keyboard-nav");
    });
}

/* ================= SOUND ================= */
function setupSound() {
    const clickSound = document.getElementById("clickSound");
    if (!clickSound) return;

    document.querySelectorAll("a, button").forEach(el => {
        el.addEventListener("click", () => {
            clickSound.currentTime = 0;
            clickSound.play();
        });
    });
}

/* ================= GSAP (SAFE) ================= */
if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".reveal").forEach(el => {
        gsap.fromTo(
            el,
            { opacity: 0, y: 70, scale: 0.96 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%"
                }
            }
        );
    });
}

/* ================= CONTACT CARD SHINE ================= */
if (window.gsap) {
    gsap.to(".contact-card", {
        "--angle": "360deg",
        duration: 4,
        repeat: -1,
        ease: "none"
    });
}

/* ================= CONSOLE ================= */
console.log(
    "%cSahil Kirmani Portfolio",
    "font-size:18px;color:#ff8c00;font-weight:bold"
);
