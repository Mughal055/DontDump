import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import Head from '../component/Head';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PasswordInput from '../component/PasswordInput';
import Button from '../component/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Top from '../component/Top';

const ChangePass = () => {
  const navigation = useNavigation();
  const { width } = Dimensions.get('window');
  const [password, setpassword] = useState('');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Top title={'Change Password'} />

      <View
        style={{
          backgroundColor: '#fff',
          paddingHorizontal: width * 0.05,
          flex: 1,
        }}
      >
        {/*  */}
        <Text
          style={{
            color: '#000',
            fontFamily: 'Poppins-Regular',
            fontSize: width * 0.04,
            marginVertical: width * 0.03,
          }}
        >
          Old Password
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
            marginVertical: width * 0.03,
          }}
        >
          New Password
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
            marginVertical: width * 0.03,
          }}
        >
          Confirm Password
        </Text>
        {/*  */}
        <PasswordInput
          placeholder="Confirm Password"
          value={password}
          onChangeText={setpassword}
        />
        {/*  */}

        {/*  */}
        <View style={{ marginTop: 'auto' }}>
          <Button
            title="Update"
            onPress={() => navigation.navigate('created')}
          />
        </View>
        {/*  */}
      </View>
    </SafeAreaView>
  );
};

export default ChangePass;
