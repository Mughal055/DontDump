import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Top from '../component/Top';
import { useNavigation } from '@react-navigation/native';

// Swap these placeholder requires for your real listing photos.
import Armchair from '../assets/Img/list1.jpg';
import Desk from '../assets/Img/list2.jpg';
import KidsCloth from '../assets/Img/list3.jpg';

const listings = [
  {
    id: '1',
    image: Armchair,
    tag: 'Giveaway',
    category: 'Home Appliances',
    title: 'Blue Armchair',
    description:
      'Comfortable armchair in a good condition. available for free ideal for cozy reading corner as an extra seat.',
    location: 'Berlin, 1 km away',
    screen: 'ArmChair',
  },
  {
    id: '2',
    image: Desk,
    tag: 'Giveaway',
    category: 'Home Appliances',
    title: 'White Desk',
    description:
      'Comfortable armchair in a good condition. available for free ideal for cozy reading corner as an extra seat.',
    location: 'Berlin, 1 km away',
    screen: 'Desk',
  },
  {
    id: '3',
    image: KidsCloth,
    tag: 'Sell for Charity',
    category: 'Clothing',
    title: 'Kids Cloth',
    description:
      'Comfortable armchair in a good condition. available for free ideal for cozy reading corner as an extra seat.',
    location: 'Berlin, 1 km away',
    screen: 'KidsCloth',
  },
];

const MyListing = () => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const styles = createStyles(width);

  const [favorites, setFavorites] = useState({});

  const toggleFavorite = id => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Top title={'My Listings'} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: width * 0.05,
          paddingTop: width * 0.04,
          paddingBottom: width * 0.08,
        }}
      >
        {listings.map(item => {
          const isFav = !!favorites[item.id];
          return (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              onPress={() =>
                navigation.navigate('Main', { screen: item.screen })
              }
            >
              <View style={styles.imageWrap}>
                <Image
                  source={item.image}
                  style={styles.itemImage}
                  resizeMode="cover"
                />
                <View style={styles.tag}>
                  <Text style={styles.tagText}>{item.tag}</Text>
                </View>
                <TouchableOpacity
                  style={styles.favButton}
                  onPress={() => toggleFavorite(item.id)}
                >
                  <Icon
                    name={isFav ? 'heart' : 'heart-outline'}
                    size={width * 0.04}
                    color="#1E7A2E"
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.infoWrap}>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description} numberOfLines={2}>
                  {item.description}
                </Text>
                <View style={styles.locationRow}>
                  <Icon name="location" size={width * 0.035} color="#006416" />
                  <Text style={styles.location}> {item.location}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyListing;

// Everything scales off `width`, same pattern used on the Home screen.
const createStyles = width => ({
  card: {
    flexDirection: 'row',
    borderWidth: width * 0.0027,
    borderColor: '#E7E7E7',
    borderRadius: width * 0.04,
    padding: width * 0.027,
    marginBottom: width * 0.04,
    alignItems: 'center',
  },
  imageWrap: {
    width: width * 0.3,
    height: width * 0.3,
  },
  itemImage: {
    width: '100%',
    height: '100%',
    borderRadius: width * 0.03,
  },
  tag: {
    position: 'absolute',
    top: width * 0.02,
    left: width * 0.02,
    backgroundColor: '#1E7A2E',
    paddingHorizontal: width * 0.02,
    paddingVertical: width * 0.008,
    borderRadius: width * 0.02,
  },
  tagText: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: width * 0.026,
  },
  favButton: {
    position: 'absolute',
    bottom: -width * 0.035,
    right: -width * 0.035,
    width: width * 0.09,
    height: width * 0.09,
    borderRadius: width * 0.045,
    backgroundColor: '#E1FFE7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoWrap: {
    flex: 1,
    marginLeft: width * 0.04,
    justifyContent: 'center',
  },
  category: {
    fontFamily: 'Poppins-Medium',
    fontSize: width * 0.032,
    color: '#1E7A2E',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: width * 0.05,
    color: '#1E1E1E',
    marginTop: width * 0.005,
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: width * 0.03,
    color: '#8A8A8A',
    marginTop: width * 0.01,
    lineHeight: width * 0.042,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: width * 0.02,
  },
  location: {
    fontFamily: 'Poppins-Regular',
    fontSize: width * 0.03,
    color: '#8A8A8A',
  },
});
