import { handleAppleSignIn, handleGithubSignIn, handleGoogleSignIn } from '../../services/auth'
import { ActionTypes } from './types/index'
import { defaultProjectState } from '../reducers/projects'
import { defaultThemeState } from '../reducers/theme'
import { defaultUserState } from '../reducers/user'

const authenticateWithGoogle = async (dispatch) => {
  const {
    name,
    id,
    email,
    provider
  } = await handleGoogleSignIn()

  dispatch({
    type: ActionTypes.SIGN_IN,
    payload: {
      userName: name,
      userId: id,
      userEmail: email,
      authProvider: provider
    }
  })
}

const authenticateWithGithub = async (dispatch) => {
  const {
    name,
    id,
    email,
    provider
  } = await handleGithubSignIn()

  dispatch({
    type: ActionTypes.SIGN_IN,
    payload: {
      userName: name,
      userId: id,
      userEmail: email,
      authProvider: provider
    }
  })
}

const authenticateWithApple = async (dispatch) => {
  const {
    name,
    id,
    email,
    provider
  } = await handleAppleSignIn()

  dispatch({
    type: ActionTypes.SIGN_IN,
    payload: {
      userName: name,
      userId: id,
      userEmail: email,
      authProvider: provider
    }
  })
}

const authenticateWithEmailPassword = async (dispatch) => {
  dispatch({
    type: ActionTypes.SIGN_IN,
    payload: {
      userName: 'Admin',
      userId: '000',
      userEmail: 'contato@leongdev.com',
      authProvider: 'email'
    }
  })
}

const authenticateLogout = async (dispatch) => {
  dispatch({
    type: ActionTypes.LOG_OUT,
    payload: {
      userName: '',
      userId: '',
      userEmail: '',
      authProvider: ''
    }
  })
}

const authenticateDeleteAccount = async (dispatch) => {
  // Reset User
  dispatch({
    type: ActionTypes.SET_USER_MONEY_PREFERENCES,
    payload: defaultUserState.moneyPreferences
  })

  dispatch({
    type: ActionTypes.SET_TIME_PREFERENCES,
    payload: defaultUserState.timerPreferences
  })

  // Reset Theme
  dispatch({
    type: ActionTypes.SET_THEME,
    payload: {
      currentTheme: defaultThemeState.currentTheme
    }
  })

  dispatch({
    type: ActionTypes.SET_PRIMARY_COLOR,
    payload: {
      primaryColor: defaultThemeState.primaryColor
    }
  })

  // Reset Projects
  dispatch({
    type: ActionTypes.UPDATE_PROJECT,
    payload: {
      projects: defaultProjectState.projects
    }
  })

  dispatch({
    type: ActionTypes.LOG_OUT,
    payload: {
      userName: '',
      userId: '',
      userEmail: '',
      authProvider: ''
    }
  })
}

export {
  authenticateWithGoogle,
  authenticateWithGithub,
  authenticateWithEmailPassword,
  authenticateLogout,
  authenticateDeleteAccount,
  authenticateWithApple
}
