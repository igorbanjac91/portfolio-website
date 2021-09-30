import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/brands'

/*

-------------- Tree Images Carousel -----------------

*/

export default function carousel(image1, image2, image3) {
  let track = document.querySelector(".carousel__track")
  let leftButton = document.querySelector(".carousel__button--left")
  let rightButton = document.querySelector(".carousel__button--right")
  let carouselNav = document.querySelector(".carousel__nav");
  let indicators = Array.from(carouselNav.children);
  let slides = Array.from(track.children);
  let slide1 = document.querySelector(".carousel__slide-1");
  let slide2 = document.querySelector(".carousel__slide-2");
  let slide3 = document.querySelector(".carousel__slide-3");
  let rightEdgeSlide;
  let leftEdgeSlide;
  
  let translationComplete = true;
  
  const desktopScreenshot = new Image();
  const tableScreenshot = new Image();
  const mobileScreenshot = new Image();
  
  desktopScreenshot.src = image1;
  tableScreenshot.src = image2;
  mobileScreenshot.src = image3;
  
  
  slide1.appendChild(mobileScreenshot);
  slide2.appendChild(tableScreenshot);
  slide3.appendChild(desktopScreenshot);
  
  const slideWidth = slide1.getBoundingClientRect().width;
  
  addEdgeSlides(slide1, slide3)
  
  slides.forEach(setSlidePosition);
  
  // ---------------------------- Events ------------------------------------
  
  rightButton.addEventListener("click", e => {
    if (translationComplete) {
      translationComplete = false;
      const currentIndicator = carouselNav.querySelector(".current-slide");
      const currentSlide = track.querySelector('.current-slide');
      const nextSlide = currentSlide.nextElementSibling;
      track.style.transitionDuration = "250ms";
      if (nextSlide === rightEdgeSlide) {
        updateIndiactors(currentIndicator, indicators[0]);
        moveToSlide(track, currentSlide, nextSlide);
        track.addEventListener("transitionend", function resetPosition(){
          track.style.transitionDuration = "0s";
          const currentSlide = track.querySelector('.current-slide');
          const nextSlide = slide1;
          moveToSlide(track, currentSlide, nextSlide );
          slides[0].classList.add("current-slide");
          rightEdgeSlide.classList.remove("current-slide");
          track.removeEventListener("transitionend", resetPosition)
        })
        return
      }
      const nextIndicator = currentIndicator.nextElementSibling;
      updateIndiactors(currentIndicator, nextIndicator)
      moveToSlide(track, currentSlide, nextSlide);
    }
  })
  
  
  leftButton.addEventListener("click", e => {
    if (translationComplete) {
      const currentSlide = track.querySelector('.current-slide');
      const previusSlide = currentSlide.previousElementSibling;
      const currentIndicator = carouselNav.querySelector(".current-slide");
      track.style.transitionDuration = "250ms";
      if (previusSlide === leftEdgeSlide) {
        updateIndiactors(currentIndicator, indicators[indicators.length - 1]);
        moveToSlide(track, currentSlide, previusSlide);
        track.addEventListener("transitionend", function resetPosition(){
          track.style.transitionDuration = "0s";
          const currentSlide = track.querySelector('.current-slide');
          const previusSlide = slide3;
          moveToSlide(track, currentSlide, previusSlide );
          slides[slides.length -1].classList.add("current-slide");
          leftEdgeSlide.classList.remove("current-slide");
          track.removeEventListener("transitionend", resetPosition)
        })
        return
      }
      moveToSlide(track, currentSlide, previusSlide);
      const previusIndicator = currentIndicator.previousElementSibling;
      updateIndiactors(currentIndicator, previusIndicator)
    }
  })
  
  carouselNav.addEventListener("click", e => {
    if (translationComplete) {
      const targetIndicator = e.target.closest('button');
      if (!targetIndicator) return;
      const currentSlide = track.querySelector('.current-slide');
      const currentIndicator = carouselNav.querySelector('.current-slide')
      const targetIndex = indicators.findIndex(indicator => indicator === targetIndicator)
      const targetSlide = slides[targetIndex];
      moveToSlide(track, currentSlide, targetSlide)
      updateIndiactors(currentIndicator, targetIndicator)
    }
  })
  
  // ---------------------------- Functions ------------------------------------
  
  function addEdgeSlides(firstSlide, lastSlide) {
    rightEdgeSlide = firstSlide.cloneNode(true);
    rightEdgeSlide.classList.remove("current-slide")
    rightEdgeSlide.classList.remove("carousel__slide-1");
    rightEdgeSlide.classList.add(`carousel_slide-${slides.length}`);
    rightEdgeSlide.style.left = `${slideWidth * slides.length}px`;
  
    leftEdgeSlide = lastSlide.cloneNode(true);
    leftEdgeSlide.classList.remove("current-slide")
    leftEdgeSlide.classList.remove("carousel__slide-3");
    leftEdgeSlide.classList.add("carousel__slide-0");
    leftEdgeSlide.style.left = `${-slideWidth}px`
  
    track.appendChild(rightEdgeSlide);
    track.prepend(leftEdgeSlide);
  }
  
  
  function updateIndiactors(currentIndicator, targetIndicator) {
    if(!targetIndicator) {
      return
    }
    currentIndicator.classList.remove("current-slide");
    targetIndicator.classList.add("current-slide");
  }
  
  
  function moveToSlide(track, currentSlide, targetSlide) {
    if (!targetSlide) {
      return
    }
    let sign = targetSlide.style.left[0]
    if (sign === "-") {
      track.style.transform = `translateX(${targetSlide.style.left.substring(1)})`;  
    } else {
      track.style.transform = `translateX(-${targetSlide.style.left})`;
    }
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
    track.addEventListener("transitionend", () => {
      translationCompleted()
    })
  }
  
  function setSlidePosition(slide, index) {
    slide.style.left = `${slideWidth * index}px`;
  }
  
  function translationCompleted() {
    translationComplete = true;
  }
}


