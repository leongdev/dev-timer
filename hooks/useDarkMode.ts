
import { useColorScheme } from 'react-native'
import themes from '../themes'

export default function useDarkMode () {
  // returns: dark, light, null
  const deviceTheme = useColorScheme()
  const theme = themes[deviceTheme] || themes.light
  return { theme }
}
