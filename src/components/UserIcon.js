import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

const UserIcon = () => {
  const user = useSelector(({ user }) => user)
  const isLogged = user.username && user.token
  const userIconRef = useRef()
  
  useEffect(() => {
    if ( !isLogged ) {
      userIconRef.current.classList.add('hidden')
    }
    else {
      userIconRef.current.classList.remove('hidden')
    }
  }, [ user ])


  return (
    <li
      id="user-icon"
      className='hidden'
      ref={ userIconRef }
    >
      { user.username.substring(0, 1).toUpperCase() }
    </li>
  )
}

export default UserIcon