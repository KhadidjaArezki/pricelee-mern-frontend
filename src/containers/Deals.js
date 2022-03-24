import { useState } from "react";
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import Deal from '../components/Deal'
import monitor from '../images/gaming-monitor.webp'
import chair from '../images/gaming-chair.jpg'
import windowsLaptop from '../images/windows-laptop.jpg'
import gamingLaptop from '../images/gaming-laptop.jpg'

const Deals = () => {
  const getPerPage = () => 
    window.innerWidth <= 768 ? 1 : 2

  const getScrollSpeed = () => 
    window.innerWidth <= 768 ? 1 : 2
  
  const [perPage, setPerPage] =  useState(getPerPage())
  const [scrollSpeed, setScrollSpeed] = useState(getScrollSpeed())

  window.addEventListener('resize', () => {
      setPerPage(getPerPage())
      setScrollSpeed(getScrollSpeed())
    }
  )

  const options={
    type         : 'loop',
    drag         : 'free',
    focus        : 'center',
    perPage      : perPage,
    gap          : '2rem',
    pauseOnHover : true,
    pauseOnFocus : true,
    resetProgress: false,
    // arrows       : 'slider',
    autoScroll: {
      speed: scrollSpeed,
    }
  }

  return (
    <div id="deals">
      <div className="container">
        <div>
          <span id="deals-anchor"></span>
          <h1>Featured Deals</h1>
        </div>
          <Splide 
            options={options}
            hasSliderWrapper
            Extensions={{ AutoScroll }}
          >
            <SplideSlide>
              <Deal 
                imageSrc={monitor}
                imageAlt='apple laptop'
                store='Dell'
                dealLink='https://deals.dell.com/en-us/productdetail/ag5n'
                dealTitle='Dell 27 Curved Gaming Monitor - S2722DGM Featuring FreesSync Premium'
                dealPrice='USD 299.99'
              />
            </SplideSlide>
            <SplideSlide>
              <Deal 
                imageSrc={chair}
                imageAlt='gaming chair'
                store='eBay'
                dealLink='https://cgi.sandbox.ebay.com/Homall-Gaming-Chair-Office-Chair-High-Back-Computer-Chair-Leather-Desk-Chair-/110545791357'
                dealTitle='Homall Gaming Chair Office Chair High Back Computer Chair Leather Desk Chair'
                dealPrice='USD 89.99'
              />
            </SplideSlide>
            <SplideSlide>
            <Deal 
              imageSrc={windowsLaptop}
              imageAlt='windows laptop'
              store='eBay'
              dealLink='https://cgi.sandbox.ebay.com/CHUWI-HeroBook-Pro-Windows10-Laptop-14-11920x1080-8-256G-Intel-N4020-Computer-/110546014622'
              dealTitle="CHUWI HeroBook Pro Windows10 Laptop 14.1''1920x1080 8+256G Intel N4020 Computer"
              dealPrice='USD 279.99'
            />
            </SplideSlide>
            <SplideSlide>
              <Deal 
                imageSrc={gamingLaptop}
                imageAlt='gaming laptop'
                store='Dell'
                dealLink='https://deals.dell.com/en-us/productdetail/d1g7'
                dealTitle='G15 Ryzen™ Edition Gaming Laptop'
                dealPrice='USD 899.99'
              />
            </SplideSlide>
            <SplideSlide>
              <Deal 
                imageSrc={gamingLaptop}
                imageAlt='gaming laptop'
                store='Dell'
                dealLink='https://deals.dell.com/en-us/productdetail/d1g7'
                dealTitle='G15 Ryzen™ Edition Gaming Laptop'
                dealPrice='USD 899.99'
              />
            </SplideSlide>
            <SplideSlide>
              <Deal 
                imageSrc={gamingLaptop}
                imageAlt='gaming laptop'
                store='Dell'
                dealLink='https://deals.dell.com/en-us/productdetail/d1g7'
                dealTitle='G15 Ryzen™ Edition Gaming Laptop'
                dealPrice='USD 899.99'
              />
            </SplideSlide>
          </Splide>
      </div>
    </div>
  )
}

export default Deals