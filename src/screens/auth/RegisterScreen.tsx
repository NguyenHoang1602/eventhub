import { View, Image, Switch, Keyboard } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ButtonComponent, CInputComponents, ContainerComponent, InputComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { appColors } from '../../constants/appColors'
import { ArrowRight, Profile, Sms } from 'iconsax-react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { fontFamilies } from '../../constants/fontFamilies'
import RowComponent from '../../components/RowComponent'
import SocialLogin from './components/SocialLogin'
import { LoadingModal } from '../../modals'
import authenticationAPI from '../../api/authApi'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { addAuth } from '../../redux/reducers/authReducer'

const RegisterScreen = ({ navigation }: any) => {

  const [isLoading, setIsLoading] = useState(false);
  

  const dispatch = useDispatch();


  const handleRegister = async (values: any) => {
    Keyboard.dismiss();
    setIsLoading(true);
    try {
      const res = await authenticationAPI.HandleAuthentication('/register',
        {
          fullName: values.userName,
          email: values.email,
          password: values.password
        }, 'post');
        
      dispatch(addAuth(res));
      console.log(res);
      await AsyncStorage.setItem('auth', JSON.stringify(res));
      setIsLoading(false);
    } catch (error) {
      console.log(error);  
      setIsLoading(false);
    }

  }
  const form = useForm({
    defaultValues: {
      userName:'',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(
      yup.object().shape({
        userName: yup.string().required('Vui lòng nhập họ tên!'),
        email: yup.string().email('Email không hợp lệ!').required('Vui lòng nhập email!'),
        password: yup.string()
          .required("Vui lòng nhập mật khẩu!")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Phải chứa 8 ký tự, một chữ hoa, một chữ thường, một số và một ký tự đặc biệt"
          ),
        confirmPassword: yup.string().oneOf([yup.ref('password'), ""], 'Mật khẩu không khớp').required('Vui  lòng nhập lại mật khẩu!'),
      })
    )
  })
  return (
    <>
      <ContainerComponent isImageBackground isScroll back>
        <SpaceComponent height={8}/>
        <FormProvider {...form}>
          <SectionComponent>
            <TextComponent size={24} font={fontFamilies.medium} text='Sign Up' />
            <SpaceComponent height={8}/>
            <CInputComponents
              name='userName'
              placeholder='Full name'
              affix={<Profile size={22} color={appColors.grey}/>}
            />
            <CInputComponents
              name='email'
              placeholder='abc@gmail.com'
              affix={<Sms size={22} color={appColors.grey}/>}
            />
            <CInputComponents
              name='password'
              placeholder='You password'
              isPassword
              affix={<SimpleLineIcons name='lock' size={22} color={appColors.grey}/>} 
            />
            <CInputComponents
              name='confirmPassword'
              placeholder='Confirm Password'
              isPassword
              affix={<SimpleLineIcons name='lock' size={22} color={appColors.grey}/>} 
            />
          </SectionComponent>
        </FormProvider>
        <SpaceComponent height={25}/>
        <SectionComponent>
          <ButtonComponent
            text='SIGN UP'
            type='primary'
            icon={<ArrowRight size={20} color={appColors.white} />}
            iconFlex='right'
            onPress={() => form.handleSubmit(handleRegister)()} />
        </SectionComponent>
        <SocialLogin />
        <SectionComponent>
          <RowComponent justify="center">
            <TextComponent text="Already have an account? " />
            <ButtonComponent
              type="link"
              text="Sign in"
              onPress={() => navigation.navigate('LoginScreen')} />
          </RowComponent>
        </SectionComponent>
      </ContainerComponent>
      <LoadingModal visible={isLoading} />
    </>
  )
}

export default RegisterScreen