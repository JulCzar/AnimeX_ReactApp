import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import * as orientation from 'expo-screen-orientation'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Details from './pages/Details'
import colors from './theme/colors'
import VideoPlayer from './pages/Video'
import SearchScreen from './pages/Search'

const AppStack = createStackNavigator()

const Routes = () => {
  orientation.lockAsync(0)

  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode='none'
        screenOptions={{
          cardStyle: {
            backgroundColor: colors.background
          }
        }}
      >
        <AppStack.Screen name='Home' component={Home}/>
        <AppStack.Screen name='Details' component={Details}/>
        <AppStack.Screen name='VideoPlayer' component={VideoPlayer}/>
        <AppStack.Screen name='SearchScreen' component={SearchScreen}/>
      </AppStack.Navigator>
    </NavigationContainer>
  )
}


export default Routes