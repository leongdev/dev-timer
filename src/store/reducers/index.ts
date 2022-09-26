import { combineReducers } from '@reduxjs/toolkit'
import auth from './auth'
import sounds from './sounds'

export default combineReducers({
  auth,
  sounds
})
