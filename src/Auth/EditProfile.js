import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from '../component/Input';
import Top from '../component/Top';
import Button from '../component/Button';
import { useNavigation } from '@react-navigation/native';

const EditProfile = () => {
  const { width } = Dimensions.get('window');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Top title="Edit Profile" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: width * 0.05,
          paddingTop: width * 0.05,
        }}
      >
        {/* Avatar with edit badge */}
        <View
          style={{
            alignItems: 'center',
            marginBottom: width * 0.06,
          }}
        >
          <View style={{ position: 'relative' }}>
            <Image
              source={require('../assets/Img/Pro.png')}
              style={{
                width: width * 0.22,
                height: width * 0.22,
                borderRadius: width * 0.11,
              }}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: width * 0.07,
                height: width * 0.07,
                borderRadius: width * 0.035,
                backgroundColor: '#1E8E3E',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 2,
                borderColor: '#fff',
              }}
            >
              <Ionicons name="pencil" size={width * 0.035} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Name */}
        <Text
          style={{
            fontSize: width * 0.037,
            fontFamily: 'Poppins-Medium',
            color: '#333333',
            marginBottom: width * 0.01,
          }}
        >
          Name
        </Text>
        <Input placeholder="Name" value={name} onChangeText={setName} />

        {/* Description */}
        <Text
          style={{
            fontSize: width * 0.037,
            fontFamily: 'Poppins-Medium',
            color: '#333333',
            marginTop: width * 0.045,
            marginBottom: width * 0.01,
          }}
        >
          Description
        </Text>
        <Input
          placeholder="Write something about you..."
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
          style={{ height: width * 0.15, textAlignVertical: 'top' }}
        />

        {/* City */}
        <Text
          style={{
            fontSize: width * 0.037,
            fontFamily: 'Poppins-Medium',
            color: '#333333',
            marginTop: width * 0.045,
            marginBottom: width * 0.01,
          }}
        >
          City
        </Text>
        <Input placeholder="City" value={city} onChangeText={setCity} />
      </ScrollView>

      {/* Update button */}
      <View
        style={{
          paddingHorizontal: width * 0.05,
          paddingBottom: width * 0.06,
          paddingTop: width * 0.02,
        }}
      >
        <Button
          title="Update"
          onPress={() => {
            navigation.navigate('Profile2');
          }}
        />
      </View>
    </View>
  );
};

export default EditProfile;
