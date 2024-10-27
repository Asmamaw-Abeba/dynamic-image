import { gallary } from "./gallary.js";
// console.log(gallary);
// console.log(gallary.length);

// const imageContainer = [
//   'images/image-1.jpg',
//   'images/image-2.png',
//   'images/image-3.jpg',
//   'images/image-4.png',
//   'images/image-5.jpg'
//   ];

const image = document.querySelector('.images');
let  index = 0;

function changeImage() {
  image.src = gallary[index];
  index = (index + 1) % gallary.length;

  const slideCounter = document.querySelector('.slide');
  slideCounter.innerHTML = 'slide: ' + index;
}
changeImage();

let intervals = setInterval(changeImage, 3000);

const controlerBtn = document.querySelector('.stop-button');
  controlerBtn.addEventListener('click', () => {
    if(controlerBtn.innerText === 'stop') {
      clearInterval(intervals);
      controlerBtn.innerHTML = 'Resume';
      controlerBtn.classList.add('resume');
      console.log(controlerBtn);
    } else {
      intervals = setInterval(changeImage, 3000);
      controlerBtn.innerHTML = 'stop';
      controlerBtn.classList.remove('resume');
      console.log(controlerBtn);
    }
   
  });

