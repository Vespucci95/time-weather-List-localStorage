const body = document.querySelector("body");

const IMG_NUMBER = 4;


function paintImage(imgNumber){
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}
// function handleImgLoad(){
//   console.log("aaaa");
// }
// image.addEventListener("loadend", handleImgLoad); // API에서 작업할때 필요할것. in paintImage 함수 안.

function genRendom(){
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init(){
  const rendomNumber = genRendom();
  paintImage(rendomNumber);
}

init();