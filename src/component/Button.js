import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('screen');

const Button = ({
  onPress,
  backgroundColor = '#006416',
  textColor = '#fff',
  style,
  title = 'Continue',
  icon,
}) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <TouchableOpacity
        style={[styles.btn, { backgroundColor }, style]}
        onPress={onPress}
        activeOpacity={0.8}
      >
        {icon && (
          <Ionicons
            name={icon}
            size={20}
            color={textColor}
            style={{ marginRight: 8 }}
          />
        )}

        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#050A30',
    width: width - 60,
    height: 56,

    marginBottom: width * 0.05,
  },

  text: {
    fontSize: width * 0.04,
    fontFamily: 'Poppins-Regular',
  },
});

export default Button;
