const API_KEY = '0d8ab7cff2692bd014bb25fca16d7158';

export const requests = {
    getNetflixOriginals: `discover/tv?api_key=${API_KEY}&language=en-US&with_networks=213`,
    getTv: (type)=>{return `tv/${type}?api_key=${API_KEY}&language=en-US&page=1`},
    getMovies: (type)=>{return `movie/${type}?api_key=${API_KEY}&language=en-US&page=1`},
    getDetails: (video)=>{return `${video.platform}/${video.id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`},
    getByGenre: (platform, genreId)=>{ return `discover/${platform}?api_key=${API_KEY}&language=en-US&with_genres=${genreId}`},
    getGenreList: (platform)=>{ return `genre/${platform}/list?api_key=${API_KEY}&language=en-US`},

}



export const keywords = {
    tv: "tv",
    movie: "movie"
}