import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCommentsByWatchId } from '../../redux/actions/comments/getCommentsByWatchId'
import styled from 'styled-components';
import CommentItem from './CommentItem';
import { FaEllipsisH } from 'react-icons/fa';

const CommentListContainer = styled.div`
  max-width: 800px;
  margin: 30px auto;
  padding: 5px auto;
   min-height: auto;
   margin-bottom: 80px; 

   div{
    margin-left:7px;
   }
`;

const Title = styled.h3`
  text-align: left;
  margin-bottom: 50px;
  margin-left: 27px;
  text-transform: uppercase;
  font-size: 25px;
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
  
  console.log("WATCHID",  watchId)
  const comments = useSelector((state) => state.comments) || []; 
  console.log("COMMENTS DEL COMMENTLIST", comments)

  
  const error = useSelector((state) => state.errorComments);
  const dispatch = useDispatch();

  const [visibleComments, setVisibleComments] = useState(3);
  const [showAllComments, setShowAllComments] = useState(false);

  const allCommentsShown = visibleComments >= comments.length;


  useEffect(() => {
    dispatch(getCommentsByWatchId(watchId));
  }, [dispatch, watchId]);
  

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
      <div>
      {comments.length == 0 && <div>Todavía no existen calificaciones para este producto... </div>}
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
      </div>
    </CommentListContainer>
  );
};


export default CommentsList;