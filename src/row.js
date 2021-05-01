import {useEffect,useState} from 'react'
import axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {images_base_link} from './requests'
import {Link} from 'react-router-dom'
import sliderSettings from './sliderSettings'

//conditional style for poster padding based on isnetflex prop
const poster_padding_style={ 
  netflex:{padding:'10px',boxSizing:'border-box'},
  normal:{padding:'7px',boxSizing:'border-box'}
};

export default function Row({title,fetchUrl,isnetflex,cast}) {
    
    const [movies,setMovies]=useState([]); //state to hold the movies 
    const [showCast,setShowCast]=useState(true)
    useEffect(()=>{
        const getData=async ()=>{
            let data=await axios.get(fetchUrl)
            if(cast){
              setMovies(data.data.cast)
              if(data.data.cast.length === 0){
                setShowCast(false)
              }
            }else{
              setMovies(data.data.results)
            }
            
        }
        getData()                      //fetching the movies
    },[fetchUrl]) 

    

    return (
        <div className="row" style={{padding:'10px',boxSizing:"border-box"}} >
           <div className="container">
              {showCast && <h2 style={{color:"white"}}>{title}</h2>}
              {
                cast ?  (
                  
                    <Slider {...sliderSettings(movies.length)} >
                    {
                        movies.map(movie=>(
                            <div key={movie.id}>
                              <div style={isnetflex ? poster_padding_style.netflex : poster_padding_style.normal}>
                                  <img className="poster__style" style={{width:'100%'}} src={`${images_base_link}${movie.profile_path}`} alt=""/>
                                  <div className="actor__name__container">
                                    <p className="original__name">{movie.original_name}</p>
                                    <p className="character__name">{movie.character}</p>
                                  </div>
                              </div>
                            </div>
                        ))
                    }
                  </Slider>
               
                )
                :
                (
                  <Slider {...sliderSettings(movies.length)} >
                    {
                        movies.map(movie=>(
                            <div key={movie.id}>
                              <div style={isnetflex ? poster_padding_style.netflex : poster_padding_style.normal}>
                                    <Link to={`/MoviePage/${movie.id}`}>
                                      <img className="poster__style" style={{width:'100%'}} src={`${images_base_link}${movie.poster_path}`} alt=""/>
                                    </Link>
                              </div>
                            </div>
                        ))
                    }
                  </Slider>
                )
              }
                
                
           </div>
        </div>
    )}
