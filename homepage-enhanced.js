/* ============================================
  new javascript
   Cool Robotics Projects Interactive Features
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // 1. PARTICLE ANIMATION SYSTEM
    // ==========================================
    function createParticles() {
        const animatedBg = document.querySelector('.animated-bg');
        if (!animatedBg) return;
        
        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
            
            // Randomize colors
            const colors = ['#00d4ff', '#7b2cbf', '#ff6b35', '#e91e63'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.boxShadow = `0 0 10px ${particle.style.background}`;
            
            animatedBg.appendChild(particle);
        }
    }
    
    createParticles();
    
    // ==========================================
    // 2. PROJECT FILTER FUNCTIONALITY
    // ==========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectSections = document.querySelectorAll('.projects-section');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filter projects
            projectSections.forEach(section => {
                if (filter === 'all' || section.classList.contains(filter)) {
                    section.style.display = 'block';
                    section.style.opacity = '0';
                    setTimeout(() => {
                        section.style.opacity = '1';
                    }, 50);
                } else {
                    section.style.opacity = '0';
                    setTimeout(() => {
                        section.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // ==========================================
    // 3. SCROLL TO TOP BUTTON
    // ==========================================
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    if (!scrollTopBtn) {
        // Create scroll button if it doesn't exist
        const btn = document.createElement('button');
        btn.className = 'scroll-top';
        btn.innerHTML = '↑';
        btn.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #00d4ff, #7b2cbf);
            border: none;
            border-radius: 50%;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
        `;
        document.body.appendChild(btn);
        
        // Show/hide based on scroll position
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                btn.style.opacity = '1';
                btn.style.visibility = 'visible';
            } else {
                btn.style.opacity = '0';
                btn.style.visibility = 'hidden';
            }
        });
        
        // Scroll to top on click
        btn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ==========================================
    // 4. SMOOTH SCROLL FOR NAVIGATION
    // ==========================================
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ==========================================
    // 5. PROJECT CARD HOVER EFFECTS
    // ==========================================
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click effect
        card.addEventListener('click', function() {
            this.style.transform = 'translateY(-8px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            }, 150);
        });
    });
    
    // ==========================================
    // 6. SCROLL ANIMATIONS (Intersection Observer)
    // ==========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
    
    // ==========================================
    // 7. CHAT WINDOW TOGGLE
    // ==========================================
    const chatToggle = document.querySelector('.chat-toggle');
    const chatWindow = document.querySelector('.chat-window');
    
    if (chatToggle && chatWindow) {
        chatToggle.addEventListener('click', function() {
            chatWindow.classList.toggle('open');
            if (chatWindow.classList.contains('open')) {
                chatWindow.style.display = 'flex';
                chatWindow.style.maxWidth = '400px';
            } else {
                chatWindow.style.display = 'none';
            }
        });
        
        // Close chat when clicking outside
        document.addEventListener('click', function(e) {
            if (!chatWindow.contains(e.target) && !chatToggle.contains(e.target)) {
                chatWindow.classList.remove('open');
                chatWindow.style.display = 'none';
            }
        });
    }
    
    // ==========================================
    // 8. THEME TOGGLE (Light/Dark)
    // ==========================================
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('light-mode');
            
            if (document.body.classList.contains('light-mode')) {
                document.body.style.background = '#f5f5f5';
                document.body.style.color = '#1a1a1a';
                this.textContent = '🌙';
            } else {
                document.body.style.background = '#0a0e17';
                document.body.style.color = '#e8eaed';
                this.textContent = '☀️';
            }
        });
    }
    
    // ==========================================
    // 9. LOADING ANIMATION ON PAGE LOAD
    // ==========================================
    const loadingElements = document.querySelectorAll('.welcome-title, .welcome-text, .arduino-title, .filter-container');
    
    loadingElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            el.style.transition = 'all 0.6s ease-out';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 150);
    });
    
    // ==========================================
    // 10. PROJECT COUNTER ANIMATION
    // ==========================================
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 30);
    }
    
    // ==========================================
    // 11. SEARCH FUNCTIONALITY (Bonus)
    // ==========================================
    const searchInput = document.querySelector('.search-input');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            projectCards.forEach(card => {
                const projectName = card.querySelector('.project-name').textContent.toLowerCase();
                const projectDesc = card.querySelector('.project-description').textContent.toLowerCase();
                
                if (projectName.includes(searchTerm) || projectDesc.includes(searchTerm)) {
                    card.style.display = 'block';
                    card.style.opacity = '1';
                } else {
                    card.style.opacity = '0.3';
                }
            });
        });
    }
    
    // ==========================================
    // 12. KEYBOARD NAVIGATION
    // ==========================================
    document.addEventListener('keydown', function(e) {
        // Press 'T' to scroll to top
        if (e.key === 't' && e.ctrlKey) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        // Press 'Escape' to close chat
        if (e.key === 'Escape' && chatWindow) {
            chatWindow.classList.remove('open');
            chatWindow.style.display = 'none';
        }
    });
    
    console.log('✅ Enhanced Homepage JavaScript Loaded');
    console.log('Features: Particles, Filters, Scroll-to-top, Smooth scroll, Hover effects, Theme toggle');
});
