const initialState = {
  open: false,
  title: "",
  text: ""
}

const messages = (state = initialState, action) => {

  switch (action.type) {
      
      case "SET_OPEN":
          return {
              ...state,
              open: action.payload.option
          }

      case "SET_MESSAGE":
          return {
              ...state,
              title:action.payload.title,
              text: action.payload.text
          }

      default:
          return state;
  }
}

export default messages
