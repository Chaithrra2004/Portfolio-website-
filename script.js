// Wait until the page loads
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent page reload
        alert("✅ Thank you! Your message has been sent successfully.");
        form.reset(); // Clear form fields
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Get all animated elements (if any)
    const animatedElements = document.querySelectorAll('.fade-up, .slide-left, .slide-right');

    if (animatedElements.length > 0) {
        function checkVisibility() {
            animatedElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    el.classList.add('show');
                }
            });
        }

        window.addEventListener('scroll', checkVisibility);
        checkVisibility(); // Run on load
    }
});
