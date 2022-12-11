import { useState, useEffect } from "react";
import "./App.css"
import searchIcon from "./search.svg"
import Movies from "./components/movies"

const API_URL = "http://www.omdbapi.com?apikey=72cb0e83";
export default function Example() {

    const [movies, setMovies]= useState([]);
    const [search, setSearch]= useState("");
    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search);
    }
    
    useEffect(() => {
        searchMovies("spiderman")
    }, []);
    let movie1 = {
        "Title": "Batman v Superman: Dawn of Justice",
        "Year": "2016",
        "imdbID": "tt2975590",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    }
    
    return (
        <div className="app">
            <h1>MovieLand</h1>
        
            <div className="search">
                <input placeholder="search for movies" value= {search} onChange={(e)=>{ setSearch(e.target.value)}}/>
                <img src={searchIcon} alt= "search icon" onClick={()=>{searchMovies(search)}}/>
            </div>
            
                {
                    movies?.length>0
                    ?(
                        <div classsName = "container">
                        {movies.map((movie)=>(
                            <Movies movie={movie}/>
                        
                        ))}
                        </div>
                    ):
                    (
                        <p>no movies found</p>
                    )
                }
               
            
        </div>
    );
}
