import PropTypes from 'prop-types';
import { DataList, ListItem, ListImg, ListInfo } from './CastList.styled';

const CastList = ({ cast }) => {
  return (
    <>
      <DataList>
        {cast.map(actor => (
          <ListItem key={actor.id}>
            <ListImg
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt="NO FOTO"
            />
            <ListInfo>
              <p>
                Actor: <span> {actor.name}</span>
              </p>

              <p>
                Character:<span> {actor.character}</span>
              </p>
            </ListInfo>
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
