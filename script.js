document.addEventListener('DOMContentLoaded', function() {
    console.log('CV website loaded successfully!');

    // ========== HOVER EFFECTS ==========
    // Add hover effect to all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f0f0f0';
            this.style.transition = 'background-color 0.3s ease';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });

    // Hover effect on contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Hover effect on list items
    const listItems = document.querySelectorAll('li');
    listItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.paddingLeft = '25px';
            this.style.transition = 'padding 0.3s ease';
            this.style.color = '#1e90ff';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.paddingLeft = '';
            this.style.color = '';
        });
    });

    // ========== REVEAL EFFECTS ==========
    // Reveal elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply reveal effect to all elements
    document.querySelectorAll('.section, .hobby-item, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // ========== CLICK EFFECTS ==========
    // Click effect on buttons and links
    const clickableElements = document.querySelectorAll('a, button, .contact-item');
    clickableElements.forEach(element => {
        element.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
            ripple.style.borderRadius = '50%';
            ripple.style.pointerEvents = 'none';
            ripple.style.animation = 'ripple 0.6s ease-out';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
            
            console.log('Clicked on:', this.textContent);
        });
    });

    // ========== DOUBLE CLICK EFFECT ==========
    // Double click to toggle visibility
    const sections_toggle = document.querySelectorAll('.section');
    sections_toggle.forEach((section, index) => {
        section.addEventListener('dblclick', function() {
            const isHidden = this.style.display === 'none';
            this.style.display = isHidden ? 'block' : 'none';
            console.log(`Section ${index} toggled`);
        });
    });

    // ========== FOCUS EFFECTS ==========
    // Focus effect on inputs
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#1e90ff';
            this.style.boxShadow = '0 0 5px rgba(30, 144, 255, 0.5)';
        });
        
        input.addEventListener('blur', function() {
            this.style.borderColor = '';
            this.style.boxShadow = '';
        });
    });

    // ========== MOUSEENTER EFFECTS ==========
    // Mouseenter effect on header
    const header = document.querySelector('.header-banner');
    if (header) {
        header.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            this.style.transition = 'box-shadow 0.3s ease';
        });
        
        header.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    }

    // ========== RIGHT-CLICK EFFECTS ==========
    // Right-click context menu prevention with custom message
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        alert('Context menu disabled on this page!');
        return false;
    });

    // ========== KEYBOARD EFFECTS ==========
    // Keyboard shortcut: Press spacebar to highlight/reset all headings
    let headingsHighlighted = false;
    document.addEventListener('keydown', function(e) {
        if (e.code === 'Space') {
            e.preventDefault();
            const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
            headingsHighlighted = !headingsHighlighted;
            
            headings.forEach(heading => {
                if (headingsHighlighted) {
                    heading.style.backgroundColor = 'green';
                    heading.style.padding = '5px';
                } else {
                    heading.style.backgroundColor = '';
                    heading.style.padding = '';
                }
            });
            console.log(headingsHighlighted ? 'Headings highlighted!' : 'Headings reset!');
        }
    });

    // ========== SCROLL EFFECT ==========
    // Change header appearance on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header-banner');
        if (header) {
            if (window.scrollY > 100) {
                header.style.opacity = '0.8';
                header.style.transform = 'scale(0.98)';
            } else {
                header.style.opacity = '1';
                header.style.transform = 'scale(1)';
            }
            header.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        }
    });

    // ========== MOUSEOVER EFFECTS ==========
    // Mouseover effect on profile image
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.addEventListener('mouseover', function() {
            this.style.filter = 'grayscale(0%) brightness(1.1)';
            this.style.transform = 'rotate(5deg) scale(1.1)';
            this.style.transition = 'all 0.3s ease';
        });
        
        profileImg.addEventListener('mouseout', function() {
            this.style.filter = 'grayscale(0%)';
            this.style.transform = 'rotate(0deg) scale(1)';
        });
    }

    // ========== MOUSEDOWN EFFECTS ==========
    // Mousedown effect (press effect)
    clickableElements.forEach(element => {
        element.addEventListener('mousedown', function() {
            this.style.opacity = '0.7';
            this.style.transition = 'opacity 0.1s ease';
        });
        
        element.addEventListener('mouseup', function() {
            this.style.opacity = '1';
        });
    });

    // ========== LOAD EFFECT ==========
    // Fade-in effect on page load
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // ========== RESIZE EFFECT ==========
    // Change styling based on window resize
    window.addEventListener('resize', function() {
        console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
        const container = document.querySelector('.resume-container');
        if (window.innerWidth < 768) {
            container.style.padding = '10px';
        } else {
            container.style.padding = '';
        }
    });

    // ========== ANIMATION EFFECT ==========
    // Pulse animation on specific elements
    const pulseElements = document.querySelectorAll('h2');
    pulseElements.forEach(element => {
        element.style.animation = 'pulse 2s infinite';
    });

    // ========== DRAG EFFECT ==========
    // Make elements draggable with visual feedback
    const draggableElements = document.querySelectorAll('.section');
    draggableElements.forEach(element => {
        element.draggable = true;
        
        element.addEventListener('dragstart', function(e) {
            this.style.opacity = '0.5';
            e.dataTransfer.effectAllowed = 'move';
        });
        
        element.addEventListener('dragend', function() {
            this.style.opacity = '1';
        });
    });

});

