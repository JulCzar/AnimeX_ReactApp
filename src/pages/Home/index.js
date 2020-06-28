import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome as Icon } from '@expo/vector-icons';
import AlphabeticList from './pages/AlphabeticList';
import { View } from 'react-native';
import ReleaseList from './pages/Releases';


import styles from './styles';
import colors from '../../theme/colors';

const Tab = createBottomTabNavigator()

const getIcon = icon => ({
  tabBarIcon: ({ color, size }) => (
    <Icon name={icon} size={size} color={color} />
  )
})

const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <Tab.Navigator
          tabBarOptions={{ activeTintColor: colors.accent }}
        >
          <Tab.Screen
            name="Lista Alfabética"
            component={AlphabeticList}
            options={() => getIcon('home')}
          />
          <Tab.Screen 
            name="Lançamentos"
            component={ReleaseList}
            options={() => getIcon('rocket')}
          />
        </Tab.Navigator>
      </View>
    </>
  );
}

export default Home