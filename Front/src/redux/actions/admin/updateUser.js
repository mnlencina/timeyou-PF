import axios from "axios";
import { UPDATE_USER } from "../../actionTypes";
import Swal from 'sweetalert2';

export function updateUser(id,upUser) {
    const endpoint = `http://localhost:3001/admin/updateUser/${id}`;
    return async function (dispatch) {
      try {
        let update = await axios.put(endpoint, upUser);
        console.log(update);
        dispatch({
          type: UPDATE_USER,
          payload: update,
        });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: `Verifique los datos, ${error}`,
          showConfirmButton: false,
          timer: 1500
        })

      }
    };
  }