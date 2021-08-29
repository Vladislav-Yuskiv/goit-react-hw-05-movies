import { fetchMovieId } from '../../service/fetch-movies';
import React, { useState, useEffect } from 'react';
import { useParams, useRouteMatch, NavLink, Route, useHistory } from 'react-router-dom';
import { lazy, Suspense } from "react";
import s from './MovieDetailsPage.module.css';
import defaultPhoto from './404PosterNotFound.jpg';

const Cast = lazy(() => import('../../Components/Cast'));  /* webpackChunkName: "Cast" */
const Review = lazy(() => import( '../../Components/Review'));  /* webpackChunkName: "Review" */

function MovieDetailsPage() {
    const [film, setFilm] = useState([]);
    const { filmId } = useParams();
    const { url, path } = useRouteMatch();
    const history = useHistory();

    useEffect(() => {

        fetchMovieId(filmId).then(film => setFilm(film));

    }, [filmId])

    const onBtnClick = () => {
         history.goBack()
    }

    return (
        <>
        <button className={s.goBack} type="button" onClick={onBtnClick}>Go Back</button>
        <div className={s.cart}>
            <div className={s.imageContainer}>
            <img
                src={film.backdrop_path ? `https://image.tmdb.org/t/p/original${film.backdrop_path}` : defaultPhoto}
                alt={film.title}
                width="450"
                
            />
            </div>
            <div className={s.info_container}>
                <h2 className={s.title}>{film.title}</h2>
                <p  className={s.info}>{`User Score: ${film.vote_average}`} </p>
                <h3 className={s.sub_title}>Overview</h3>
                <p  className={s.info}>{film.overview}</p>
                <h3 className={s.sub_title}> Genres</h3>
                <p  className={s.info}>{film.genres?.map((genre) => genre.name).join(', ')}</p>
            </div>
        </div>
            <ul className={s.nav_list}>
                <li className={s.item}>
                    <NavLink className={s.link} activeClassName={s.active} to={`${url}/cast`}>Cast</NavLink>
                </li>
                <li  className={s.item}>
                    <NavLink className={s.link} activeClassName={s.active} to={`${url}/reviews`}>Reviews</NavLink>
                </li>
            </ul>
             <Suspense  fallback={<h1>Loading.....</h1>}>
                <Route path={`${path}/cast`}>
                        <Cast filmId={ filmId}/>
                    </Route>
                <Route path={`${path}/reviews`}>
                        <Review  filmId={ filmId}/>
                </Route>
            </Suspense>
        </>
        
    )

}

export default MovieDetailsPage;