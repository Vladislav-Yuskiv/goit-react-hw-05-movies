import Navigation from "./Components/Navigation";
import { lazy, Suspense } from "react";
import { Switch, Route } from 'react-router-dom';

const Homepage = lazy(() => import('./views/HomePage'));  /* webpackChunkName: "Homepage" */
const MoviesPage = lazy(() => import('./views/MoviesPage'));  /* webpackChunkName: "MoviesPage" */
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage'));  /* webpackChunkName: "MovieDetailsPage" */
const NotFoundView = lazy(() => import('./views/NotFoundView'));  /* webpackChunkName: "NotFoundView" */

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
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
        </Suspense>
    </>
  );
}

export default App;
