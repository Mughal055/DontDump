import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';
import Head from '../component/Head';
import Input from '../component/Input';
import Button from '../component/Button';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Location2 = () => {
  const navigation = useNavigation();

  // Default coordinates (18th Avenue, New York City — as per mockup)
  const currentLocation = {
    latitude: 40.6459,
    longitude: -73.9847,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Head title={'Location'} subtitle={'Please select your location'} />

      <View style={styles.content}>
        <Input icon={'location-outline'} placeholder={'Search location'} />

        {/* Your current location row */}
        <View style={styles.currentLocationRow}>
          <Text style={styles.currentLocationLabel}>Your current location</Text>
          <TouchableOpacity>
            <Text style={styles.markOnMap}>Mark on map</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.addressRow}>
          <Text style={styles.pinIcon}>📍</Text>
          <View>
            <Text style={styles.addressTitle}>18th Avenue</Text>
            <Text style={styles.addressSubtitle}>New York City</Text>
          </View>
        </View>

        {/* Map */}
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={currentLocation}
            showsUserLocation
            showsMyLocationButton={false}
          >
            <Marker coordinate={currentLocation} />
          </MapView>
        </View>
      </View>

      <View
        style={{
          marginTop: 'auto',
          marginBottom: width * 0.08,
          paddingHorizontal: width * 0.05,
        }}
      >
        <Button title="Continue" onPress={() => navigation.navigate('Phone')} />
      </View>
    </SafeAreaView>
  );
};

export default Location2;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: width * 0.05,
    marginTop: width * 0.04,
  },
  currentLocationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: width * 0.06,
  },
  currentLocationLabel: {
    fontSize: width * 0.038,
    fontWeight: '600',
    color: '#111',
    fontFamily: 'Poppins-Regular',
  },
  markOnMap: {
    fontSize: width * 0.033,
    color: '#2e7d32',
    fontFamily: 'Poppins-Regular',
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: width * 0.03,
  },
  pinIcon: {
    fontSize: width * 0.045,
    marginRight: width * 0.02,
  },
  addressTitle: {
    fontSize: width * 0.038,
    fontWeight: '600',
    color: '#111',
    fontFamily: 'Poppins-Regular',
  },
  addressSubtitle: {
    fontSize: width * 0.033,
    color: '#777',
    fontFamily: 'Poppins-Regular',
  },
  mapContainer: {
    marginTop: width * 0.04,
    borderRadius: width * 0.04,
    overflow: 'hidden',
    height: width * 0.85,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
