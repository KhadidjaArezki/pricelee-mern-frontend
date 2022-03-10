import { filterData } from '../utils/filterData'
import Filter from '../components/Filter'

const Filters = () => {
  return (
    <form className="search-filters">
      <h5>Search Filters</h5>
      <Filter
        name='price'
        options={filterData[0]}
      />
      <Filter
        name='category'
        options={filterData[1]}
      />
      <Filter
      name='store'
      options={filterData[2]}
      />
    </form>
  )
}

export default Filters