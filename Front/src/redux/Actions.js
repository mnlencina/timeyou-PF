import axios from "axios";
import Swal from 'sweetalert2';
import {
  GET_PRODUCTS,
  GET_PRODUCTS_DETAIL,
  RESET_DETAIL,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  SEARCH_PRODUCT_REQUEST,
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAILURE,
  FILTERS,
  GET_BRANDS,
  GET_STYLES,
  GET_STRAPS,
  GET_COLORS,
  GET_FUNCTIONS,
  UPDATE_SELECTED_CATEGORIES,
  TOTAL_PRICE,
  UPDATE_PRICE,
  ALL_BRANDS,
  ALL_STYLES,
  ALL_COLORS,
  ALL_STRAPS,
  ALL_FUNCTIONS,
  POST_WATCH,
  CREATE_USER,
  LOGIN_USER,
  GET_WATCHES_BY_BRAND,
  LOGOUT_USER,
  LOGIN_GOOGLE,
  UPDATE_CART,
  SET_CART,
} from "./actionTypes";

import { searchClient } from "../settings_algolia/settingsAlgolia";
import { BsDisplayport } from "react-icons/bs";

//fetch de productos

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
//fetch de un producto segun su modelo
export function addModel(id) {
  const endpoint = `http://localhost:3001/watches/${id}`;
  return async function (dispatch) {
    try {
      let { data } = await axios(endpoint);
      console.log(data);
      dispatch({
        type: GET_PRODUCTS_DETAIL,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
//update Detail
export function resetDetail() {
  return {
    type: RESET_DETAIL,
  };
}

//funciones del carrito
/* Cambio realizado */
export const setCart = (cartData) => ({
  type: SET_CART,
  payload: cartData,
});
/* ------ */
export const updateCart = () => ({
  type: UPDATE_CART,
});

export const addToCart = (watchBuy, cant) => ({
  type: ADD_TO_CART,
  payload: {
            ...watchBuy,
            quantity: cant
            }
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
//Price
export const totalPrice = (payload) => ({
  type: TOTAL_PRICE,
  payload,
});
export const updatePrice = () => ({
  type: UPDATE_PRICE,
});
//Searchbar

export const searchProductRequest = () => ({
  type: SEARCH_PRODUCT_REQUEST,
});

export const searchProduct = (searchTerms) => async (dispatch) => {
  dispatch({ type: SEARCH_PRODUCT_REQUEST });

  try {
    const algoliaIndex = searchClient.initIndex("TimeYou2"); // Reemplaza 'timeyou_PF' con el nombre de tu índice en Algolia
    const searchResults = await algoliaIndex.search(searchTerms);

   // console.log("Algolia search results:", searchResults.hits);
    
      // Si se encontraron resultados, envía los hits al estado como antes
      dispatch({
        type: SEARCH_PRODUCT_SUCCESS,
        payload: searchResults.hits,
      });
    
  } catch (error) {
   // console.error("Algolia search error:", error);
    dispatch(searchProductFailure("Error al realizar la búsqueda."));
  }
};

export const searchProductFailure = (error) => ({
  type: SEARCH_PRODUCT_FAILURE,
  payload: error,
});

// Filters
export const applyFilters = (filteredWatches) => async (dispatch) => {
  dispatch({ 
    type: FILTERS,
    payload: filteredWatches
});
}

export const getBrands = () => {
  const endpoint = `http://localhost:3001/brands`;
  return async function (dispatch) {
    try {
      let { data } = await axios(endpoint);
           dispatch({
        type: GET_BRANDS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const getColor = () => {
  const endpoint = `http://localhost:3001/colors`;
  return async function (dispatch) {
    try {
      let { data } = await axios(endpoint);
      dispatch({
        type: GET_COLORS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const getStraps = () => {
  const endpoint = `http://localhost:3001/straps`;
  return async function (dispatch) {
    try {
      let { data } = await axios(endpoint);
        dispatch({
        type: GET_STRAPS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const getStyles= () => {
  const endpoint = `http://localhost:3001/styles`;
  return async function (dispatch) {
    try {
      let { data } = await axios(endpoint);
       dispatch({
        type: GET_STYLES,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const getFunctions= () => {
  const endpoint = `http://localhost:3001/functions`;
  return async function (dispatch) {
    try {
      let { data } = await axios(endpoint);
       dispatch({
        type: GET_FUNCTIONS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const updateSelectedCategories = (selectedCategories) => ({
  type: UPDATE_SELECTED_CATEGORIES,
  payload: selectedCategories,
});

//TRAER TODOS LAS PROPIEDADES DE RELOJES

export function allPropWatches(prop) {
  const endpoint = `http://localhost:3001/${prop}`;
  return async function (dispatch) {
    try {
      let { data } = await axios(endpoint);
      prop === "brands" &&
        dispatch({
          type: ALL_BRANDS,
          payload: data,
        });
      prop === "styles" &&
        dispatch({
          type: ALL_STYLES,
          payload: data,
        });
      prop === "colors" &&
        dispatch({
          type: ALL_COLORS,
          payload: data,
        });
      prop === "straps" &&
        dispatch({
          type: ALL_STRAPS,
          payload: data,
        });
      prop === "functions" &&
        dispatch({
          type: ALL_FUNCTIONS,
          payload: data,
        });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postWatch(watch) {
  const endpoint = `http://localhost:3001/watches`;
  return async function (dispatch) {
    try {
      let newWatch = await axios.post(endpoint, watch);
      console.log(newWatch.data);
      dispatch({
        type: POST_WATCH,
        payload: newWatch,
      });
      Swal.fire({
        icon: 'success',
        title: 'Carga del reloj exitosa.',
        showConfirmButton: false,
        timer: 1500
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: `Verifique los datos", ${error}`,
        showConfirmButton: false,
        timer: 1500
      })
    }
  };
}

//funcion de registro

export const createUser = (user) => async (dispatch) => {
  const endpoint = "http://localhost:3001/users/register";
  try {
    const newUser = await axios.post(endpoint, user);

    dispatch({
      type: CREATE_USER,
      payload: newUser,
    });
    Swal.fire({
      icon: 'success',
      title: 'Usuario creado con exito',
      showConfirmButton: false,
      timer: 1500
    })
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'No pudo crearse el usuario',
      showConfirmButton: false,
      timer: 1500
    })
  }
};

export const loginUser = (user) => async (dispatch) => {
  const endpoint = "http://localhost:3001/users/login";
  try {
    const { data } = await axios.post(endpoint, user, {
      headers: { "Content-Type": "application/json" },
    });
    console.log(data);
    dispatch({
      type: LOGIN_USER,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const loginGoogle = (user) => ({
  type: LOGIN_GOOGLE,
  payload: user,
});

// Peticiones para cada una de las Brand en el Navbar //
export const getWatchesByBrand = (brand) => async (dispatch) => {
  const URL = `http://localhost:3001/brands/${brand}`;
  try {
    let { data } = await axios.get(URL);
   // console.log("data.Watches", data.Watches);
    dispatch({
      type: GET_WATCHES_BY_BRAND,
      payload: data.Watches,
    });
    //console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const logOut = () => {
  return {
    type: LOGOUT_USER,
  };
};
