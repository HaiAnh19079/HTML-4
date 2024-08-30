let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.review-item');
    const dots = document.querySelectorAll('.review__dot');

    if (index >= slides.length) {//back to start
        currentSlide = 0;
    } else if (index < 0) {//go end
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;

    console.log(currentSlide, offset);
    document.querySelector('.review__list').style.transform = `translateX(${offset}%)`;

    dots.forEach((dot, i) => {
        dot.classList.toggle('review__dot--active', i === currentSlide);
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}
function setSlide(index) {
    showSlide(index);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

document.querySelectorAll('.review__dot').forEach((dot, index) => {
    dot.addEventListener('click', () => setSlide(index));
});
// Initialize the first slide
showSlide(currentSlide);
