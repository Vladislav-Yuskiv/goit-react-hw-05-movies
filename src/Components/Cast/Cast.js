import { fetchMovieCast } from '../../service/fetch-movies';
import React, { useState, useEffect } from 'react';
import s from './Cast.module.css';
import defaultPhoto from './user.png';
import PropTypes from 'prop-types';

function Cast({ filmId }) {
    const [castInfo, setCast] = useState([]);

    useEffect(() => {
        fetchMovieCast(filmId).then(castInfo => setCast(castInfo.cast) )
    } , [filmId])

    return (
    <>
        <ul className={s.list}>
            {castInfo.length > 0 && castInfo.map(cast => (
               <li key={cast.id} className={s.item}>
                    <img
                    src={ cast.profile_path ? `https://image.tmdb.org/t/p/original${cast.profile_path} `: defaultPhoto}
                    alt={cast.name}
                    width="100"
                    />
                    <h2 className={s.name}>{cast.name}</h2>
                    <p className={s.content}>
                    Character: <span className={s.span}>{cast.character}</span>
                    </p>
          </li>
            ))}
        </ul>
     </>
    )
}
Cast.propTypes = {
    filmId : PropTypes.string
}
export default Cast;