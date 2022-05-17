import { useState } from "react";
import "./App.scss";
import MoviesRightList from "./components/MoviesRightList";
import MoviesLeftList from "./components/MoviesLeftList";
import { movies } from "./models/movies";
import { IMovie } from "./models/models";

const App:React.FC = () => {
  const [leftList, setLeftList] = useState<IMovie[]>(movies);
  const [rightList, setRightList] = useState<IMovie[]>([]);
  const [search, setSearch] = useState("");

  const onAddClick = (e: React.FormEvent, movie: IMovie) => {
    e.preventDefault();

    setRightList([...rightList, movie]);

    const newLeftList = leftList.filter((item) => item.id !== movie.id);
    setLeftList(newLeftList);

    if (search) {
      setSearch('');
    }
  };

  const onRemoveClick = (e: React.FormEvent, movie: IMovie) => {
    e.preventDefault();

    setLeftList([...leftList, movie]);

    const newRightList = rightList.filter((item) => item.id !== movie.id);
    setRightList(newRightList);
  };

  return (
    <section className="app movie-container">

      <header className="app-header">Movie App</header>

      <MoviesLeftList query={search} setSearch={setSearch} movieList={leftList} parentMethod={onAddClick}/>

      <MoviesRightList query={search} movieList={rightList} parentMethod={onRemoveClick}/>
      
    </section>
  );
}

export default App;
