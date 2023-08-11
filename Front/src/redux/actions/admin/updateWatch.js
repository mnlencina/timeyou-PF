import axios from "axios";
import { UPDATE_WATCH } from "../../actionTypes";
import Swal from 'sweetalert2';

export function updateWatch(id,upWatch) {
    const endpoint = `http://localhost:3001/admin/update-watch/${id}`;
    return async function (dispatch) {
      try {
        let update = await axios.put(endpoint, upWatch);
        console.log(update);
        dispatch({
          type: UPDATE_WATCH,
          payload: update,
        });
        Swal.fire({
          icon: 'success',
          title: 'Actualización exitosa!',
          showConfirmButton: false,
          timer: 1500
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Verifique los datos',
          showConfirmButton: false,
          timer: 1500
        })
      }
    };
  }