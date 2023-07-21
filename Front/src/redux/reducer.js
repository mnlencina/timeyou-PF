
import {
  GET_PRODUCTS,
  GET_PRODUCTS_DETAIL,
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
  RESET_DETAIL,
  SEARCH_PRODUCT_REQUEST,
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAILURE
} from "./actionTypes";


// Obtenemos el carrito almacenado en el localStorage (si existe)
const storedCart = localStorage.getItem("cart");

const initialState = {
  Clocks: [],
  Clock: {},
  searchClocks: [],
  searchActive: false, 
  Cart: storedCart ? JSON.parse(storedCart) : { items: [] },
  detailClock: [],
  isLoading: true,
  detailLoading: true,
};

// Función para guardar el carrito en el localStorage
const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        Clocks: payload,
        isLoading: false,
      };
    case GET_PRODUCTS_DETAIL:
      return {
        ...state,
        detailClock: payload,
        detailLoading: false,
      };
    //Searchbar
    case SEARCH_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case SEARCH_PRODUCT_SUCCESS:
      const filteredProducts = payload;
      const searchActive = filteredProducts.length > 0;

      return {
        ...state,
        searchClocks: filteredProducts,
        isLoading: false,
        error: null,
        searchActive,
      };
    case SEARCH_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case ADD_TO_CART:
      const updatedCart = [...state.Cart.items, payload];
      saveCartToLocalStorage({ items: updatedCart });
      return {
        ...state,
        Cart: { items: updatedCart },
      };
    case REMOVE_FROM_CART:
      const filteredCart = state.Cart.items.filter(
        (item) => item.id !== payload
      ); // Aquí accedemos al array 'items'
      saveCartToLocalStorage({ items: filteredCart });
      return {
        ...state,
        Cart: { items: filteredCart },
      };
    case CLEAR_CART:
      localStorage.removeItem("cart");
      return {
        ...state,
        Cart: { items: [] },
      };
     case RESET_DETAIL:
       return {
         ...state,
         detailClock: [],
       }
    default:
      return state;
  }
};

