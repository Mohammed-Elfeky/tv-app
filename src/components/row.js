import {useEffect,useState} from 'react'
import axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {images_base_link} from '../helpers/requests'
import {Link} from 'react-router-dom'
import sliderSettings from '../helpers/sliderSettings'
import LazyLoad from 'react-lazyload';
import placeholder from '../images/placeholder.png'
//conditional style for poster padding based on isnetflex prop
const poster_padding_style={ 
  netflex:{padding:'10px',boxSizing:'border-box'},
  normal:{padding:'7px',boxSizing:'border-box'}
};

export default function Row({title,fetchUrl,isnetflex,cast}) {
    
    const [movies,setMovies]=useState([]); //state to hold the movies 
    const [show,setShow]=useState(true)

    useEffect(()=>{
        const getData=async ()=>{
            let data=await axios.get(fetchUrl)
            if(cast){
              
              if(data.data.cast.length < 4){
                setShow(false)
              }else{
                setMovies(data.data.cast)
              }
            }else{
              if(data.data.results.length < 4){
                setShow(false)
              }else{
                setMovies(data.data.results)
              }
            }
            
        }
        getData()                      //fetching the movies
    },[fetchUrl]) 

    

    return (
        <div className="row" style={{padding:'10px',boxSizing:"border-box"}} >
          {
            show && (
              <div className="container">
              <h2 style={{color:"white"}}>{title}</h2>
              <LazyLoad>
              {
                cast ?  (
                  
                    <Slider {...sliderSettings(movies.length)} >
                    
                    {
                        movies.map(movie=>(
                            <div key={movie.id}>
                              <div style={{padding:'7px',boxSizing:'border-box',overflow:"hidden"}}>
                                  <Link to={`/actor/${movie.id}`}>
                                    
                                      <img className="poster__style" style={{width:'100%'}} src={`${images_base_link}${movie.profile_path}`} alt=""
                                           onError={(e)=>{e.target.onerror = null; e.target.src=placeholder}}
                                      />
                                    
                                  </Link>
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
                                      <img className="poster__style" style={{width:'100%'}} src={`${images_base_link}${movie.poster_path}`} alt=""
                                           src={`${images_base_link}${movie.poster_path}`}
                                      />
                                    </Link>
                              </div>
                            </div>
                        ))
                    }
                  </Slider>
                )
              }
              </LazyLoad>
                
                
           </div>
            )
          }
        </div>
    )}
