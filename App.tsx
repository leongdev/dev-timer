import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components'

import useCachedResources from './hooks/useCachedResources'

import Router from './router'
import useDarkMode from './hooks/useDarkMode'

export default function App () {
  const { theme } = useDarkMode()
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <Router />
          <StatusBar />
        </ThemeProvider>
      </SafeAreaProvider>
    )
  }
}
