import React from "react";
import "./SearchBox.scss";
// import { debounce } from "lodash";
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

  /*
   *  TODO : While implementing the real search API
   *  when user typing some query in box, rather calling the api for each letter,
   *  waiting for a delay (say 1sec) and calls the API.
   * 
   *  useCallback provides us the memoized callback which will improve the performance.
   *  
   *  const optimizedCall = useCallback( debounce( (nextValue) => searchAPICall(nextValue), 1000 ), []);
   */

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