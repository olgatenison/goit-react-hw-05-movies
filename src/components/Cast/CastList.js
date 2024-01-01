import PropTypes from 'prop-types';
// import s from './CastList.module.css';
import {
  DataList,
  ListItem,
  ListImg,
} from "./CastList.styled";

const CastList = ({ cast }) => {
  return (
    <>
      <DataList>
        {cast.map(actor => (
          <ListItem key={actor.id}>
            <span>Actor: {actor.name}</span>
            <ListImg
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt="NO FOTO"
            />
            <span>Character: {actor.character}</span>
          </ListItem>
        ))}
      </DataList>
    </>
  );
};

CastList.propTypes = {
  cast: PropTypes.array.isRequired,
};

export default CastList;