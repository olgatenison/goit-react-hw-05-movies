import PropTypes from 'prop-types';

import styled from 'styled-components';

const Box = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 15px;
`;

function Container({ children }) {
  return <Box>{children}</Box>;
}

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
