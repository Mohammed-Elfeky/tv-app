import Row from './row'
import axios from 'axios'
import {useEffect,useState} from 'react'
import {images_base_link} from '../helpers/requests'
import Trailer from './trailer'
import truncate from '../helpers/truncate'
import {Link} from 'react-router-dom'
import {fetchUrl_poster,
        fetchUrl_similar,
        fetchUrl_recommendations,
        fetchUrl_cast
       } from '../helpers/requests'
import spinner from '../images/spinner.gif'
function MoviePage({match}) {

    const id=match.params.movieId;
    const [posterState,setPosterState]=useState([])
    const [name,setName]=useState([])
    const [movieOverview,setMovieOverview]=useState([])
    const [movieGeneres,setMovieGeneres]=useState([])

    useEffect(()=>{
        window.scrollTo(0, 0)
        setPosterState(spinner)   //show the loading gif for movie poster
        const getPoster=async()=>{
            let movie=await axios.get(fetchUrl_poster(id))
            console.log(movie)
            setPosterState(`${images_base_link}${movie.data.poster_path}`)
            setName(movie.data.original_title)
            setMovieOverview(movie.data.overview)
            setMovieGeneres(movie.data.genres)
        }
        getPoster()
    },[fetchUrl_poster(id)])

    return (
        <div className="movie__page">
            
                <div className="header__container__movie">
                    <div className="left__part">
                        <img src={posterState} alt=""/>
                    </div>
                    <div className="right__part">
                        <h2 className="movie__name">
                            {
                                name
                            }
                        </h2>
                        <p className="movie__overview">
                            {
                                truncate(movieOverview,480)
                            }
                        </p>
                        <div className="movie__genere">
                            {
                                movieGeneres.map(movieGenere=>(
                                    <Link to={`/genre/${movieGenere.id}`}>
                                      <button className="style__button">{movieGenere.name}</button>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
          {/* /genre/:genreId */}
            <Trailer id={id}/>
            <Row title="Yoy Also Might Like" fetchUrl={fetchUrl_similar(id)}  />
            <Row title="Recommendations" fetchUrl={fetchUrl_recommendations(id)}  />
            <Row cast title="cast" fetchUrl={fetchUrl_cast(id)}  />
        </div>
    )
}

export default MoviePage
