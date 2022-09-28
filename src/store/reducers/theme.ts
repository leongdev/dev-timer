import { ActionTypes } from '../action/types/index'
export const defaultThemeState = {
  currentTheme: 'light',
  primaryColor: '#F74B9C'
}

export default (state = { ...defaultThemeState }, action) => {
  switch (action.type) {
    case ActionTypes.SET_THEME:
      return {
        ...state,
        currentTheme: action.payload.currentTheme
      }
    case ActionTypes.SET_PRIMARY_COLOR:
      return {
        ...state,
        primaryColor: action.payload.primaryColor
      }
    default:
      return state
  }
}
