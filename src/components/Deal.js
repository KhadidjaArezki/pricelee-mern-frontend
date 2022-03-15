const Deal = ({ imageSrc, imageAlt, store, dealLink, dealTitle, dealPrice }) => {
  return  (
  <div className="media deal">
    <div className="media__image deal__image">
      <small>{store}</small>
      <a href={dealLink} target='blank'>
        <img src={imageSrc} alt={imageAlt}/>
      </a>
    </div>
    <div className="media__description deal__description">
      <a href={dealLink} target='blank'>
        <p>{dealTitle}</p>
      </a>
      <small>{dealPrice}</small>
    </div>
  </div>
  )
}

export default Deal