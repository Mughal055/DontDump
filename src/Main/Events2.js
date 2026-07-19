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

const { width } = Dimensions.get('window');

const Events2 = () => {
  const [repeating, setRepeating] = useState('Weekly');
  const [entryFee, setEntryFee] = useState('1,00€');
  const [stallFee, setStallFee] = useState('5€/m');

  return (
    <SafeAreaView style={styles.container}>
      <Top title="Create Event" />

      <View style={styles.form}>
        {/* Repeating Event */}
        <Text style={styles.label}>Repeating Event</Text>
        <TouchableOpacity style={styles.dropdown} activeOpacity={0.8}>
          <Text style={styles.dropdownText}>{repeating}</Text>
          <Ionicons name="chevron-down" size={width * 0.05} color="#9A9A9A" />
        </TouchableOpacity>

        {/* Entry fee for visitor */}
        <Text style={styles.label}>Entry fee for visitor</Text>
        <TextInput
          style={styles.input}
          placeholder="Entry fee"
          placeholderTextColor="#9A9A9A"
          value={entryFee}
          onChangeText={setEntryFee}
          keyboardType="numeric"
        />

        {/* Stall fee for seller */}
        <Text style={styles.label}>Stall fee for seller</Text>
        <TextInput
          style={styles.input}
          placeholder="Stall fee"
          placeholderTextColor="#9A9A9A"
          value={stallFee}
          onChangeText={setStallFee}
          keyboardType="numeric"
        />

        {/* Event Start and End */}
        <Text style={styles.label}>Event Start and End</Text>
        <Text style={styles.subLabel}>
          Add an event start and an event end time
        </Text>

        <View style={styles.dateRow}>
          <TouchableOpacity style={styles.dateBox} activeOpacity={0.8}>
            <View>
              <Text style={styles.dateText}>23, May 2025</Text>
              <Text style={styles.timeText}>09:00 AM</Text>
            </View>
            <Ionicons
              name="chevron-down"
              size={width * 0.045}
              color="#9A9A9A"
            />
          </TouchableOpacity>

          <Text style={styles.toText}>To</Text>

          <TouchableOpacity style={styles.dateBox} activeOpacity={0.8}>
            <View>
              <Text style={styles.dateText}>23, May 2025</Text>
              <Text style={styles.timeText}>09:00 PM</Text>
            </View>
            <Ionicons
              name="chevron-down"
              size={width * 0.045}
              color="#9A9A9A"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonWrapper}>
        <Button title="Create" />
      </View>
    </SafeAreaView>
  );
};

export default Events2;

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
  subLabel: {
    fontSize: width * 0.028,
    fontFamily: 'Poppins-Regular',
    color: '#B0B0B0',
    marginTop: -width * 0.015,
    marginBottom: width * 0.025,
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
    color: '#111',
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: width * 0.025,
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.025,
  },
  dateText: {
    fontSize: width * 0.032,
    fontFamily: 'Poppins-Medium',
    color: '#111',
  },
  timeText: {
    fontSize: width * 0.028,
    fontFamily: 'Poppins-Regular',
    color: '#9A9A9A',
    marginTop: width * 0.005,
  },
  toText: {
    fontSize: width * 0.032,
    fontFamily: 'Poppins-Regular',
    color: '#888',
    marginHorizontal: width * 0.02,
  },
  buttonWrapper: {
    width: width * 0.92,
    alignSelf: 'center',
    marginBottom: width * 0.06,
    marginTop: 'auto',
  },
});
