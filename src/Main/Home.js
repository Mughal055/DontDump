import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  useWindowDimensions,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import F1 from '../assets/Img/F1.png';
import F2 from '../assets/Img/F2.png';
import F3 from '../assets/Img/F3.png';

import F4 from '../assets/Img/F4.jpg';
import F5 from '../assets/Img/F5.jpg';
import F6 from '../assets/Img/F6.jpg';
import F7 from '../assets/Img/F7.jpg';
import dp from '../assets/Img/dp.jpg';

const banners = [
  {
    id: '1',
    image: F1,
  },
  {
    id: '2',
    image: F2,
  },
  {
    id: '3',
    image: F3,
  },
];

const filters = ['All', 'Free', 'Swap', 'Sell for Charity'];

const urgentItems = [
  {
    id: '1',
    image: F4,
    tag: 'Giveaway',
    category: 'Home Appliances',
    time: '2 hours ago',
    title: 'Assorted Towels',
    subtitle: 'Reuse',
    location: 'Berlin, 1 km away',
  },
  {
    id: '2',
    image: F5,
    tag: 'Free',
    category: 'Home Appliances',
    time: '2 hours ago',
    title: 'Assorted Towels',
    subtitle: 'Reuse',
    location: 'Berlin, 1 km away',
  },
];

const upcomingEvents = [
  {
    id: '1',
    image: F6,
    date: 'May 10, 2025 \u2022 9:00 am',
    title: 'Lahore Donation Drive',
    description:
      'Comfortable armchair in good condition, available for free \u2014 ideal for a cozy reading corner as an extra seat.',
    location: 'Liberty Market',
    hostName: 'Captain Zara Husain',
    imagedp: dp,
  },
  {
    id: '2',
    image: F7,
    date: 'May 10, 2025 \u2022 9:00 am',
    title: 'Lahore Donation Drive',
    description:
      'Comfortable armchair in good condition, available for free \u2014 ideal for a cozy reading corner as an extra seat.',
    location: 'Liberty Market',
    hostName: 'Captain Zara Husain',
    imagedp: dp,
  },
];

const Home = () => {
  const navigation = useNavigation();
  // useWindowDimensions re-renders on rotation / split-screen / fold,
  // unlike Dimensions.get('window') which only reads size once at import time.
  const { width } = useWindowDimensions();
  const styles = createStyles(width);

  // Every size that used to be a fixed pixel value is now derived from
  // width, so icons/avatars/dots scale the same way the text already does.
  const iconSize = width * 0.05; // ~20 @375
  const smallIconSize = width * 0.0347; // ~13 @375

  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const scrollRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const bannerWidth = width - width * 0.1;

  // Auto-rotate the banner every 3.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => {
        const next = (prev + 1) % banners.length;
        scrollRef.current?.scrollTo({ x: next * bannerWidth, animated: true });
        return next;
      });
    }, 3500);
    return () => clearInterval(timer);
  }, [bannerWidth]);

  const onBannerScroll = e => {
    const index = Math.round(e.nativeEvent.contentOffset.x / bannerWidth);
    setActiveSlide(index);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: width * 0.05,
          paddingBottom: width * 0.08,
        }}
      >
        {/* ---------- Header ---------- */}
        <View style={styles.headerRow}>
          <Image
            source={require('../assets/Img/Logo.png')}
            style={{ width: width * 0.13, height: width * 0.13 }}
            resizeMode="contain"
          />
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() =>
                navigation.navigate('Main', { screen: 'Notification' })
              }
            >
              <Icon
                name="notifications-outline"
                size={iconSize}
                color="#1E7A2E"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.iconButton, { marginLeft: width * 0.0267 }]}
              onPress={() => navigation.navigate('Auth', { screen: 'Profile' })}
            >
              <Icon name="person-outline" size={iconSize} color="#1E7A2E" />
            </TouchableOpacity>
          </View>
        </View>

        {/* ---------- Greeting ---------- */}
        <Text style={styles.greeting}>Welcome,Don't Dump!</Text>

        {/* ---------- Search bar ---------- */}
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#9A9A9A"
            value={search}
            onChangeText={setSearch}
            style={styles.searchInput}
          />
          <Icon name="search" size={iconSize} color="#1E1E1E" />
        </View>

        {/* ---------- Promo banner carousel ---------- */}
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={onBannerScroll}
          style={{ marginTop: width * 0.05 }}
        >
          {banners.map(banner => (
            <View key={banner.id} style={{ width: bannerWidth }}>
              <Image
                source={banner.image}
                style={styles.bannerImage}
                resizeMode="contain"
              />
            </View>
          ))}
        </ScrollView>

        {/* Dot pagination */}
        <View style={styles.dotsRow}>
          {banners.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, index === activeSlide && styles.dotActive]}
            />
          ))}
        </View>

        {/* ---------- What's Urgent ---------- */}
        <Text style={styles.sectionTitle}>What's Urgent?</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: width * 0.016 }}
        >
          {filters.map(filter => {
            const active = filter === activeFilter;
            return (
              <TouchableOpacity
                key={filter}
                onPress={() => setActiveFilter(filter)}
                style={[styles.filterChip, active && styles.filterChipActive]}
              >
                <Text
                  style={[
                    styles.filterChipText,
                    active && styles.filterChipTextActive,
                  ]}
                >
                  {filter}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View style={styles.itemGrid}>
          {urgentItems.map(item => (
            <TouchableOpacity key={item.id} style={styles.itemCard}>
              <View>
                <Image
                  source={item.image}
                  style={styles.itemImage}
                  resizeMode="cover"
                />
                <View
                  style={[
                    styles.itemTag,
                    {
                      backgroundColor:
                        item.tag === 'Free' ? '#1E1E1E' : '#1E7A2E',
                    },
                  ]}
                >
                  <Text style={styles.itemTagText}>{item.tag}</Text>
                </View>
              </View>

              <View style={styles.itemInfo}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text style={styles.itemCategory}>{item.category}</Text>
                  <Text style={styles.itemTime}>{item.time}</Text>
                </View>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: width * 0.0107,
                  }}
                >
                  <Icon name="location" size={smallIconSize} color="#006416" />
                  <Text style={styles.itemLocation}> {item.location}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* ---------- Upcoming Events ---------- */}
        <Text style={styles.sectionTitle}>Upcoming Events</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {upcomingEvents.map(event => (
            <View key={event.id} style={styles.eventCard}>
              <View>
                <Image
                  source={event.image}
                  style={styles.eventImage}
                  resizeMode="cover"
                />
                <View style={styles.upcomingTag}>
                  <Text style={styles.upcomingTagText}>Upcoming</Text>
                </View>
              </View>

              <View style={styles.eventInfo}>
                <Text style={styles.eventDate}>{event.date}</Text>
                <Text style={styles.eventTitle}>{event.title}</Text>
                <Text style={styles.eventDescription} numberOfLines={2}>
                  {event.description}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: width * 0.016,
                  }}
                >
                  <Icon name="location" size={smallIconSize} color="#006416" />
                  <Text style={styles.itemLocation}> {event.location}</Text>
                </View>

                <View style={styles.eventHostRow}>
                  <Image source={event.imagedp} style={styles.hostAvatar} />
                  <Text style={styles.hostName} numberOfLines={1}>
                    {event.hostName}
                  </Text>
                </View>

                <TouchableOpacity style={styles.viewDetailsButton}>
                  <Text style={styles.viewDetailsText}>View Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

// Styles are generated from the current width so they re-scale live
// with useWindowDimensions instead of being frozen at module load.
// Every value below (including the small ones that used to be hard-coded
// pixel numbers like 38, 22, 6, 18, 3, 11...) is now a ratio of `width`.
const createStyles = width => ({
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: width * 0.0267,
  },
  iconButton: {
    width: width * 0.1013,
    height: width * 0.1013,
    borderRadius: width * 0.0507,
    borderWidth: width * 0.0027,
    borderColor: '#E1FFE7',
    backgroundColor: '#E1FFE7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontFamily: 'Poppins-Medium',
    fontSize: width * 0.065,
    color: '#006416',
    marginTop: width * 0.0427,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: width * 0.0027,
    borderColor: '#E7E7E7',
    borderRadius: width * 0.08,
    paddingHorizontal: width * 0.0213,
    paddingVertical: width * 0.008,
    marginTop: width * 0.0427,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: width * 0.0373,
    color: '#1E1E1E',
  },
  bannerImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 16 / 9,
    borderRadius: width * 0.0533,
  },
  donateButton: {
    backgroundColor: '#1E7A2E',
    alignSelf: 'flex-start',
    paddingHorizontal: width * 0.0427,
    paddingVertical: width * 0.0213,
    borderRadius: width * 0.0533,
    marginTop: width * 0.0267,
  },
  donateButtonText: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: width * 0.032,
  },
  dotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: width * 0.0267,
  },
  dot: {
    width: width * 0.016,
    height: width * 0.016,
    borderRadius: width * 0.008,
    backgroundColor: '#D0D0D0',
    marginHorizontal: width * 0.008,
  },
  dotActive: {
    width: width * 0.048,
    backgroundColor: '#1E7A2E',
  },
  sectionTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: width * 0.05,
    color: '#1E1E1E',
    marginTop: width * 0.0587,
    marginBottom: width * 0.032,
  },
  filterChip: {
    borderWidth: width * 0.0027,
    borderColor: '#E7E7E7',
    borderRadius: width * 0.0533,
    paddingHorizontal: width * 0.0427,
    paddingVertical: width * 0.0213,
    marginRight: width * 0.0213,
  },
  filterChipActive: {
    backgroundColor: '#1E7A2E',
    borderColor: '#1E7A2E',
  },
  filterChipText: {
    fontFamily: 'Poppins-Regular',
    fontSize: width * 0.032,
    color: '#C3C3C3',
  },
  filterChipTextActive: {
    color: '#fff',
  },
  itemGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: width * 0.032,
  },
  itemCard: {
    width: (width - width * 0.1 - width * 0.032) / 2,
    borderWidth: width * 0.0027,
    borderColor: '#E7E7E7',
    borderRadius: width * 0.0373,
    padding: width * 0.0133,
  },
  itemImage: {
    width: '100%',
    height: (width - width * 0.1 - width * 0.032) / 2,
    borderRadius: width * 0.0373,
  },
  itemTag: {
    position: 'absolute',
    top: width * 0.0213,
    right: width * 0.0213,
    paddingHorizontal: width * 0.0213,
    paddingVertical: width * 0.008,
    borderRadius: width * 0.0267,
  },
  itemTagText: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: width * 0.0267,
  },
  itemInfo: {
    marginTop: width * 0.0213,
  },
  itemCategory: {
    fontFamily: 'Poppins-Regular',
    fontSize: width * 0.0267,
    color: '#8A8A8A',
  },
  itemTime: {
    fontFamily: 'Poppins-Regular',
    fontSize: width * 0.0267,
    color: '#8A8A8A',
  },
  itemTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: width * 0.0373,
    color: '#1E1E1E',
    marginTop: width * 0.0053,
  },
  itemSubtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: width * 0.0293,
    color: '#8A8A8A',
  },
  itemLocation: {
    fontFamily: 'Poppins-Regular',
    fontSize: width * 0.0293,
    color: '#8A8A8A',
  },
  eventCard: {
    width: width * 0.62,
    marginRight: width * 0.0373,
    borderWidth: width * 0.0027,
    borderColor: '#E7E7E7',
    borderRadius: width * 0.0373,
    padding: width * 0.0133,
  },
  eventImage: {
    width: '100%',
    height: width * 0.4,
    borderRadius: width * 0.0427,
  },
  upcomingTag: {
    position: 'absolute',
    top: width * 0.0213,
    left: width * 0.0213,
    backgroundColor: '#1E7A2E',
    paddingHorizontal: width * 0.0267,
    paddingVertical: width * 0.0107,
    borderRadius: width * 0.0267,
  },
  upcomingTagText: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: width * 0.0267,
  },
  eventInfo: {
    marginTop: width * 0.0213,
  },
  eventDate: {
    fontFamily: 'Poppins-Regular',
    fontSize: width * 0.0293,
    color: '#8A8A8A',
  },
  eventTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: width * 0.04,
    color: '#1E1E1E',
    marginTop: width * 0.0053,
  },
  eventDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: width * 0.0293,
    color: '#8A8A8A',
    marginTop: width * 0.0107,
    lineHeight: width * 0.04,
  },
  eventHostRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: width * 0.0213,
  },
  hostAvatar: {
    width: width * 0.0587,
    height: width * 0.0587,
    borderRadius: width * 0.0293,
    marginRight: width * 0.016,
  },
  hostName: {
    fontFamily: 'Poppins-Regular',
    fontSize: width * 0.0293,
    color: '#1E1E1E',
    flexShrink: 1,
  },
  viewDetailsButton: {
    borderWidth: width * 0.0027,
    borderColor: '#1E7A2E',
    borderRadius: width * 0.0533,
    paddingVertical: width * 0.0213,
    alignItems: 'center',
    marginTop: width * 0.0267,
  },
  viewDetailsText: {
    color: '#1E7A2E',
    fontFamily: 'Poppins-Medium',
    fontSize: width * 0.032,
  },
});
