import React , { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from "../../redux/actions/comments/createComment.js";
import { getLoggedUserId } from '../../redux/actions/comments/getLoggedUserId.js';



import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const Form = styled.form`
  width: 400px;
  margin: 0;
  padding: 0;
  background-color: #fff;
  border-radius: 8px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 0.5px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 8px;
  margin-bottom: 16px;
  border: 0.5px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #f46b11;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const Title = styled.h2`
  text-align: left;
  margin-bottom: 20px;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const StarsContainer = styled.div`
  display: inline-block;
  font-size: 24px;
  color: #ffbb6a;
  cursor: pointer;
`;

const Star = styled(FaStar)`
  transition: color 0.2s;
  &.empty {
    color: #e4e4e4;
  }
  &.filled {
    color: #ffbb6a;
  }
`;

const RatingText = styled.span`
  margin-left: 8px;
  font-weight: bold;
  font-size: 16px;
`;

const SuccessMessage = styled.div`
  color: #4caf50;
  padding: 10px;
  text-align: center;
  font-size: 16px;
  border-radius: 5px;
  margin-bottom: 10px;
  border: none;
`;




const CreateComment = ({ watchId }) => {
  
  console.log("watchId desde el componente de CreateComment", watchId)
  const dispatch = useDispatch();

  const [commentText, setCommentText] = useState("");
  const [calification, setCalification] = useState("");
  const [userName, setUserName] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);

  
const email = useSelector((state)=> state.user.email)
const userId = useSelector((state)=>state.userLoggedId)
//console.log("USER LOGGED email" , email, "USER ID", userId)

useEffect(() => {
  console.log("Antes de llamar a la acción getLoggedUserId");
  dispatch(getLoggedUserId(email))
}, [dispatch, email]);
 
  const handleRatingClick = (rating) => {
    setCalification(rating);
    setSelectedRating(rating);
  };

  const handleRatingHover = (rating) => {
    setHoveredRating(rating);
  };

  const handleRatingHoverExit = () => {
    setHoveredRating(0);
  };

  const handleFormClick = () => {
    setShowSuccessMessage(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!watchId) {
      console.error('Error: watchId no válidos');
      return; 
    }
    if(!userId) {
      console.error('Error: userId no válidos');
    }
    if (!userName) {
      console.error('Error: debe ingresar un nombre de usuario');
      return;
    }
   
    const commentBody = {
      userId,
      watchId,
      commentText: commentText,
      calification: parseInt(calification),
      userName, 
    };

    if (commentText.trim() !== '') {
      dispatch(createComment(commentBody));
      setShowSuccessMessage(true);
      setCommentText('');
      setCalification('');
      setUserName('');
      setSelectedRating(0); 
      setHoveredRating(0);
      
    }
  };

  return (
    <Form onSubmit={handleSubmit} onClick={handleFormClick}>
       <Title>Danos tu opinión:</Title>
      <div>
        <Label htmlFor="userName">Tu nombre:</Label>
        <Input
          type="text"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label>Puntuación:</Label>
        <RatingContainer>
        <StarsContainer onMouseLeave={handleRatingHoverExit} required>
          {[1, 2, 3, 4, 5].map((rating) => (
            <React.Fragment key={rating}>
            <Star
              className={(rating <= (hoveredRating || calification)) ? "filled" : "empty"}
              onClick={() => handleRatingClick(rating)}
              onMouseEnter={() => handleRatingHover(rating)}
            /> 
            </React.Fragment>
          ))}
        </StarsContainer>
          <RatingText>{`(${selectedRating})`}</RatingText> 
        </RatingContainer>
      </div>
      <div>
      </div>
      <div>
        <Label htmlFor="commenttext">Comentarios:</Label>
        <Textarea
          id="commenttext"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          required
        />
      </div>
      {showSuccessMessage && <SuccessMessage>Mensaje enviado con éxito!</SuccessMessage>}
      <Button type="submit">Enviar</Button>
    </Form>
  );
}



export default CreateComment