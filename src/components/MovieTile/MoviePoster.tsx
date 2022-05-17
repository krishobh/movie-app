import React, { memo } from 'react';

interface Props {
	poster: string
};

const MoviesPoster:React.FC<Props> = ({ poster }) => {
  return (
    <div className="grid-item item-poster">
        <img src={poster}></img>
    </div>
  )
}

export default memo(MoviesPoster);