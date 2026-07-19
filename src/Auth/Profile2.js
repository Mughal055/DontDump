import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Top from '../component/Top';
import ProfileMenuItem from '../component/ProfileMenuItem';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile2 = () => {
  const navigation = useNavigation();
  const { width } = Dimensions.get('window');

  const menuItems = [
    { icon: 'key-outline', label: 'Change Password', route: 'ChangePass' },
    {
      icon: 'person-outline',
      label: 'Account Information',
      route: 'Infor',
    },
    {
      icon: 'notifications-outline',
      label: 'Notification Settings',
      route: 'Noti',
    },
    {
      icon: 'shield-checkmark-outline',
      label: 'Privacy Policy',
      route: 'Privacy',
    },
    {
      icon: 'document-text-outline',
      label: 'Legal Information',
      route: 'Legal',
    },
    { icon: 'help-circle-outline', label: 'Get Help', route: 'Help' },
    { icon: 'globe-outline', label: 'Language', route: 'Lang' },
    { icon: 'alert-circle-outline', label: 'FAQs', route: 'Faq' },
    { icon: 'log-out-outline', label: 'Logout', route: 'Msg' },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Top title="Profile" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* User info */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: width * 0.05,
            paddingVertical: width * 0.05,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <Image
              source={require('../assets/Img/Pro.png')}
              style={{
                width: width * 0.14,
                height: width * 0.14,
                borderRadius: width * 0.07,
                marginRight: width * 0.035,
              }}
            />
          </TouchableOpacity>
          {/*  */}
          <View>
            <Text
              style={{
                fontSize: width * 0.042,
                fontFamily: 'Poppins-Medium',
                color: '#111111',
              }}
            >
              Georgia Young
            </Text>
            <Text
              style={{
                fontSize: width * 0.033,
                fontFamily: 'Poppins-Regular',
                color: '#888888',
                marginTop: 2,
              }}
            >
              georgia.young@example.com
            </Text>
          </View>
        </View>

        {/* Section label */}
        <Text
          style={{
            fontSize: width * 0.04,
            fontFamily: 'Poppins-Medium',
            color: '#111111',
            paddingHorizontal: width * 0.05,
            marginBottom: width * 0.02,
          }}
        >
          Account Information
        </Text>

        {/* Menu list */}
        <View style={{ paddingHorizontal: width * 0.05 }}>
          {menuItems.map((item, index) => (
            <ProfileMenuItem
              key={index}
              icon={item.icon}
              label={item.label}
              onPress={() => navigation.navigate(item.route)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile2;
