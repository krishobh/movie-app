import React from 'react'
import { Movie } from '../movies';
import MovieTile from "./MovieTile";

interface Props {
	movieList: Movie[],
	parentMethod: Function,
  actionType: string,
  search: string
};

const MoviesList:React.FC<Props> = ({ movieList, parentMethod, actionType, search }) => {
  return (
    <>
      {
        movieList.map((movie:Movie) => {
            if (!movie.title.includes(search)) {
                return false;
            }
            return <MovieTile movie={movie} parentMethod={parentMethod} actionType={actionType} key={movie.id}/>
        })
      }
    </>
  )
}

export default MoviesList