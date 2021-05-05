import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {fetchUrl_search} from '../helpers/requests'
import {images_base_link_search_result} from '../helpers/requests'
import {Link} from 'react-router-dom'
import LazyLoad from 'react-lazyload';
import placeholder from '../images/placeholder.png'
function Nav() {

    const [inputHolder,setIputHolder]=useState('')
    const [serchArray,setSearchArray]=useState([])
   

    const handleChange=(e)=>{
        const textSent=e.target.value
        setIputHolder(textSent)
        if(textSent !== ''){
            const fetchSearch=async()=>{
                let fetchSearchData=await axios.get(fetchUrl_search(textSent))
                if(fetchSearchData.data.results.length !==0 ){
                    setSearchArray(fetchSearchData.data.results)
                }
                // console.log(fetchSearch.data)
            }
            fetchSearch()
        }else{
            setSearchArray([])
        }
    }
    const handleItemClick=()=>{
        setSearchArray([])
        setIputHolder('')
    }
    return (
        <div className="my__nav">
            <div className="nav__container">
                <Link to="/">
                  <h3 className="home">Movies</h3>
                </Link>
                <div className="form__container">
                    <div className="input_container" >
                        <input value={inputHolder} onChange={handleChange} placeholder="Search Here" className="my__input" type="text"/>
                    </div>
                    <div className="results__container">
                        {
                            serchArray.map(serchItem=>(
                                
                                    <Link to={`/moviePage/${serchItem.id}`} style={{textDecoration:'none'}}>
                                        <div onClick={handleItemClick} key={serchItem.id}  className="result__item">
                                            <div className="result_img">
                                              <LazyLoad overflow={true}>
                                                <img src={`${images_base_link_search_result}${serchItem.poster_path}`} onError={(e)=>{e.target.onerror = null; e.target.src=placeholder}} alt="" />
                                              </LazyLoad>
                                            </div>
                                            <div className="result_name">
                                                {serchItem.original_title}
                                            </div>
                                        </div>
                                    </Link>
                                
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
