import { useState} from 'react'

const MenuButton = () => {
  const [open, setOpen] = useState(false)
  
  const handleClick = () => {
    const navbar = document.querySelector('.navbar')
    navbar.classList.toggle('open')
    setOpen(!open)
  }

  return (
    <div className="navbar__toggle-wrapper" onClick={handleClick}>
      <div className='navbar__toggle'></div>
    </div>

  )
}

export default MenuButton