import { useState } from 'react';
import styled from 'styled-components';
import CommentItem from './CommentItem';
import { FaEllipsisH } from 'react-icons/fa';

const CommentListContainer = styled.div`
  max-width: 900px;
  margin: 2px auto;
  padding: 2px auto;
   min-height: auto;
   margin-bottom: 50px; 
`;

const Title = styled.h2`
  text-align: left;
  margin-bottom: 20px;
`;

const ShowMoreButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 800;
  color: #3c3739;
  border: none;
  display: block;
`;

const FaEllipsisHWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 8px;
`;




const CommentsList = () => {
  const comments = [
    { id: 1, calification: 3, comment: 'Bueno, pero podría mejorar. Bueno, pero podría mejorar.', userId: 10, userName: 'Juan' },
    { id: 2, calification: 4, comment: 'Bueno.', userId: 11, userName: 'Lucia' },
    { id: 3, calification: 4, comment: 'Bueno, pero podría mejorar.Bueno, pero podría mejorar.Bueno, pero podría mejorar.Bueno, pero podría mejorar.', userId: 12, userName: 'Gabriela' },
    { id: 4, calification: 2, comment: 'No me gustó.', userId: 13, userName: 'Pepe' },
    { id: 5, calification: 5, comment: '¡Gran producto!', userId: 14, userName: 'Maria' },
    { id: 6, calification: 4, comment: 'Bueno, pero podría mejorar.', userId: 12, userName: 'Gabriela' },
    { id: 7, calification: 2, comment: 'No me gustó.', userId: 15, userName: 'Pepe' },
    { id: 8, calification: 5, comment: '¡Gran producto!', userId: 16, userName: 'Maria' },
    { id: 6, calification: 4, comment: 'Bueno, pero podría mejorar.', userId: 12, userName: 'Gabriela' },
    { id: 7, calification: 2, comment: 'No me gustó.', userId: 15, userName: 'Pepe' },
    { id: 8, calification: 5, comment: '¡Gran producto!', userId: 16, userName: 'Maria' },
    { id: 6, calification: 4, comment: 'Bueno, pero podría mejorar.', userId: 12, userName: 'Gabriela' },
    { id: 7, calification: 2, comment: 'No me gustó.', userId: 15, userName: 'Pepe' },
    { id: 8, calification: 5, comment: '¡Gran producto!', userId: 16, userName: 'Maria' }
  ];

  const [visibleComments, setVisibleComments] = useState(3);
  const [showAllComments, setShowAllComments] = useState(false);

  const allCommentsShown = visibleComments >= comments.length;

  const handleShowMore = () => {
    setVisibleComments((prevVisibleComments) => prevVisibleComments + 5);
  };

  const handleShowLess = () => {
    setVisibleComments(3);
    setShowAllComments(showAllComments);
  }

  return (
    <CommentListContainer>
      <Title>Comentarios</Title>
      {comments.slice(0, visibleComments).map((comment) => (
        <>
          <CommentItem
            key={comment.id}
            calification={comment.calification}
            comment={comment.comment}
            userName={comment.userName}
            onToggleExpand={handleShowMore}
          />
          <FaEllipsisHWrapper>
            <FaEllipsisH style={{ color: "#e4e4e4" }} />
          </FaEllipsisHWrapper>
        </>
      ))}
      {comments.length > 3 && visibleComments < comments.length && !allCommentsShown && (
        <ShowMoreButton onClick={handleShowMore}>Ver más...</ShowMoreButton>
      )}
      {comments.length > 3 && allCommentsShown && (
        <ShowMoreButton onClick={handleShowLess}>Ocultar...</ShowMoreButton>
      )}
    </CommentListContainer>
  );
};


export default CommentsList;
