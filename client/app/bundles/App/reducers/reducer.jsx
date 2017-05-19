import { combineReducers } from 'redux'
import { GET_DATA, CHECK_IN } from '../actions/actionTypes'

const appointments = (state = '', action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload
    case CHECK_IN:
      return state.map((appointment) => {
        if (appointment.id === action.id) {
          return Object.assign({}, appointment, {
            checkedIn: true
          })
        }
        return appointment
      })
    default:
      return state
  }
}

const reducer = combineReducers({ appointments })

export default reducer
