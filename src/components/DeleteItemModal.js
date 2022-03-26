import { forwardRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteAlert } from '../reducers/trackerReducer'

const DeleteItemModal = forwardRef(({ item }, ref) => {
  const user = useSelector(({ user }) => user)
  const token = user.token
  const dispatch = useDispatch()

  const closeModal = () => {
    ref.current.close()
  }

  const removeAlert = () => {
    dispatch(deleteAlert(item.alertId, token))
  }

  return (
    <dialog
      ref={ ref }
      className='modal'
    >
      <p> Are you sure you want to delete</p>
      <p> { item.productName }</p>
      <p>from you tracker ?</p>

      <button
        type='submit'
        id="delete"
        className='cta cta-sm'
        name='delete'
        onClick={ removeAlert }
        >delete
      </button> 
      
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

export default DeleteItemModal