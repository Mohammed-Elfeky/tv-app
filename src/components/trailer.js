import React from 'react'
import {useEffect,useState} from 'react'
import { FiPlayCircle } from 'react-icons/fi';
import axios from 'axios'
import ReactPlayer from 'react-player/lazy'
import {images_base_link_trailerAndHeader,trailerFetch,fetchUrl_poster} from '../helpers/requests'
import spinner from '../images/spinner.gif'
function Trailer({id}) {

    const [play,setPlay]=useState(false)
    const [videoKey,setVideoKey]=useState([])
    const [videoImage,setVideoImage]=useState([])
    const [showTrailerContainer,setShowTrailerContainer]=useState(true)

    useEffect(()=>{
        setVideoImage(spinner)

        const getTrailer=async()=>{
            let theTrailer=await axios.get(trailerFetch(id))
            let theTrailerImage=await axios.get(fetchUrl_poster(id))
            if(theTrailer.data.results.length === 0){
              setShowTrailerContainer(false)
            }else{
              setVideoImage(`${images_base_link_trailerAndHeader}${theTrailerImage.data.backdrop_path}`)
              setVideoKey(theTrailer.data.results[0].key)
              setPlay(false);
            }
            
        }
        getTrailer();

    },[id])

    return (
        <div className="trailer">
            
            {
                showTrailerContainer && (
                    <div className="trailer__container" style={{backgroundImage:`url(${videoImage})`}}>
                        {
                            play ? (
                                <ReactPlayer height="100%" width="100%" playing url={`https://www.youtube.com/watch?v=${videoKey}`}/>
                            )
                            :
                            (
                                <FiPlayCircle onClick={()=>setPlay(true)} style={{ fontSize:"60px",cursor:"pointer",color:"#e6e6e6"}}/>
                            )
                        }
                
                    </div>
                )
            }
        </div>
    )
}

export default Trailer
