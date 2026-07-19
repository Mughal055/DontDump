import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Top = ({ title }) => {
  const navigation = useNavigation();
  const { width } = Dimensions.get('window');

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: width * 0.05,
        paddingVertical: width * 0.04,
        borderBottomWidth: 1,
        borderBottomColor: '#EDEDED',
        backgroundColor: '#fff',
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: 'absolute',
          left: width * 0.05,
          zIndex: 1,
        }}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Ionicons name="arrow-back" size={width * 0.06} color="#000" />
      </TouchableOpacity>

      <Text
        style={{
          flex: 1,
          textAlign: 'center',
          fontSize: width * 0.045,
          fontFamily: 'Poppins-Medium',
          color: '#000',
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default Top;
