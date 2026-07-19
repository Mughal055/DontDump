import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import Head from '../component/Head';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PasswordInput from '../component/PasswordInput';
import Button from '../component/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const ResetPass = () => {
  const navigation = useNavigation();
  const { width } = Dimensions.get('window');
  const [password, setpassword] = useState('');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Head title={'Reset Password'} subtitle={'Create a new password.'} />

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
            marginVertical: width * 0.01,
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
            marginVertical: width * 0.01,
          }}
        >
          Confirm New Password
        </Text>
        {/*  */}
        <PasswordInput
          placeholder="Confirm Password"
          value={password}
          onChangeText={setpassword}
        />
        {/*  */}

        {/*  */}
        <View style={{ marginTop: width * 0.05 }}>
          <Button
            title="Change Password"
            onPress={() => navigation.navigate('created')}
          />
        </View>
        {/*  */}
      </View>
    </SafeAreaView>
  );
};

export default ResetPass;
