import {images_base_link} from '../helpers/requests'
import axios from 'axios'
import { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import {fetch__genres} from '../helpers/requests'
function Genres({match}) {
    const id=match.params.genreId
    const [genresPhotos,setGenresPhotos]=useState([])
    const [pageId,setPageId]=useState([])
    useEffect(()=>{
        const getGenres=async()=>{
            let genres=await axios.get(fetch__genres(id,pageId))
            setGenresPhotos(genres.data.results)
        }
        getGenres()
    },[id,pageId])
    return (
        <div>
          <div className="container">
              <div className="genres">
                  {
                      genresPhotos.map(genresPhoto=>(
                        
                          <div className="genre__item">
                              <Link to={`/moviePage/${genresPhoto.id}`}>
                                 <img src={`${images_base_link}${genresPhoto.poster_path}`} alt=""/>
                              </Link>
                          </div>
                        
                      ))
                  }
              </div>
              <div className="pages__container">
                  <button onClick={()=>setPageId(1)} className={`style__button ${pageId === 1 && 'page_selected'}`}>1</button>
                  <button onClick={()=>setPageId(2)} className={`style__button ${pageId === 2 && 'page_selected'}`}>2</button>
                  <button onClick={()=>setPageId(3)} className={`style__button ${pageId === 3 && 'page_selected'}`}>3</button>
              </div>
          </div>
        </div>
    )
}

export default Genres
