import Header from './Header';
import Footer from './Footer';
import FrontPage from './FrontPage'
import Deals from './Deals'
import Services from './Services'

const Home = () => {
  return (
    <div className='home'>
      <div className="front-page">
        <Header/>
        <FrontPage/>
      </div>
      <Deals/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default Home 