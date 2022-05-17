import React, { memo } from 'react';

interface Props {
	title: string
};

const MoviesTitle:React.FC<Props> = ({ title }) => {
  return (
    <div className="grid-item item-title">
        <h4 className="movie-title">{title}</h4>
    </div>
  )
}

export default memo(MoviesTitle);