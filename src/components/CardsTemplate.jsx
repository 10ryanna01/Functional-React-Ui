import React from 'react'

export default function CardsTemplate(props) {
  return (
    <div>Cards Template

      {props.movies.map((movie, index) => (
         <div>
        <img src={movie.Poster} alt={`${movie.Title} Poster`} />

        </div>
        ))}


    </div>
  )
}
