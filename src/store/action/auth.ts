import { handleGithubSignIn, handleGoogleSignIn } from '../../services/auth'
import { ActionTypes } from './types/index'

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

export {
  authenticateWithGoogle,
  authenticateWithGithub,
  authenticateWithEmailPassword,
  authenticateLogout
}
