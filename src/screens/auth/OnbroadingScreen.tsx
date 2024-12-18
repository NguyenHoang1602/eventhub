import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../../styles/globalStyles'
import Swiper from 'react-native-swiper'
import { appInfo } from '../../constants/appinfos'
import { appColors } from '../../constants/appColors'
import AppIntroSlider from 'react-native-app-intro-slider'
import { fontFamilies } from '../../constants/fontFamilies'

const slides = [
    {
        image: require('../../assets/images/Onboarding-1.png')
    },
    {
        image: require('../../assets/images/Onboarding-2.png')
    },
    {
        image: require('../../assets/images/Onboarding-3.png')
    },
  ]
const OnbroadingScreen = ({navigation} : any) => {
   
    const buttonLabel = (label: string) => {
        return(
          <View style={{
            padding: 12
          }}>
            <Text style={{
              color: appColors.white,
              fontFamily: fontFamilies.medium,
              fontSize: 18,
            }}>
              {label}
            </Text>
          </View>
        )
      }

    const buttonLabel1 = (label : string) => {
        return(
          <View style={{
            padding: 12
          }}>
            <Text style={{
              color: appColors.white,
              opacity: 0.7,
              fontFamily: fontFamilies.medium,
              fontSize: 18,
            }}>
              {label}
            </Text>
          </View>
        )
      }
  return (
    <View style={[globalStyles.container]}>
      <AppIntroSlider
        data={slides}
        renderItem={({item}) => {
          return(
              <Image
                source={item.image}
                style={{
                    flex: 1,
                    width: appInfo.sizes.WIDTH,
                    height: appInfo.sizes.HEIGHT,
                    resizeMode: 'cover',
                }}
                resizeMode="cover"
              />
          )
        }}
        dotStyle={{
            width: 8,
            height: 8,
            backgroundColor: appColors.white,
            opacity: 0.2,
        }}
        activeDotStyle={{
            width: 8,
            height: 8,
          backgroundColor: appColors.white,
        }}
        showSkipButton
        renderNextButton={() => buttonLabel("Next")}
        renderSkipButton={() => buttonLabel1("Skip")}
        renderDoneButton={() => buttonLabel("Done")}
        onDone={() => {
          navigation.navigate('LoginScreen')
        }}
      />
    </View>
  )
}

export default OnbroadingScreen