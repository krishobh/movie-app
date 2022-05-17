import { useState } from "react";
import "./App.scss";
import MoviesRightList from "./components/MoviesRightList";
import MoviesLeftList from "./components/MoviesLeftList";
import { movies } from "./models/movies";
import { IMovie } from "./models/models";

const App:React.FC = () => {
  const [leftList, setLeftList] = useState(movies);
  const [rightList, setRightList] = useState<IMovie[]>([]);
  const [search, setSearch] = useState("");

  const onAddClick = (movie: IMovie) => {
    rightList.push(movie);
    setRightList(rightList);

    const newLeftList = leftList.filter((item) => item.id !== movie.id);
    setLeftList(newLeftList);

    if (search) {
      setSearch('');
    }
  };

  const onRemoveClick = (movie: IMovie) => {
    leftList.push(movie);
    setLeftList(leftList);

    const newRightList = rightList.filter((item) => item.id !== movie.id);
    setRightList(newRightList);
  };

  return (
    <section className="app movie-container">

      <header className="app-header">Movie App</header>

      <MoviesLeftList search={search} setSearch={setSearch} movieList={leftList} parentMethod={onAddClick}/>

      <MoviesRightList search={search} movieList={rightList} parentMethod={onRemoveClick}/>
      
    </section>
  );
}

export default App;
