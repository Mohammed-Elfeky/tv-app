import {images_base_link} from '../../helpers/requests'
import axios from 'axios'
import { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import {fetch__genres} from '../../helpers/requests'
import spinner from '../../images/spinner.gif'
import LazyLoad from 'react-lazyload';
function Genres({match}) {
    
    const id=match.params.genreId
    const [genresPhotos,setGenresPhotos]=useState([])
    const [pageId,setPageId]=useState([])

    useEffect(()=>{

        //scroll to top
        window.scrollTo(0, 0)
        
        // making an array of loading gifs and setting it to the state before fetching the data
        
            let arr=[];
            for(let i=1;i<=20;i++){
                arr.push({id:1,src:spinner})
            }
            setGenresPhotos(arr);
       

        // fetching the data and setting to state 
        const getGenres=async()=>{
            let genres=await axios.get(fetch__genres(id,pageId))
            let imagesArray=genres.data.results
            imagesArray=imagesArray.map(ele=>{
                return{
                    id:ele.id,
                    src:`${images_base_link}${ele.poster_path}`
                }
            })

            setGenresPhotos(imagesArray)
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
                                
                                    
                                    <LazyLoad>
                                      <img src={genresPhoto.src} alt=""/>
                                    </LazyLoad>
                                
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
