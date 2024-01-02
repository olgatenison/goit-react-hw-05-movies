import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  margin-bottom: 20px;
`;

export const ListItem = styled.li`
  margin-top: 12px;
`;

export const LinkTo = styled(Link)`
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
