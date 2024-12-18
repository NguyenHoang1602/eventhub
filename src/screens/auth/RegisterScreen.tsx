import { View, Image, Switch } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ButtonComponent, ContainerComponent, InputComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { globalStyles } from '../../styles/globalStyles'
import { appColors } from '../../constants/appColors'
import { Profile, Sms } from 'iconsax-react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { fontFamilies } from '../../constants/fontFamilies'
import RowComponent from '../../components/RowComponent'
import SocialLogin from './components/SocialLogin'

const RegisterScreen = ({navigation} : any) => {

  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [isRemember, setIsRemember] = useState(true);

  return (
    <ContainerComponent isImageBackground isScroll>
      <SectionComponent
        styles={{
          justifyContent: 'center',
          alignItems: 'flex-start',
          marginTop: 75,
          marginBottom: 20,
        }}>
        <TextComponent size={24} font={fontFamilies.medium} text='Sign Up' />
        <SpaceComponent height={21} />
        <InputComponent
          value={email}
          placeholder='Full name'
          onChange={val => setEmail(val)}
          // isPassword
          type='email-address'
          allowClear
          affix={
            <Profile size={22} color={appColors.grey} />
          }
        />
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
        <InputComponent
          value={confirmPass}
          placeholder='Confirm password'
          onChange={val => setConfirmPass(val)}
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
        <ButtonComponent text='SIGN UP' type='primary'/>
      </SectionComponent>
      <SocialLogin/>
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