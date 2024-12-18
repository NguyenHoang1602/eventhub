/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable jsx-quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen, OnbroadingScreen } from '../screens';


const AuthNavigator = () => {

    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        }}>
        <Stack.Screen name='OnbroadingScreen' component={OnbroadingScreen}/>
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
    </Stack.Navigator>
  )
}

export default AuthNavigator