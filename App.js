import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/routes';
import colors from './src/theme/colors';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primary}
      />
      <Routes />
    </>
  )
}

export default App