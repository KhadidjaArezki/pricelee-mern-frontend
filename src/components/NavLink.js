const NavLink = ({ href, text }) => {
  const clickHandler = () => {
    const navbar = document.querySelector('.navbar')
    if (navbar.classList.contains('open')) {
      setTimeout(() => {
        navbar.classList.remove('open')
      }, 300)
    }
  }

  return (
    <li>
      <a href={href} onClick={clickHandler}>{text}</a>
    </li>
  )
}
export default NavLink