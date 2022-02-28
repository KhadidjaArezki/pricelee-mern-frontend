import MenuButton from "./MenuButton";
const Navbar = () => {
  
  return (
    <nav className='navbar'>
      {/* <div className="container"> */}
        <MenuButton/> 
        <div className='navbar__drawer'>
          <ul className='nav-menu'>
            <li><a href="/">Home</a></li>
            <li><a href="#deals-anchor">Deals</a></li>
            <li><a href="#services">Services</a></li>
          </ul> 
        </div>
      {/* </div> */}
    </nav>
  )
}

export default Navbar