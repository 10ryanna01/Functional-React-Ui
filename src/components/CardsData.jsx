import { useState, useEffect } from "react"
import CardsTemplate from "./CardsTemplate";

export default function CardsData() {

    const [movies, setMovies] = useState([]);


/*  fetch movie data */
const getMovieRequest = async () =>{
    const url = "http://www.omdbapi.com/?s=star wars&apikey=d6f92ca3";

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.Search); 
}
useEffect(() => {
    getMovieRequest();
}, [])


  return (
    <div>CardsData

        <CardsTemplate movies={movies} />
    </div>
  )
}
