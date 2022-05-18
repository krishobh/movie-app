import React, {memo} from 'react'
import { IMovie } from '../models/models';
import MoviesList from './MoviesList';
import SearchBox from './SearchBox';

interface Props {
	movieList: IMovie[],
	parentMethod: Function,
  query: string,
  setSearch: Function
};

const MoviesLeftList:React.FC<Props> = ({ parentMethod, movieList, setSearch, query }) => {
  return (
    <section className="left-movie-container grid-item">

        <SearchBox query={query} setSearch={setSearch}/>

        <MoviesList 
          movieList={movieList}
          parentMethod={parentMethod} 
          actionType={'Add'} 
          query={query}
        />
        
    </section>
  )
}

export default memo(MoviesLeftList);