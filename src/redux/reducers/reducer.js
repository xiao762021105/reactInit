import { combineReducers } from 'redux';
import homeReducer from './homereducer';

const reducer = combineReducers({
  homeNumber: homeReducer
})

export default reducer