function initCarousel() {
  // ваш код...
  const slide = document.querySelector('.carousel__inner');
  const left = document.querySelector('.carousel__arrow_left');
  const right = document.querySelector('.carousel__arrow_right');
  const width = slide.offsetWidth;

  let count = 0;

  left.style.display = 'none';

  right.addEventListener('click', () => {
    count = ++count;
    slide.style.transform = `translateX(-${width*(count)}px)`;
    if (count === 3) {
      right.style.display = 'none';
    } else {
      right.style.display = '';
      left.style.display = '';
    };
  });

  left.addEventListener('click', () => {
    count = --count;
    slide.style.transform = `translateX(-${width*(count)}px)`;
    if (count === 0) {
      left.style.display = 'none';
    } else {
      right.style.display = '';
      left.style.display = '';
    };
  });



}
