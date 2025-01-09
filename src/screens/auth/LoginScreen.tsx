import { View, Image, Switch } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ButtonComponent, CInputComponents, ContainerComponent, InputComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { appColors } from '../../constants/appColors'
import { ArrowRight, Sms } from 'iconsax-react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { fontFamilies } from '../../constants/fontFamilies'
import RowComponent from '../../components/RowComponent'
import SocialLogin from './components/SocialLogin'
import authenticationAPI from '../../api/authApi'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { LoadingModal } from '../../modals'
import { useDispatch } from 'react-redux'
import { addAuth } from '../../redux/reducers/authReducer'

const LoginScreen = ({ navigation }: any) => {
  const [isRemember, setIsRemember] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(
      yup.object().shape({
        email: yup.string().email('Email không hợp lệ!').required('Vui lòng nhập email!'),
        password: yup.string()
          .required("Vui lòng nhập mật khẩu!")
        // .matches(
        //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        //   "Phải chứa 8 ký tự, một chữ hoa, một chữ thường, một số và một ký tự đặc biệt"
        // )
      })
    )
  })

  const handleLogin = async (values: any) => {
    setIsLoading(true);
    try {
      const res = await authenticationAPI.HandleAuthentication('/login',
        {
          email: values.email,
          password: values.password
        }, 'post');
        dispatch(addAuth(res));
        console.log(res);
        await AsyncStorage.setItem('auth', isRemember ?  JSON.stringify(res) : values.email);
        await AsyncStorage.setItem('isFirstAccess', '1');
        setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  return (
    <>
      <ContainerComponent isImageBackground isScroll>
        <SectionComponent
          styles={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
            marginBottom: 20,
          }}>
          <Image
            source={require('../../assets/images/text-logo.png')}
            style={{
              width: 162,
              height: 114,
            }} />
        </SectionComponent>
        <FormProvider {...form}>
          <SectionComponent>
            <TextComponent size={24} font={fontFamilies.medium} text='Sign In' />
            <CInputComponents
              name='email'
              placeholder='abc@gmail.com'
              affix={<Sms size={22} color={appColors.grey} />}
            />
            <CInputComponents
              name='password'
              placeholder='Password'
              isPassword
              affix={<SimpleLineIcons
                name='lock'
                size={22}
                color={appColors.grey} />} />
            <SpaceComponent height={19} />
            <RowComponent justify="space-between">
              <RowComponent onPress={() => setIsRemember(!isRemember)}>
                <Switch
                  value={isRemember}
                  trackColor={{ true: appColors.primary }}
                  thumbColor={appColors.white}
                  onChange={() => setIsRemember(!isRemember)} />
                <TextComponent text='Remember me' />
              </RowComponent>
              <ButtonComponent
                text='Forgot Password?'
                onPress={() => navigation.navigate('ForgotPassword')}
                type='text' />
            </RowComponent>
          </SectionComponent>
        </FormProvider>
        <SpaceComponent height={16} />
        <SectionComponent>
          <ButtonComponent
            text='SIGN IN'
            type='primary'
            icon={<ArrowRight size={20} color={appColors.white} />}
            iconFlex='right'
            onPress={() => form.handleSubmit(handleLogin)()} />
        </SectionComponent>
        <SocialLogin />
        <SectionComponent>
          <RowComponent justify="center">
            <TextComponent text="Don’t have an account? " />
            <ButtonComponent
              type="link"
              text="SIGN UP"
              onPress={() => navigation.navigate('RegisterScreen')} />
          </RowComponent>
        </SectionComponent>
      </ContainerComponent>
      <LoadingModal visible={isLoading} />
    </>

  )
}

export default LoginScreen