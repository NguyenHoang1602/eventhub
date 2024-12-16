/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, ImageBackground, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import { appInfo } from '../constants/appinfos'
import { SpaceComponent } from '../components'
import { appColors } from '../constants/appColors'

const SplashScreen = () => {
  return (
    <ImageBackground source={require('../assets/images/splash-image.png')} 
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      imageStyle={{flex: 1}}>
      <Image
        source={require('../assets/images/logo.png')}
        style={{
          width: appInfo.sizes.WIDTH * 0.7,
          resizeMode:'contain',
        }}/>
      <SpaceComponent height={20}/>
      <ActivityIndicator color={appColors.grey} size={22} />
    </ImageBackground>
  )
}

export default SplashScreen