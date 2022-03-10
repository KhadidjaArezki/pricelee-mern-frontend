const Filter = ({ name, options }) => {
  return (
    <div className='filter'>
      <select name={name} id={name + '-input'}>
      <option selected>Select...</option>
        {options.map(option => 
          <option value={option.value}>{option.text}</option>
        )}
      </select>
      <label htmlFor={name + '-input'}>{name}</label>
    </div>
  )
}

export default Filter