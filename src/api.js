import axios from "axios";

const api = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    params:{
        api_key: "6363d423c535019ac0a49bfc571cc2df",
        language: "en-US"
    }
})

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upComing: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: (id) => api.get(`movie/${id}`, {
        params:{
            append_to_response: "videos"
        }
    }),
    search: (searchingBy) => api.get("search/movie",{
        params:{
            query: encodeURIComponent(searchingBy)
        }
    }),
    company: (id) => api.get(`company/${id}`)

}

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    showDetail: id => api.get(`tv/${id}`, {
        params:{
            append_to_response: "videos"
        }
    }),
    search: (searchingBy) => api.get("search/tv",{
        params:{
            query: encodeURIComponent(searchingBy)
        }
    }),
    company: (id) => api.get(`company/${id}`),
    credits: (id) => api.get(`tv/${id}/credits`)
}
