import { View, Image, Switch } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ButtonComponent, ContainerComponent, InputComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { globalStyles } from '../../styles/globalStyles'
import { appColors } from '../../constants/appColors'
import { ArrowRight, Profile, Sms } from 'iconsax-react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { fontFamilies } from '../../constants/fontFamilies'
import RowComponent from '../../components/RowComponent'
import SocialLogin from './components/SocialLogin'

const initValue = {
  userName: '',
  email: '',
  password: '',
  confirmPass: '',
}

const RegisterScreen = ({ navigation }: any) => {

  const [values, setValues] = useState(initValue);

  const handleChange = (key: string, value: string) => {
    const data: any = { ...values };
    data[`${key}`] = value;
    setValues(data);
  }

  return (
    <ContainerComponent isImageBackground isScroll back>
      <SectionComponent>
        <TextComponent size={24} font={fontFamilies.medium} text='Sign Up' />
        <SpaceComponent height={21} />
        <InputComponent
          value={values.userName}
          placeholder='Full name'
          onChange={val => handleChange('userName', val)}
          // isPassword
          type='default'
          allowClear
          affix={
            <Profile size={22} color={appColors.grey} />
          }
        />
        <InputComponent
          value={values.email}
          placeholder='abc@gmail.com'
          onChange={val => handleChange('email', val)}
          // isPassword
          type='email-address'
          allowClear
          affix={
            <Sms size={22} color={appColors.grey} />
          }
        />
        <InputComponent
          value={values.password}
          placeholder='Password'
          onChange={val => handleChange('password', val)}
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
        <InputComponent
          value={values.confirmPass}
          placeholder='Confirm password'
          onChange={val => handleChange('confirmPass', val)}
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
      </SectionComponent>
      <SectionComponent>
        <ButtonComponent
          text='SIGN UP'
          type='primary'
          icon={<ArrowRight size={20} color={appColors.white} />}
          iconFlex='right'
          onPress={() => navigation.navigate('Verification')}
        />
      </SectionComponent>
      <SocialLogin />
      <SectionComponent>
        <RowComponent justify="center">
          <TextComponent text="Already have an account? " />
          <ButtonComponent
            type="link"
            text="Sign in"
            onPress={() => navigation.navigate('LoginScreen')}
          />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>

  )
}

export default RegisterScreen