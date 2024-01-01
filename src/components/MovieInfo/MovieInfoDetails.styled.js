import styled from "styled-components";


export const Container= styled.div`
 display: flex;
`;

export const ImgThumb = styled.div`
 width: 300px;
  margin-right: 40px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const Score  = styled.p`
 margin-bottom: 20px;
 color: black;
`;


export const LesTitle = styled.h3`
 margin-bottom: 10px;
`;

export const Descrip = styled.p`
  margin-bottom: 40px;
  color: black;
`;

export const GenderList = styled.ul`
   display: flex;
`;
export const GenderItem = styled.li`
 color: black;
 &:not(:last-child) {
  margin-right: 10px;
  }
`;