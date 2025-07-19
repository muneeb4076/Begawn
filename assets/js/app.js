
$(document).ready(function() {
    $('.slider').slick({
      slidesToShow: 9,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 50,
      speed: 1000,
      cssEase: 'linear',
      infinite: true,
      arrows: false,
      dots: false,
      pauseOnHover: true,
      pauseOnFocus: false,
          responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
    });
  });
  

  $('.slider-services').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 600,
  arrows: false,
  dots: true,
  infinite: true,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1025, // for screen widths below 1025px
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992, // tablets landscape
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 1
      }
    }
  ]
});



$('.slidebox').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 600,
  arrows: false,
  dots: true,
  infinite: true,
  pauseOnHover: true,

});


document.querySelectorAll('.p').forEach(function(button) {
    button.addEventListener('click', function() {
      this.classList.toggle('try');
    });
  });
  

  $('.arrowslider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.next'),
    nextArrow: $('.back'),
    dots: false,
    infinite: true
  });
  
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });








