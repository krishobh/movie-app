import { useState } from "react";
import "./App.scss";
import MovieTile from "./components/MovieTile";
import { Movie, movies } from "./movies";

const App:React.FC = () => {
  const [leftList, setLeftList] = useState(movies);
  const [rightList, setRightList] = useState<Movie[]>([]);
  const [search, setSearch] = useState("");

  const onAddClick = (movie: Movie) => {
    rightList.push(movie);
    setRightList(rightList);

    const newLeftList = leftList.filter((item) => item.id !== movie.id);
    setLeftList(newLeftList);
  };

  const onRemoveClick = (movie: Movie) => {
    leftList.push(movie);
    setLeftList(leftList);

    const newRightList = rightList.filter((item) => item.id !== movie.id);
    setRightList(newRightList);
  };

  return (
    <div className="App movie-container">
      <div className="left-movie-container">
        <div>
          <input
            placeholder="Type for searcing..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {leftList.map((movie) => {
          if (!movie.title.includes(search)) {
            return false;
          }

          return <MovieTile movie={movie} parentMethod={onAddClick} actionType={'Add'} key={movie.id}/>

        })}
      </div>
      <div className="right-movie-container">
        {
          rightList.map((movie) => {
            if (!movie.title.includes(search)) {
              return false;
            }
            return <MovieTile movie={movie} parentMethod={onRemoveClick} actionType={'Remove'} key={movie.id}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
