import { ActionTypes } from '../action/types/index'

export interface IAuthReducer {
  userName: string,
  userEmail: string,
  authProvider: string,
  hasAuth?: boolean,
  userId?: string,
  firebaseAuth?: boolean
}

const defaultState = {
  hasAuth: false,
  userId: '',
  userName: '',
  userEmail: '',
  authProvider: '',
  firebaseAuth: false
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
    case ActionTypes.SET_ID:
      return {
        ...state,
        userId: action.payload.userId,
        firebaseAuth: true
      }
    default:
      return state
  }
}
