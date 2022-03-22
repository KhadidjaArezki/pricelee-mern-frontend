import SignupForm from '../components/SignupForm'
import LoginForm from '../components/LoginForm'

const Signup = () => {
  return (
    <div id='signup'>
      <main>
        <input type="checkbox" id="chk" aria-hidden="true"/>
        <SignupForm/> 
        <LoginForm/>
      </main>
    </div>
  )
}

export default Signup