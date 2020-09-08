const initialState = {
  profile: {},
};

const session = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      return {
        ...state,
        profile: action.payload.user,
      };

    default:
      return state;
  }
};

export default session;
