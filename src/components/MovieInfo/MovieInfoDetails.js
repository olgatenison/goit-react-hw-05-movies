import PropTypes from 'prop-types';
import {
  Container,
  ImgThumb,
  Title,
  Score,
  LesTitle,
  Descrip,
  GenderList,
  GenderItem,
} from "./MovieInfoDetails.styled"

const MovieInfoDetails = ({ movie }) => {
  const { title, poster_path, vote_average, overview, genres } = movie;

  return (
    <Container>
      <ImgThumb>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        />
      </ImgThumb>

      <div>
        <Title>{title}</Title>
        <Score>{`User Score: ${vote_average * 10 + '%'}`}</Score>
        <LesTitle>Overview</LesTitle>
        <Descrip>{overview}</Descrip>
        <LesTitle>Genres</LesTitle>
        <GenderList>
          {genres.map(genre => (
            <GenderItem key={genre.id}>{genre.name}</GenderItem>
          ))}
        </GenderList>
      </div>
    </Container>
  );
};

MovieInfoDetails.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieInfoDetails;