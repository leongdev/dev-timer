import { ActionTypes } from '../action/types/index'
const defaultState = {
  hasAuth: false,
  userId: '',
  userName: '',
  userEmail: '',
  authProvider: ''
}

export default (state = { ...defaultState }, action) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN:
      return {
        ...state,
        userId: action.payload.userId,
        userName: action.payload.userName,
        userEmail: action.payload.userEmail,
        authProvider: action.payload.authProvider,
        hasAuth: true
      }
    case ActionTypes.LOG_OUT:
      return {
        ...state,
        userId: action.payload.userId,
        userName: action.payload.userName,
        userEmail: action.payload.userEmail,
        authProvider: action.payload.authProvider,
        hasAuth: false
      }
    default:
      return state
  }
}
