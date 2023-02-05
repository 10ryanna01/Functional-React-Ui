 

export default function CardsTemplate(props) {
  return (
    <>
      Cards Template
      {props.movies?.map((movie, index) => (
        <div key={index} className="UI__card">
          <div key={index}>
            <h2>{movie.Title}</h2>
       <img src={movie.Poster} alt={`${movie.Title} Poster`} />  
          </div>
          
        </div>
      ))
      }
    </>
  );
}
