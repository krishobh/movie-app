import React, { memo } from 'react';
import { IMovie } from '../../models/models';
import "./MovieTile.scss";
import MoviesPoster from './MoviePoster';
import MoviesTitle from './MovieTitle';
import MovieReleaseInfo from './MovieReleaseInfo';
import MovieActions from './MovieActions';

interface Props {
	movie: IMovie,
	parentMethod: Function,
	actionType: string
};

const MovieTile:React.FC<Props> = ({movie, parentMethod, actionType}) => {  
  return (

    <article className="grid movie-tile">

      <MoviesPoster poster={movie.poster}/>

      <MoviesTitle title={movie.title}/>

      <div className="grid-item"></div>
      <div className="grid-item"></div>

      <MovieReleaseInfo releaseDate={movie.release_date} />
      
      <MovieActions parentMethod={parentMethod} actionType={actionType} movie={movie}/>
      
    </article>
  )
}

export default memo(MovieTile);