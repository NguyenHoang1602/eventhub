import { View, Image, Switch } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ButtonComponent, ContainerComponent, InputComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { globalStyles } from '../../styles/globalStyles'
import { appColors } from '../../constants/appColors'
import { ArrowRight, Sms } from 'iconsax-react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { fontFamilies } from '../../constants/fontFamilies'
import RowComponent from '../../components/RowComponent'
import SocialLogin from './components/SocialLogin'
import authenticationAPI from '../../api/authApi'

const LoginScreen = ({ navigation }: any) => {

  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  const [isRemember, setIsRemember] = useState(true);

  const handleLogin = async () => {
    try {
     const res = await authenticationAPI.HandleAuthentication('/hello');
      console.log(res);
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ContainerComponent isImageBackground isScroll>
      <SectionComponent
        styles={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 75,
          marginBottom: 20,
        }}>
        <Image
          source={require('../../assets/images/text-logo.png')}
          style={{
            width: 162,
            height: 114,
          }}
        />
      </SectionComponent>
      <SectionComponent
        styles={{

        }}>
        <TextComponent size={24} font={fontFamilies.medium} text='Sign In' />
        <SpaceComponent height={21} />
        <InputComponent
          value={email}
          placeholder='abc@gmail.com'
          onChange={val => setEmail(val)}
          // isPassword
          type='email-address'
          allowClear
          affix={
            <Sms size={22} color={appColors.grey} />
          }
        />
        <InputComponent
          value={password}
          placeholder='Password'
          onChange={val => setPassWord(val)}
          isPassword
          allowClear
          affix={
            <SimpleLineIcons
              name='lock'
              size={22}
              color={appColors.grey}
            />
          }
        />
        <RowComponent justify="space-between">
          <RowComponent onPress={() => setIsRemember(!isRemember)}>
            <Switch
              value={isRemember}
              trackColor={{ true: appColors.primary }}
              thumbColor={appColors.white}
              onChange={() => setIsRemember(!isRemember)}
            />
            <TextComponent text='Remember me' />
          </RowComponent>
          <ButtonComponent
            text='Forgot Password?'
            onPress={() => navigation.navigate('ForgotPassword')}
            type='text'
          />
        </RowComponent>
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent>
        <ButtonComponent
          text='SIGN IN'
          type='primary'
          icon={<ArrowRight size={20} color={appColors.white} />}
          iconFlex='right'
          onPress={handleLogin}
        />
      </SectionComponent>
      <SocialLogin />
      <SectionComponent>
        <RowComponent justify="center">
          <TextComponent text="Don’t have an account? " />
          <ButtonComponent
            type="link"
            text="SIGN UP"
            onPress={() => navigation.navigate('RegisterScreen')}
          />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>

  )
}

export default LoginScreen