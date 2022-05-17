import React from 'react'
import { differenceInDays, fromUnixTime } from "date-fns";

interface Props {
	releaseDate: number
};

const MovieReleaseInfo:React.FC<Props> = ({ releaseDate }) => {
  return (
    <div className="grid-item release-info">
        <p>
            Release date :
            <time>{ " " + differenceInDays(new Date(), fromUnixTime(releaseDate)) + " "}</time>
            days ago
        </p>
    </div>
  )
}

export default MovieReleaseInfo;