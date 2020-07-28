import React from 'react'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Main from './pages/Main'
import Profile from './pages/Profile'

const Stack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerTitleAlign: 'center', 
          headerBackTitleVisible: false,
          headerStyle: {backgroundColor: '#7D40E7'},
          headerTintColor: '#FFF',
        }}
      >
        <Stack.Screen name="Main" component={Main} options={{title: 'DevRadar'}} />
        <Stack.Screen name="Profile" component={Profile} options={{title: 'Perfil no Github'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes