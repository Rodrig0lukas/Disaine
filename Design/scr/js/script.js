var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)


var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})

document.addEventListener("DOMContentLoaded", function () {
    const certificadosCarousel = document.getElementById("certificados-carousel");
    const fotosCarousel = document.getElementById("fotos-carousel");
  
    let certificadosIndex = 0;
    let fotosIndex = 0;
  
    function showSlide(carousel, index) {
      const newTransformValue = -index * 100 + "%";
      carousel.style.transform = "translateX(" + newTransformValue + ")";
    }
  
    function nextSlide(carousel, index) {
      index = (index + 1) % 3;
      showSlide(carousel, index);
      return index;
    }
  
    function prevSlide(carousel, index) {
      index = (index - 1 + 3) % 3;
      showSlide(carousel, index);
      return index;
    }
  
    let certificadosIntervalId = setInterval(function () {
      certificadosIndex = nextSlide(certificadosCarousel, certificadosIndex);
    }, 3000);
        
    let fotosIntervalId = setInterval(function () {
      fotosIndex = nextSlide(fotosCarousel, fotosIndex);
    }, 3000);
  
    function stopInterval(intervalId) {
      clearInterval(intervalId);
    }
  
    function startInterval(carousel, index) {
      return setInterval(function () {
        index = nextSlide(carousel, index);
      }, 3000);
    }
  
    certificadosCarousel.addEventListener("mouseover", function () {
      stopInterval(certificadosIntervalId);
    });
  
    certificadosCarousel.addEventListener("mouseout", function () {
      certificadosIntervalId = startInterval(certificadosCarousel, certificadosIndex);
    });
  
    fotosCarousel.addEventListener("mouseover", function () {
      stopInterval(fotosIntervalId);
    });
  
    fotosCarousel.addEventListener("mouseout", function () {
      fotosIntervalId = startInterval(fotosCarousel, fotosIndex);
    });
  });
  