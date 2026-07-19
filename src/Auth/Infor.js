import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import Top from '../component/Top';
import Button from '../component/Button';

const { width } = Dimensions.get('window');

const Infor = () => {
  return (
    <View style={styles.container}>
      <Top title={'Account Information'} />

      <ScrollView contentContainerStyle={styles.content}>
        {/* Email */}
        <View style={styles.fieldBlock}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Email</Text>
          </View>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              value="random123@gmail.com"
              editable={false}
            />
            <Text style={styles.verified}>Verified</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.changeLink}>Change Email</Text>
          </TouchableOpacity>
        </View>

        {/* Phone Number */}
        <View style={styles.fieldBlock}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Phone Number</Text>
          </View>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              value="#7287897498"
              editable={false}
            />
            <Text style={styles.verified}>Verified</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.changeLink}>Change Phone Number</Text>
          </TouchableOpacity>
        </View>

        {/* Shipping Address */}
        <View style={styles.fieldBlock}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Shipping Address</Text>
          </View>
          <TextInput
            style={[styles.input, styles.addressInput]}
            value="123 E Set, New york, USA"
            editable={false}
            multiline
          />
          <TouchableOpacity>
            <Text style={styles.changeLink}>Change Address</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <Button
          title="Delete Account"
          backgroundColor="rgb(230, 230, 227)"
          textColor="#000"
        />

        <Button title="Update" />
      </View>
    </View>
  );
};

export default Infor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: width * 0.05,
    paddingTop: width * 0.025,
  },
  fieldBlock: {
    marginBottom: width * 0.055,
  },
  labelRow: {
    marginBottom: width * 0.015,
  },
  label: {
    fontSize: width * 0.035,
    color: '#333',
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: width * 0.02,
    paddingHorizontal: width * 0.01,
  },
  input: {
    flex: 1,
    fontSize: width * 0.035,
    color: '#111',
    fontFamily: 'Poppins-Regular',
  },
  addressInput: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: width * 0.02,
    paddingHorizontal: width * 0.02,
    paddingVertical: width * 0.02,
  },
  verified: {
    color: '#2e7d32',
    fontSize: width * 0.032,
    fontWeight: '600',
    marginLeft: width * 0.02,
    fontFamily: 'Poppins-Regular',
  },
  changeLink: {
    color: '#1565c0',
    fontSize: width * 0.03,
    marginTop: width * 0.015,
    textAlign: 'right',
    fontFamily: 'Poppins-Regular',
  },
});
