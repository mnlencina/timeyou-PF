const initialstate = {
  Clocks: [],
  Clock: {},
  isLoading: false,
};

export const rootReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
