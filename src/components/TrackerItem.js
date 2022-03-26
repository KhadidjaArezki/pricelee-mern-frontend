import { useDispatch } from 'react-redux'
import {  } from '../reducers/trackerReducer'

const TrackerItem = ({ item }) => { 
  const dispatch = useDispatch()

  const editAlert = () => {

  }

  const deleteAlert = () => {

  }

  return (
    <div
      className="media tracker-item"
      data-id={ item.alertId }
    >
      <div className="media__image">
        <a href={ item.productLink }>
          <img src={ item.productImage } alt=""/>
        </a>
        <small>{ item.productStore }</small>
      </div>

      <div className="media__description">
        <a href={ item.productLink }>
          <h5>{ item.productName }</h5>
        </a>
        <small>{ item.productCurrency } { item.productPrice }</small>
      </div>

      <button
        className="cta cta-sm"
        onClick={ editAlert }
      >edit
      </button>
       <button
        className="cta cta-sm"
        onClick={ deleteAlert }
      >delete
      </button>  
    </div>
  )
 }

export default TrackerItem