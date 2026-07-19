import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const Input = ({
  icon,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  style,
  height,
  multiline = false,
  placeholderTextColor = '#000',
}) => {
  return (
    <View style={[styles.container, style]}>
      {icon && <Icon name={icon} size={22} color="#888" style={styles.icon} />}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        multiline={multiline}
        style={[
          styles.input,
          icon && styles.inputWithIcon,
          {
            height: height || 50,
            textAlignVertical: multiline ? 'top' : 'center',
          },
        ]}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    position: 'relative',
  },

  input: {
    borderColor: '#E7E7E7',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.03,
    marginTop: width * 0.03,
  },

  inputWithIcon: {
    paddingLeft: width * 0.12,
  },

  icon: {
    position: 'absolute',
    left: 15,
    top: 22,
    color: '#006416',
    zIndex: 1,
  },
});
