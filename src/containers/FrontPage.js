import pig from '../images/landing-pic.svg'
import magnifier from '../icons/magnifying-glass.png'
// import coin_big from '../images/coin-big.svg'
// import coin_medium from '../images/coin-medium.svg';
// import coin_small from '../images/coin-small.svg';

const FrontPage = () => {
  return (
    <div className="container">
      <div className="hero">
        <div className="teaser">
          <p className="headline">An Online Price Tracking Service</p>
          <p className="phrase">
            We track your <span className="hl">spending</span>
          </p>
          <p className="phrase">
            to boost your <span className="hl">savings</span>
          </p>
        </div>
        <aside className="illustration">
          <img id='piggy-safe' src={pig} alt="purple piggy safe with three golden coins floating above it"/>
        </aside>
      </div>
      <button className="cta">
        <a href="/search">
          <p>Start Tracking</p>
          <img src={magnifier} alt="magnifing glass"/>
        </a>
      </button>
    </div>
  )
}

export default FrontPage