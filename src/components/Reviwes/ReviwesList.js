import PropTypes from 'prop-types';
import styled from 'styled-components';

const ReviewsWrapper = styled.ul`
  padding: 15px;
`;

const Item = styled.li`
  margin-bottom: 50px;
`;

const ItemTitle = styled.h3`
  font-weight: 500;
  color: #e38282;
  span {
    color: #707070;
    font-weight: 400;
    margin-right: 10px;
  }
`;

const ItemSpan = styled.p`
  margin-bottom: 30px;
  color: #fff;
  font-weight: 300;
  letter-spacing: 1.2;
  text-align: justify;

  span {
    font-weight: 400;
    display: block;
    font-size: 19px;
    color: #707070;
    padding-bottom: 10px;
  }
`;

const ReviewsList = ({ reviews }) => {
  return (
    <>
      <ReviewsWrapper>
        {reviews.map(review => (
          <Item key={review.id}>
            <ItemTitle>
              <span>Author:</span> {review.author}
            </ItemTitle>

            <ItemSpan>
              <span>Review: </span>
              {review.content}
            </ItemSpan>
          </Item>
        ))}
      </ReviewsWrapper>
    </>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;
