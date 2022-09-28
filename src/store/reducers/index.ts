import { combineReducers } from '@reduxjs/toolkit'
import auth from './auth'
import sounds from './sounds'
import theme from './theme'
import projects from './projects'
import user from './user'

export default combineReducers({
  auth,
  sounds,
  theme,
  projects,
  user
})
