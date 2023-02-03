
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

export default function CardsTemplate(props) {
  return (
    <div>Cards Template
{/* <Slide slidesToScroll={1} slidesToShow={3} indicators={true}>
   */}
      {props.movies.map((movie, index) => (
        
        <div className="UI__card">
         <div>
        <img src={movie.Poster} alt={`${movie.Title} Poster`} />

        </div>
        </div>
        ))}
{/* </Slide> */}

    </div>
  )
}
