import React from 'react'

interface Props {
	search: string,
	setSearch: Function
};

const SearchBox:React.FC<Props> = ({search, setSearch}) => {
  return (
    <div>
        <input
            placeholder="Type for searcing..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </div>
  )
}

export default SearchBox