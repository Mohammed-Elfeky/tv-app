import {useEffect,useState} from 'react'
import axios from 'axios'
import {images_base_link} from './requests';
import truncate from './truncate'

function Header({fetchUrl}) {
    
    const[movie,setMovie]=useState([])
    const[movieOverview,setMovieOverview]=useState([])

    useEffect(()=>{
        const getMovie=async()=>{
            let theMovies=await axios.get(fetchUrl);
            let theMoviesArray=theMovies.data.results;
            let randomMovie=theMoviesArray[Math.floor(Math.random()*theMoviesArray.length)];
            setMovie(randomMovie);
            setMovieOverview(randomMovie.overview)
        }
        getMovie();
    },[fetchUrl])
    return (
        <div className="my__header" style={{backgroundImage:`url(${images_base_link}${movie.backdrop_path})`}}>
           <div className="header__container">
               <div className="content">
                   <h1 className="style__title">{movie.original_name}</h1>
                   <button className="style__button">play</button>
                   <button className="style__button">my list</button>
                   <p className="style__description">{truncate(movieOverview,100)}</p>  
               </div>
           </div>
           <div className="fadder"></div>
        </div>
    )
}

export default Header
