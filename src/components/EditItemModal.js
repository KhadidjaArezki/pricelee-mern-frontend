import { useState, forwardRef } from 'react'
import { useDispatch } from 'react-redux'
import { useUpdateAlertMutation } from '../reducers/trackerApiSlice'
import { updateDesiredPrice } from '../reducers/trackerReducer'
import { setNotification } from '../reducers/notificationReducer'

const EditItemModal = forwardRef(({ item }, ref) => {
  const dispatch = useDispatch()
  const [errMsg, setErrMsg] = useState("")
  const [ updateAlert ] = useUpdateAlertMutation()

  const closeModal = () => {
    ref.current.close()
  }

  const editAlert = async (event) => {
    try {
      const updatedAlert = await updateAlert({
        id: item.alertId,
        desiredPrice: parseInt(event.target.desiredPrice.value)
      }).unwrap()
      console.log(updatedAlert)
      closeModal()
      dispatch(updateDesiredPrice(updatedAlert))
      dispatch(setNotification({
        message: 'changes successfully saved',
        type: 'success'
      }, 3))
    } catch(err) {
      if (!err?.status) {
        // isLoading: true - until timeout
        setErrMsg("No Server Response")
      } else if (err.status === 400) {
        setErrMsg("malformed data")
      } else {
        setErrMsg("Failed to update item in your tracker")
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

