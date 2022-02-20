const Service = ({imageSrc, imageAlt, description}) => {
  return (
    <div className="media">
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