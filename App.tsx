/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components'
import useCachedResources from './src/hooks/useCachedResources'

import Router from './router'
import useDarkMode from './src/hooks/useDarkMode'
import store, { persistor } from './src/store'
import { Provider } from 'react-redux'

export default function App () {
  const { theme } = useDarkMode()
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Router />
            <StatusBar />
          </ThemeProvider>
        </Provider>
      </SafeAreaProvider>
    )
  }
}
