// navbar
function showSidebar() {
    const nav_sidebar = document.querySelector('.nav_sidebar')
    nav_sidebar.style.display = 'flex'
}
function hideSidebar() {
    const nav_sidebar = document.querySelector('.nav_sidebar')
    nav_sidebar.style.display = 'none'
}

// image slide
let slides = document.querySelectorAll('.slide');
let currentIndex = 0;
let timer = null;

function showSlide(index) {
    slides.forEach((slide, idx) => {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

showSlide(currentIndex);

