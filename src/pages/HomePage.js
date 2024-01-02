import { useState, useEffect } from 'react';

import PageTitle from '../components/PageTitle';
import Container from '../components/Container';
import { getDayTrandingMovies } from '../servises/api';
import MovieList from '../components/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getDayTrandingMovies().then(data => {
      setMovies(data.results);
    });
  }, []);

  return (
    <Container>
      <PageTitle title={'Trending today '} />
      {movies === null ? <p>Loading...</p> : <MovieList movies={movies} />}
    </Container>
  );
};

export default HomePage;
