import React from "react";
import { useState, useEffect } from "react";
import CardsTemplate from "./CardsTemplate";
import LiveSearch from "./LiveSearch";

export default function CardsData() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("lord of the rings");
  /*  fetch movie data */

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=d6f92ca3`;

    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.Search);

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
    console.log(`current search is for "${searchValue}"`);
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <>
      <h1>CardsData</h1>
      <LiveSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <>
      <CardsTemplate movies={movies}  />
      </>
    </>
  );
}
