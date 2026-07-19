import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import Head from '../component/Head';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PasswordInput from '../component/PasswordInput';
import Button from '../component/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Input from '../component/Input';

const { width, height } = Dimensions.get('window');

const Use = () => {
  const navigation = useNavigation();
  const { width } = Dimensions.get('window');
  const [password, setpassword] = useState('');
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Head title={'Are you registering as a business or a charity?'} />
      <Input placeholder={'Charity'} />
      <Input placeholder={'Charity Organization'} />
      <Input placeholder={'Second-Hand Shop'} />
      <Input placeholder={'Repair Shop'} />
      {/*  */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin: width * 0.05,
          marginTop: 'auto',
        }}
      >
        <Ionicons
          name="alert-circle-outline"
          size={width * 0.05}
          color={'#006416'}
          style={{ marginRight: width * 0.01 }}
        />
        <Text
          style={{
            color: '#5C5C5C',
            fontFamily: 'Poppins-Regular',
            fontSize: width * 0.03,
          }}
        >
          Special legal requirements apply to commercial users and charities! If
          you are registering as a private individual, please select "None of
          the above."
        </Text>
      </View>
      {/*  */}
      <View style={{ marginBottom: width * 0.05 }}>
        <Button
          title="None of the above"
          onPress={() => navigation.navigate('Location')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Use;
