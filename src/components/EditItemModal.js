import { forwardRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateAlert } from '../reducers/trackerReducer'
import { setNotification } from '../reducers/notificationReducer'

const EditItemModal = forwardRef(({ item }, ref) => {
  const user = useSelector(({ user }) => user)
  const token = user.token
  const dispatch = useDispatch()

  const closeModal = () => {
    ref.current.close()
  }

  const editAlert = (event) => {
    dispatch(updateAlert(
      item.alertId, 
      {
        desiredPrice: event.target.desiredPrice.value
      },
      token
    ))
    
    dispatch(setNotification({
      message: 'changes successfully save',
      type: 'success'
    }, 3))
  }

  return (
    <dialog
      ref={ ref }
      className='modal'
    >
      <h4> Edit Tracker Item</h4>
      <p> { item.productName }</p>

      <form
        method='dialog'
        onSubmit={ editAlert }
      >
        <label>Desired price: </label>
        <input
          type="text"
          name='desiredPrice'
          placeholder={ item.desiredPrice }
          required={ true }
        />

        <button
          type='submit'
          id="save"
          className='cta cta-sm'
          name='save'
          >save
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

export default EditItemModal

