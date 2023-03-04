'use strict'; 

{
  {
    function play() {
      setTimeout(() => {
        pcImages[currentIndex].classList.remove('current');
        currentIndex++;
        if (currentIndex > pcImages.length - 1) {
          currentIndex = 0;
        }
        pcImages[currentIndex].classList.add('current');
        play();
      }, 5000);
    }
    const pcImages = document.querySelectorAll('.mv .pc img');
    let currentIndex = 0;
    play();
  }

  {
    function play2() {
      setTimeout(() => {
        spImages[currentIndex].classList.remove('current');
        currentIndex++;
        if (currentIndex > spImages.length - 1) {
          currentIndex = 0;
        }
        spImages[currentIndex].classList.add('current');
        play2();
      }, 5000);
    }
  
    const spImages = document.querySelectorAll('.mv .sp img');
    let currentIndex = 0;
    play2();
  }
}