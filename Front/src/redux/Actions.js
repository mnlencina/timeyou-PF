import axios from "axios";
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
  LOGOUT_USER
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
export function addModel (model) {
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

export function resetDetail () {
  return {
    type: RESET_DETAIL,
  };
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
  console.log("Search terms:", searchTerms);
  dispatch({ type: SEARCH_PRODUCT_REQUEST });

  try {
    const algoliaIndex = searchClient.initIndex('timeyou_PF'); // Reemplaza 'timeyou_PF' con el nombre de tu índice en Algolia
    const searchResults = await algoliaIndex.search(searchTerms);

    console.log("Algolia search results:", searchResults.hits);
    if (searchResults.hits.length === 0) {
      // Si no se encontraron coincidencias, enviar un mensaje al cliente
      dispatch({
        type: SEARCH_PRODUCT_SUCCESS,
        payload: [], // Envía un array vacío como payload para indicar que no se encontraron resultados
        message: "No se encontraron coincidencias...",
      });
    } else {
      // Si se encontraron resultados, envía los hits al estado como antes
      dispatch({
        type: SEARCH_PRODUCT_SUCCESS,
        payload: searchResults.hits,
      });
    }
  } catch (error) {
    console.error("Algolia search error:", error);
    dispatch(searchProductFailure("Error al realizar la búsqueda."));
  }
};

export const searchProductFailure = (error) => ({
  type: SEARCH_PRODUCT_FAILURE,
  payload: error,
});

// Filters
export const filtersAll = (filterBrands) => (dispatch, getState) => {
  const state = getState();
  console.log("estado:", state, "filterBrands:", filterBrands);
  const { Clocks } = state;

  const filterActive = Object.values(filterBrands).some((selected) => selected);

  // Realiza el filtrado adicional si hay categorías seleccionadas
  let filteredClocks = Clocks;
  if (filterActive) {
    filteredClocks = Clocks.filter((product) => {
      let matchesAllCategories = true;
      for (const fieldName in filterBrands) {
        const selectedValue = filterBrands[fieldName];
        if (selectedValue && product[fieldName] !== selectedValue) {
          matchesAllCategories = false;
          break;
        }
      }
      return matchesAllCategories;
    });
  }

  dispatch({
    type: FILTERS,
    payload: filteredClocks,
  });
};

// Acción para limpiar los filtros
export const clearFilters = () => (dispatch) => {
  // Aquí dispatch la acción para restablecer los filtros en el estado del Redux
  dispatch(filtersAll({}));
};

//TRAER TODOS LAS PROPIEDADES DE RELOJES

export function allPropWatches (prop) {
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

export function postWatch (watch) {
  const endpoint = `http://localhost:3001/watches/`;
  return async function (dispatch) {
    try {
      let newWatch = await axios.post(endpoint, watch);
      console.log(newWatch.data);
      dispatch({
        type: POST_WATCH,
        payload: newWatch,
      });
      alert("La Carga del WATCH fue con Exito!!");
      //location.reload();
    } catch (error) {
      alert("Verifique si el MODELO en ese COLOR ya Existe");
    }
  };
}

//funcion de registro

export const createUser = (user) => async (dispatch) => {
  const endpoint = "http://localhost:3001/users/register";
  try {
    const newUser = await axios.post(endpoint, user);
    console.log(newUser.data);
    dispatch({
      type: CREATE_USER,
      payload: newUser,
    });
  } catch (error) {
    alert("no pudo crearse el usuario");
  }
};

export const loginUser = (user) => async (dispatch) => {
  const endpoint = "http://localhost:3001/users/login";
  try {
    const { data } = await axios.post(endpoint, user,{
      header: {'Content-Type': 'application/json',}
    });
    console.log(data);
    dispatch({
      type: LOGIN_USER,
      payload: data.token,
    });
  } catch (error) {
    console.log(error);
  }
};

// Peticiones para cada una de las Brand en el Navbar //
export const getWatchesByBrand = (brand) => async (dispatch) => {
  const URL = `http://localhost:3001/brands/${brand}`;
  try {
    let { data } = await axios.get(URL);
    console.log("data.Watches", data.Watches)
    dispatch({
      type: GET_WATCHES_BY_BRAND,
      payload: data.Watches,
    });
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export const logOut = ()=>{
  return {
    type: LOGOUT_USER,
  }
}

