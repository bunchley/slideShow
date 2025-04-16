import SlideManager from "./slideManager.js";
const createDomElement = (parentElement, type, nameOfClass, text = "") => {
  const newElement = document.createElement(type);
  newElement.className = nameOfClass;
  if (text != "") {
    newElement.textContent = text;
  }
  parentElement.appendChild(newElement);
  return newElement;
};
const createImageElement = (parentElement, imageSrc) => {
  const newImage = document.createElement("img");
  newImage.src = imageSrc;
  newImage.className = "image";
  parentElement.appendChild(newImage);
  // newImage.className.add = "fade";
  return newImage;
};
const createCarouselContainer = () => {
  const body = document.querySelector("body");
  const carouselContainer = createDomElement(body, "div", "carousel-container");
  const carouselTitle = createDomElement(
    carouselContainer,
    "h2",
    "carousel-title",
    "Keith Haring Artworks"
  );
  const carouselImages = createDomElement(
    carouselContainer,
    "div",
    "carousel-images"
  );
};

const addPicsToCarousel = (imageList) => {
  const carouselContainer = document.querySelector(".carousel-images");
  let count = 0;
  const totalImages = imageList.length;
  imageList.forEach((image) => {
    const newSlide = createDomElement(
      carouselContainer,
      "div",
      "carousel-slide"
    );
    newSlide.classList.add("fade");
    const slideNumber = createDomElement(
      newSlide,
      "div",
      "slide-number",
      `${count + 1} / ${totalImages}`
    );
    const imageSource = "." + image;
    const imgElement = createImageElement(newSlide, imageSource);
    const imageText = createDomElement(
      newSlide,
      "div",
      "image-text",
      "Caption"
    );
    count++;
  });
};
const addButtonsToCarousel = () => {
  const carouselContainer = document.querySelector(".carousel-container");
  const prevButton = createDomElement(
    carouselContainer,
    "button",
    "prev-button",
    "<"
  );
  const nextButton = createDomElement(
    carouselContainer,
    "button",
    "next-button",
    ">"
  );
  prevButton.addEventListener("click", () => {
    console.log("Previous button clicked");
    SlideManager.showPreviousSlide();
  });
  nextButton.addEventListener("click", () => {
    console.log("Next button clicked");
    SlideManager.showNextSlide();
  });
};
const addDotsToCarousel = () => {
  const carouselContainer = document.querySelector(".carousel-container");
  const dotsContainer = createDomElement(
    carouselContainer,
    "div",
    "dots-container"
  );
  const dots = [];

  for (let i = 0; i < 4; i++) {
    const dot = createDomElement(dotsContainer, "span", "dot");
    dot.classList.add(`${i + 1}`);
    dot.addEventListener("click", () => {
      SlideManager.showSlides(i + 1);
      dots.forEach((d) => d.classList.remove("active"));
      dot.classList.add("active");
    });
    dots.push(dot);
  }
};

const DisplayManager = (() => {
  const renderCarousel = (imageList) => {
    createCarouselContainer();
    addPicsToCarousel(imageList);
    addButtonsToCarousel();
    addDotsToCarousel();
    SlideManager.showSlides(1); // Show the first slide initially
  };
  return {
    renderCarousel,
  };
})();

export { DisplayManager };
