import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from "styled-components";

const List = styled.ol`
  margin-bottom: 10px;
`;
const Item = styled.li`
  margin-bottom: 10px;
   &:not(:last-child) {
  margin-bottom: 5px;
}
`;
const LinkTo = styled(Link)`
  font-size: 18px;
  color: black;
  &:visited {
    color: lightgreen;
  }
`;

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => (
        <Item key={movie.id} >
          <LinkTo
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
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