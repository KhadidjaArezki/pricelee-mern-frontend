import magnifier from "../icons/magnifying-glass.png";

const SearchBox = () => {
  return (
    <div className="searchbox">
      <input
        type="search"
        placeholder="Search..."
      />
      <div className='searchbox__btn'>
        <img src={magnifier} alt="magnifying glass"/>
      </div>
    </div>
  )
}

export default SearchBox