import axios from "axios";
import {
  GET_PRODUCTS,
  GET_PRODUCTS_DETAIL, 
  RESET_DETAIL,
  ADD_TO_CART,
  CLEAR_CART,
  CLEAR_ONE_PRODUCT,
} from "./actionTypes";

export const getProducts = () => async (dispatch) => {
  const URL = "http://localhost:3001/watches";
  try {
    const response = await fetch(URL);
    const data = await response.json();
    dispatch({
      type: GET_PRODUCTS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export function addModel(model) {
  const endpoint = `http://localhost:3001/watches/${model}`;
  return async function (dispatch) {
    try {
      let { data } = await axios(endpoint);
      dispatch({
        type: GET_PRODUCTS_DETAIL,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

//funciones del carrito

export const addCart = (id) => ({
  type: ADD_TO_CART,
  payload: id,
});

export const clearCart = (id, all = false) => {
  if (all === true) {
    return dispatch({
      type: CLEAR_CART,
      payload: id
    });
  } else {
    return dispatch
  }
};

