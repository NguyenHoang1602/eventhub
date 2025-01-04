import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardType } from 'react-native'
import React, { ReactNode, useState } from 'react'
import { fontFamilies } from '../constants/fontFamilies'
import { appColors } from '../constants/appColors'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { Sms } from 'iconsax-react-native';
import { Controller, useFormContext } from 'react-hook-form';
type Props = {
  label?: string
  placeholder?: string
  name: string
  affix?: ReactNode
  suffix?: ReactNode
  isPassword?: boolean
  type?: KeyboardType;
}
const CInputComponents = (props: Props) => {

  const { label, placeholder, name, affix, suffix, isPassword } = props
  const [isShow, setIsShow] = useState<boolean>(true);
  const handleClearText = (onChange: any) => {
    onChange('');
  };
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.viewInput,
      {
        borderColor: errors[name]
          ? appColors.red
          : appColors.grey3
      }
      ]}>
        {affix ?? affix}
        <Controller
          name={name}
          control={control}
          render={({ field: { value, onChange, onBlur } }) => (
            <>
              <TextInput
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={isPassword && isShow}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
              {isPassword ? (
                <TouchableOpacity onPress={() => setIsShow(prev => !prev)}>
                <Entypo
                  name={isShow ? 'eye-with-line' : 'eye'}
                  size={22}
                  color={appColors.grey} />
              </TouchableOpacity>
              ) : (
                value!=='' && <AntDesign name='closecircle' size={20} color={appColors.grey} onPress={ () => handleClearText(onChange)} />
              )}
            </>
          )}
        />
      </View>
      {
        errors[name] && <Text style={styles.txtError}>{(errors[name]?.message ?? '') as string}</Text>
      }
    </View>
  )
}

export default CInputComponents

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontFamily: fontFamilies.regular,
    marginTop: 10
  },
  viewInput: {
    borderWidth: 1,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 25,
    minHeight: 56,
    borderRadius: 12,
    gap: 14,
  },
  input: {
    flex: 1,
    fontFamily: fontFamilies.regular,
    color: appColors.text,
    fontSize: 15,
  },
  txtError: {
    fontSize: 12,
    fontFamily: fontFamilies.regular,
    color: appColors.red,
    marginTop: 10,
    marginBottom: -10
  }
})