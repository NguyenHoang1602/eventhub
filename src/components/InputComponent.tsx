import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardType } from 'react-native'
import React, { ReactNode, useState } from 'react'
import { EyeSlash } from 'iconsax-react-native';
import { appColors } from '../constants/appColors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { globalStyles } from '../styles/globalStyles';



interface Props {
  value: string;
  onChange: (val: string) => void;
  affix?: ReactNode;
  placeholder?: string;
  suffix?: ReactNode;
  isPassword?: boolean;
  allowClear?: boolean;
  type?: KeyboardType;

}
const InputComponent = (props: Props) => {

  const { value, onChange, affix, placeholder, suffix, isPassword, allowClear, type } = props;

  const [isShowPass, setIsShowPass] = useState(isPassword ?? false);

  return (
    <View style={[styles.inputContainer,]}>
      {affix ?? affix}
      <TextInput
        style={[styles.input, globalStyles.text]}
        value={value}
        placeholder={placeholder ?? ''}
        placeholderTextColor={'#747688'}
        onChangeText={val => onChange(val)}
        secureTextEntry={isShowPass}
        keyboardType={type ?? 'default'}
      />
      {suffix ?? suffix}
      <TouchableOpacity onPress={isPassword ? () => setIsShowPass(!isShowPass) : () => onChange('')}>
        {isPassword ? (
          <Entypo
            name={isShowPass ? 'eye-with-line' : 'eye'}
            size={22}
            color={appColors.grey}
          />
        ) : (
          value.length > 0 && (
            <AntDesign name='close' size={22} color={appColors.text} />
          )
        )}
      </TouchableOpacity>
    </View>
  )
}

export default InputComponent

const styles = StyleSheet.create ({
  inputContainer: {
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColors.grey3,
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
