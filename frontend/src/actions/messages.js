export const setOpen = (option) => ({
  type: "SET_OPEN",
  payload: {
      option
  }
})

export const setMessage = (text, color) => ({
  type: "SET_MESSAGE",
  payload: {
      text,
      color
  }
})
