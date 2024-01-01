import { NavLink } from 'react-router-dom';

import styled from "styled-components";

const NavContainer= styled.nav`
 width: 1200px;
`;
 const NavLinks= styled(NavLink)`
 font-weight: 500;
  font-size: 18px;
  margin-right: 15px;
   transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: black;
   &:hover,
   &:focus,
    &.active{
    color:green;
  }
`;


const Navigation = () => {
  return (
    <NavContainer>
      <NavLinks to="/">
        Home
      </NavLinks>
      <NavLinks to="movies">
        Movies
      </NavLinks>
    </NavContainer>
  );
};

export default Navigation;