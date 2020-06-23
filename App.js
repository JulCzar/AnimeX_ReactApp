import { StatusBar } from 'react-native'
import React from 'react';

import Routes from './src/routes'

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#7B35A6"
      />
      <Routes />
    </>
  )
}

export default App