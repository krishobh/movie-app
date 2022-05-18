import { useState } from "react";
import "./App.scss";
import MoviesRightList from "./components/MoviesRightList";
import MoviesLeftList from "./components/MoviesLeftList";
import { movies } from "./models/movies";
import { IMovie } from "./models/models";
// import Immutable from "immutable";

const App:React.FC = () => {
  const [leftList, setLeftList] = useState<IMovie[]>(movies);
  const [rightList, setRightList] = useState<IMovie[]>([]);
  const [search, setSearch] = useState("");

  const onAddClick = (e: React.FormEvent, movie: IMovie) => {
    e.preventDefault();

    // TODO : Update with 'Immutable' - for further optimisation.
    const cloneMovie = Object.assign({}, movie);
    setRightList([...rightList, cloneMovie]);

    const newLeftList = leftList.filter((item) => item.id !== movie.id);
    setLeftList(newLeftList);

    if (search) {
      setSearch('');
    }
  };

  const onRemoveClick = (e: React.FormEvent, movie: IMovie) => {
    e.preventDefault();

    // TODO : Update with 'Immutable'.
    const cloneMovie = Object.assign({}, movie);
    setLeftList([...leftList, cloneMovie]);

    const newRightList = rightList.filter((item) => item.id !== movie.id);
    setRightList(newRightList);
  };

  /*
   *  TODO : Real webservice call to fetch data rather than hard-coding in constnt variable.
   *  Call the API only while 'search' state value get updating by useEffect Hook as below.
   * 
   *  useEffect(() => {
   *      API call logic..
   *  }, [search]);
   * 
   *  Show Activity Loader while fetching API. Show Error message in toaster.
   *  
   */

  return (
    <section className="app movie-container">

      <header className="app-header">Movie App</header>

      <MoviesLeftList query={search} setSearch={setSearch} movieList={leftList} parentMethod={onAddClick}/>

      <MoviesRightList query={search} movieList={rightList} parentMethod={onRemoveClick}/>
      
    </section>
  );
}

export default App;
