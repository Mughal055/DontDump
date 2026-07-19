import {
  View,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PasswordInput = ({ placeholder = 'Password', value, onChangeText }) => {
  const { width } = useWindowDimensions();
  const [Eye, setEye] = useState(true);

  return (
    <View style={{ position: 'relative', justifyContent: 'center' }}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#000'}
        secureTextEntry={Eye}
        onChangeText={onChangeText}
        value={value}
        style={{
          borderColor: '#E7E7E7',
          borderWidth: 1,
          borderRadius: 10,
          fontFamily: 'Poppins-Regular',
        }}
      />

      <TouchableOpacity
        onPress={() => setEye(!Eye)}
        style={{ position: 'absolute', right: width * 0.03 }}
      >
        {Eye ? (
          <Ionicons name="eye" size={width * 0.055} />
        ) : (
          <Ionicons name="eye-off" size={width * 0.055} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;
