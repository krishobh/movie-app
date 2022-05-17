import React from 'react'
import { IMovie } from '../models/models';
import MovieTile from "./MovieTile/MovieTile";

interface Props {
	movieList: IMovie[],
	parentMethod: Function,
  actionType: string,
  search: string
};

const MoviesList:React.FC<Props> = ({ movieList, parentMethod, actionType, search }) => {
  return (
    <>
      {
        movieList.map((movie:IMovie) => {
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