import axios from "axios";
import { ALL_BUY } from "../../actionTypes";

export function addBuys () {
    const endpoint = `http://localhost:3001/admin/allBuy`;
    return async function (dispatch) {
      try {
        let { data } = await axios(endpoint);
        console.log(data);
        dispatch({
          type: ALL_BUY,
          payload: data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }