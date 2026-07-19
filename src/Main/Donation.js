import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Top from '../component/Top';
import Button from '../component/Button';
import F4 from '../assets/Img/F4.jpg';
import F6 from '../assets/Img/F6.jpg';
import dp from '../assets/Img/dp.jpg';

const { width } = Dimensions.get('window');

// ---- Dummy data (apna API/route params se replace karo) ----
const event = {
  title: 'Lahore Donation Drive',
  status: 'Upcoming',
  date: 'May 15, 2025 3:00 pm',
  location: 'Berlin, 1 km away',
  categories: 'Food, Children Toys',
  participantsCount: '03',
  image: F6,
  participants: [
    {
      id: '1',
      name: 'Sesame Street 123',
      contribution: 'Food/Childrens Toys',
      avatar: F4,
    },
    {
      id: '2',
      name: 'Sesame Street 123',
      contribution: 'Food/Childrens Toys',
      avatar: dp,
    },
  ],
};

const Donation = () => {
  const [liked, setLiked] = React.useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Top title={'Lahore Donation Drive'} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: width * 0.05 }}
      >
        {/* ---- Banner Image ---- */}
        <View style={styles.imageWrapper}>
          <Image source={event.image} style={styles.image} />

          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>{event.status}</Text>
          </View>

          <View style={styles.imageActions}>
            <TouchableOpacity
              style={styles.circleButton}
              onPress={() => setLiked(!liked)}
            >
              <Ionicons
                name={liked ? 'heart' : 'heart-outline'}
                size={width * 0.045}
                color={liked ? '#e53935' : '#2e7d32'}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.circleButton}>
              <Ionicons
                name="share-social-outline"
                size={width * 0.042}
                color="#2e7d32"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* ---- Title & Date ---- */}
        <View style={styles.content}>
          <Text style={styles.title}>{event.title}</Text>
          <Text style={styles.date}>{event.date}</Text>

          <View style={styles.locationRow}>
            <Ionicons
              name="location-sharp"
              size={width * 0.038}
              color="#2e7d32"
            />
            <Text style={styles.locationText}>{event.location}</Text>
          </View>

          <View style={styles.divider} />

          {/* ---- Categories ---- */}
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Categories</Text>
            <Text style={styles.infoValue}>{event.categories}</Text>
          </View>

          <View style={styles.divider} />

          {/* ---- Participants ---- */}
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Participants</Text>
            <Text style={styles.infoValue}>{event.participantsCount}</Text>
          </View>

          {event.participants.map(p => (
            <View key={p.id} style={styles.participantRow}>
              <Image source={p.avatar} style={styles.avatar} />
              <View style={{ marginLeft: width * 0.03 }}>
                <Text style={styles.participantName}>{p.name}</Text>
                <Text style={styles.participantSub}>{p.contribution}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* ---- Register Button ---- */}
      <View style={styles.buttonContainer}>
        <Button title="Register" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default Donation;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },

  // Image
  imageWrapper: {
    marginHorizontal: width * 0.04,
    borderRadius: width * 0.04,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: width * 0.5,
    backgroundColor: '#eee',
  },
  statusBadge: {
    position: 'absolute',
    top: width * 0.03,
    left: width * 0.03,
    backgroundColor: '#2e7d32',
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.012,
    borderRadius: width * 0.02,
  },
  statusText: {
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    fontSize: width * 0.03,
  },
  imageActions: {
    position: 'absolute',
    bottom: width * 0.03,
    right: width * 0.03,
    flexDirection: 'row',
  },
  circleButton: {
    width: width * 0.09,
    height: width * 0.09,
    borderRadius: (width * 0.09) / 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: width * 0.02,
  },
  // Content
  content: {
    paddingHorizontal: width * 0.045,
    marginTop: width * 0.04,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: width * 0.05,
    color: '#1a1a1a',
  },
  date: {
    fontFamily: 'Poppins-Regular',
    fontSize: width * 0.035,
    color: '#777',
    marginTop: width * 0.015,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: width * 0.02,
  },
  locationText: {
    fontFamily: 'Poppins-Regular',
    fontSize: width * 0.035,
    color: '#555',
    marginLeft: width * 0.01,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: width * 0.04,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: width * 0.036,
    color: '#1a1a1a',
  },
  infoValue: {
    fontFamily: 'Poppins-Regular',
    fontSize: width * 0.035,
    color: '#666',
  },

  participantRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: width * 0.035,
  },
  avatar: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: (width * 0.1) / 2,
    backgroundColor: '#eee',
  },
  participantName: {
    fontFamily: 'Poppins-Regular',
    fontSize: width * 0.036,
    color: '#1a1a1a',
  },
  participantSub: {
    fontFamily: 'Poppins-Regular',
    fontSize: width * 0.03,
    color: '#999',
    marginTop: width * 0.005,
  },

  buttonContainer: {
    paddingHorizontal: width * 0.045,
    paddingBottom: width * 0.03,
    paddingTop: width * 0.02,
  },
});
