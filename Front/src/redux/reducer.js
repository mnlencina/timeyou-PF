
import {
  GET_PRODUCTS,
  GET_PRODUCTS_DETAIL,
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
} from "./actionTypes";


// Obtenemos el carrito almacenado en el localStorage (si existe)
const storedCart = localStorage.getItem("cart");

const initialState = {
  Clocks: [],
  Clock: {},
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
