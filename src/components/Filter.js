import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchFilters } from '../reducers/searchReducer'

const Filter = ({ name, options }) => {
  const filters = useSelector(({ search }) => search.filters)
  const filterRef = useRef()
  const dispatch = useDispatch()

  const getFilterObject = (name, value) => {
    switch(name) {
      case 'price': {
        const MinPrice = value === 'Select...' ? ''
          : value.substring(0, value.indexOf('-'))

        const MaxPrice = value === 'Select...' ? ''
          : value.substring(value.indexOf('-') + 1, value.length)

        return {
          MinPrice,
          MaxPrice
        }
      }

      case 'category' : {
        const categoryId = value === 'Select...' ? '' : value
        return {
          categoryId
        }
      }

      default:
        return {}
    }
  }
  
  const handleChange = (event) => {
    const filterName = event.target.name
    const filterValue = event.target.value
    const filterObject = getFilterObject(filterName, filterValue)
   
    dispatch(setSearchFilters({
      ...filters,
      ...filterObject
    }))
  }

  return (
    <div className='filter'>
      <select
        name={ name }
        id={ name  + '-input'}
        onChange={ handleChange }
        ref={ filterRef }
      >

        <option defaultValue>Select...</option>
        {options.map(option => 
          <option
            key={ option.value }
            value={ option.value }
          >
            { option.text }
          </option>
        )}
      </select>
      <label
        htmlFor={ name  + '-input'}
      >
        { name }
      </label>
    </div>
  )
}

export default Filter