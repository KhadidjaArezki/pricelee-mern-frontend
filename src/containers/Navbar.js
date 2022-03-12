import NavLink from "../components/NavLink";
import MenuButton from "../components/MenuButton";
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
              href='/search'
              text='Browse'
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