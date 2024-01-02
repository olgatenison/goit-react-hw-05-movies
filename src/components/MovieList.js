import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ol`
  margin-bottom: 10px;
`;

const Item = styled.li`
  padding-left: 20px;
  font-size: 16px;
  color: #fff;
  font-weight: 300;
  letter-spacing: 1.2;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  &:hover,
  &:focus,
  &.active {
    color: #e38282;
  }
`;

const LinkTo = styled(Link)`
  font-size: 16px;
  color: #fff;
  font-weight: 300;
  letter-spacing: 1.2;

  &:visited {
    color: #707070;
  }

  &:hover,
  &:focus,
  &.active {
    color: #e38282;
  }
`;

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => (
        <Item key={movie.id}>
          <LinkTo to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </LinkTo>
        </Item>
      ))}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
