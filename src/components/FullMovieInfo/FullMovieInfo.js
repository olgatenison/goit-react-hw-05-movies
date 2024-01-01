import { Outlet } from 'react-router-dom';
import {
  List,
  ListItem,
  LinkTo,
} from "./FullMovieInfo.styled"

const FullMovieInfo = () => {
  return (
    <>
      <List>
        <ListItem>
          <LinkTo to="cast" replace="true" >
            Cast
          </LinkTo>
        </ListItem>
        <ListItem>
          <LinkTo to="reviews" replace="true" >
            Reviews
          </LinkTo>
        </ListItem>
      </List>
      <hr />
      <Outlet />
    </>
  );
};

export default FullMovieInfo;