import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  width: 1200px;
`;
const NavLinks = styled(NavLink)`
  font-weight: 400;
  font-size: 18px;
  margin-right: 16px;
  margin-left: 16px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #fff;
  &:hover,
  &:focus,
  &.active {
    color: #e38282;
  }
`;

const Navigation = () => {
  return (
    <NavContainer>
      <NavLinks to="/">Home</NavLinks>
      <NavLinks to="movies">Movies</NavLinks>
    </NavContainer>
  );
};

export default Navigation;
