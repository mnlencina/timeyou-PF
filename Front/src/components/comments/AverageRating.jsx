import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';


const RatingWrapper = styled.div`
     margin: 0 auto;
     width: 100%;
     min-height: auto;
     padding-top: 55px;
     padding-left: 50px;
  
`;

const RatingRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
`;

const NumberColumn = styled.span`
   min-width: 30px;
  padding-right: 20px;
  position: relative;
  span {
    color: #a6a9b9;
    margin: 0;
    padding-left: 20px;
    padding-right: 5px;
    font-size: 1.2rem;
  }
`;

const StarIcon = styled(FaStar)`
  color: #e4e4e4;
  font-size: 20px;
`;


const BarColumn = styled.div`
  flex-basis: 200px;
  height: 10px;
  background-color: #e4e4e4;
  margin-right: 10px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    ${({ percentage }) => `
      width: ${percentage}%;
      background-color: #ffbb6a;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  }
`;  


const PercentageColumn = styled.span`
  color: #acb2b1;
  font-weight: bold;
`
;

const AverageRating = () => {
  const numbers = [2, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2];
  const percentages = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  const calculatePercentage = (arr) => {
    if (!arr.every((num) => num >= 1 && num <= 5)) {
      return null;
    }

    const totalCount = arr.length;
    const countMap = {};

    arr.forEach((num) => {
      countMap[num] = (countMap[num] || 0) + 1;
    });

    for (const num in countMap) {
      const count = countMap[num];
      percentages[num] = Math.round((count / totalCount) * 100);
    }

    return percentages;
  };

  const percentageValues = calculatePercentage(numbers);

  return (
    <RatingWrapper>
      {Object.entries(percentageValues).map(([num, percentage]) => (
        <RatingRow key={num}>
          <NumberColumn>
            <span>{num}</span>
            <StarIcon/>
          </NumberColumn>
          <BarColumn percentage={percentage} />
          <PercentageColumn>
            {percentage}%
          </PercentageColumn>
        </RatingRow>
      ))}
    </RatingWrapper>
  );
};



export default AverageRating;