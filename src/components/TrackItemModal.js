import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch } from 'react-redux'
import { trackProduct } from '../reducers/trackerReducer'

const TrackItemModal = forwardRef((props, ref) => {
  const result = props.result
  const show = () => {
    console.log(props.hook.current);
    props.hook.current.showModal()
  }

  useImperativeHandle(ref, () => show)

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
    }))
  }

  return (
    <dialog
      ref={ props.innerRef }
      className='modal'
    >
      <h5>Add to Tracker</h5>
      <p> { result.productName }</p>

      <form
        method='dialog'
        onSubmit={ createAlert }
      >
        <label>Desired price: 
          <input type="text" name='desiredPrice'/>
        </label>

        <button
          type='submit'
          id="action"
          name='action'
          >add
        </button>
        <button
          id="cancel"
          name='cancel'
          onClick={ closeModal }
        >cancel
        </button>
      </form>
    </dialog>
  )
})

export default TrackItemModal