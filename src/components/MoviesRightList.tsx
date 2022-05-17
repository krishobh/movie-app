import React from 'react'
import { IMovie } from '../models/models';
import MoviesList from './MoviesList';

interface Props {
    movieList: IMovie[],
    parentMethod: Function,
    query: string
};

const MoviesRightList:React.FC<Props> = ({ parentMethod, movieList, query }) => {
  return (
    <section className="right-movie-container grid-item">
        
        <h1>Selected Movies List</h1>

        <MoviesList
          movieList={movieList}
          parentMethod={parentMethod}
          actionType={'Remove'}
          query={query}
        />
     
    </section>
  )
}

export default MoviesRightList;