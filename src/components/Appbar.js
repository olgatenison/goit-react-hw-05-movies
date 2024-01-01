import { Outlet } from 'react-router-dom';
import styled from "styled-components";
import Navigation from './Navigation';
import Container from './Container';

const Header = styled.header`
 display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  margin-bottom: 16px;
  box-shadow: 0px 8px 15px -5px rgba(34, 60, 80, 0.6);
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