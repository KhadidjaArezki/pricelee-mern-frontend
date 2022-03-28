import { useRef } from 'react'
import EditItemModal from './EditItemModal'
import DeleteItemModal from './DeleteItemModal'
import {  } from '../reducers/trackerReducer'

const TrackerItem = ({ item }) => { 
  const editModalRef = useRef()
  const delModalRef = useRef()

  return (
    <div
      className="media item"
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
        <small><span>Price difference: </span>{ item.productCurrency } { item.productPriceDiff }</small>
        <small><span>Desired price: </span>{ item.productCurrency } { item.desiredPrice }</small>
      </div>

      <button
        className="cta cta-sm"
        id='edit'
        onClick={ () => editModalRef.current.showModal() }
      >edit
      </button>

       <button
        className="cta cta-sm"
        onClick={ () => delModalRef.current.showModal() }
      >delete
      </button>
      
      <EditItemModal
        ref={ editModalRef }
        item={ item }
      />

      <DeleteItemModal
        ref={ delModalRef }
        item={ item }
      />

    </div>
  )
 }

export default TrackerItem