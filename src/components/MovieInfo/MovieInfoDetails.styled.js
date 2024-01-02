import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const ImgThumb = styled.div`
  width: 300px;
  margin-right: 40px;
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  color: #e38282;
  font-size: 32px;
`;

export const Score = styled.p`
  margin-bottom: 30px;
  color: #fff;
  font-weight: 300;
  letter-spacing: 1.2;
`;

export const LesTitle = styled.h3`
  margin-bottom: 10px;
`;

export const Descrip = styled.p`
  margin-bottom: 40px;
  color: #fff;
  font-weight: 300;
  letter-spacing: 1.2;
  max-width: 600px;
`;

export const GenderList = styled.ul`
  display: flex;
`;
export const GenderItem = styled.li`
  color: #fff;
  font-weight: 300;
  letter-spacing: 1.2;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
