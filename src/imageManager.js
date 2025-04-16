import image2094 from "./img/IMG_2094.jpg";
import image2098 from "./img/IMG_2098.jpg";
import image2103 from "./img/IMG_2103.jpg";
import image2114 from "./img/IMG_2114.jpg";
const ImageArray = (() => {
  const imageArray = [image2094, image2098, image2103, image2114];
  const getArray = () => {
    return imageArray;
  };

  return { getArray };
})();

export default ImageArray;
