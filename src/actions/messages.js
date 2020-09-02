export const setOpen = (option) => ({
  type: "SET_OPEN",
  payload: {
      option
  }
})

export const setMessage = (title, text) => ({
  type: "SET_MESSAGE",
  payload: {
      title,
      text
  }
})
