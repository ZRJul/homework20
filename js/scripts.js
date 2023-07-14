
const slides = document.getElementsByClassName("card");
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');


let slideIndex = 1;
function showSlides(n) {

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n <= 0) {
        slideIndex = slides.length
    }
    for (let card of slides) {
        card.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

showSlides(slideIndex);

function updateSliderImage() {

    if (slideIndex === 1) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
    }

    if (slideIndex === slides.length) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }
}


prevButton.addEventListener('click', () => {
    showSlides(slideIndex -= 1);
    updateSliderImage();
});

nextButton.addEventListener('click', () => {
    showSlides(slideIndex += 1);
    updateSliderImage();
});










