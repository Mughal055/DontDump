import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Top from '../component/Top';
import Button from '../component/Button';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Events = () => {
  const navigation = useNavigation();
  const [eventName, setEventName] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Top title="Create Event" />

      <View style={styles.form}>
        {/* Event Name */}
        <Text style={styles.label}>Event Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Event Name"
          placeholderTextColor="#9A9A9A"
          value={eventName}
          onChangeText={setEventName}
        />

        {/* Categories */}
        <Text style={styles.label}>Categories</Text>
        <TouchableOpacity style={styles.dropdown} activeOpacity={0.8}>
          <Text style={styles.dropdownText}>
            {category || 'Select Categories'}
          </Text>
          <Ionicons name="chevron-down" size={width * 0.05} color="#9A9A9A" />
        </TouchableOpacity>

        {/* Upload Images */}
        <Text style={styles.label}>Upload Images</Text>
        <TouchableOpacity style={styles.uploadBox} activeOpacity={0.8}>
          <Ionicons
            name="cloud-upload-outline"
            size={width * 0.08}
            color="#1E7A4C"
            style={styles.uploadIcon}
          />
          <Text style={styles.uploadText}>
            <Text style={styles.uploadLink}>Click here to upload images</Text>
            {' or drag and drop'}
          </Text>
          <Text style={styles.uploadHint}>
            SVG, PNG, JPG or GIF (max. 800x400px)
          </Text>
        </TouchableOpacity>

        {/* Add Location */}
        <Text style={styles.label}>Add Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Location"
          placeholderTextColor="#9A9A9A"
          value={location}
          onChangeText={setLocation}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          title="Continue"
          onPress={() => navigation.navigate('Main', { screen: 'Events2' })}
        />
      </View>
    </SafeAreaView>
  );
};

export default Events;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  form: {
    width: width * 0.92,
    alignSelf: 'center',
    marginTop: width * 0.03,
  },
  label: {
    fontSize: width * 0.036,
    fontFamily: 'Poppins-Medium',
    color: '#111',
    marginBottom: width * 0.02,
    marginTop: width * 0.045,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: width * 0.025,
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.032,
    fontSize: width * 0.034,
    fontFamily: 'Poppins-Regular',
    color: '#111',
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: width * 0.025,
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.032,
  },
  dropdownText: {
    fontSize: width * 0.034,
    fontFamily: 'Poppins-Regular',
    color: '#9A9A9A',
  },
  uploadBox: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderStyle: 'dashed',
    borderRadius: width * 0.025,
    paddingVertical: width * 0.06,
    paddingHorizontal: width * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadIcon: {
    marginBottom: width * 0.02,
  },
  uploadText: {
    fontSize: width * 0.03,
    fontFamily: 'Poppins-Regular',
    color: '#888',
    textAlign: 'center',
  },
  uploadLink: {
    fontFamily: 'Poppins-Medium',
    color: '#1E7A4C',
  },
  uploadHint: {
    fontSize: width * 0.026,
    fontFamily: 'Poppins-Regular',
    color: '#B0B0B0',
    marginTop: width * 0.015,
    textAlign: 'center',
  },
  buttonWrapper: {
    width: width * 0.92,
    alignSelf: 'center',
    marginBottom: width * 0.06,
    marginTop: 'auto',
  },
});
