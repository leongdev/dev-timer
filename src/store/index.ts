import AsyncStorage from '@react-native-async-storage/async-storage'
import rootReducer from './reducers'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import * as services from '../services'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'auth'
  ]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [
  ...getDefaultMiddleware({
    thunk: {
      // Pass some context so it is available in thunks.
      // Manual thunks: (payload) => (dispatch, getState, extra) { extra.notificationService.getXXX() }
      // With createAsyncThunk: (payload, { dispatch, getState, extra }) { extra.notificationService.getXXX() }
      extraArgument: { ...services }
    },
    serializableCheck: false,
    immutableCheck: false
  })
]

const store = configureStore({
  reducer: persistedReducer,
  version: 1,
  middleware,
  devTools: __DEV__
})

export const persistor = persistStore(store)

export default store
