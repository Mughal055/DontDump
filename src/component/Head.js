import { View, Text, Image } from 'react-native';
import React from 'react';
import { Dimensions } from 'react-native';
import { TextInput } from 'react-native';

const Head = ({
  title,
  subtitle,
  placeText,
  placeholder,
  ShowImage = true,
  value,
  onChangeText,
  onSubmitEditing,
  keyboardType = 'email-address',
  returnKeyType = 'go',
}) => {
  const { width } = Dimensions.get('window');
  return (
    <View style={{ backgroundColor: '#E1FFE7' }}>
      {ShowImage && (
        <Image
          source={require('../assets/Img/Logo.png')}
          style={{
            width: width * 0.25,
            height: width * 0.25,
            backgroundColor: '#E1FFE7',
          }}
        />
      )}
      <View
        style={{
          backgroundColor: '#fff',
          padding: width * 0.05,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
        }}
      >
        {title && (
          <Text
            style={{
              color: '#1E1E1E',
              fontFamily: 'Poppins-Medium',
              fontSize: width * 0.09,
            }}
          >
            {title}
          </Text>
        )}
        {subtitle && (
          <Text
            style={{
              color: '#AEAEAE',
              fontFamily: 'Poppins-Regular',
              fontSize: width * 0.04,
            }}
          >
            {subtitle}
          </Text>
        )}
        <View>
          {placeText && (
            <Text
              style={{
                color: '#000',
                fontFamily: 'Poppins-Regular',
                fontSize: width * 0.04,
                marginTop: width * 0.03,
              }}
            >
              {placeText}
            </Text>
          )}
          {placeholder && (
            <TextInput
              placeholder={placeholder}
              placeholderTextColor={'#000'}
              value={value}
              onChangeText={onChangeText}
              onSubmitEditing={onSubmitEditing}
              keyboardType={keyboardType}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType={returnKeyType}
              style={{
                borderColor: '#E7E7E7',
                borderWidth: 1,
                borderRadius: 10,
                fontFamily: 'Poppins-Regular',
                paddingHorizontal: width * 0.03,
                paddingVertical: width * 0.03,
                marginTop: width * 0.02,
              }}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default Head;
