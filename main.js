//retrieve array of slides within the wrapper div

let slides = document.querySelectorAll('#slides .slide');

//set currentSlide counter

let currentSlide = 0;

//setting an interval for the function 'nextSlide' for 1.3 seconds

let slideInterval = setInterval(nextSlide,1300);


function nextSlide() {
    //sets class name of first slide (showing slide with index 0) to the hidden class name 'slide'
    slides[currentSlide].className = 'slide';

    //sets current slide counter one up, but by using modulo, when the current slide is the last slide, currentSlide will reset to 0
    currentSlide = (currentSlide+1)%slides.length;

    //adds 'showing' to the 'slide' class, thereby showing the next slide
    slides[currentSlide].className = 'showing';
}

//i did find some help setting up this function: the set interval part and the modulo brilliance, from Yaphi Berhanu on sitepoint.com
