import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import Head from '../component/Head';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PasswordInput from '../component/PasswordInput';
import Button from '../component/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Authentication = () => {
  const navigation = useNavigation();
  const { width } = Dimensions.get('window');
  const [password, setpassword] = useState('');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Head
        title={'Authentication'}
        subtitle={
          'Please enter the authentication code we just sent to radom@gmail.com'
        }
        placeText={'Code'}
        placeholder={'7894'}
        keyboardType="numeric"
      />

      <Text
        style={{
          color: '#006416',
          fontFamily: 'Poppins-Regular',
          fontSize: width * 0.04,
          textAlign: 'right',
          marginBottom: width * 0.03,
          marginHorizontal: width * 0.05,
        }}
      >
        Resend Code
      </Text>
      {/*  */}
      <Button title="Continue" onPress={() => navigation.navigate('Use')} />
      {/*  */}
    </SafeAreaView>
  );
};

export default Authentication;
