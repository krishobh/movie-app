import React from 'react'

interface Props {
	search: string,
	setSearch: Function
};

const SearchBox:React.FC<Props> = ({search, setSearch}) => {
  return (
    <section role="searchbox">
        <input
            placeholder="Type for searching..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </section>
  )
}

export default SearchBox