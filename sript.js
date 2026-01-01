/**
 * Sahil Kirmani Portfolio - Dynamic JavaScript
 */

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Portfolio initialized');
    
    // Core functionality
    updateYear();
    setupNavigation();
    setupAnimations();
    
    // Page-specific setup
    if (document.getElementById('contactForm')) setupContactForm();
    if (document.querySelector('.timeline')) setupExperiencePage();
    if (document.querySelector('.skills-grid')) setupSkillsPage();
    if (document.querySelector('.education-timeline')) setupAboutPage();
    
    // Performance setup
    setupAccessibility();
    
    console.log('✅ All systems ready');
});

// ==================== CORE FUNCTIONS ====================
function updateYear() {
    const yearSpans = document.querySelectorAll('#year, #current-year');
    yearSpans.forEach(span => {
        span.textContent = new Date().getFullYear();
    });
}

function setupNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        
        // Remove active class from all
        link.classList.remove('active');
        
        // Add active class to current page
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
        
        // Smooth scroll for anchor links
        if (linkPage.startsWith('#')) {
            link.addEventListener('click', smoothScroll);
        }
    });
}

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}

function setupAnimations() {
    // Animate elements on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });
    
    // Observe all animatable elements
    document.querySelectorAll('.timeline-item, .education-item, .skill-category, .quality-item')
        .forEach(el => observer.observe(el));
    
    // Header scroll effect
    let lastScroll = 0;
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > lastScroll && currentScroll > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            if (currentScroll > 50) {
                header.style.background = 'rgba(15, 15, 15, 0.98)';
            } else {
                header.style.background = 'rgba(15, 15, 15, 0.95)';
            }
            
            lastScroll = currentScroll;
        });
    }
}

// ==================== PAGE-SPECIFIC FUNCTIONS ====================
function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    console.log('📧 Setting up contact form');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Validate
        if (!validateForm(data)) return;
        
        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        try {
            // Simulate API call (replace with actual EmailJS/backend)
            await sendFormData(data);
            
            // Success
            showMessage('✅ Message sent successfully! I\'ll get back to you soon.', 'success');
            form.reset();
            
        } catch (error) {
            // Error
            showMessage('❌ Failed to send message. Please try again.', 'error');
            console.error('Form error:', error);
        } finally {
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
    
    // Real-time validation
    form.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
    });
}

function validateForm(data) {
    if (!data.name || !data.name.trim()) {
        showMessage('Please enter your name', 'error');
        return false;
    }
    
    if (!data.email || !data.email.includes('@')) {
        showMessage('Please enter a valid email', 'error');
        return false;
    }
    
    if (!data.message || data.message.length < 10) {
        showMessage('Message should be at least 10 characters', 'error');
        return false;
    }
    
    return true;
}

function validateField(field) {
    if (!field.value.trim() && field.hasAttribute('required')) {
        field.style.borderColor = '#ff4444';
        return false;
    }
    
    if (field.type === 'email' && field.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            field.style.borderColor = '#ff4444';
            return false;
        }
    }
    
    field.style.borderColor = '#333333';
    return true;
}

async function sendFormData(data) {
    // Simulate network delay
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 90% success rate for demo
            Math.random() > 0.1 ? resolve() : reject(new Error('Network error'));
        }, 1500);
    });
}

function showMessage(text, type) {
    // Remove existing message
    const existingMsg = document.querySelector('.form-message');
    if (existingMsg) existingMsg.remove();
    
    // Create new message
    const message = document.createElement('div');
    message.className = `form-message ${type}`;
    message.textContent = text;
    message.style.cssText = `
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 8px;
        background: ${type === 'success' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)'};
        color: ${type === 'success' ? '#4CAF50' : '#F44336'};
        border: 1px solid ${type === 'success' ? '#4CAF50' : '#F44336'};
        animation: fadeIn 0.3s ease;
    `;
    
    // Insert after form or at top
    const form = document.getElementById('contactForm');
    if (form) {
        form.parentNode.insertBefore(message, form);
    } else {
        document.querySelector('.container').prepend(message);
    }
    
    // Auto-remove after 5 seconds
    setTimeout(() => message.remove(), 5000);
}

function setupExperiencePage() {
    // Add click to expand/collapse on mobile
    if (window.innerWidth < 768) {
        document.querySelectorAll('.timeline-header').forEach(header => {
            header.style.cursor = 'pointer';
            header.addEventListener('click', function() {
                const content = this.parentNode.querySelector('.timeline-description');
                content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
            });
        });
    }
    
    // Add staggered animation delays
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
    });
}

function setupSkillsPage() {
    // Animate skill bars
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Add hover effects
    document.querySelectorAll('.skill-category').forEach(category => {
        category.addEventListener('mouseenter', () => {
            category.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        category.addEventListener('mouseleave', () => {
            category.style.transform = 'translateY(-5px) scale(1)';
        });
    });
}

function setupAboutPage() {
    // Add staggered animations
    document.querySelectorAll('.education-item, .quality-item').forEach((item, index) => {
        item.style.animationDelay = `${index * 0.15}s`;
    });
    
    // Add icon animations
    document.querySelectorAll('.quality-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('.quality-icon');
            if (icon) icon.style.transform = 'scale(1.2) rotate(10deg)';
        });
        
        item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('.quality-icon');
            if (icon) icon.style.transform = 'scale(1) rotate(0)';
        });
    });
}

function setupAccessibility() {
    // Add skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: var(--primary);
        color: white;
        padding: 8px 16px;
        text-decoration: none;
        z-index: 9999;
        border-radius: 0 0 4px 0;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '0';
    });
    
    document.body.prepend(skipLink);
    
    // Ensure main element has id
    const main = document.querySelector('main');
    if (main && !main.id) {
        main.id = 'main';
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-nav');
    });
}

// ==================== PERFORMANCE OPTIMIZATIONS ====================
// Debounce function for scroll/resize events
function debounce(func, wait = 100) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit = 100) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ==================== WINDOW EVENTS ====================
// Handle resize
window.addEventListener('resize', debounce(() => {
    // Re-initialize responsive features
    if (document.querySelector('.timeline')) setupExperiencePage();
}));

// Handle beforeunload for form protection
window.addEventListener('beforeunload', (e) => {
    const forms = document.querySelectorAll('form');
    let hasUnsaved = false;
    
    forms.forEach(form => {
        if (form.querySelectorAll('input[value], textarea[value]').length > 0) {
            hasUnsaved = true;
        }
    });
    
    if (hasUnsaved) {
        e.preventDefault();
        e.returnValue = '';
    }
});
document.querySelectorAll("button, a").forEach(el => {
  el.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});


// ==================== ADDITIONAL CSS FOR JS ====================
// Add dynamic styles
const style = document.createElement('style');
style.textContent = `
    .animated {
        animation-play-state: running !important;
    }
    
    .skip-link:focus {
        top: 0 !important;
    }
    
    body.keyboard-nav *:focus {
        outline: 2px solid var(--primary) !important;
        outline-offset: 2px !important;
    }
    
    .timeline-description {
        transition: max-height 0.3s ease;
        overflow: hidden;
    }
    
    @media (max-width: 768px) {
        .timeline-description {
            max-height: 0;
        }
    }
`;
document.head.appendChild(style);

// Console greeting
console.log('%c🎯 Sahil Kirmani Portfolio', 'font-size: 20px; color: #ff8c00; font-weight: bold;');
console.log('%c✨ SEO & Digital Marketing Specialist', 'color: #666;');
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".reveal").forEach(el => {
  gsap.fromTo(
    el,
    { opacity: 0, y: 80, scale: 0.96 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        const music = document.getElementById("bgMusic");

const startMusic = () => {
  music.volume = 0.25;
  music.play();
  document.removeEventListener("click", startMusic);
  document.removeEventListener("scroll", startMusic);
  document.removeEventListener("keydown", startMusic);
};

document.addEventListener("click", startMusic);
document.addEventListener("scroll", startMusic);
document.addEventListener("keydown", startMusic);

      }
    }
  );
});
