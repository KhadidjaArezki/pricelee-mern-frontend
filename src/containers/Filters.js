import { useState, useRef } from 'react'
import { filterData } from '../utils/filterData'
import Filter from '../components/Filter'

const Filters = () => {
  const [open, setOpen] = useState(false)
  const filtersRef = useRef()
  
  const handleLabelClick = () => {
    const filters = filtersRef.current
    filters.classList.toggle('open')
    setOpen(!open)
  }

  return (
    <form
      className="filters open"
      ref={filtersRef}
    >
      <label
        className='filters__label'
        onClick={handleLabelClick}
        >
      Search Filters
      </label>
      <div className="filters__dropdown">
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
      </div>  
    </form>
  )
}

export default Filters