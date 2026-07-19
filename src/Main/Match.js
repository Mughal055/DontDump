import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Top from '../component/Top';
import dp from '../assets/Img/dp.jpg';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const matches = [
  {
    id: '1',
    image: require('../assets/Img/list1.jpg'),
    status: 'Upcoming',
    title: 'Lahore Donation Drive',
    dateTime: 'May 10.20225, 9:00 am',
    location: 'Liberty Market',
    host: 'Captain Zara Husin',
  },
  {
    id: '2',
    image: require('../assets/Img/list2.jpg'),
    status: 'Upcoming',
    title: 'Lahore Donation Drive',
    description:
      'Comfortable armchair in a good condition, available for free ideal for cozy reading corner as an extra seat.',
    dateTime: 'May 10.20225, 9:00 am',
    location: 'Liberty Market',
    host: 'Captain Zara Husin',
  },
];

const Match = () => {
  const [activeTab, setActiveTab] = useState('Upcoming');
  const [search, setSearch] = useState('');
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.status}</Text>
        </View>
        <View style={styles.cardIcons}>
          <TouchableOpacity style={styles.iconCircle} activeOpacity={0.8}>
            <Ionicons
              name="heart-outline"
              size={width * 0.045}
              color="#1E7A4C"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconCircle} activeOpacity={0.8}>
            <Ionicons
              name="share-social-outline"
              size={width * 0.045}
              color="#1E7A4C"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.cardBody}>
        <Text style={styles.cardDate}>{item.dateTime}</Text>

        <View style={styles.titleRow}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <TouchableOpacity
            style={styles.viewDetailsBtn}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Main', { screen: 'Donation' })}
          >
            <Text style={styles.viewDetailsText}>View Details</Text>
          </TouchableOpacity>
        </View>

        {item.description ? (
          <Text style={styles.cardDescription} numberOfLines={2}>
            {item.description}
          </Text>
        ) : null}

        <View style={styles.infoRow}>
          <Ionicons
            name="location-outline"
            size={width * 0.036}
            color="#1E7A4C"
          />
          <Text style={styles.infoText}>{item.location}</Text>
        </View>

        <View style={styles.infoRow}>
          <Image source={dp} style={styles.hostAvatar} />
          <Text style={styles.infoText}>{item.host}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Top title="Match" />

      {/* Search bar */}
      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Ionicons
            name="search-outline"
            size={width * 0.045}
            color="#9A9A9A"
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#9A9A9A"
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <TouchableOpacity style={styles.filterBtn} activeOpacity={0.8}>
          <Ionicons
            name="options-outline"
            size={width * 0.05}
            color="#1E7A4C"
          />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabRow}>
        <TouchableOpacity
          style={styles.tabItem}
          activeOpacity={0.8}
          onPress={() => setActiveTab('Upcoming')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'Upcoming' && styles.tabTextActive,
            ]}
          >
            Upcoming
          </Text>
          {activeTab === 'Upcoming' && <View style={styles.tabIndicator} />}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          activeOpacity={0.8}
          onPress={() => setActiveTab('My Match')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'My Match' && styles.tabTextActive,
            ]}
          >
            My Match
          </Text>
          {activeTab === 'My Match' && <View style={styles.tabIndicator} />}
        </TouchableOpacity>
      </View>

      <FlatList
        data={matches}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

export default Match;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.92,
    alignSelf: 'center',
    marginTop: width * 0.03,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: width * 0.03,
    paddingHorizontal: width * 0.015,
    paddingVertical: width * 0.015,
  },
  searchInput: {
    flex: 1,
    marginLeft: width * 0.02,
    fontSize: width * 0.034,
    fontFamily: 'Poppins-Regular',
    color: '#111',
  },
  filterBtn: {
    marginLeft: width * 0.025,
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: width * 0.03,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabRow: {
    flexDirection: 'row',
    width: width * 0.92,
    alignSelf: 'center',
    marginTop: width * 0.05,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  tabItem: {
    marginRight: width * 0.08,
    paddingBottom: width * 0.025,
  },
  tabText: {
    fontSize: width * 0.036,
    fontFamily: 'Poppins-Regular',
    color: '#9A9A9A',
  },
  tabTextActive: {
    fontFamily: 'Poppins-Medium',
    color: '#1E7A4C',
  },
  tabIndicator: {
    height: 2,
    backgroundColor: '#1E7A4C',
    marginTop: width * 0.02,
    borderRadius: 2,
  },
  listContent: {
    width: width * 0.92,
    alignSelf: 'center',
    paddingTop: width * 0.04,
    paddingBottom: width * 0.1,
  },
  card: {
    borderRadius: width * 0.04,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    marginBottom: width * 0.05,
    overflow: 'hidden',
  },
  imageWrapper: {
    width: '100%',
    height: width * 0.4,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  badge: {
    position: 'absolute',
    top: width * 0.03,
    left: width * 0.03,
    backgroundColor: '#1E7A4C',
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.012,
    borderRadius: width * 0.04,
  },
  badgeText: {
    color: '#fff',
    fontSize: width * 0.03,
    fontFamily: 'Poppins-Medium',
  },
  cardIcons: {
    position: 'absolute',
    top: width * 0.03,
    right: width * 0.03,
    flexDirection: 'row',
  },
  iconCircle: {
    width: width * 0.08,
    height: width * 0.08,
    borderRadius: width * 0.04,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: width * 0.02,
  },
  cardBody: {
    padding: width * 0.035,
  },
  cardDate: {
    fontSize: width * 0.03,
    fontFamily: 'Poppins-Regular',
    color: '#9A9A9A',
    marginBottom: width * 0.015,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: width * 0.04,
    fontFamily: 'Poppins-Medium',
    color: '#111',
    flex: 1,
  },
  viewDetailsBtn: {
    borderWidth: 1,
    borderColor: '#1E7A4C',
    borderRadius: width * 0.05,
    paddingHorizontal: width * 0.035,
    paddingVertical: width * 0.018,
  },
  viewDetailsText: {
    fontSize: width * 0.028,
    fontFamily: 'Poppins-Medium',
    color: '#1E7A4C',
  },
  cardDescription: {
    fontSize: width * 0.03,
    fontFamily: 'Poppins-Regular',
    color: '#888',
    marginTop: width * 0.02,
    lineHeight: width * 0.045,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: width * 0.02,
  },
  hostAvatar: {
    width: width * 0.045,
    height: width * 0.045,
    borderRadius: width * 0.0225,
  },
  infoText: {
    fontSize: width * 0.03,
    fontFamily: 'Poppins-Regular',
    color: '#666',
    marginLeft: width * 0.015,
  },
});
