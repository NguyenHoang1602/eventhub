import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardType } from 'react-native'
import React, { ReactNode, useState } from 'react'
import { EyeSlash } from 'iconsax-react-native';
import { appColors } from '../constants/appColors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { globalStyles } from '../styles/globalStyles';
import SpaceComponent from './SpaceComponent';
import TextComponent from './TextComponent';
import { useFormContext } from 'react-hook-form';



interface Props {
  value: string;
  onChange: (val: string) => void;
  affix?: ReactNode;
  placeholder?: string;
  suffix?: ReactNode;
  isPassword?: boolean;
  allowClear?: boolean;
  type?: KeyboardType;
  error?: string;
  onFocus?: () => void;
  name?: string,
}
const InputComponent = (props: Props) => {

  const { value, onChange, affix, placeholder, suffix, isPassword, allowClear, type, error, onFocus, name} = props;

  const [isShowPass, setIsShowPass] = useState(isPassword ?? false);


  return (
    <>
    {error ? (
      <><TextComponent text={error} color={appColors.red} /><SpaceComponent height={5} /></>
    ) : (
      <></>
    )}
    <View style={[
      styles.inputContainer,{
        borderColor: error 
        ? appColors.red
        : appColors.grey3
      }
    ]}>
      {affix ?? affix}
      <TextInput
        style={[styles.input, globalStyles.text]}
        value={value}
        placeholder={placeholder ?? ''}
        placeholderTextColor={'#747688'}
        onChangeText={val => onChange(val)}
        secureTextEntry={isShowPass}
        keyboardType={type ?? 'default'}
        onFocus={onFocus}
        />
      {suffix ?? suffix}
      <TouchableOpacity onPress={isPassword ? () => setIsShowPass(!isShowPass) : () => onChange('')}>
        {isPassword ? (
          <Entypo
            name={isShowPass ? 'eye-with-line' : 'eye'}
            size={22}
            color={appColors.grey} />
        ) : (
          value.length > 0 && (
            <AntDesign name='close' size={22} color={appColors.text} />
          )
        )}
      </TouchableOpacity>
    </View>
    </>

  )
}

export default InputComponent

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    width: '100%',
    minHeight: 56,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: appColors.white,
    marginBottom: 19,
  },
  input: {
    padding: 0,
    margin: 0,
    flex: 1,
    paddingHorizontal: 14,
    color: appColors.text,
  }
})
