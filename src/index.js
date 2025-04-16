import "./style.css";
import { DisplayManager } from "./displayManager.js";
import ImageArray from "./imageManager.js";

const imageList = ImageArray.getArray();

DisplayManager.renderCarousel(imageList);
// const imageContainer = document.querySelector(".image-container");
// if (imageList && imageList.length > 0) {
//   //   console.log(imageList);
// } else {
//   console.log("No images found");
// }
// imageContainer.innerHTML = imageList;
// console.log(ImageArray.getArray());
