import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchBox from '../components/SearchBox'
import Pagination from "../components/Pagination";
import Filters from './Filters'
import SearchResults from './SearchResults'

const Search = () => {
  return (
    <div id="search">
      <Header/>
      <main className='container'>
        <div className="container__inner">
          <SearchBox/>
          <SearchResults/>
          <Filters/>
        </div>
        <Pagination/>
      </main>
      <Footer/>
    </div>
  )
}

export default Search