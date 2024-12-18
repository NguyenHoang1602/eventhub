/* eslint-disable @typescript-eslint/func-call-spacing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eol-last */
/* eslint-disable semi */
import React, { useEffect, useState } from 'react'
import { SplashScreen } from './src/screens';
import AuthNavigator from './src/navigators/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import MainNavigator from './src/navigators/MainNavigator';

const App = () => {

  const [isShowSplash, setIsShowSplash] = useState(true);
  const [assetToken, setAssetToken] =  useState('');
  const {getItem, setItem} = useAsyncStorage('assetToken');

  useEffect(() => {
    const timeout = setTimeout(()=> {
      setIsShowSplash(false)
    }, 1500);
    return () => clearTimeout(timeout);
  }, [])

  useEffect (() => {
    checkLogin();
  }, []);
  const checkLogin = async () => {
    const token = await getItem();
    console.log(token);
    token && setAssetToken(token);
  }

  return (
  <>
  <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
    { isShowSplash ? (
        <SplashScreen/>
      ) : (
        <NavigationContainer>
          { assetToken ? <MainNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
      )
    }
  </>
  )
}

export default App