import { useSelector } from 'react-redux'
import { selectCurrentUser, selectCurrentToken } from '../reducers/authReducer'
import NavLink from "../components/NavLink";
import MenuButton from "../components/MenuButton";
const Navbar = () => {
  const user = useSelector(selectCurrentUser)
  const token = useSelector(selectCurrentToken)
  const isLogged = user && token

  return (
    <>
      <nav className='navbar'>
        <div className='navbar__drawer'>
          <ul className='nav-menu'>
            <NavLink
              href='/'
              text='Home'
            />
            <NavLink
              href='/search'
              text='Browse'
            />
            { isLogged &&
              <NavLink
                href='/tracker'
                text='Tracker'
              />
            }
            <NavLink
              href='/#deals-anchor'
              text='Deals'
            />
            <NavLink
              href='/#services'
              text='Services'
            />
          </ul> 
        </div>
      </nav>
      <MenuButton/> 
    </>
  )
}

export default Navbar
