const slideManager = (() => {
  let slideIndex = 1;
  const showPreviousSlide = () => {
    showSlides((slideIndex -= 1));
  };
  const showNextSlide = () => {
    showSlides((slideIndex += 1));
  };
  const showSlides = (n) => {
    console.log("showSlides called with n:", n);
    const slides = document.getElementsByClassName("carousel-slide");
    const dots = document.querySelectorAll(".dot");
    console.log("dots:", dots);
    const totalSlides = slides.length;
    if (n > totalSlides) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = totalSlides;
    }
    for (let i = 0; i < totalSlides; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    console.log(dots[slideIndex - 1]);
    dots[slideIndex - 1].className += " active";
  };

  return {
    showPreviousSlide,
    showNextSlide,
    showSlides,
  };
})();

export default slideManager;
