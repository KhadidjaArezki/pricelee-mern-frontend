import { useRef, useCallback } from "react";
import Deal from '../components/Deal'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import monitor from '../images/gaming-monitor.webp'
import chair from '../images/gaming-chair.jpg'
import windowsLaptop from '../images/windows-laptop.jpg'
import gamingLaptop from '../images/gaming-laptop.jpg'
import { elementInView } from "../utils/visibilityChecker";

const Deals = () => {
  const dealsRef = useRef()

  const scrollHandler = useCallback(() => {
    if (dealsRef.current !== undefined) {
      handleScroll(dealsRef.current)
    }
  })

  function handleScroll(el) {
    console.log('in deals')
    if (elementInView(el, 15)) {
      let next = document.querySelector('.slick-next')
      let prev = document.querySelector('.slick-prev')

      const nextInterval = setInterval(() => {
        next.click()
        if (next.classList.contains('slick-disabled')) {
          window.clearInterval(nextInterval);

          const prevInterval = setInterval(() => {
            prev.click()
            if (prev.classList.contains('slick-disabled')) {
              window.clearInterval(prevInterval)
            }
          }, 10)
        } 
      }, 2500);
      console.log('out of deals');
      window.removeEventListener('scroll', scrollHandler, true)
    }
  }

  window.addEventListener('scroll', scrollHandler, true)

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      // {
      //   breakpoint: 768,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     initialSlide: 0
      //   }
      // },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div id="deals" ref={dealsRef}>
      <div className="container">
        <div>
          <span id="deals-anchor"></span>
          <h1>Featured Deals</h1>
        </div>
          <Slider {...settings}>
            <Deal 
              imageSrc={monitor}
              imageAlt='apple laptop'
              store='Dell'
              dealLink='https://deals.dell.com/en-us/productdetail/ag5n'
              dealTitle='Dell 27 Curved Gaming Monitor - S2722DGM Featuring FreesSync Premium'
              dealPrice='USD 299.99'
            />
            <Deal 
              imageSrc={chair}
              imageAlt='gaming chair'
              store='eBay'
              dealLink='https://cgi.sandbox.ebay.com/Homall-Gaming-Chair-Office-Chair-High-Back-Computer-Chair-Leather-Desk-Chair-/110545791357'
              dealTitle='Homall Gaming Chair Office Chair High Back Computer Chair Leather Desk Chair'
              dealPrice='USD 89.99'
            />
            <Deal 
              imageSrc={windowsLaptop}
              imageAlt='windows laptop'
              store='eBay'
              dealLink='https://cgi.sandbox.ebay.com/CHUWI-HeroBook-Pro-Windows10-Laptop-14-11920x1080-8-256G-Intel-N4020-Computer-/110546014622'
              dealTitle="CHUWI HeroBook Pro Windows10 Laptop 14.1''1920x1080 8+256G Intel N4020 Computer"
              dealPrice='USD 279.99'
            />
            <Deal 
              imageSrc={gamingLaptop}
              imageAlt='gaming laptop'
              store='Dell'
              dealLink='https://deals.dell.com/en-us/productdetail/d1g7'
              dealTitle='G15 Ryzen™ Edition Gaming Laptop'
              dealPrice='USD 899.99'
            />
            <Deal 
              imageSrc={gamingLaptop}
              imageAlt='gaming laptop'
              store='Dell'
              dealLink='https://deals.dell.com/en-us/productdetail/d1g7'
              dealTitle='G15 Ryzen™ Edition Gaming Laptop'
              dealPrice='USD 899.99'
            />
            <Deal 
              imageSrc={gamingLaptop}
              imageAlt='gaming laptop'
              store='Dell'
              dealLink='https://deals.dell.com/en-us/productdetail/d1g7'
              dealTitle='G15 Ryzen™ Edition Gaming Laptop'
              dealPrice='USD 899.99'
            />
          </Slider>
      </div>
    </div>
  )
}

export default Deals