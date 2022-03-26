import { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'

const LoginButton = () => {
  const user = useSelector(({ user }) => user)
  const isLogged = user.username && user.token
  const logintButtonRef = useRef()

  useEffect(() => {
    if ( isLogged ) {
      logintButtonRef.current.classList.add('hidden')
    }
    else {
      logintButtonRef.current.classList.remove('hidden')
    }
  }, [ user ])

  return (
    <li
      id='login'
      className='hidden'
      ref={ logintButtonRef }
    >
      <a href="/signup">Login</a>
    </li>
  )
}

export default LoginButton