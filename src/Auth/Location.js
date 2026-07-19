import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Head from '../component/Head';
import Input from '../component/Input';
import Button from '../component/Button';
import { useNavigation } from '@react-navigation/native';

const Location = () => {
  const navigation = useNavigation();
  const { width } = Dimensions.get('window');
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Head
        title={'Location'}
        subtitle={
          'In order to show you the most interesting listings we need your location.'
        }
      />
      <Input icon={'location-outline'} placeholder={'Search location'} />
      <Input
        placeholder={'Use my current location'}
        placeholderTextColor="#006416"
      />
      {/*  */}
      <View style={{ marginTop: 'auto', marginBottom: width * 0.08 }}>
        <Button
          title="Continue"
          onPress={() => navigation.navigate('Location2')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Location;
