import { Contain } from './App.stayled';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Appbar from './components/Appbar';
import NotFoundPage from './pages/NotFoundPage';

const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviwes/Reviwes'));
const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDatailsPage'));

const App = () => {
  return (
    <Contain>
      <Suspense fallback={<p>...Loading</p>}>
        <Routes>
          <Route path="/" element={<Appbar />}>
            <Route index element={<HomePage />} />

            <Route path="movies" element={<MoviesPage />} />

            <Route path="movies/:movieID" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Contain>
  );
};

export default App;
