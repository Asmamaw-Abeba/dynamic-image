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


function leftSlideArrow() {
  document.querySelector('.left-arrow')
   .addEventListener('click', () => {
    if (index - 2 >= 0) {
      image.src = gallary[index - 2];
      slideController(index - 1);
      index--;
    } else {
      document.querySelector('.feadback')
       .innerHTML = 'This is the first slide';
      setTimeout(() => {
        document.querySelector('.feadback')
       .innerHTML = '';
      }, 2000);
    }
  });
}
leftSlideArrow();


function rightSlideArrow() {
  document.querySelector('.right-arrow')
  .addEventListener('click', () => {
    if (index < gallary.length) {
      image.src = gallary[index];
      slideController(index + 1);
      index++;
    } else {
      document.querySelector('.feadback')
       .innerHTML = 'This is the last slide';
      setTimeout(() => {
        document.querySelector('.feadback')
       .innerHTML = '';
      }, 2000);
    }
    
  });
}
rightSlideArrow();


function changeImage() {
  image.src = gallary[index];
  index = (index + 1) % gallary.length;
  slideController(index);
}
changeImage();


let intervals = setInterval(changeImage, 3000);


function peuseResume() {
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
}
peuseResume();





function slideController(index) {
  const slideCounter = document.querySelector('.slide');
  slideCounter.innerHTML = 'slide: ' + index;
}

