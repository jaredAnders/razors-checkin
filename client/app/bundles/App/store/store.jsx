import { createStore } from 'redux'
import reducer from '../reducers/reducer'

const configureStore = () => (
  createStore(reducer)
)

export default configureStore;
