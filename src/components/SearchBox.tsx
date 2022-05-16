import React from 'react'
import "./SearchBox.scss";

interface Props {
	search: string,
	setSearch: Function
};

const SearchBox:React.FC<Props> = ({search, setSearch}) => {
  return (
    <section role="searchbox" className="search-box">
        <input
            placeholder="Search here for movie"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => setSearch('')}>Clear</button>
    </section>
  )
}

export default SearchBox