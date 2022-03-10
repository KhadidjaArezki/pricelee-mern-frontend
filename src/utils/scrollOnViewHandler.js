import { elementInView } from "./visibilityChecker";

const prevInterval = (prev) => {
  let interval
  return interval = setInterval(() => {
      prev.click()
      if (prev.classList.contains('slick-disabled')) {
        window.clearInterval(interval)
      }
    }, 10)
}

const nextInterval = (next, prev) => {
  let interval
  return interval = setInterval(() => {
    next.click()
    if (next.classList.contains('slick-disabled')) {
      window.clearInterval(interval);
      prevInterval(prev) 
    } 
  }, 2500);
}

export const scrollOnViewHandler = (el, dividendTop, sliderIndex=0, scrollCallback) => {
  setTimeout(() => {
    if (elementInView(el, dividendTop)) {
      console.error('deals in view');
      let next = document.querySelectorAll('.slick-next')[sliderIndex]
      let prev = document.querySelectorAll('.slick-prev')[sliderIndex]
      nextInterval(next, prev) 
      window.removeEventListener('scroll', scrollCallback, true)
    }
  }, 5000)
}