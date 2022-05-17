import React from 'react'
import { IMovie } from '../../models/models';

interface Props {
	actionType: string,
    parentMethod: Function,
    movie: IMovie
};

const MovieActions:React.FC<Props> = ({ parentMethod, actionType, movie }) => {
  return (
    <div className="grid-item button-action">
        <button onClick={(e) => parentMethod(e, movie)}>
          {actionType}
        </button>
    </div>
  )
}

export default MovieActions;