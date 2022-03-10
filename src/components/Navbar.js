import NavLink from "./NavLink";
import MenuButton from "./MenuButton";
const Navbar = () => {
  
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