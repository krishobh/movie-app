import React from 'react'
import "./SearchBox.scss";

interface Props {
	search: string,
	setSearch: Function
};

const SearchBox:React.FC<Props> = ({search, setSearch}) => {
  const searchMovie = (event:React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearch(query);
  }
  const clearSearch = () => {
    setSearch('');
  }
  const handleChange = (event:React.FormEvent) => {
    event.preventDefault();
  }
  return (
    <form role="searchbox" className="search-box" onSubmit={handleChange}>
        <input
            placeholder="Search here for movie"
            value={search}
            onChange={searchMovie}
        />
        <button onClick={clearSearch}>Clear</button>
    </form>
  )
}

export default SearchBox