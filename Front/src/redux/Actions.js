import axios from "axios";
import {
  GET_PRODUCTS,
  GET_PRODUCTS_DETAIL, 
  RESET_DETAIL,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART
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

export function resetDetail(){
  return{
    type: RESET_DETAIL,
  }
}

//funciones del carrito

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});


export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
