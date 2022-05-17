import React from 'react'
import { IMovie } from '../models/models';
import MoviesList from './MoviesList';
import SearchBox from './SearchBox';

interface Props {
	movieList: IMovie[],
	parentMethod: Function,
  search: string,
  setSearch: Function
};

const MoviesLeftList:React.FC<Props> = ({ parentMethod, movieList, setSearch, search }) => {
  return (
    <section className="left-movie-container grid-item">

        <SearchBox search={search} setSearch={setSearch}/>

        <MoviesList 
          movieList={movieList}
          parentMethod={parentMethod} 
          actionType={'Add'} 
          search={search}
        />
        
    </section>
  )
}

export default MoviesLeftList;