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
      name,
      id,
      email,
      provider
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
      name,
      id,
      email,
      provider
    }
  })
}

const authenticateWithEmailPassword = async (dispatch) => {
  dispatch({
    type: ActionTypes.SIGN_IN,
    payload: {
      name: 'Admin',
      id: '000',
      email: 'contato@leongdev.com',
      provider: 'email'
    }
  })
}

const authenticateLogout = async (dispatch) => {
  dispatch({
    type: ActionTypes.LOG_OUT,
    payload: {
      name: '',
      id: '',
      email: '',
      provider: ''
    }
  })
}

export {
  authenticateWithGoogle,
  authenticateWithGithub,
  authenticateWithEmailPassword,
  authenticateLogout
}
