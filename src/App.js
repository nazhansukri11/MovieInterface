import React from 'react';
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
            <h1>App</h1>
        </div>
    );
}

export default App;