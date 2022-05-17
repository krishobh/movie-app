import React from 'react'
import { IMovie } from '../models/models';
import MoviesList from './MoviesList';

interface Props {
    movieList: IMovie[],
    parentMethod: Function,
    search: string
};

const MoviesRightList:React.FC<Props> = ({ parentMethod, movieList, search }) => {
  return (
    <section className="right-movie-container grid-item">
        
        <h1>Selected Movies List</h1>

        <MoviesList
          movieList={movieList}
          parentMethod={parentMethod}
          actionType={'Remove'}
          search={search}
        />
     
    </section>
  )
}

export default MoviesRightList;