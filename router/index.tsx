
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'

import { RootStackParamList } from '../types'

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getHasAuth } from '../src/store/selectors/auth'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components/native'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

import LoginHidden from '../src/screens/LoginStack/LoginHidden'
import LoginHome from '../src/screens/LoginStack/LoginHome'

import AppHome from '../src/screens/AppStack/AppHome/index'
import AppNoises from '../src/screens/AppStack/AppNoises'
import AppCharts from '../src/screens/AppStack/AppCharts'
import AppSettings from '../src/screens/AppStack/AppSettings'

import SettingsProjects from '../src/screens/SettingsStrack/SettingsProjects'
import SettingsFreelanceCalculator from '../src/screens/SettingsStrack/SettingsFreelanceCalculator'
import SettingsTimer from '../src/screens/SettingsStrack/SettingsTimer'
import SettingsThemes from '../src/screens/SettingsStrack/SettingsThemes'
import { ThemeProvider } from 'styled-components'
import themes from '../src/themes'
import { StatusBar } from 'expo-status-bar'
import { getCurrentPrimaryColor, getCurrentTheme } from '../src/store/selectors/theme'

export default function Navigation () {
  const hasAuth = useSelector(getHasAuth)
  const primaryColor = useSelector(getCurrentPrimaryColor)
  const reduxTheme: string = useSelector(getCurrentTheme)

  const [logged, setLogged] = useState(hasAuth)

  const theme = themes[reduxTheme] || themes.light
  const processedTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      primary: primaryColor
    }
  }

  useEffect(() => {
    setLogged(hasAuth)
  }, [hasAuth])

  return (
    <ThemeProvider theme={processedTheme} >
      <NavigationContainer>
        {
          logged
            ? (
              <AppStack/>
              )
            : (
              <LoginStack />
              )
        }
      </NavigationContainer>
      <StatusBar />
    </ThemeProvider>

  )
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>()

function LoginStack () {
  return (
    <Stack.Navigator
      initialRouteName="LoginHome"
    >
      <Stack.Screen name="LoginHome" component={LoginHome} options={{ headerShown: false }} />
      <Stack.Screen name="LoginHidden" component={LoginHidden} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

function SettingsStack () {
  return (
    <Stack.Navigator
      initialRouteName="AppSettings"
    >
      <Stack.Screen name="AppSettings" component={AppSettings} options={{ headerShown: false }} />
      <Stack.Screen name="Projects" component={SettingsProjects} options={{ headerShown: false }} />
      <Stack.Screen name="Freelancer" component={SettingsFreelanceCalculator} options={{ headerShown: false }} />
      <Stack.Screen name="Timer" component={SettingsTimer} options={{ headerShown: false }} />
      <Stack.Screen name="Themes" component={SettingsThemes} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

function AppStack () {
  const { colors } = useTheme()

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.white,
        tabBarActiveBackgroundColor: colors.black,
        tabBarInactiveBackgroundColor: colors.black,
        tabBarStyle: {
          backgroundColor: colors.black
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={AppHome}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="camera-timer" color={color} />
        }}
      />
      <Tab.Screen
        name="Noises"
        component={AppNoises}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="music" color={color} />
        }}
      />
      <Tab.Screen
        name="Charts"
        component={AppCharts}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <TabBarIconTwo name="bar-chart" color={color} />
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="cog" color={color} />
        }}
      />
    </Tab.Navigator>
  )
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon (props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
}) {
  return <MaterialCommunityIcons size={30} style={{ marginBottom: -3 }} {...props} />
}

function TabBarIconTwo (props: {
  name: React.ComponentProps<typeof MaterialIcons>['name'];
  color: string;
}) {
  return <MaterialIcons size={35} style={{ marginBottom: -3 }} {...props} />
}
