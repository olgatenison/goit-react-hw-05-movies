import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './Navigation';
import Container from './Container';

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;

  margin-bottom: 16px;
  border-bottom: 1px #707070 solid;
`;

const Appbar = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigation />
        </Container>
      </Header>

      <Outlet />
    </>
  );
};

export default Appbar;
