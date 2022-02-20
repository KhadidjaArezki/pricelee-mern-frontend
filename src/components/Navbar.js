const Navbar = () => {
  return (
    <nav className='navbar'>
      <button className='navbar__toggle'/>
      <div className='navbar__drawer'>
        <ul className='nav-menu'>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li className='login'><a href="/login">Login</a></li>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar