import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h1`
  font-weight: 400;
  color: #e38282;
  margin-bottom: 20px;
  padding-left: 20px;
`;

const PageTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
