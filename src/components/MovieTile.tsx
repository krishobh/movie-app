import React from 'react';
import { differenceInDays, fromUnixTime } from "date-fns";
import { Movie } from '../movies';

interface Props {
	movie: Movie,
	parentMethod: Function,
	actionType: string
};

const MovieTile:React.FC<Props> = ({movie, parentMethod, actionType}) => {  
    
    const handleMouseOver = (e:React.FormEvent) => {
        const el = e.currentTarget as HTMLElement;
        let l = 0;
        function updateColor(newl: number) {
            l = newl;
            if (actionType === 'Add') {
              el.style.backgroundColor = `#64c864${20 + l * 5}`;
            }
            else {
              el.style.backgroundColor = `#c86464${20 + l * 5}`;
            }
            
            if (l < 10) {
              setTimeout(() => updateColor(l + 1), 25);
            }
        }
        setTimeout(() => updateColor(l + 1), 25);
    };

    const handleMouseLeave = (e:React.FormEvent) => {
      const el = e.currentTarget as HTMLElement;
      el.style.backgroundColor = (actionType === 'Add') ? "#64c86420" : "#c8646420";
    };

    return (
      <div className="movie-tile"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
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