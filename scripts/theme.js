// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or use system preference
    const currentTheme = localStorage.getItem('theme') || 
                        (prefersDarkScheme.matches ? 'dark' : 'light');
    
    // Apply initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Update button icon based on current theme
    updateThemeIcon(currentTheme);
    
    // Theme toggle click handler
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
            
            // Add a subtle animation effect
            document.body.style.transition = 'opacity 0.3s ease';
            document.body.style.opacity = '0.9';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });
    }
    
    // Listen for system theme changes
    prefersDarkScheme.addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            updateThemeIcon(newTheme);
        }
    });
});

// Update theme toggle icon
function updateThemeIcon(theme) {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        if (theme === 'dark') {
            themeToggle.innerHTML = '☀️ <span>Light Mode</span>';
        } else {
            themeToggle.innerHTML = '🌙 <span>Dark Mode</span>';
        }
    }
}

// Create animated background with floating shapes
function createAnimatedBackground() {
    const bgContainer = document.querySelector('.animated-bg');
    if (!bgContainer) return;
    
    // Create floating shapes
    const shapes = [
        { class: 'shape-1', delay: 0 },
        { class: 'shape-2', delay: -3 },
        { class: 'shape-3', delay: -6 },
        { class: 'shape-4', delay: -9 },
        { class: 'shape-5', delay: -12 }
    ];
    
    shapes.forEach(shape => {
        const el = document.createElement('div');
        el.className = `shape ${shape.class}`;
        el.style.animationDelay = `${shape.delay}s`;
        bgContainer.appendChild(el);
    });
    
    // Create particles
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    bgContainer.appendChild(particlesContainer);
    
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.style.animationDuration = `${10 + Math.random() * 6}s`;
        particlesContainer.appendChild(particle);
    }
}

// Initialize animated background
document.addEventListener('DOMContentLoaded', createAnimatedBackground);

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Add entrance animations for elements
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    document.querySelectorAll('.project-card, .contributor-card, section').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add CSS for scroll animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', initScrollAnimations);
