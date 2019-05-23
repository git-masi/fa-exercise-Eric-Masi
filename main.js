if (window.innerWidth > 599) {
  document.addEventListener('DOMContentLoaded', animateHeader);
  window.addEventListener('scroll', animateSecOne);
}

function animateHeader() {
  const headerElements = document.querySelectorAll('header > *');
  headerElements.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('swing-bottom-fwd');
    }, 1000 * (i + 1));
  })
}

function animateSecOne() {
  if (document.querySelector('.sec-1').getBoundingClientRect().top < window.pageYOffset) {
    const secOneImgs = document.querySelectorAll('.sec-1--img-header > div');
    secOneImgs.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('wobble-hor-bottom');
      }, 1000 * (i + 1));
    })
    window.removeEventListener('scroll', animateSecOne);
  };
}