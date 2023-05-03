const initialState = {
  city: "",
};

const weatherReducers = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CITY":
      return {
        ...state,
        city: action.payload,
      };

    default:
      return state;
  }
};

export default weatherReducers;
