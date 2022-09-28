/* eslint-disable camelcase */

import { SafeAreaProvider } from 'react-native-safe-area-context'
import useCachedResources from './src/hooks/useCachedResources'

import Router from './router'
import store, { persistor } from './src/store'
import { Provider } from 'react-redux'

export default function App () {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store} persistor={persistor}>
          <Router />
        </Provider>
      </SafeAreaProvider>
    )
  }
}
