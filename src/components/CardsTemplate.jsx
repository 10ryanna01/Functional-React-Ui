export default function CardsTemplate(props) {
  const linkReviewIMDB = "https://www.imdb.com/title/";

  return (
    <>
      <div className={`${props.addSortByGridDefault} ${props.addSortByGrid}`}>
        {props.movies?.map((movie, index) => (
          <div key={index} className="UI__card">
            <div key={index} className="UI__card__body">
              <div className="UI__card__body__image">
                <img
                  src={movie.Poster}
                  alt={`${movie.Title} Poster`}
                  className="UI__card__body__image__asset"
                  width="auto"
                  height="auto"
                />
              
              <div className="UI__card__body__copy">
                <h2 className="UI__card__body__copy__title">{movie.Title}</h2>
                <h3 className="UI__card__body__copy__year">{movie.Year}</h3>

                <a href={`${linkReviewIMDB}${movie.imdbID}`} target="_blank" rel="noreferrer" className="UI__card__body__copy__link"><h4 className="UI__card__body__copy__link__text">read reviews</h4></a>
                
              </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </>
  );
}
