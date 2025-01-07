/**@format */
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import AppRouters from './src/navigators/AppRouters';


const App = () => {

  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
        <NavigationContainer>
          <AppRouters />
        </NavigationContainer>
      </Provider>
    </>
  )
}

export default App