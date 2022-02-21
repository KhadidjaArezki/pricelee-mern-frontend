import Navbar from './Navbar';
import Title from './Title';
import User from './User'

const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <Title/>
        <Navbar/>
        <User/>
      </header>
    </div>
  )
}

export default Header