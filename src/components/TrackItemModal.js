import { forwardRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { trackProduct } from '../reducers/trackerReducer'
import { setNotification } from '../reducers/notificationReducer'

const TrackItemModal = forwardRef(({ result }, ref) => {
  const user = useSelector(({ user }) => user)
  const token = user.token
  const dispatch = useDispatch()

  const closeModal = () => {
    ref.current.close()
  }

  const createAlert = (event) => {
    dispatch(trackProduct({
      productId      : result.productId,
      productName    : result.productName,
      productLink    : result.productLink,
      productImage   : result.productImage,
      productPrice   : result.productPrice,
      productCurrency: result.productCurrency,
      productStore   : result.productStore,
      desiredPrice   : event.target.desiredPrice.value
    }, token))
    .then(() => {
      dispatch(setNotification({
        message: 'item successfully added to your tracker',
        type: 'success'
      }, 3))
    })
    .catch(error => {
      dispatch(setNotification({
        message: error.message,
        type: 'error'
      }, 3))
    })
  }

  return (
    <dialog
      ref={ ref }
      className='modal'
    >
      <h4>Add to Tracker</h4>
      <p> { result.productName }</p>

      <form
        method='dialog'
        onSubmit={ createAlert }
      >
        <label>Desired price: </label>
        <input
          type="text"
          name='desiredPrice'
          placeholder={ result.productPrice }
          required={ true }
        />

        <button
          type='submit'
          id="add"
          className='cta cta-sm'
          name='add'
          >add
        </button> 
      </form>
      
      <button
          type='botton'
          id="cancel"
          className='cta cta-sm'
          name='cancel'
          onClick={ closeModal }
        >cancel
        </button>
    </dialog>
  )
})

export default TrackItemModal