import CTA from "../components/CTA"
import ScrollDownArrow from '../components/ScrollDownArrow'
import Hero from "../components/Hero"
// import coin_big from '../images/coin-big.svg'
// import coin_medium from '../images/coin-medium.svg';
// import coin_small from '../images/coin-small.svg';

const FrontPage = () => {
  return (
    <div className="container">
      <ScrollDownArrow/>
      <Hero/>
      <CTA/>
    </div>
  )
}

export default FrontPage