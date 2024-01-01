import PropTypes from 'prop-types';
import styled from "styled-components";


const Item= styled.li`
 margin-bottom: 20px;

`;
const ItemSpan= styled.span`
font-weight: 400;
  font-size: 19px;
`;
const ReviewsList = ({ reviews }) => {
  return (
    <>
      <ul>
        {reviews.map(review => (
          <Item key={review.id}>
            <h3>Author: {review.author}</h3>
            <p>
              <ItemSpan>Review: </ItemSpan>
              {review.content}
            </p>
          </Item>
        ))}
      </ul>
    </>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;