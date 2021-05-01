import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {fetchUrl_search} from './requests'
import {images_base_link} from './requests'
import {Link} from 'react-router-dom'
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
                  <h3 className="home">tv app</h3>
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
                                            <img src={`${images_base_link}${serchItem.poster_path}`} alt="" />
                                        </div>
                                        <div className="result_name">
                                            {serchItem.name}
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
