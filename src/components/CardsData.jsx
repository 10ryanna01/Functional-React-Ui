import React from "react";
import { useState, useEffect } from "react";
import { IconGrid, IconList } from "../assets/Index";
import CardsTemplate from "./CardsTemplate";
import LiveSearch from "./LiveSearch";

export default function CardsData() {
  
  const [movies, setMovies] = useState([]);
  const [addSortByGrid, setAddSortByGrid] = useState(false);
  const [searchValue, setSearchValue] = useState("big");
  /*  fetch movie data */

  // sandbox api key
 const sandboxAPI = "d6f92ca3";

  const handleToggleGrid = () => {
    setAddSortByGrid("UI__card-container-grid");
    if (addSortByGrid){
      setAddSortByGrid(false);
    }
    
  };
  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=${sandboxAPI}`;

    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.Search);

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
    console.log(`search results for "${searchValue}"`);
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <>
       
      <LiveSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <>
        
        {addSortByGrid ?  
        <IconList className="UI__utility__icon__l" onClick={handleToggleGrid} />
          : 
          <IconGrid className="UI__utility__icon__l" onClick={handleToggleGrid} />
        
        }
        <h2>search results for "{searchValue}" </h2>

        <CardsTemplate movies={movies} addSortByGrid={addSortByGrid}  />
      </>
    </>
  );
}
