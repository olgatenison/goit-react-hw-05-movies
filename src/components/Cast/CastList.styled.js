import styled from 'styled-components';

export const DataList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-top: 30px;
`;

export const ListItem = styled.li`
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 40px;
  text-align: left;
`;

export const ListImg = styled.img`
  margin: 10px auto;
  padding-bottom: 10px;
`;

export const ListInfo = styled.div`
  margin-left: 40px;
  p {
    color: #707070;
    padding-bottom: 10px;
  }
  span {
    color: #fff;
  }
`;
