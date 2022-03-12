import Header from './Header'
import Footer from './Footer'
import Filters from './Filters'
import SearchResults from './SearchResults'
import SearchBox from '../components/SearchBox'
import { searchResultsData } from '../utils/dummyData'

const Search = () => {
  return (
    <div id="search">
      <Header/>
      <main className='container'>
        <div className="container__inner">
          <SearchBox/>
          <SearchResults
            results={searchResultsData}
            itemsPerPage={4}/>
          <Filters/>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Search