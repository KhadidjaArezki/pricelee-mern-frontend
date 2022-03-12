const SearchResult = ({ result }) => {
  return (
    <div
      className='media search-result'
      data-id={result.id}
    >
      <div className="media__image">
        <a href={result.link}>
          <img src={result.image} alt=""/>
        </a>
        <small>{result.store}</small>
      </div>
      <div className="media__description">
        <a href={result.link}>
          <h5>{result.title}</h5>
        </a>
        <small>{result.currency} {result.price}</small>
      </div>
    </div>
  )
}

export default SearchResult