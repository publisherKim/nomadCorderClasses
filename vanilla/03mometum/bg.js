const body = document.querySelector('body');

const IMG_NUMBER = 3;

// api 를 쓴다면
// const handleImageLoad = () => {
//   console.log('finished loading');
// };

const paintImage = (imageFileName) => {
  const image = new Image();
  image.src = `images/${imageFileName}.jpg`;
  image.classList.add('bgImage');
  body.prepend(image);
  // image.addEventListener('loaded', handleImgLoad)
};

const generateRandom = () => Math.floor(Math.random() * IMG_NUMBER);

const bgInit = () => {
  const randomBgIamgeFinleName = `bg${generateRandom()}`;
  paintImage(randomBgIamgeFinleName)
};

bgInit();