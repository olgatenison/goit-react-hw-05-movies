import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

import PageTitle from '../components/PageTitle';
import Container from '../components/Container';
import Button from '../components/Button';

import { getMovieById } from '../servises/api';
import MovieInfoDetails from '../components/MovieInfo/MovieInfoDetails';
import FullMovieInfo from '../components/FullMovieInfo/FullMovieInfo';
// import { Title } from 'components/MovieInfo/MovieInfoDetails.styled';

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const MovieDetailsPage = () => {
  const param = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [fromLocation] = useState(() => {
    return location;
  });

  useEffect(() => {
    getMovieById(param.movieID)
      .then(resp => setMovie(resp))
      .catch(error => console.log(error));
  }, [param.movieID]);

  const returnBack = () => {
    if (fromLocation.state !== null) {
      const { pathname, search } = fromLocation.state.from;
      navigate(pathname + search ?? '/');
    } else {
      navigate('/');
    }
  };

  return (
    <Container>
      <TitleWrapper>
        <PageTitle title={'Movie Details'} />
        <Button onBackClick={returnBack} />
      </TitleWrapper>

      {movie === null ? <p>...Loading</p> : <MovieInfoDetails movie={movie} />}
      <hr />
      <FullMovieInfo />
    </Container>
  );
};

export default MovieDetailsPage;
