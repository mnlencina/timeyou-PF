/* eslint-disable no-case-declarations */
import Swal from 'sweetalert2';

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
  ALL_USERS,
  LOGIN_GOOGLE,
  ALL_BUY,
  UPDATE_USER,
  UPDATE_WATCH,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_ERROR,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
  GET_USER_LOGGED,
  SET_CART,
  UPDATE_CART,
  UPDATE_USERNAME,
  FINISH_BUY_CLEAR_CART,
} from "./actionTypes";

// Obtenemos el carrito almacenado en el localStorage (si existe)

const userStored = localStorage.getItem("user");
const userData = userStored ? JSON.parse(userStored) : false;

const initialState = {
  Clocks: [],
  allClocks: [],
  searchClocks: [],
  searchActive: false,
  filteredClocks: [],
  allBrands: [],
  allColors:[],
  allStyles: [],
  allStraps:[],
  allFunctions:[],
  selectedCategories: [],
  Cart: [],
  isLoadingCart: true,
  price: 500,
  detailClock: [],
  isLoading: true,
  detailLoading: true,
  BRANDS: [],
  STYLES: [],
  COLORS: [],
  STRAPS: [],
  FUNCTIONS: [],
  user: userStored ? JSON.parse(userStored) : { role: "", token: "" },
  allUsers: [],
  allBuys: [],
  comments: [],
  errorComments: null,
  userLoggedId: [],
};

// Función para guardar el carrito en el localStorage
const saveCartToLocalStorage = (sessionData, userName) => {
  localStorage.setItem(userName, JSON.stringify(sessionData));
};
const saveUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const rootReducer = (state = initialState, { type, payload }) => {
  const userStored = localStorage.getItem("user");
  const userData = userStored ? JSON.parse(userStored) : false;
  const userName = userData ? userData.userName : null;

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
      const watchDel1 = payload.filter(watch => watch.stock > 0);
      const watchDel = watchDel1.filter(watch => watch.del === false);
      return {
        ...state,
        detailClock: watchDel,
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
        Clocks: payload,
        isLoading: false,
        searchActive: true,
        error: null,
      };
    case SEARCH_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    /* Cambio realizado */
    case SET_CART:
      return {
        ...state,
        Cart: payload,
        isLoadingCart: false,
      };
    case ADD_TO_CART:
      const existingItem = state.Cart.find((item) => item.id === payload.id);
      if (existingItem) {
        let paylodCuant1 = {...payload, quantity: payload.quantity + existingItem.quantity};
        
        if(existingItem.stock < paylodCuant1.quantity ){ 
          Swal.fire({
            icon: 'error',
            title: 'Supera Stock disponible',
            showConfirmButton: false,
            timer: 1500
          })
          return state 
        }
        
        const filtered = state.Cart.filter((item) => item.id !== payload.id)
        const updatedCart1 = [...filtered, paylodCuant1];
        
        saveCartToLocalStorage(updatedCart1, state.user.userName);
        
        return {
          ...state,
          Cart: updatedCart1,
        };
        
      } else {
      
        
        const updatedCart2 = [...state.Cart, payload];
        saveCartToLocalStorage(updatedCart2, state.user.userName);
        return {
          ...state,
          Cart: updatedCart2,
        };
      }
    case FINISH_BUY_CLEAR_CART:
      saveCartToLocalStorage([], state.user.userName);
      return {
        ...state,
        Cart: [],
      };
    
    case REMOVE_FROM_CART:
      const filteredCart = state.Cart.filter((item) => item.id !== payload);
      saveCartToLocalStorage(filteredCart, userName);
      return {
        ...state,
        Cart: filteredCart,
      };
    case CLEAR_CART:
      return {
        ...state,
        Cart: [],
      };
    case UPDATE_CART: {
      localStorage.removeItem(userName);
      return {
        ...state,
        Cart: [],
      };
    }

    /* --------- */
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
        detailLoading: true,
        detailClock: [],
      };
      case FILTERS:
      return {
        ...state,
        Clocks: payload,
        isLoading: false,
        error: null,
        searchActive: true,
      };
      
      case GET_BRANDS:
        return {
          ...state,
          allBrands: payload
        }
      case GET_COLORS:
         return {
            ...state,
            allColors: payload
          }
      case GET_STYLES:
        return {
              ...state,
              allStyles: payload
            }  
      case GET_STRAPS:
         return {
           ...state,
          allStraps: payload
              }
      case GET_FUNCTIONS:
                return {
                  ...state,
                 allFunctions: payload
                     }

      case UPDATE_SELECTED_CATEGORIES:
       // console.log("navbar terms", payload )
      return {
        ...state,
        selectedCategories: [payload],
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
      saveUserToLocalStorage(payload);

      return {
        ...state,
        user: payload,
      };
    case LOGIN_GOOGLE:
      saveUserToLocalStorage(payload);
      return {
        ...state,
        user: payload,
      };
    case GET_WATCHES_BY_BRAND:
      return {
        ...state,
        Clocks: payload,
        searchActive: true,
        isLoading: false,
        error: null,
      };
    case LOGOUT_USER:
      localStorage.removeItem("user");
      return {
        ...state,
        user: { role: "", token: "" },
        Cart: [],
      };
    case ALL_USERS:
      return {
        ...state,
        allUsers: payload,
      };
    case ALL_BUY:
      return {
        ...state,
        allBuys: payload,
      };
    case UPDATE_USER:
      return {
        ...state,
      };
    case UPDATE_WATCH:
      return {
        ...state,
      };
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: payload,
        errorComments: null,
      };
    case GET_COMMENTS_ERROR:
      return {
        ...state,
        comments: [],
        errorComments: payload,
      };
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [...state.comments, payload],
        errorComments: null,
      };
    case CREATE_COMMENT_FAILURE:
      return {
        ...state,
        errorComments: payload,
      };
    case GET_USER_LOGGED:
      return {
        ...state,
        userLoggedId: payload,
        error: null,
      };
    case UPDATE_USERNAME:
      return{
        ...state,
        user:{
          ...state.user,
          userName: payload
        }
      };
    default:
      return state;
  }
};
