document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
    });

    // Smooth Scroll
    document.querySelector('.scroll-indicator').addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });

    // Code Preview Toggles
    const detailsBtns = document.querySelectorAll('.details-btn');
    detailsBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const preview = this.nextElementSibling;
            preview.classList.toggle('active');
            this.textContent = preview.classList.contains('active') ? 'Ocultar exemplo' : 'Ver exemplos';
        });
    });

    // Color Picker
    const colorPicker = document.getElementById('colorPicker');
    const root = document.documentElement;
    
    colorPicker.addEventListener('input', (e) => {
        root.style.setProperty('--primary-color', e.target.value);
    });

    // Animation Demo
    const animateBtn = document.getElementById('animate-btn');
    const animationBox = document.querySelector('.animation-box');
    
    animateBtn.addEventListener('click', () => {
        animationBox.style.animation = 'none';
        animationBox.offsetHeight; // Trigger reflow
        animationBox.style.animation = 'spin 1s ease-in-out';
    });

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.tecnologia').forEach(section => {
        observer.observe(section);
    });

    // Typing Animation for Header Text
    const text = "Descubra o poder das tecnologias web!";
    const typingText = document.querySelector('.typing-text');
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

    // Add custom animations to the animation box
    let isAnimating = false;
    const animations = [
        'spin 1s ease-in-out',
        'bounce 1s ease-in-out',
        'shake 0.5s ease-in-out',
        'pulse 1s ease-in-out'
    ];
    let currentAnimation = 0;

    animateBtn.addEventListener('click', () => {
        if (!isAnimating) {
            isAnimating = true;
            animationBox.style.animation = animations[currentAnimation];
            currentAnimation = (currentAnimation + 1) % animations.length;
            
            animationBox.addEventListener('animationend', () => {
                isAnimating = false;
            }, {once: true});
        }
    });
});

// Adicionar keyframes para as animações
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-30px); }
        60% { transform: translateY(-15px); }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }

    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeIn 0.6s ease-out forwards;
    }

    @keyframes fadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

document.head.appendChild(style);
