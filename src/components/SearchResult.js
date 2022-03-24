import { useSelector } from 'react-redux'
// import { trackProduct } from '../reducers/TrackerReducer'

const SearchResult = ({ result }) => {
  const user = useSelector(({ user }) => user)

  const handleTrack = () => {

  }

  const getCta = () => {
    if (user.username && user.token) {
      return (
        <button
          className="cta cta-sm"
          onClick={ handleTrack }
        >
          Add to Tracker
        </button>
      )
    }
    return (
      <button className="cta cta-sm">
        <a href='/signup'>Login to track</a>
      </button>
    )
  }

  return (
    <div
      className='media search-result'
      data-id={result.productId}
    >
      <div className="media__image">
        <a href={result.productLink}>
          <img src={result.productImage} alt=""/>
        </a>
        <small>{result.productStore}</small>
      </div>

      <div className="media__description">
        <a href={result.productLink}>
          <h5>{result.productName}</h5>
        </a>
        <small>{result.productCurrency} {result.productPrice}</small>
      </div>
      
      { getCta() }

    </div>
  )
}

export default SearchResult