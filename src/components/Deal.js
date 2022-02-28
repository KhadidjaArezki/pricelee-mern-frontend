const Deal = ({ imageSrc, imageAlt, store, dealLink, dealTitle, dealPrice }) => {
  return  (
  <div className="deal">
    <div className="deal__image">
      <small>{store}</small>
      <img src={imageSrc} alt={imageAlt}/>
    </div>
    <div className="deal__description">
      <a href={dealLink} target='blank'>
        <p>{dealTitle}</p>
      </a>
      <small>price: {dealPrice}</small>
    </div>
  </div>
  )
}

export default Deal