// Shared functionality
document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveal logic
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    });

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
        observer.observe(el);
    });

    // Mobile menu toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    if(mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            document.querySelector('nav').classList.toggle('active');
        });
    }
});