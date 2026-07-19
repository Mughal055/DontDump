import { View, Text, Image, Dimensions } from 'react-native';
import React from 'react';

const { width } = Dimensions.get('window');

const created = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#E8F5E9',
      }}
    >
      <Image
        source={require('../assets/Img/create.png')}
        style={{ width: width * 0.3, height: width * 0.3 }}
        resizeMode="contain"
      />
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontSize: width * 0.08,
          marginTop: 10,
        }}
      >
        Password updated
      </Text>
      {/*  */}
      <Image
        source={require('../assets/Img/Logo.png')}
        style={{
          position: 'absolute',
          bottom: -width * 0.22,
          right: -width * 0.25,
          width: width * 0.9,
          height: width * 0.9,
          opacity: 0.35,
          transform: [{ rotate: '-46deg' }],
        }}
        resizeMode="contain"
      />
    </View>
  );
};

export default created;
