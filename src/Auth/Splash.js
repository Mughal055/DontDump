import { View, Text, Image, Dimensions } from 'react-native';
import React from 'react';

const { width } = Dimensions.get('window');

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}
    >
      <Image
        source={require('../assets/Img/Logo.png')}
        style={{ width: width * 0.4, height: width * 0.4 }}
        resizeMode="contain"
      />
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontSize: width * 0.08,
        }}
      >
        Don't Dump
      </Text>
    </View>
  );
};

export default Splash;
