  
import PropTypes from 'prop-types';
const API_KEY = '88170d9b1d48a35ab3cdc8e6a3c5a816';


export function fetchTrandMovie() {
    return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`).then(r => {
        if (r.ok) {
            return r.json()
        }
        return Promise.reject(new Error('Error 404'))
    })
}

export function fetchMovie(query) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`).then(r => {
        if (r.ok) {
            return r.json()
        }
        return Promise.reject(new Error('Error 404'))
    })
}
export function fetchMovieId(filmId) {
    return fetch(`https://api.themoviedb.org/3/movie/${filmId}?api_key=${API_KEY}`).then(r => {
        if (r.ok) {
            return r.json()
        }
        return Promise.reject(new Error('Error 404'))
    })
}

export function fetchMovieCast(filmId) {
     return fetch(`https://api.themoviedb.org/3/movie/${filmId}/credits?api_key=${API_KEY}`).then(r => {
        if (r.ok) {
            return r.json()
        }
        return Promise.reject(new Error('Error 404'))
    })
}

export function fetchMovieReview(filmId) {
     return fetch(`https://api.themoviedb.org/3/movie/${filmId}/reviews?api_key=${API_KEY}`).then(r => {
        if (r.ok) {
            return r.json()
        }
        return Promise.reject(new Error('Error 404'))
    })
}


fetchMovieId.propTypes = {
  filmId: PropTypes.string,
}

fetchMovieCast.propTypes = {
  filmId: PropTypes.string,
}

fetchMovieReview.propTypes = {
  filmId: PropTypes.string,
}

fetchMovie.propTypes = {
  query: PropTypes.string,
}