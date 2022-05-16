import { useState } from "react";
import "./App.scss";
import MoviesList from "./components/MoviesList";
import SearchBox from "./components/SearchBox";
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
    <section className="app movie-container">
      <header className="app-header">Movie App</header>
      <section className="left-movie-container grid-item">

        <SearchBox search={search} setSearch={setSearch}/>

        <MoviesList 
          movieList={leftList} 
          parentMethod={onAddClick} 
          actionType={'Add'} 
          search={search}
        />
        
      </section>
      <section className="right-movie-container grid-item">
        <h1>Selected Movies List</h1>

        <MoviesList
          movieList={rightList}
          parentMethod={onRemoveClick}
          actionType={'Remove'}
          search={search}
        />
     
      </section>
      
    </section>
  );
}

export default App;
