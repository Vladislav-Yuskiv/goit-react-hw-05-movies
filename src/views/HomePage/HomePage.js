import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrandMovie } from '../../service/fetch-movies';
import s from './HomePage.module.css';
import FilmList from '../../Components/FilmList';

function Homepage() {

    const [trandFilms, setTrandFilm] = useState([]);
    const location = useLocation();

    useEffect(() => {
        fetchTrandMovie().then(films => setTrandFilm(films.results))
    }, [])

    return (
        <>
            <h1 className={s.title}>Top films </h1>
            <FilmList films={trandFilms} location={location} />
        </>

    )
}
export default Homepage;