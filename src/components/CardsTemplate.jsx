export default function CardsTemplate(props) {
  return (
    <>
      <div className={`UI__card-container ${props.addSortByGrid}`}>
      {props.movies?.map((movie, index) => (
        <div key={index} className="UI__card">
          <div key={index} className="UI__card__body">
            <div className="UI__card__body__image">

            

              <img src={movie.Poster} alt={`${movie.Title} Poster`} className="UI__card__body__image__asset" width="auto" height="auto" />
              </div>
              
            <div className="UI__card__body__copy">

                      <h2 className="UI__card__body__title">{movie.Title}</h2>
                      <h3 className="UI__card__body__year">{movie.Year}</h3>
                      <h4 className="UI__card__body__link">{movie.imdbID}</h4>
              </div>

            </div>
          </div> 
          
      ))}
      </div>
    </>
  );
}
