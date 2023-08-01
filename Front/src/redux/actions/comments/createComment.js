import axios from 'axios';
import { CREATE_COMMENT_SUCCESS, CREATE_COMMENT_FAILURE, CREATE_COMMENT_REQUEST } from "../../actionTypes";

export const createComment = (commentBody) => async (dispatch) => {

  const URL = "http://localhost:3001/comment"
  try {
    dispatch({ type: CREATE_COMMENT_REQUEST })
    const response = await axios.post(URL, commentBody);

    dispatch({ type: CREATE_COMMENT_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: CREATE_COMMENT_FAILURE, payload: error.message });
  }
};