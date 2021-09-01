import { Link, useRouteMatch } from 'react-router-dom';
import s from './Film.module.css';
import PropTypes from 'prop-types';
function FilmList({ films , location}) {
    let { url } = useRouteMatch();
    if (url === '/') {
        url = '/movies';
    }

    return (
        <ul className={s.list}>
            {films.map(film => {
                return <li key={film.id} className={s.item}>
                    <Link to={
                      {
                        pathname: `${url}/${film.id}`,
                        state: { from: location },
                      }
                    }
                    className={s.link}>{film.title}</Link>
                </li>
            })}
        </ul >
    )
}

FilmList.propTypes = {
    films: PropTypes.array
}

export default FilmList;