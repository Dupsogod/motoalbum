(function() {
  document.addEventListener('DOMContentLoaded', function () {

    //header shadow - start
    let header = document.querySelector('.header');

    window.addEventListener('scroll', headerShadow);

    function headerShadow() {
      if (window.pageYOffset > 180) {
        header.classList.add('header--shadow');
      } else {
        header.classList.remove('header--shadow');
      }
    }

    //header shadow top - start

    //button scroll top - start
    function trackScroll() {
      let scrolled = window.pageYOffset;
      let coords = 200;
  
      if (scrolled > coords) {
        button.classList.add('active');
      }
      if (scrolled < coords) {
        button.classList.remove('active');
      }
    }

    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -40);
        setTimeout(backToTop, 0);
      }
    }

    let button = document.getElementById('topButton');

    window.addEventListener('scroll', trackScroll);
    button.addEventListener('click', backToTop);

    //button scroll top - end

  });
})();
