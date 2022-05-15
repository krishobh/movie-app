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
      <div className="movie-tile">
        <div className="movie-title">{movie.title}</div>
        <div>
          Release date:{" "}
          {differenceInDays(new Date(), fromUnixTime(movie.release_date))}{" "}
          days ago
        </div>
        <button className="button-action" onClick={() => parentMethod(movie)}>
          {actionType}
        </button>
      </div>
    )
}

export default MovieTile