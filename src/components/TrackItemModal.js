import { useState, forwardRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentToken } from '../reducers/authReducer'
import { appendItem } from '../reducers/trackerReducer'
import { useCreateAlertMutation } from '../reducers/trackerApiSlice'
import { setNotification } from '../reducers/notificationReducer'

const TrackItemModal = forwardRef(({ result }, ref) => {
  const token = useSelector(selectCurrentToken)
  const dispatch = useDispatch()
  const [errMsg, setErrMsg] = useState("")
  const [ createAlert ] = useCreateAlertMutation()

  const closeModal = () => {
    ref.current.close()
  }

  const trackProduct = async (event) => {
    event.preventDefault()
    try {
      const newItem = await createAlert({
        productId      : result.productId,
        productName    : result.productName,
        productLink    : result.productLink,
        productImage   : result.productImage,
        productPrice   : result.productPrice,
        productCurrency: result.productCurrency,
        productStore   : result.productStore,
        desiredPrice   : event.target.desiredPrice.value
      }).unwrap()
      closeModal()
      dispatch(appendItem(newItem))
      dispatch(setNotification({
        message: 'item successfully added to your tracker',
        type: 'success'
      }, 3))
    } catch (err) {
      if (!err?.status) {
        // isLoading: true - until timeout
        setErrMsg("No Server Response")
      } else if (err.status === 400) {
        setErrMsg("malformed data")
      } else if (err.status === 500) {
        setErrMsg("Failed to add item to your tracker")
      }
      closeModal()
      dispatch(setNotification({
        message: errMsg || err.data?.error || err.error,
        type: 'error'
      }, 5))
      setErrMsg("")
    }
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
        onSubmit={ trackProduct }
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
