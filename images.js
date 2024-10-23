const imageContainer = [
         'images/image-1.jpg',
         'images/image-2.png',
         'images/image-3.jpg',
         'images/image-4.png',
         'images/image-5.jpg'
         ];

      const image = document.querySelector('.images');
      let  index = 0;
      
      function changeImage() {
        image.src = imageContainer[index];
        index = (index + 1) % imageContainer.length;
      }
      changeImage();
    

      setInterval(changeImage, 3000);