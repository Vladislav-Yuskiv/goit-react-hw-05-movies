import React, { useState , useEffect } from 'react';
import { useLocation ,useHistory} from 'react-router-dom';
import { fetchMovie } from '../../service/fetch-movies';
import FilmList from '../../Components/FilmList';
import s from './MoviesPage.module.css';
function MoviesPage() {
    const [value, setValue] = useState('');
    const [searchFilm, setSearchFilm] = useState([]);
    const history = useHistory();
    const location = useLocation();

    const onBtnSumbit = (e) => {
        e.preventDefault();
        if (value.trim() === "") {
            return alert('Invalid value');
        }
       
        history.push({
            ...location,
            search: `query=${value.toLowerCase()}`
        })
        setValue('')
    }

    useEffect(() => {
        const sortFilmName = new URLSearchParams(location.search).get('query');
        if (sortFilmName) {
            fetchMovie(sortFilmName).then(films => setSearchFilm(films.results))
        }

    },[location.search])

    const changeInput = (e) => {
        setValue(e.currentTarget.value);
    }

    return (
        <>
            <form onSubmit={onBtnSumbit} className={s.form}>
                <input type="text" onChange={changeInput} value={value} className={s.input} placeholder="Search films"></input>
                <button type="submit" className={s.button}>Search</button>
            </form>

            <FilmList films={searchFilm}/>
        </>


    )
}
export default MoviesPage;