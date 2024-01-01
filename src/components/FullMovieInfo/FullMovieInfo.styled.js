import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
 display: flex;
  margin-bottom: 20px;
`;

export const ListItem = styled.li`
 &:first-child {
  margin-right: 15px;
 }
 `;
 
export const LinkTo = styled(Link)`
  font-size: 20px;
  text-decoration:none;
  text-transform: uppercase;
  color: #04139b;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
  color: #4755d3;
  }
`;