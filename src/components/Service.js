import { useRef } from "react"
import { elementInView, elementOutofView } from "../utils/visibilityChecker";

const Service = ({ imageSrc, imageAlt, description }) => {
  const serviceRef = useRef()

  const handleScrollAnimation = (el) => {
      if (elementInView(el, 1.25)) {
        el.classList.add("scrolled");
      } else if (elementOutofView(el)) {
        el.classList.remove("scrolled");
      }
  }
  
  window.addEventListener("scroll", () => { 
    const el = serviceRef.current
    if (el !== undefined) {
      handleScrollAnimation(el);
    }
  });

  return (
    <div className="media service" ref={serviceRef}>
      <div className="media__image">
        <img src={imageSrc} alt={imageAlt}/>
      </div>
      <div className="media__description">
        <p>{description}</p>
      </div>
    </div> 
  )
}

export default Service