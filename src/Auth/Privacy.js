import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import React from 'react';
import Top from '../component/Top';

const { width } = Dimensions.get('window');

const Privacy = () => {
  return (
    <View style={styles.container}>
      <Top title="Privacy Policy" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Section 1 */}
        <View style={styles.section}>
          <Text style={styles.heading}>1. Types of Data We Collect</Text>
          <Text style={styles.bodyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
            augue sit amet est molestie viverra. Nunc quis bibendum orci. Donec
            feugiat massa mi, at hendrerit mauris rutrum at.
          </Text>
          <Text style={styles.bodyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
            augue sit amet est molestie viverra. Nunc quis bibendum orci. Donec
            feugiat massa mi, at hendrerit mauris rutrum at.
          </Text>
        </View>

        {/* Section 2 */}
        <View style={styles.section}>
          <Text style={styles.heading}>2. Use of Your Personal Data</Text>
          <Text style={styles.bodyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
            augue sit amet est molestie viverra. Nunc quis bibendum orci. Donec
            feugiat massa mi, at hendrerit mauris rutrum at.
          </Text>
          <Text style={styles.bodyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
            augue sit amet est molestie viverra. Nunc quis bibendum orci. Donec
            feugiat massa mi, at hendrerit mauris rutrum at.
          </Text>
        </View>

        {/* Section 3 */}
        <View style={styles.section}>
          <Text style={styles.heading}>3. Disclosure</Text>
          <Text style={styles.bodyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
            augue sit amet est molestie viverra. Nunc quis bibendum orci. Donec
            feugiat massa mi, at hendrerit mauris rutrum at.
          </Text>
          <Text style={styles.bodyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
            augue sit amet est molestie viverra. Nunc quis bibendum orci. Donec
            feugiat massa mi, at hendrerit mauris rutrum at.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Privacy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: width * 0.05,
    paddingTop: width * 0.04,
    paddingBottom: width * 0.08,
  },
  section: {
    marginBottom: width * 0.012,
  },
  heading: {
    fontSize: width * 0.04,
    fontFamily: 'Poppins-Medium',
    color: '#1A1A1A',
    marginBottom: width * 0.03,
  },
  bodyText: {
    fontSize: width * 0.037,
    color: '#BDBDBD',
    lineHeight: width * 0.053,
    marginBottom: width * 0.03,
    fontFamily: 'Poppins-Regular',
  },
});
