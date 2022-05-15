import React from 'react';
import { differenceInDays, fromUnixTime } from "date-fns";
import { Movie } from '../movies';

interface Props {
	movie: Movie,
	parentMethod: Function,
	actionType: string
};

const MovieTile:React.FC<Props> = ({movie, parentMethod, actionType}) => {  
    return (
      <article className="movie-tile">
        <h4 className="movie-title">{movie.title}</h4>
        <p>
          Release date :
          <time>{differenceInDays(new Date(), fromUnixTime(movie.release_date)) + " "}</time>
          days ago
        </p>
        <button className="button-action" onClick={() => parentMethod(movie)}>
          {actionType}
        </button>
      </article>
    )
}

export default MovieTile