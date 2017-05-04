import { combineReducers } from 'redux'
import { NAME_UPDATE } from '../constants/constants'

const name = (state = '', action) => {
  switch (action.type) {
    case NAME_UPDATE:
      return action.text
    default:
      return state
  }
}

const reducer = combineReducers({ name })

export default reducer
