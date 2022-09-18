
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'

import { RootStackParamList } from '../types'

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getHasAuth } from '../src/store/selectors/auth'

import LoginHidden from '../src/screens/LoginHidden'
import LoginHome from '../src/screens/LoginHome'
import AppHome from '../src/screens/AppHome/index'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components/native'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

export default function Navigation () {
  const hasAuth = useSelector(getHasAuth)
  const [logged, setLogged] = useState(hasAuth)

  useEffect(() => {
    setLogged(hasAuth)
  }, [hasAuth])

  return (
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

const Tab = createBottomTabNavigator()

function AppStack () {
  const { colors } = useTheme()

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.background,
        tabBarActiveBackgroundColor: colors.text,
        tabBarInactiveBackgroundColor: colors.text
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
        component={AppHome}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="music" color={color} />
        }}
      />
      <Tab.Screen
        name="Charts"
        component={AppHome}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <TabBarIconTwo name="bar-chart" color={color} />
        }}
      />
      <Tab.Screen
        name="Settings"
        component={AppHome}
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
