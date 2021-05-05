export const Api_Key='3d345e53405a96f0c4488cd3dd27dea3'
export const base='https://api.themoviedb.org/3'
export const images_base_link_trailerAndHeader='https://image.tmdb.org/t/p/original'
export const images_base_link='https://image.tmdb.org/t/p/w500'
export const images_base_link_search_result='https://image.tmdb.org/t/p/w200'
export const requests={
    trending:`${base}/trending/movie/day?api_key=${Api_Key}`,
    action:`${base}/discover/movie?api_key=${Api_Key}&with_genres=28`,
    comedy:`${base}/discover/movie?api_key=${Api_Key}&with_genres=35`,
    horror:`${base}/discover/movie?api_key=${Api_Key}&with_genres=27`,
    ScienceFiction:`${base}/discover/movie?api_key=${Api_Key}&with_genres=878`
}
export const fetch__genres=(id,pageId)=>{
    return `https://api.themoviedb.org/3/discover/movie?api_key=${Api_Key}&with_genres=${id}&page=${pageId}`
}
export const trailerFetch=(id)=>{
    return `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${Api_Key}`
}
export const fetchUrl_poster=(id)=>{
    return `https://api.themoviedb.org/3/movie/${id}?api_key=${Api_Key}`
}
export const fetchUrl_similar=(id)=>{
    return `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${Api_Key}`
}
export const fetchUrl_recommendations=(id)=>{
    return `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${Api_Key}`
}
export const fetchUrl_cast=(id)=>{
    return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Api_Key}`
}
export const fetchUrl_search=(text)=>{
    return `https://api.themoviedb.org/3/search/movie?api_key=${Api_Key}&query=${text}&page=1`
}
export const fetchUrl_actor_movies=(id)=>{
    return `https://api.themoviedb.org/3/discover/movie?api_key=${Api_Key}&with_cast=${id}`
}
export const fetchUrl_actor_info=(id)=>{
    return `https://api.themoviedb.org/3/person/${id}?api_key=${Api_Key}&language=en-US`
}

