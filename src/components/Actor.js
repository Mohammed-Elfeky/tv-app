import {useEffect, useState} from 'react'
import axios from 'axios'
import {fetchUrl_actor_movies,
        fetchUrl_actor_info,
        images_base_link
       } from '../helpers/requests'
import truncate from '../helpers/truncate'
import Slider from "react-slick";
import sliderSettings from '../helpers/sliderSettings'
import {Link} from 'react-router-dom'
function Actor({match}) {

    const id=match.params.actorId
    const [actorMovies,setActorMovies]=useState([])
    const [actorInfo,setActorInfo]=useState([])
    const [actorBiography,setActorBiography]=useState([])

    useEffect(()=>{
        const get_actor_movies=async()=>{
            let actor_movies=await axios.get(fetchUrl_actor_movies(id));
            let actor_info=await axios.get(fetchUrl_actor_info(id));

            actor_movies=actor_movies.data.results
            actor_info=actor_info.data
            let actor_biography=actor_info.biography

            if(actor_movies.length === 0 && actor_info === undefined){
                return;
            }

            setActorMovies(actor_movies)
            setActorInfo(actor_info);
            setActorBiography(actor_biography)
        }
        get_actor_movies()
    },[id])
    return (
        <div>
            <div className="container">
                <div className="actor">
                    <div className="actor_img">
                        <img src={`${images_base_link}${actorInfo.profile_path}`} alt=""/>
                    </div>
                    <div className="actor_info">
                        <h1>{actorInfo.name}</h1>
                        <p>{truncate(actorBiography,300)}</p>
                    </div>
                </div>
                <div>    
                        <h2 style={{color:'white'}}>known for</h2>
                        <Slider {...sliderSettings(actorMovies.length)}>
                            {
                                actorMovies.map(actorMovie=>(
                                    <div>
                                        <div className="actor_known_for_slider_item" >
                                            <Link to={`/moviePage/${actorMovie.id}`}>
                                              <img style={{width:"100%"}} src={`${images_base_link}${actorMovie.poster_path}`} alt=""/>
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                </div>
            </div>
        </div>
    )
}

export default Actor
