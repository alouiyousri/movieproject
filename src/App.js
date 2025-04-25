import React from 'react'
import "./App.css"
import Moviedata from './Moviedata/movies'
import MovieList from './Component/Movielist/Movielist'
import Addmovie from './Component/Addmovie/Addmovie'
import Filterbyname from './Component/Filterbyname/Filterbyname'
import Filterrating from './Component/Raiting/Rating'
function App() {
  const[movies, setMovie] = React.useState(Moviedata);
  const [inputsearch, setInpoutsearch] = React.useState("");
  const [rating, setRating] = React.useState(0);
  const add=(newmovie)=>{
    setMovie([...movies, newmovie]);
  };
  return(
    <div className='App'>
      <div className='moviehed'> 
      <h1>movie app</h1>
      <Filterbyname inputsearch={inputsearch} setInpoutsearch={setInpoutsearch}/>
      <Filterrating rating={rating} setRating={setRating} isMovieRating ={false}/>
      <Addmovie add={add}/> </div> 
      <MovieList movies={movies } inputsearch={inputsearch} rating={rating} />
      </div>
  );
}
export  default App;
