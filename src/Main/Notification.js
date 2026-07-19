import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import Top from '../component/Top';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const notifications = [
  {
    id: '1',
    avatar: require('../assets/Img/Pro.png'),
    title: 'Ahmed sent you a help request.',
    subtitle: 'Click to view the details of his request.',
    time: '1 min ago',
  },
  {
    id: '2',
    avatar: require('../assets/Img/dp.jpg'),
    title: 'Donation collected by Collector Ali.',
    subtitle: 'Your event registration was successful',
    time: '59 min ago',
  },
  {
    id: '3',
    avatar: require('../assets/Img/F6.jpg'),
    title: 'New event in Lahore',
    subtitle: 'Clothes Donation Drive',
    time: '1 hour ago',
  },
];

const Notification = () => {
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.subtitle} numberOfLines={1}>
          {item.subtitle}
        </Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Top title={'Notifications'} />

      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    paddingHorizontal: width * 0.04,
    paddingTop: width * 0.03,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: width * 0.05,
  },
  avatar: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: width * 0.06,
    marginRight: width * 0.03,
  },
  textContainer: {
    flex: 1,
    paddingRight: width * 0.02,
  },
  title: {
    fontSize: width * 0.036,
    fontFamily: 'Poppins-Medium',
    color: '#111',
  },
  subtitle: {
    fontSize: width * 0.032,
    fontFamily: 'Poppins-Regular',
    color: '#888',
    marginTop: width * 0.008,
  },
  time: {
    fontSize: width * 0.028,
    fontFamily: 'Poppins-Regular',
    color: '#aaa',
  },
});
