import magnifier from '../icons/magnifying-glass.png'

const CTA = () => {
  return (
    <button className="cta">
      <a href="/search">
        <p>Start Tracking</p>
        <img src={magnifier} alt="magnifing glass"/>
      </a>
    </button>
  )
}

export default CTA