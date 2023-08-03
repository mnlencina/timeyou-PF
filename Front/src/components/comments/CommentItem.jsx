import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';



const StarIcon = styled(FaStar)`
  color: #ffbb6a;
  font-size: 20px !important;
`;


const EmptyStarIcon = styled(FaStar)`
  color: #e4e4e4;
  font-size: 20px !important;
`;

const RatingText = styled.span`
  color: #17181a;
  font-size: 12px;
  font-weight: bold;
  margin: 6px auto;
  padding-top: 4px;
`;

const Quote = styled.blockquote`
  margin-left: 5px;
`;

const QuoteText = styled.p`
  font-size: 0.95rem;
  margin: 5px;
  font-weight: 500;
`;

const UserInfo = styled.div`
  display:flex;
  grid-column: 2 / span 2;
  justify-content: flex-end;
  color: #acb2b1;
  font-weight: bold;
  font-size:0.9rem;
  padding-rigth: 2rem;
`;

const ReviewContainerWrapper = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

const QuoteContainer = styled.div`
  display: grid;
  grid-template-columns: 110px 20px 500px; 
  grid-template-rows: auto 1fr;
  gap: 5px;
`;

const StarRender = styled.div`
  font-size: 20px;
  margin: 6px auto;
`

const CommentItem = ({ calification, comment, userName }) => {

  // console.log("comment", comment)

  const renderStars = () => {
    const fullStars = Math.floor(calification);

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<StarIcon key={i} />);
      } else {
        stars.push(<EmptyStarIcon key={i} />);
      }
    }
    return stars;
  };

  return (
    <ReviewContainerWrapper>
      <QuoteContainer>
        <StarRender>
          {renderStars()}
        </StarRender>
        <RatingText>
          ({calification})
        </RatingText>
        <Quote>
          <QuoteText>
            <FontAwesomeIcon icon={faQuoteLeft} />
            {" "}{comment}..{" "}
            <FontAwesomeIcon icon={faQuoteRight} />
          </QuoteText>
        </Quote>
        <UserInfo>
          <p>-{userName}</p>
        </UserInfo>
      </QuoteContainer>
    </ReviewContainerWrapper>
  );
};

export default CommentItem;
