import Navigation from "./Components/Navigation";
import { lazy, Suspense } from "react";
import {Switch, Route, Redirect} from 'react-router-dom';

const Homepage = lazy(() => import('./views/HomePage'));  /* webpackChunkName: "Homepage" */
const MoviesPage = lazy(() => import('./views/MoviesPage'));  /* webpackChunkName: "MoviesPage" */
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage'));  /* webpackChunkName: "MovieDetailsPage" */

function App() {
  return (
    <>
      <Navigation/>
     <Suspense  fallback={<h1>Loading.....</h1>}>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:filmId">
            <MovieDetailsPage />
          </Route>
          <Redirect to="/" />
        </Switch>
        </Suspense>
    </>
  );
}

export default App;
