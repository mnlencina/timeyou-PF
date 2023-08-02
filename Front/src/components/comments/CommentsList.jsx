import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCommentsByWatchId } from '../../redux/actions/comments/getCommentsByWatchId'
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




const CommentsList = ({watchId}) => {
  

  const comments = useSelector((state) => state.comments) || []; 

  
  const error = useSelector((state) => state.errorComments);
  const dispatch = useDispatch();

  const [visibleComments, setVisibleComments] = useState(3);
  const [showAllComments, setShowAllComments] = useState(false);

  const allCommentsShown = visibleComments >= comments.length;


  useEffect(() => {
    dispatch(getCommentsByWatchId(watchId));
  }, [dispatch, watchId]);
  if (error) {
    console.log(error);
  }

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
      {comments.length == 0 && <h4>Todavía no existen calificaciones para este producto...</h4>}
      {comments.length > 0 && comments.slice(0, visibleComments).map((comment) => (
        <>
          <CommentItem
            key={comment.id}
            calification={comment.calification}
            comment={comment.commentText}
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