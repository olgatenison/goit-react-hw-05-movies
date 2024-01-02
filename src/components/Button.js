import PropTypes from 'prop-types';
import styled from 'styled-components';

const BackButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: transparent;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  //   display: block;
  margin-bottom: 20px;
  color: #fff;
  border: 1px #707070 solid;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  font-weight: 300;
  min-width: 100px;

  &:hover,
  &:focus {
    color: #e38282;
    border: 1px #e38282 solid;
  }
`;

const Button = ({ onBackClick }) => {
  return (
    <BackButton type="button" onClick={onBackClick}>
      Back
    </BackButton>
  );
};

Button.propTypes = {
  onBackClick: PropTypes.func.isRequired,
};

export default Button;
