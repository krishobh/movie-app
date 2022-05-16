import React from 'react';
import { differenceInDays, fromUnixTime } from "date-fns";
import { Movie } from '../movies';
import "./MovieTile.scss";

interface Props {
	movie: Movie,
	parentMethod: Function,
	actionType: string
};

const MovieTile:React.FC<Props> = ({movie, parentMethod, actionType}) => {  
  return (

    <article className="grid movie-tile">

      <div className="grid-item item-poster">
        <img src={movie.poster}></img>
      </div>

      <div className="grid-item item-title">
        <h4 className="movie-title">{movie.title}</h4>
      </div>

      <div className="grid-item"></div>
      <div className="grid-item"></div>
    
      <div className="grid-item release-info">
        <p className='align-center'>
          Release date :
          <time>{ " " + differenceInDays(new Date(), fromUnixTime(movie.release_date)) + " "}</time>
          days ago
        </p>
      </div>
      
      <div className="grid-item button-action">
        <button onClick={() => parentMethod(movie)}>
          {actionType}
        </button>
      </div>
      
    </article>
  )
}

export default MovieTile