import React , { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from "../../redux/actions/comments/createComment.js";
import { getLoggedUserId } from '../../redux/actions/comments/getLoggedUserId.js';



import Swal from 'sweetalert2';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';


const Form = styled.form`
  width: 400px;
  margin: 27px;
  padding: 0;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 80px;
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
  padding: 10px 40px;
  background-color: #f46b11;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 30px;
`;
const Title = styled.h3`
text-align: left;
margin-bottom: 50px;
margin-left: 2px;
text-transform: uppercase;
font-size: 27px;
padding-top: 2px;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const StarsContainer = styled.div`
  display: inline-block;
  font-size: 30px;
  color: #ffbb6a;
  cursor: pointer;
`;

const Star = styled(FaStar)`
  transition: color 0.2s;
  margin: 10px;
  &.empty {
    color: #e4e4e4;
  }
  &.filled {
    color: #ffbb6a;
  }
`;

const RatingText = styled.span`
  margin-left: 8px;
  color: #7d7576;
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

const ErrorMessage = styled.div`
  color: #f46b11;
  font-size: 15px;
  margin-left: 10px;
  margin-bottom: 10px;
  padding:0;
  margin-top: 0;
`

const CreateComment = ({ watchId }) => {

  const comments = useSelector((state) => state.comments) || []; 

  const dispatch = useDispatch();

  const [commentText, setCommentText] = useState("");
  const [calification, setCalification] = useState("");
  const [userName, setUserName] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);

  const [userNameError, setUserNameError] = useState(false);
  const [commentTextError, setCommentTextError] = useState(false);
  const [calificationError, setCalificationError] = useState(false);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [temporaryCommentBody, setTemporaryCommentBody] = useState(null);


  
const email = useSelector((state)=> state.user.email)
const userId = useSelector((state)=>state.userLoggedId)
//console.log("USER LOGGED email" , email, "USER ID", userId)

const filterWatchIdComments = comments.filter(watchIdComment => watchIdComment.WatchId == watchId)

const filterUserIdFromWatch = filterWatchIdComments.filter(userIdComment => userIdComment.UserId == userId)


useEffect(() => {
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
    setUserNameError(false);
    setCommentTextError(false);
    setCalificationError(false);

    if (!watchId) {
      console.error('Error: watchId no válidos');
      return; 
    }
    if(!userId) {
      console.error('Error: userId no válidos');
    }
    if (!userName) {
      console.error('Error: debe ingresar un nombre de usuario');
      setUserNameError(true);
      return;
    }
    if (!calification) {
      console.error('Error: debe seleccionar una puntuación');
      setCalificationError(true);
      return;
    }
    if (!commentText.trim()) {
      console.error('Error: debe ingresar un comentario');
      setCommentTextError(true);
      return;
    }

    const commentBody = {
      userId,
      watchId,
      commentText: commentText,
      calification: parseInt(calification),
      userName, 
    };
 
    setShowConfirmationDialog(true);
    setTemporaryCommentBody(commentBody);

    if (commentText.trim() !== '') {
     if(filterUserIdFromWatch.length > 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Ups! Parece que ya realizaste un comentario sobre este producto.',
        showConfirmButton: false,
        timer: 1500
      });
        setShowSuccessMessage(false);
        setCommentText('');
        setCalification('');
        setUserName('');
        setSelectedRating(0); 
        setHoveredRating(0);
        setShowConfirmationDialog(false);
      } else {
        setShowConfirmationDialog(true);
        dispatch(createComment(commentBody));
        Swal.fire({
          icon: 'success',
          text: 'Mensaje enviado con éxito',
          showConfirmButton: false,
          timer: 1500
        });
        setShowSuccessMessage(true);
        setCommentText('');
        setCalification('');
        setUserName('');
        setSelectedRating(0); 
        setHoveredRating(0); 
      }    
    }
  };

  return (
    <Form onSubmit={handleSubmit} onClick={handleFormClick}>
       <Title>Califica este producto:</Title>
      <div>
        <Label htmlFor="userName">Tu nombre:</Label>
        <Input
          type="text"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        {userNameError && <ErrorMessage>Ingrese un nombre de usuario</ErrorMessage>}
      </div>
      <div>
        <Label>Puntuación:</Label>
        <RatingContainer>
        <StarsContainer onMouseLeave={handleRatingHoverExit}>
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
          {calificationError && <ErrorMessage>Seleccione una puntuación</ErrorMessage>}
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
        />
         {commentTextError && <ErrorMessage>Ingrese un comentario</ErrorMessage>}
      </div>
      {showSuccessMessage && <SuccessMessage>Mensaje enviado con éxito!</SuccessMessage>}
      <Button type="submit">Enviar</Button>
    </Form>
  );
}



export default CreateComment