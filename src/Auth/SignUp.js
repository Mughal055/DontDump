import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import Head from '../component/Head';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PasswordInput from '../component/PasswordInput';
import Button from '../component/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const SignUp = () => {
  const navigation = useNavigation();
  const { width } = Dimensions.get('window');
  const [password, setpassword] = useState('');
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Head
        title={'Let’s Get Started!'}
        subtitle={'Please Enter Your E-Mail-Address'}
        placeText={'Your E-Mail Address'}
        placeholder={'E-Mail'}
      />

      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          width: width * 0.15,
          height: width * 0.15,
          borderRadius: (width * 0.15) / 2,
          backgroundColor: '#1E7A2E',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'flex-end',
          marginTop: width * 0.25,
          marginRight: width * 0.04,
        }}
        onPress={() => navigation.navigate('Authentication')}
      >
        <Ionicons name="arrow-forward" size={width * 0.07} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUp;
