import { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import TrackItemModal from './TrackItemModal'

const SearchResult = ({ result }) => {
  const user = useSelector(({ user }) => user)
  const isLogged = user.username && user.token
  const modalRef = useRef()

  const getCta = () => {
    if (isLogged) {
      return (
        <button
          className="cta cta-sm"
          onClick={ () => modalRef.current.show() }
        >Add to Tracker
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
      
      <TrackItemModal
        hook={ modalRef }
        innerRef={ modalRef }
        result={ result }
      />

    </div>
  )
}

export default SearchResult