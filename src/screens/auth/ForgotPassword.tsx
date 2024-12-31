import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { ButtonComponent, ContainerComponent, InputComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { fontFamilies } from '../../constants/fontFamilies'
import { ArrowRight, Sms } from 'iconsax-react-native'
import { appColors } from '../../constants/appColors'

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <ContainerComponent back isImageBackground>
      <SectionComponent>
        <TextComponent text='Reset Password' title />
        <SpaceComponent height={16} />
        <TextComponent styles={{ lineHeight: 25 }} text='Please enter your email address to request a password reset' size={15} font={fontFamilies.font1} />
        <SpaceComponent height={26} />
        <InputComponent
          value={email}
          onChange={val => setEmail(val)}
          affix={<Sms size={20} color={appColors.grey} />}
          placeholder='abc@gmail.com'
        />
      </SectionComponent>
      <SectionComponent>
        <ButtonComponent
          text='SEND'
          type='primary'
          icon={<ArrowRight size={20} color={appColors.white}/>}
          iconFlex='right'
        />
      </SectionComponent>
    </ContainerComponent>
  )
}

export default ForgotPassword