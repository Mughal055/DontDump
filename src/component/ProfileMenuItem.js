import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileMenuItem = ({ icon, label, onPress, iconColor = '#1E8E3E' }) => {
  const { width } = Dimensions.get('window');

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: width * 0.035,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
      }}
    >
      <View
        style={{
          width: width * 0.09,
          height: width * 0.09,
          borderRadius: width * 0.045,
          backgroundColor: '#EAF7EC',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: width * 0.035,
        }}
      >
        <Ionicons name={icon} size={width * 0.045} color={iconColor} />
      </View>

      <Text
        style={{
          flex: 1,
          fontSize: width * 0.038,
          fontFamily: 'Poppins-Medium',
          color: '#222222',
        }}
      >
        {label}
      </Text>

      <Ionicons name="chevron-forward" size={width * 0.045} color="#B0B0B0" />
    </TouchableOpacity>
  );
};

export default ProfileMenuItem;
