import React, { memo } from 'react';

interface Props {
	poster: string,
  overview: string
};

const MoviesPoster:React.FC<Props> = ({ poster, overview }) => {
  return (
    <div className="grid-item item-poster">
        <img src={poster} alt={overview}></img>
    </div>
  )
}

export default memo(MoviesPoster);