// Floating CTA functionality
document.addEventListener('DOMContentLoaded', function() {
    const floatingCTA = document.getElementById('floatingCTA');
    const floatingDismiss = document.getElementById('floatingDismiss');
    let isVisible = false;
    let isDismissed = false;

    function handleScroll() {
        if (isDismissed) return;
        
        const shouldShow = window.scrollY > 300;
        
        if (shouldShow && !isVisible) {
            isVisible = true;
            floatingCTA.classList.add('visible');
        } else if (!shouldShow && isVisible) {
            isVisible = false;
            floatingCTA.classList.remove('visible');
        }
    }

    function dismissFloatingCTA() {
        isDismissed = true;
        isVisible = false;
        floatingCTA.classList.remove('visible');
    }

    // Event listeners
    window.addEventListener('scroll', handleScroll);
    floatingDismiss.addEventListener('click', dismissFloatingCTA);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effects to cards
    const cards = document.querySelectorAll('.feature-card, .use-case-card, .step-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Button click handlers (placeholder - connect to your booking system)
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Placeholder for booking system integration
            alert('Demo booking functionality would be integrated here');
        });
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .use-case-card, .step, .benefit-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        observer.observe(el);
    });

    // Add the fadeInUp animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
});