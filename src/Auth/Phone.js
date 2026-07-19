import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Head from '../component/Head';
import Input from '../component/Input';
import Button from '../component/Button';
import { useNavigation } from '@react-navigation/native';

const Phone = () => {
  const navigation = useNavigation();
  const { width } = Dimensions.get('window');
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Head
        title={'Phone No Verification'}
        subtitle={
          'In order to make this a safer app we ask all users to verify their phone number.'
        }
        placeText={'Please Enter Your Phone Number'}
        placeholder={'+234  Phone Number'}
      />

      {/*  */}
      <View style={{ marginTop: 'auto', marginBottom: width * 0.08 }}>
        <Button title="Continue" onPress={() => navigation.navigate('Hours')} />
      </View>
    </SafeAreaView>
  );
};

export default Phone;
