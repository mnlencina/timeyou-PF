import axios from "axios";
import { ALL_USERS } from "../../actionTypes";

export function addUsers () {
    const endpoint = `http://localhost:3001/admin/allUsers`;
    return async function (dispatch) {
      try {
        let { data } = await axios(endpoint);
        console.log(data);
        dispatch({
          type: ALL_USERS,
          payload: data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }