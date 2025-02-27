let index = 0;

function showSlide() {
    const slides = document.querySelector(".slides");
    slides.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % 3;
    showSlide();
}

function prevSlide() {
    index = (index - 1 + 3) % 3;
    showSlide();
}