document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    // Apply to everything that should pop in
    document.querySelectorAll('.card, .member-card, .form-container, .section-title').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    const form = document.getElementById('aspirasiForm');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Aspirasi Terkirim! Terima kasih atas masukannya.');
            form.reset();
        });
    }
});