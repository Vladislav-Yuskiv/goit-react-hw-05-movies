import { fetchMovieReview } from '../../service/fetch-movies';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './Review.module.css';
function Review({ filmId }) {
    const [reviews, setReview] = useState([]);
    useEffect(() => {
        fetchMovieReview(filmId).then(reviews => setReview(reviews.results))
    } ,[filmId])
    return (
        <ul className={s.list}>
                {reviews.length > 0 ?
                    reviews.map((review) => (
                    <li key={review.id} className={s.item}>
                        <h2 className={s.author}>
                        Author:<span className={s.span}>{review.author}</span>
                        </h2>
                        <p className={s.content}>{review.content}</p>
                    </li>
                    ))
                  : <p className={s.sorry}>We don`t have any reviews for this film</p>
                }
            
            </ul>
    )
}
Review.propTypes = {
    filmId : PropTypes.string
}

export default Review