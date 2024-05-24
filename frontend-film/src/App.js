import api from './api/axiosConfig';
import './App.css';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Reviews from './components/reviews/Reviews';
import FilmForm from './components/films/FilmForm';
import FilmList from './components/films/FilmList';
import UpdateFilm from './components/films/UpdateFilm';
import FilmDetail from './components/films/FilmDetail';
import SearchFilm  from './components/films/SearchFilm';

function App() {
 

    const [movies, setMovies] = useState();
    
    const getMovies = async () =>{
      
      try
      {
  
        const response = await api.get("/api/films/");

        console.log(response.data);
        setMovies(response.data);
  
      } 
      catch(err)
      {
        console.log(err);
      }
    }


    const getMovieData = async (movieId) => {
     
      try 
      {
          const response = await api.get(`/api/films/${movieId}`);
  
          const singleMovie = response.data;
  
          setMovie(singleMovie);
  
          setReviews(singleMovie.reviews);
          
  
      } 
      catch (error) 
      {
        console.error(error);
      }
  
    }

    useEffect(() => {
      getMovies();
    },[])
    
  return (

   <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home movies={movies} />} ></Route>
          <Route path="/filmform" element={<FilmForm />} ></Route>
          <Route path="/filmList" element={<FilmList films={movies} getFilms={getMovies} />} ></Route>
          <Route path="/update-film/:id" element={<UpdateFilm getFilms={getMovies} />} />
          <Route path="/film/:id" element={<FilmDetail />} ></Route>
          <Route path="/search-film" element={<SearchFilm />} />
         

          </Route>
      </Routes>

   </div>
    
  );
}

export default App;
