
import {
  GET_PRODUCTS,
  GET_PRODUCTS_DETAIL,
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
  RESET_DETAIL,
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
  LOGOUT_USER,
} from "./actionTypes";

// Obtenemos el carrito almacenado en el localStorage (si existe)
const storedCart = localStorage.getItem("cart");

const initialState = {
  Clocks: [],
  allClocks: [],
  searchClocks: [],
  searchActive: false,
  filteredClocks: [],
  Cart: storedCart ? JSON.parse(storedCart) : { items: [] },
  price: 500,
  detailClock: [],
  isLoading: true,
  detailLoading: true,
  BRANDS: [],
  STYLES: [],
  COLORS: [],
  STRAPS: [],
  FUNCTIONS: [],
  user: { token: "" },
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
        allClocks: payload,
        searchClocks: payload,
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
      return {
        ...state,
        searchClocks: payload,
        isLoading: false,
        searchActive: payload.length > 0,
        error: null,
      };
    case SEARCH_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case ADD_TO_CART:
      // eslint-disable-next-line no-case-declarations
      const updatedCart = [...state.Cart.items, payload];
      saveCartToLocalStorage({ items: updatedCart });
      return {
        ...state,
        Cart: { items: updatedCart },
      };
    case REMOVE_FROM_CART:
      // eslint-disable-next-line no-case-declarations
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
    case TOTAL_PRICE:
      return {
        ...state,
        price: payload,
      };
    case UPDATE_PRICE:
      return {
        ...state,
        price: 0,
      };
    case RESET_DETAIL:
      return {
        ...state,
        detailClock: [],
      };
    case FILTERS:
      // eslint-disable-next-line no-case-declarations
      const filterBrands = payload || {};
      console.log("filterBrands", filterBrands);

      // eslint-disable-next-line no-case-declarations
      const filterActive = Object.values(filterBrands).some(
        (selected) => selected
      );
      console.log(filterActive);

      // eslint-disable-next-line no-case-declarations
      let filteredClocks = state.allClocks;
      if (filterActive) {
        filteredClocks = state.allClocks.filter((product) => {
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

      return {
        ...state,
        searchClocks: filterBrands,
        isLoading: false,
        error: null,
        searchActive: filterActive,
        filteredClocks: filteredClocks,
      };
    case ALL_BRANDS:
      return {
        ...state,
        BRANDS: payload,
      };
    case ALL_STYLES:
      return {
        ...state,
        STYLES: payload,
      };
    case ALL_COLORS:
      return {
        ...state,
        COLORS: payload,
      };
    case ALL_STRAPS:
      return {
        ...state,
        STRAPS: payload,
      };
    case ALL_FUNCTIONS:
      return {
        ...state,
        FUNCTIONS: payload,
      };
    case POST_WATCH:
      return {
        ...state,
      };
    case CREATE_USER:
      return {
        ...state,
      };
    case LOGIN_USER:
      return {
        ...state,
        user: { token: payload },
      };
    //lINKS DEL NAVBAR
    case GET_WATCHES_BY_BRAND:
      return {
        ...state,
        searchClocks: payload,
        isLoading: false,
        searchActive: payload.length > 0,
        error: null,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: { token: "" },
              }

    default:
      return state;
            }
          }
