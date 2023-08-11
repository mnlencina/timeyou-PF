import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCommentsByWatchId } from '../../redux/actions/comments/getCommentsByWatchId'


import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';


const RatingWrapper = styled.div`
border-collapse: collapse;
  width: 100%;
     margin: 0 auto;
     min-height: 0 auto;
     padding-top: 120px;
     padding-left: 50px;
     display: flex;
    flex-direction: column;
    margin-bottom: 80px;
    margin-right: 30px;
`;

const RatingRow = styled.div`
text-align: left;
border: none;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
  flex-wrap: nowrap;
  ${({ itemWidth }) => `
    width: ${itemWidth}px;
  `}
`;

const NumberColumn = styled.span`
width: 10%;
   min-width: 30px;
  padding-right: 20px;
  padding-left: 3px;
   display: flex;
  align-items: center;
  color: #7d7576;
  span {
    color: #a6a9b9;
    margin: 0;
    padding-left: 20px;
    font-size: 1.2rem;
  }
`;

const NumberColumn2 = styled.span`
width: 10%;
   min-width: 30px;
  padding-right: 20px;
  padding-left: 3px;
   display: flex;
  align-items: center;
  span {
    color: #7d7576;
    margin: 0;
    padding-left: 2px;
    font-size: 0.9rem;
  }
`;

const StarIcon = styled(FaStar)`
  color: #e4e4e4;
  font-size: 20px;
  margin-right: 5px;
`;


const BarColumn = styled.div`
width: 50%;
  flex-basis: 250px;
  height: 12px;
  background-color: #e4e4e4;
  margin-right: 10px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%; 
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
width: 20%;
  color: #acb2b1;
  font-weight: bold;
  margin: 4px auto;
`
  ;

const AverageRating = ({watchId}) => {


  const comments = useSelector((state) => state.comments);
  const numbers = comments ? comments.map((num) => num.calification) : [];
  const percentages = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  const total1 = comments ? comments.filter((num) => num.calification == 1) : [];
  const total2 = comments ? comments.filter((num) => num.calification == 2) : [];
  const total3 = comments ? comments.filter((num) => num.calification == 3) : [];
  const total4 = comments ? comments.filter((num) => num.calification == 4) : [];
  const total5 = comments ? comments.filter((num) => num.calification == 5) : [];

  console.log("totales",total1,total2,total3,total4,total5)

 // console.log("NUMBERS DESDE AVERAGE RATING", numbers)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsByWatchId(watchId));
  }, [dispatch, watchId]);

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
        <RatingRow key={num} >
          <NumberColumn>
            <span>{num}</span>
          </NumberColumn>
          <StarIcon />
          <BarColumn percentage={percentage} />
          <PercentageColumn>
            {percentage}% 
          </PercentageColumn>
          <NumberColumn2>
            <span>
            ({(num == 1 && total1.length > 0) ? total1.length : ""}
          {num == 2 && total2.length > 0 && total2.length}
          {num == 3 && total3.length > 0 && total3.length}
          {num == 4 && total4.length > 0 && total4.length}
          {num == 5 && total5.length > 0 && total5.length})
            </span>
          </NumberColumn2>
        </RatingRow>
      ))}
    </RatingWrapper>
  );
};



export default AverageRating;