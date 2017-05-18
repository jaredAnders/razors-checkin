import { combineReducers } from 'redux'
import { GET_DATA } from '../actions/actionTypes'

const appointments = (state = '', action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload
    default:
      return state
  }
}

const reducer = combineReducers({ appointments })

export default reducer
