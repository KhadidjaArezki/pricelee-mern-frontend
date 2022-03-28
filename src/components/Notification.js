import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(({ notification }) => notification)
  const notificationClass = notification.type

  return (
    <div className={ 'notification ' + notificationClass }>
      { notification.message }
    </div>
  )
}

export default Notification