import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import messages from "./messages"
import loading from "./loading"

export const generateReducers = history =>
    combineReducers({
        router: connectRouter(history),
        messages,
        loading
})
