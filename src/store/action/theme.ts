import { handleGoogleSignIn } from '../../services/auth'
import { ActionTypes } from './types'

const setTheme = (currentTheme: string) => (dispatch) => {
  dispatch({
    type: ActionTypes.SET_THEME,
    payload: {
      currentTheme
    }
  })
}

const setPrimaryColor = (primaryColor: string) => (dispatch) => {
  dispatch({
    type: ActionTypes.SET_PRIMARY_COLOR,
    payload: {
      primaryColor
    }
  })
}

export {
  setTheme,
  setPrimaryColor
}
