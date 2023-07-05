import { useState, forwardRef } from 'react'
import { useDispatch } from 'react-redux'
import { useDeleteAlertMutation } from '../reducers/trackerApiSlice'
import { removeAlert } from '../reducers/trackerReducer'
import { setNotification } from '../reducers/notificationReducer'

const DeleteItemModal = forwardRef(({ item }, ref) => {
  const dispatch = useDispatch()
  const [errMsg, setErrMsg] = useState("")
  const [ deleteAlert ] = useDeleteAlertMutation()

  const closeModal = () => {
    ref.current.close()
  }

  const deleteItem = async (event) => {
    try {
      const deletedAlert = await deleteAlert(item.alertId).unwrap()
      closeModal()
      dispatch(removeAlert(deletedAlert))
      dispatch(setNotification({
        message: 'item successfully removed from your tracker',
        type: 'success'
      }, 3))
    } catch(err) {
      if (!err?.status) {
        // isLoading: true - until timeout
        setErrMsg("No Server Response")
      } else if (err.status === 400) {
        setErrMsg("malformed data")
      } else {
        setErrMsg("Failed to delete item from your tracker")
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
      <p> Are you sure you want to delete</p>
      <p> { item.productName }</p>
      <p>from you tracker ?</p>
      
      <form
        method='dialog'
        onSubmit={ deleteItem }
      >
        <button
          type='submit'
          id="delete"
          className='cta cta-sm'
          name='delete'
          >delete
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

export default DeleteItemModal
