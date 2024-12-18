import { View, Text, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ButtonComponent } from '../../components'

const LoginScreen = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text>LoginScreen</Text>
      <Button title='Login' onPress={async () => await AsyncStorage.setItem('assetToken', 'fafafa')} />
      <ButtonComponent
        text='forget Password'
        onPress={() => console.log('Login')}
        type='link'
        icon={
          <View>
            <Text>N</Text>
          </View>
        }
      />
    </View>
  )
}

export default LoginScreen