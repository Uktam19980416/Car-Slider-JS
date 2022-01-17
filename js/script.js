// // 1
// const slides = document.querySelectorAll('.offer__slide'),
//     prev = document.querySelector('.offer__slider-prev'),
//     next = document.querySelector('.offer__slider-next'),
//     total = document.querySelector('#total'),
//     current = document.querySelector('#current'),
//     slidesWrapper = document.querySelector('.offer__slider-wrapper'),
//     width = window.getComputedStyle(slidesWrapper).width,
//     slidesField = document.querySelector('.offer__slider-inner');

// // 5
// let offset = 0;
// let slideIndex = 1;

// if (slides.length < 10) {
//     total.textContent = `0${slides.length}`;
//     current.textContent =  `0${slideIndex}`;
// } else {
//     total.textContent = slides.length;
//     current.textContent =  slideIndex;
// }

// // 2
// slidesField.style.width = 100 * slides.length + '%';

// // 4 
// slidesField.style.display = 'flex';
// slidesField.style.transition = '0.5s all';
// slidesWrapper.style.overflow = 'hidden';

// // 3
// slides.forEach(slide => {
//     slide.style.width = width;
// });

// // 6
// next.addEventListener('click', () => {
//     if (offset == (+width.slice(0, width.length - 2) * (slides.length - 1))) {
//         offset = 0;
//     } else {
//         offset += +width.slice(0, width.length - 2); 
//     }

//     slidesField.style.transform = `translateX(-${offset}px)`;

//     // 8
//     if (slideIndex == slides.length) {
//         slideIndex = 1;
//     } else {
//         slideIndex++;
//     }

//     if (slides.length < 10) {
//         current.textContent =  `0${slideIndex}`;
//     } else {
//         current.textContent =  slideIndex;
//     }
// });

// // 7
// prev.addEventListener('click', () => {
//     if (offset == 0) {
//         offset = +width.slice(0, width.length - 2) * (slides.length - 1);
//     } else {
//         offset -= +width.slice(0, width.length - 2);
//     }

//     slidesField.style.transform = `translateX(-${offset}px)`;

//     // 9
//     if (slideIndex == 1) {
//         slideIndex = slides.length;
//     } else {
//         slideIndex--;
//     }

//     if (slides.length < 10) {
//         current.textContent =  `0${slideIndex}`;
//     } else {
//         current.textContent =  slideIndex;
//     }
// });

window.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.offer__slide'),
      sliderInner = document.querySelector('.offer__slider-inner'),
      sliderWrapper = document.querySelector('.offer__slider-wrapper'),
      current = document.querySelector('#current'),
      total = document.querySelector('#total'),
      width = getComputedStyle(sliderInner).width,
      prev = document.querySelector('.offer__slider-prev'),
      next = document.querySelector('.offer__slider-next');


    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
        total.textContent = `0${slides.length}`;
    } else {
        current.textContent = slideIndex;
        total.textContent = slides.length;
    }

      sliderInner.style.width = 100 * slides.length + '%'

      sliderInner.style.display = 'flex';
      sliderInner.style.transition = '.5s ease';
      sliderWrapper.style.overflow = 'hidden';

      slides.forEach(slide => {
          slide.style.width = width
      })

      next.addEventListener('click', () => {
          if (offset == (+width.slice(0, width.length - 2) * (slides.length - 1))) {
              offset = 0;
          } else {
              offset += +width.slice(0, width.length - 2)
          }

          sliderInner.style.transform = `translateX(-${offset}px)`

          if (slideIndex == slides.length) {
              slideIndex = 1;
          } else {
              slideIndex++
          }

          if (slides.length < 10) {
              current.textContent = `0${slideIndex}`
          } else {
            current.textContent = slideIndex
          }
      })

      prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = (+width.slice(0, width.length - 2) * (slides.length - 1));
        } else {
            offset -= +width.slice(0, width.length - 2)
        }

        sliderInner.style.transform = `translateX(-${offset}px)`

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`
        } else {
          current.textContent = slideIndex
        }
    })
})