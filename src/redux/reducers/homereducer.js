import allActions from '../actions/actiontype';

function homeReducer (state = 0,action) {
  switch(action.type) {
    case allActions.HOME_ACTION :
      return state + action.number;
    default : 
      return state; 
  }
} 

export default homeReducer;