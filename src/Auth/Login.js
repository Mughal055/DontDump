import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import Head from '../component/Head';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PasswordInput from '../component/PasswordInput';
import Button from '../component/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Main from '../navigation/Main';

const Login = () => {
  const navigation = useNavigation();
  const { width } = Dimensions.get('window');
  const [password, setpassword] = useState('');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Head
        title={'Welcome Back!'}
        subtitle={'Please Enter Your Details'}
        placeText={'E-Mail Address'}
        placeholder={'E-Mail'}
      />
      <View
        style={{
          backgroundColor: '#fff',
          paddingHorizontal: width * 0.05,
          flex: 1,
        }}
      >
        <Text
          style={{
            color: '#000',
            fontFamily: 'Poppins-Regular',
            fontSize: width * 0.04,
          }}
        >
          Password
        </Text>
        {/*  */}
        <PasswordInput
          placeholder="Password"
          value={password}
          onChangeText={setpassword}
        />
        {/*  */}

        <Text
          style={{
            color: '#000',
            fontFamily: 'Poppins-Regular',
            fontSize: width * 0.04,
            textAlign: 'right',
            marginVertical: width * 0.03,
          }}
          onPress={() => navigation.navigate('ForgotPass')}
        >
          Forgot Password?
        </Text>
        {/*  */}
        <Button title="Login" />
        {/*  */}

        {/* Bottom section pushed to end of screen */}
        <View
          style={{
            marginTop: 'auto', // 👈 ye poore bottom block ko neeche push karega
            marginBottom: width * 0.1,
            alignItems: 'center',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: '#000',
                fontFamily: 'Poppins-Regular',
                fontSize: width * 0.04,
              }}
            >
              Don't have an account?{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text
                style={{
                  color: '#0F5C1F',
                  fontFamily: 'Poppins-Medium',
                  fontSize: width * 0.04,
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

          {/* Home text — ab Sign Up line ke neeche, center mein */}
          <TouchableOpacity onPress={() => navigation.navigate('BottomTab')}>
            <Text
              style={{
                color: '#0F5C1F',
                fontFamily: 'Poppins-Medium',
                fontSize: width * 0.04,
                marginTop: width * 0.03,
              }}
            >
              Bottom Tab
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
