import React from 'react';
import './App.css';
import SearchIcon from './search.svg'
import {useEffect} from 'react';

//create API from omdbapi
const API_KEY='https://www.omdbapi.com?apikey=26a4b140';

const App=()=>{

    //function to call data
    const searchMovies=async (title)=>{
        const response=await fetch(`${API_KEY}&s=${title}`);
        const data=await response.json();

        console.log(data.Search);
    }

    //fetch data from API when load
    useEffect(()=>{
        searchMovies('spiderman');
    },[]);

    //render
    return(
        <div className="App">
            <h1>MovieUI</h1>

            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value="Superman"
                    onChange={()=>{}}
                />
                <img 
                src={SearchIcon} 
                alt="search"
                onClick={()=>{}}
                />
            </div>

            
        </div>
    );
}

export default App;