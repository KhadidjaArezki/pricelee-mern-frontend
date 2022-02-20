import Service from "../components/Service";
import hot from "../icons/bxs-hot.png";
import coin from "../icons/jam_coin.png";
import list from "../icons/md_list.png";
import megaphone from "../icons/megaphone.png";

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <h1>Services</h1>
        <div className='services__wrapper'>
          <Service
            imageSrc={list}
            imageAlt='a list icon'
            description='wishlist your favorite products to track their prices over time'
          />
          <Service
            imageSrc={coin}
            imageAlt='a coin icon'
            description='set the price you would like to pay for the product'
          />
          <Service
            imageSrc={megaphone}
            imageAlt='a megaphone icon'
            description='track prices, watch for drops and buy at lowest'
          />
          <Service
            imageSrc={hot}
            imageAlt='a fire icon'
            description='check out our latest deals for the best price offerings'
          />
        </div>
      </div>
    </div>
  )
}

export default Services