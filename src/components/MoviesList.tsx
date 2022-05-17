import React from 'react'
import { IMovie } from '../models/models';
import MovieTile from "./MovieTile/MovieTile";

interface Props {
	movieList: IMovie[],
	parentMethod: Function,
  actionType: string,
  query: string
};

const MoviesList:React.FC<Props> = ({ movieList, parentMethod, actionType, query }) => {
  /*
   *  Method to check whether the query is not exist in the text
   *  Converting the query into regular expression and
   *  add case-insensitive checks as well.
   */
  const isSearchQueryNotMatchesTitle = (text: string) => {
    const re = new RegExp(query,'i');
    const position = text.search(re);
    
    return position === -1;
  }

  return (
    <>
      {
        movieList.map((movie:IMovie) => {
            if (isSearchQueryNotMatchesTitle(movie.title) && actionType === 'Add') {
                return false;
            }
            return <MovieTile movie={movie} parentMethod={parentMethod} actionType={actionType} key={movie.id}/>
        })
      }
    </>
  )
}

export default MoviesList