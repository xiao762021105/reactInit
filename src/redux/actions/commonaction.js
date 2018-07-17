import allActions from './actiontype';

const commonActionFnc = {
  i18nChange: (language) => ({type: allActions.HOME_ACTION, language: language}),
} 

export default { homeActionFnc };