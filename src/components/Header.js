import {useEffect,useState} from 'react'
import axios from 'axios'
import {images_base_link_trailerAndHeader} from '../helpers/requests';
import truncate from '../helpers/truncate'
import {Link} from 'react-router-dom'
function Header({fetchUrl}) {
    
    const[movie,setMovie]=useState([])
    const[movieOverview,setMovieOverview]=useState([])
    const [movieId,setMovieId]=useState([])
    useEffect(()=>{
        const getMovie=async()=>{
            let theMovies=await axios.get(fetchUrl);
            let theMoviesArray=theMovies.data.results;
            let randomMovie=theMoviesArray[Math.floor(Math.random()*theMoviesArray.length)];
            setMovie(randomMovie);
            setMovieOverview(randomMovie.overview)
            setMovieId(randomMovie.id)
        }
        getMovie();
    },[fetchUrl])
    return (
        <div className="my__header" style={{backgroundImage:`url(${images_base_link_trailerAndHeader}${movie.backdrop_path})`}}>
           <div className="header__container">
               <div className="content">
                   <h1 className="style__title">{movie.original_title}</h1>
                   <Link to={`/moviePage/${movieId}`}>
                     <button className="style__button">play</button>
                   </Link>
                   <p className="style__description">{truncate(movieOverview,100)}</p>  
               </div>
           </div>
           <div className="bottom__fadder"></div>
        </div>
    )
}

export default Header
