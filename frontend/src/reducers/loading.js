const initialState = {
  loading: false,
}

const loading = (state = initialState, action) => {

  switch (action.type) {
      case "SET_LOADING":
          return {
              ...state,
              loading: action.payload.option
          }

      default:
          return state;
  }
}

export default loading
