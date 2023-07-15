import { GET_PRODUCTS } from "./actionTypes";

const initialstate = {
  Clocks: [],
  Clock: {},
  isLoading: true,
};

export const rootReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        Clocks: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
