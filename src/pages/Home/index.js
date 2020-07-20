import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome as Icon } from '@expo/vector-icons';
import AlphabeticList from './pages/AlphabeticList';
import ReleaseList from './pages/Releases';


import { HomeContainer } from './styles';
import colors from '../../theme/colors';

const Tab = createBottomTabNavigator()

const getIcon = icon => ({
  tabBarIcon: ({ color, size }) => (
    <Icon name={icon} size={size} color={color} />
  )
})

const changeActiveTint = { activeTintColor: colors.accent }

const Home = () => {
  return (
    <HomeContainer>
      <Tab.Navigator tabBarOptions={changeActiveTint}>
        <Tab.Screen
          name='Lista Alfabética'
          component={AlphabeticList}
          options={() => getIcon('home')}
        />
        <Tab.Screen 
          name='Lançamentos'
          component={ReleaseList}
          options={() => getIcon('rocket')}
        />
      </Tab.Navigator>
    </HomeContainer>
  );
}

export default Home