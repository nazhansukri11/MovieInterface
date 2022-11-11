import React from 'react';
import './App.css';
import SearchIcon from './search.svg';
import {useState,useEffect} from 'react';
import MovieCard from './MovieCard';

//create API from omdbapi
const API_KEY='https://www.omdbapi.com?apikey=26a4b140';

const App=()=>{

    const [movies,setMovies]=useState([]);
    const [searchTerm,setSearchTerm]=useState('');

     //fetch data from API when load
     useEffect(()=>{
        searchMovies('spiderman');
    },[]);

    //function to call data
    const searchMovies = async (title) => {
        const response = await fetch(`${API_KEY}&s=${title}`);
        const data = await response.json();

       setMovies(data.Search);
    };

    //render
    return(
        <div className="app">
            <h1>MovieUI</h1>

            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <img 
                src={SearchIcon} 
                alt="search"
                onClick={()=>searchMovies(searchTerm)}
                />
            </div>

            {movies?.length>0 ? (
                <div className="container">
                {movies.map((movie)=>(
                <MovieCard movie={movie} />
                ))}
                </div>
                ):(
                    <div className="empty">
                    <h2>No movies found</h2>
                    </div>
                )}
        </div>
    );
}

export default App;