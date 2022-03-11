import magnifier from "../icons/magnifying-glass.png";

const SearchBox = () => {
  const clickhandler = () => {

  }
  return (
    <div className="searchbox">
      <input
        type="search"
        placeholder="Search..."
      />
      <div className='searchbox__btn' onClick={clickhandler}>
        <img src={magnifier} alt="magnifying glass"/>
      </div>
    </div>
  )
}

export default SearchBox