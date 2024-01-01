import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getMoviesByQuery } from '../servises/api';

import Container from '../components/Container';
import Searchbar from '../components/Searchbar/Searshbar';
import MovieList from '../components/MovieList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const query = new URLSearchParams(location.search).get('query') ?? '';

  //при сабмите формы поиска
  const HandleSubmit = request => {
    navigation({ ...location, search: `query=${request}` });
  };
  //при изменении запроса в форме поиска фильмов
  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    getMoviesByQuery(query).then(resp => {
      setMovies(resp.results);
      setIsLoading(false);
    });
  }, [query]);

  return (
    <Container>
      <Searchbar onSubmit={HandleSubmit} />
      {isLoading ? <p>...Loading</p> : <MovieList movies={movies} />}
    </Container>
  );
};

export default MoviesPage;
