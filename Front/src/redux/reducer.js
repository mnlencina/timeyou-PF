import { GET_PRODUCTS, GET_PRODUCTS_DETAIL, RESET_DETAIL } from "./actionTypes";

const initialstate = {
  Clocks: [],
  Clock: {},
  detailClock:[],
  isLoading: true,
  detailLoading: true,
};

export const rootReducer = (state = initialstate, { type, payload }) => {
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
      }
     case RESET_DETAIL:
       return {
         ...state,
         detailClock: [],
       }
    default:
      return state;
  }
};

