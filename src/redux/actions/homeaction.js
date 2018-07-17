import allActions from './actiontype';

const homeActionFnc = {
  homeAdd: (number) => ({type: allActions.HOME_ACTION, number: number}),
} 

export default { homeActionFnc };