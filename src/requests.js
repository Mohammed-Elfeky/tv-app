export const Api_Key='3d345e53405a96f0c4488cd3dd27dea3'
export const base='https://api.themoviedb.org/3'
export const images_base_link='https://image.tmdb.org/t/p/original'
export const requests={
    trending:`${base}/trending/tv/day?api_key=${Api_Key}`,
    topRated:`${base}/tv/top_rated?api_key=${Api_Key}&language=en-US&page=1`,
    netflix:`${base}/discover/tv?api_key=${Api_Key}&with_networks=213`,
    action:`${base}/discover/tv?api_key=${Api_Key}&with_genres=28`,
    comedy:`${base}/discover/tv?api_key=${Api_Key}&with_genres=35`,
    horror:`${base}/discover/tv?api_key=${Api_Key}&with_genres=27`,
    romance:`${base}/discover/tv?api_key=${Api_Key}&with_genres=10749`,
    documentary:`${base}/discover/tv?api_key=${Api_Key}&with_genres=99`,
}
export const fetch__genres=(id,pageId)=>{
    return `https://api.themoviedb.org/3/discover/tv?api_key=${Api_Key}&with_genres=${id}&page=${pageId}`
}
export const trailerFetch=(id)=>{
    return `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${Api_Key}`
}
export const fetchUrl_poster=(id)=>{
    return `https://api.themoviedb.org/3/tv/${id}?api_key=${Api_Key}`
}
export const fetchUrl_similar=(id)=>{
    return `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${Api_Key}`
}
export const fetchUrl_recommendations=(id)=>{
    return `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${Api_Key}`
}
export const fetchUrl_cast=(id)=>{
    return `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${Api_Key}`
}
export const fetchUrl_search=(text)=>{
    return `https://api.themoviedb.org/3/search/tv?api_key=${Api_Key}&query=${text}&page=1`
}


