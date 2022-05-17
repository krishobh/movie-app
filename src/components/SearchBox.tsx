import React, { useCallback } from "react";
import "./SearchBox.scss";

interface Props {
	query: string,
	setSearch: Function
};

const SearchBox:React.FC<Props> = ({query, setSearch}) => {

  const searchMovieAPI = (event:React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
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
            value={query}
            onChange={searchMovieAPI}
        />
        <button onClick={clearSearch}>Clear</button>
    </form>
  )
}

export default SearchBox