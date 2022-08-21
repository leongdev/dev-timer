
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'

import { RootStackParamList } from '../types'

import Home from '../screens/Home'
import Timer from '../screens/Timer'

export default function Navigation () {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Timer" component={Timer} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
