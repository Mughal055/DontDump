import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import Top from '../component/Top';
import Button from '../component/Button';

const { width } = Dimensions.get('window');

const ArmChair = () => {
  const details = [
    { label: 'Category', value: 'Home Appliances' },
    { label: 'Date & Time', value: 'May 10.20225, 9:00 am' },
    { label: 'Location', value: 'Berlin, 1km away', isLocation: true },
    { label: 'Pick-Up Hours', value: 'Anytime' },
  ];

  return (
    <View style={styles.container}>
      <Top title={'Listing Details'} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Image with Giveaway badge */}
        <View style={styles.imageWrapper}>
          <Image
            source={require('../assets/Img/list1.jpg')}
            style={styles.image}
          />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Giveaway</Text>
          </View>
        </View>

        {/* Title */}
        <Text style={styles.title}>Blue Armchair</Text>

        {/* Details list */}
        <View style={styles.detailsContainer}>
          {details.map((item, index) => (
            <View key={index} style={styles.detailRow}>
              <Text style={styles.detailLabel}>{item.label}</Text>
              <View style={styles.detailValueWrapper}>
                {item.isLocation && <View style={styles.dot} />}
                <Text style={styles.detailValue}>{item.value}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Descriptions</Text>
          <Text style={styles.descriptionText}>
            Comfortable armchair in a good condition, available for free ideal
            for cozy reading corner as an extra seat.
          </Text>
        </View>
      </ScrollView>

      {/* Action buttons */}

      <Button title="Delete" />
      <Button title="Edit" />
    </View>
  );
};

export default ArmChair;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageWrapper: {
    width: width * 0.92,
    alignSelf: 'center',
    marginTop: width * 0.02,
    borderRadius: width * 0.04,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: width * 0.45,
    resizeMode: 'cover',
  },
  badge: {
    position: 'absolute',
    top: width * 0.03,
    right: width * 0.03,
    backgroundColor: '#1E7A4C',
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.013,
    borderRadius: width * 0.04,
  },
  badgeText: {
    color: '#fff',
    fontSize: width * 0.032,
    fontFamily: 'Poppins-Medium',
  },
  title: {
    fontSize: width * 0.052,
    fontFamily: 'Poppins-Medium',
    width: width * 0.92,
    alignSelf: 'center',
    marginTop: width * 0.04,
    color: '#111',
  },
  detailsContainer: {
    width: width * 0.92,
    alignSelf: 'center',
    marginTop: width * 0.04,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: width * 0.026,
  },
  detailLabel: {
    fontSize: width * 0.036,
    fontFamily: 'Poppins-Regular',
    color: '#888',
  },
  detailValueWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: width * 0.02,
    height: width * 0.02,
    borderRadius: width * 0.01,
    backgroundColor: '#1E7A4C',
    marginRight: width * 0.015,
  },
  detailValue: {
    fontSize: width * 0.036,
    fontFamily: 'Poppins-Medium',
    color: '#111',
  },
  descriptionContainer: {
    width: width * 0.92,
    alignSelf: 'center',
    marginTop: width * 0.04,
    paddingBottom: width * 0.26,
  },
  descriptionTitle: {
    fontSize: width * 0.04,
    fontFamily: 'Poppins-Medium',
    color: '#111',
    marginBottom: width * 0.015,
  },
  descriptionText: {
    fontSize: width * 0.034,
    fontFamily: 'Poppins-Regular',
    lineHeight: width * 0.052,
    color: '#666',
  },
  buttonRow: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: width * 0.06,
    width: width * 0.92,
    alignSelf: 'center',
    justifyContent: 'space-between',
    gap: width * 0.03,
  },
  deleteButton: {
    flex: 1,
    backgroundColor: '#0B3B24',
    paddingVertical: width * 0.037,
    borderRadius: width * 0.08,
    alignItems: 'center',
  },
  editButton: {
    flex: 1,
    backgroundColor: '#1E7A4C',
    paddingVertical: width * 0.037,
    borderRadius: width * 0.08,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.04,
    fontFamily: 'Poppins-Medium',
  },
});
