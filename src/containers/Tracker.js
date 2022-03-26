import Header from './Header'
import Footer from './Footer'
import TrackerItems from './TrackerItems'

const Tracker = () => {
  return (
    <div id="tracker">
      <Header/>
      <main className="container">
        <TrackerItems
          itemsPerPage={ 4 }
        />
      </main>
      <Footer/>
    </div>
  )
}

export default Tracker