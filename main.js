document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    const overlay = document.getElementById('menu-overlay');

    function toggleMenu() {
        navLinks.classList.toggle('active');
        if (overlay) overlay.classList.toggle('active');

        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    }

    function closeMenu() {
        navLinks.classList.remove('active');
        if (overlay) overlay.classList.remove('active');

        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMenu);
    }

    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }

    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    });
});