import { useState} from 'react'

const MenuButton = () => {
  const [open, setOpen] = useState(false)
  
  const handleClick = () => {
    const navbar = document.querySelector('.navbar')
    navbar.classList.toggle('open')
    setOpen(!open)
  }

  return (
    <div className="navbar-toggle-wrapper" onClick={handleClick}>
      <div className='navbar-toggle'></div>
    </div>

  )
}

export default MenuButton