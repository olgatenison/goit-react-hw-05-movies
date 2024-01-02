import styled from 'styled-components';

export const Form = styled.form`
  display: flex;

  max-width: 700px;
  background-color: white;
  border-radius: 3px;
  overflow: hidden;
  border: 0.5px solid black;
  &:hover {
    border-color: #707070;
  }
`;

export const FormBtn = styled.button`
  display: inline-block;
  width: 80px;
  height: 50px;
  border: 0;
  cursor: pointer;
  background-color: #e38282;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #d66d6d;
  }
`;

export const SearchIcon = styled.div`
  width: 2.3em;
  height: 1.3em;
  color: #fff;
  display: inline-block;
`;

export const FormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 16px;
  border: none;
  outline: none;
  padding-left: 24px;
  padding-right: 24px;

  &::placeholder {
    font: inherit;
    font-size: 16px;
    color: #707070;
  }
`;
