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
  SEARCH_PRODUCT_FAILURE
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


//Searchbar

export const searchProductRequest = () => ({
  type: SEARCH_PRODUCT_REQUEST,
});

export const searchProductSuccess = (searchTerms) => (dispatch, getState) => {
  console.log("Search terms:", searchTerms);

  // Agregar searchProductRequest para indicar que se ha iniciado la búsqueda
  dispatch(searchProductRequest());

  const state = getState();
  console.log(state)
  const { Clocks } = state;

  if (searchTerms.length === 0) {
    // Si no hay términos de búsqueda, devuelve todos los relojes sin filtrar
    dispatch({
      type: SEARCH_PRODUCT_SUCCESS,
      payload: [],
    });
  } else {
    // Filtra los relojes que cumplen con todas las palabras de búsqueda
    const filteredProducts = Clocks.filter((product) => {
      let foundMatch = false; // Variable para indicar si se encontró una coincidencia en algún campo anterior

      foundMatch = searchTerms.every((term) => {
        // Verifica que al menos uno de los campos contenga el término de búsqueda
        return (
          product.brandName.toLowerCase().includes(term.toLowerCase()) ||
          product.colorName.toLowerCase().includes(term.toLowerCase()) ||
          product.styleName.toLowerCase().includes(term.toLowerCase()) ||
          product.strapName.toLowerCase().includes(term.toLowerCase()) ||
          product.Functions.some((func) => {
            if (typeof func.name === "string") {
              return func.name.toLowerCase().includes(term.toLowerCase());
            }
            return false;
          })
        );
      });

      // Si no se encontró coincidencia en campos anteriores, buscamos en product.description
      if (!foundMatch) {
        return product.description
          .toLowerCase()
          .includes(searchTerms.join(" ").toLowerCase()); // Búsqueda en la descripción con todos los términos
      }

      return foundMatch; // Si encontramos coincidencia en campos anteriores, retornamos el resultado
    });
    console.log("Filtered products:", filteredProducts); 

    dispatch({
      type: SEARCH_PRODUCT_SUCCESS,
      payload: filteredProducts,
    });
  }
};

export const searchProductFailure = (error) => ({
  type: SEARCH_PRODUCT_FAILURE,
  payload: error,
});
