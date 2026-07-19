import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Head from '../component/Head';
import Input from '../component/Input';
import Button from '../component/Button';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const categories = ['Food', 'Clothes', 'Books', 'Toys'];
const charityOptions = ['Welfare', 'Medical', 'Homeless Shelter'];

const Profile = () => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const styles = createStyles(width);

  const [shopName, setShopName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState(['Charity']);

  const [offer, setOffer] = useState('');
  const [showOfferList, setShowOfferList] = useState(false);

  const [charity, setCharity] = useState('');
  const [showCharityList, setShowCharityList] = useState(false);

  const addTag = () => {
    if (tagInput.trim()) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Head
        title={'User Profile'}
        subtitle={'Please complete your user profile'}
      />

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
      >
        {/* Upload Logo */}
        <Text style={styles.label}>Upload Logo</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile2')}>
          <View style={styles.avatar} />
          <View
            style={{
              borderRadius: 50,
              backgroundColor: '#006416',
              width: width * 0.08,
              height: width * 0.08,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 2,
              borderColor: '#fff',
              position: 'absolute',
              top: width * 0.099, // ~38 on a 400px-wide screen, scales with width
              right: width * 0.33,
            }}
          >
            <Icon
              name="pencil"
              size={18}
              color="#fff"
              style={{
                alignSelf: 'center',
              }}
            />
          </View>
        </TouchableOpacity>

        {/* Name */}
        <Text style={styles.label}>Name of your shop</Text>
        <Input
          placeholder="Name"
          value={shopName}
          onChangeText={setShopName}
          style={styles.inputStyle}
        />

        {/* Email */}
        <Text style={styles.label}>Email</Text>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.inputStyle}
        />

        {/* Username */}
        <Text style={styles.label}>Username</Text>
        <Input
          placeholder="username"
          value={username}
          onChangeText={setUsername}
          style={styles.inputStyle}
        />

        {/* What do you offer */}
        <Text style={styles.label}>What do you offer?</Text>
        <TouchableOpacity
          style={styles.dropdownBox}
          onPress={() => setShowOfferList(!showOfferList)}
        >
          <Text
            style={{
              color: offer ? '#000' : '#888',
              fontFamily: 'Poppins-Regular',
            }}
          >
            {offer || 'Select Categories'}
          </Text>
          <Icon name="chevron-down" size={18} color="#888" />
        </TouchableOpacity>
        {showOfferList &&
          categories.map(item => (
            <TouchableOpacity
              key={item}
              style={styles.dropdownItem}
              onPress={() => {
                setOffer(item);
                setShowOfferList(false);
              }}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}

        {/* Charity Category */}
        <Text style={styles.label}>Charity Category</Text>
        <TouchableOpacity
          style={styles.dropdownBox}
          onPress={() => setShowCharityList(!showCharityList)}
        >
          <Text
            style={{
              color: charity ? '#000' : '#888',
              fontFamily: 'Poppins-Regular',
            }}
          >
            {charity || 'e.g:welfare, medical, homeless shelter'}
          </Text>
          <Icon name="chevron-down" size={18} color="#888" />
        </TouchableOpacity>
        {showCharityList &&
          charityOptions.map(item => (
            <TouchableOpacity
              key={item}
              style={styles.dropdownItem}
              onPress={() => {
                setCharity(item);
                setShowCharityList(false);
              }}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}

        {/* Description */}
        <Text style={styles.label}>Description</Text>
        <Input
          placeholder="Write something about you..."
          value={description}
          onChangeText={setDescription}
          multiline
          height={90}
          style={styles.inputStyle}
        />

        {/* Tags */}
        <Text style={styles.label}>Tags</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1 }}>
            <Input
              placeholder="Add Tags"
              value={tagInput}
              onChangeText={setTagInput}
              style={styles.inputStyle}
            />
          </View>
          <TouchableOpacity style={styles.addButton} onPress={addTag}>
            <Text style={{ color: '#fff', fontFamily: 'Poppins-Regular' }}>
              Add
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
          {tags.map((tag, index) => (
            <View key={index} style={styles.tagChip}>
              <Text style={{ color: '#555' }}>{tag}</Text>
            </View>
          ))}
        </View>

        {/* Continue */}
        <View style={{ marginTop: 20 }}>
          <Button
            title="Continue"
            onPress={() => navigation.navigate('Hours')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const createStyles = width => ({
  label: {
    fontSize: width * 0.035,
    marginTop: 16,
    marginBottom: 8,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  inputStyle: {
    marginHorizontal: 0,
    marginTop: 0,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#D9D9D9',
    alignSelf: 'center',
    position: 'relative',
  },
  dropdownBox: {
    borderWidth: 1,
    borderColor: '#E7E7E7',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    fontFamily: 'Poppins-Regular',
  },
  addButton: {
    backgroundColor: '#1E7A2E',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
    fontFamily: 'Poppins-Regular',
    marginLeft: 10,
  },
  tagChip: {
    borderWidth: 1,
    borderColor: '#E7E7E7',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginRight: 8,
    marginBottom: 8,
    fontFamily: 'Poppins-Regular',
  },
});
