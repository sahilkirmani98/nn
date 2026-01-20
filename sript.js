// script.js
// Place this file in the root folder (same level as index.html)
// Then add <script src="script.js" defer></script> before </body> in all HTML files

document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth scrolling for all internal links (including nav)
    document.querySelectorAll('a[href^="#"], a[href^="index.html#"], a[href^="about.html#"], a[href^="experience.html#"], a[href^="skills.html#"], a[href^="contact.html#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // 2. Highlight active nav link (works across pages)
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop() || 'index.html';
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 3. Simple scroll reveal / fade-in for cards & sections (optional nice touch)
    const revealElements = document.querySelectorAll('.card, section > *');

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.classList.add('reveal');
            }
        });
    };

    // Add this CSS class via JS or in style.css
    // You can also add this rule to style.css if preferred:
    /*
    .reveal {
        opacity: 1;
        transform: translateY(0);
        transition: all 0.8s ease;
    }
    .card, section > * {
        opacity: 0;
        transform: translateY(40px);
        transition: all 0.8s ease;
    }
    */

    // Trigger once on load and on scroll
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // initial check

    // 4. Optional: cursor follower glow effect (subtle, modern)
    // Uncomment if you want a fancy cursor glow (works best on desktop)
    /*
    const cursor = document.createElement('div');
    cursor.classList.add('cursor-glow');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    */

    // 5. Year in footer (if you have dynamic year)
    const yearElements = document.querySelectorAll('#current-year, .current-year');
    if (yearElements.length > 0) {
        const currentYear = new Date().getFullYear();
        yearElements.forEach(el => el.textContent = currentYear);
    }

    console.log('Portfolio scripts loaded – TERMINATOR mode active ⚡');
});
