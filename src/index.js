import "./style.css";
import { DisplayManager } from "./displayManager.js";
import ImageArray from "./imageManager.js";

const imageList = ImageArray.getArray();

DisplayManager.renderCarousel(imageList);
