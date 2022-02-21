import MenuButton from "./MenuButton";
const Navbar = () => {
  
  return (
    <nav className='navbar'>
      {/* <div className="container"> */}
        <MenuButton/> 
        <div className='navbar__drawer'>
          <ul className='nav-menu'>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul> 
        </div>
      {/* </div> */}
    </nav>
  )
}

export default Navbar