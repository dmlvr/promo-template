'use strict';

(function () {

  window.getFeaturesSlider = function(featuresList) {
    var sliderList = document.querySelector(featuresList);
    var sliderItems = sliderList.querySelectorAll('li');
    var index = 0;

    // добавляет текущий номер и общее кол-во слайдов

    var pointerCorrectSlide = document.querySelector('.feature__slide-number--current');
    var pointerTotalSlide = document.querySelector('.feature__slide-number--total');

    pointerTotalSlide.textContent = '/ ' + sliderItems.length;

    // врубает первый слайд

    sliderItems[index].classList.add('feature__item--active');

    // следующий слайд

    var onNextSlide = function () {
      sliderItems[index].classList.remove('feature__item--active');
      if (index < sliderItems.length - 1) {
        index++;
      } else {
        index = 0;
      }
      sliderItems[index].classList.add('feature__item--active');
      pointerCorrectSlide.textContent = index + 1;
    }

    // предыдущий слайд

    var onPrewSlide = function () {
      sliderItems[index].classList.remove('feature__item--active');
      if (index > 0) {
        index--;
      } else {
        index = sliderItems.length - 1;
      }
      sliderItems[index].classList.add('feature__item--active');
      pointerCorrectSlide.textContent = index + 1;
    }

    // имитация свайпа

    var swipe = function(sliderItems) {

      sliderItems.addEventListener('touchstart', function (evt) {
        var startCoordsX = evt.touches[0].clientX;
        var startCoordsY = evt.touches[0].clientY;
        var startTime = evt.timeStamp;
        var left = true;
        var flag = true;

        var onTouchMove = function (moveEvt) {

          var moveCoordsX = moveEvt.touches[0].clientX;
          var moveCoordsY = moveEvt.touches[0].clientY;
          var moveLongY = startCoordsY - moveCoordsY;
          if (moveLongY > 20 || moveLongY < -20) {
            flag = false;
          } else {
            evt.preventDefault();
          }

          if (moveCoordsX < startCoordsX) {
            left = false;
          }
        }

        var onTouchEnd = function (upEvt) {

          var endTime = upEvt.timeStamp;
          var swipeTime = endTime - startTime;
          if (flag && swipeTime > 50 && swipeTime < 700) {
            if (left) {
              onPrewSlide();
            } else {
              onNextSlide();
            }
          }

          document.removeEventListener('touchmove', onTouchMove);
          document.removeEventListener('touchend', onTouchEnd);

        };

        document.addEventListener('touchmove', onTouchMove);
        document.addEventListener('touchend', onTouchEnd);

      });
    }

    // запуск функции свайп

    for (var y = 0; y < sliderItems.length; y++) {
      swipe(sliderItems[y]);
    }

  }

})();
