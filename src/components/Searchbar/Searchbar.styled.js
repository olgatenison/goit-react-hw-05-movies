import styled from "styled-components";


export const Form = styled.form`
   display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: white;
  border-radius: 3px;
  overflow: hidden;
  border: 0.5px solid black;
  &:hover {
      border-color: black;
  }
`;

export const FormBtn = styled.button`
   display: inline-block;
  width: 80px;
  height: 50px;
  border: 0;
  cursor: pointer;
  background-color: green;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
  background-color: lightgreen;
};
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
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
 
  &::placeholder {
  font: inherit;
  font-size: 24px;
  color: lightgreen;
}
`;