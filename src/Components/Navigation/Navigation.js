import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
    return (
        <header className={s.header}>
            <nav className={s.nav}>
                <NavLink
                    exact
                    to="/"
                    className={s.nav_link}
                    activeClassName={s.activeLink}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/movies"
                    className={s.nav_link}
                    activeClassName={s.activeLink}
                >
                    Movies
                </NavLink>
            </nav>
        </header>
    )
}
