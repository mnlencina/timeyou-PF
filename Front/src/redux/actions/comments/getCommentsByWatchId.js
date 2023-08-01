import axios from 'axios';
import { GET_COMMENTS_SUCCESS, GET_COMMENTS_ERROR } from "../../actionTypes";


export const getCommentsByWatchId = (watchId) => async (dispatch) => {

  const URL = `http://localhost:3001/comment/watch/${watchId}`
  try {
    const response = await axios.get(URL);
    console.log("RESPONSE.DATA DE LA ACTION", response.data)
    dispatch({ type: GET_COMMENTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_COMMENTS_ERROR, payload: error.message });
  }
};