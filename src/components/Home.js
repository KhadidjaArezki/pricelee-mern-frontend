import Header from './Header';
import Footer from './Footer';
import FrontPage from '../containers/FrontPage'
import Deals from '../containers/Deals'
import Services from '../containers/Services'

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