import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import Head from '../component/Head';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PasswordInput from '../component/PasswordInput';
import Button from '../component/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const ForgotPass = () => {
  const navigation = useNavigation();
  const { width } = Dimensions.get('window');
  const [password, setpassword] = useState('');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Head
        title={'Forgot Password?'}
        subtitle={'Enter your E-Mail Address to reset your password.'}
        placeText={'Your E-Mail Address'}
        placeholder={'E-Mail'}
      />
      <View
        style={{
          backgroundColor: '#fff',
          paddingHorizontal: width * 0.05,
          flex: 1,
        }}
      >
        <Button title="Send" onPress={() => navigation.navigate('ResetPass')} />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPass;
