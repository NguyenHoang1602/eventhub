import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { ButtonComponent, ContainerComponent, InputComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { appColors } from '../../constants/appColors';
import { ArrowRight, Sms } from 'iconsax-react-native';
import { fontFamilies } from '../../constants/fontFamilies';
import RowComponent from '../../components/RowComponent';
import { globalStyles } from '../../styles/globalStyles';

const Verification = () => {

  const [code, setCode] = useState('');

  return (
    <ContainerComponent back isImageBackground>
      <SectionComponent>
        <TextComponent text='Verification' title />
        <SpaceComponent height={16} />
        <TextComponent styles={{ lineHeight: 25 }} text='We’ve send you the verification code on +1 2620 0323 7631' size={15} font={fontFamilies.font1} />
        <SpaceComponent height={26} />
        <RowComponent justify="space-around">
          <TextInput
            keyboardType="number-pad"
            placeholder="-"
            style={[styles.input]}
          />
          <TextInput
            keyboardType="number-pad"
            placeholder="-"
            style={[styles.input]}
          />
          <TextInput
            keyboardType="number-pad"
            style={[styles.input]}
            maxLength={1}
            placeholder="-"
          />
          <TextInput
            keyboardType="number-pad"
            style={[styles.input]}
            maxLength={1}
            placeholder="-"
          />
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <ButtonComponent
          text='CONTINUE'
          type='primary'
          icon={<ArrowRight size={20} color={appColors.white} />}
          iconFlex='right'
        />
      </SectionComponent>
    </ContainerComponent>
  )
}

export default Verification
const styles = StyleSheet.create({
  input: {
    height: 55,
    width: 55,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColors.grey2,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    fontFamily: fontFamilies.medium,
    textAlign: 'center',
  },
});