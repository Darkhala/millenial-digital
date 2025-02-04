document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links and close menu on click
    document.querySelectorAll(".menu a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
            document.getElementById("menu").classList.remove("active");
            document.getElementById("hamburger").classList.remove("active");
        });
    });

    // Hamburger menu functionality
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");
    
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        menu.classList.toggle("active");
    });

    // Scroll reveal animations
    const revealElements = document.querySelectorAll(".service-cards .card, .projects .project");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });
});

// CSS classes for animations
const style = document.createElement("style");
style.innerHTML = `
    .hidden {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease;
    }

    .visible {
        opacity: 1;
        transform: translateY(0);
    }

    .hamburger div {
        transition: transform 0.3s ease, opacity 0.3s ease;
    }

    .hamburger.active div:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    .hamburger.active div:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active div:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
    }

    .menu a {
        opacity: 0;
        transform: translateY(20px);
        animation: slideUp 0.3s ease forwards;
    }

    .menu a:nth-child(1) { animation-delay: 0.1s; }
    .menu a:nth-child(2) { animation-delay: 0.2s; }
    .menu a:nth-child(3) { animation-delay: 0.3s; }
    .menu a:nth-child(4) { animation-delay: 0.4s; }
    .menu a:nth-child(5) { animation-delay: 0.5s; }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
