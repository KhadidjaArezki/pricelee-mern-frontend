import Navbar from './Navbar';
import Title from './Title';

const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <Title/>
        <Navbar/>
      </header>
    </div>
  )
}

export default Header