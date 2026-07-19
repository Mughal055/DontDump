import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Linking,
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Head from '../component/Head';
import Button from '../component/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Legal = () => {
  const navigation = useNavigation();
  const { width } = Dimensions.get('window');
  const [checked, setChecked] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Head title={'Legal Obligation'} />

      {/* Body content */}
      <View
        style={{
          paddingHorizontal: width * 0.06,
          paddingTop: width * 0.06,
          flex: 1,
        }}
      >
        <Text
          style={{
            fontSize: width * 0.037,
            fontFamily: 'Poppins-Regular',
            color: '#555555',
            lineHeight: width * 0.055,
          }}
        >
          Please confirm that you are legally authorized to represent and
          register your charity or business. You also declare that you meet all
          legal requirements. We reserve the right to restrict your account if
          any statements in your account are inaccurate.
        </Text>

        <TouchableOpacity
          onPress={() => Linking.openURL('https://yourapp.com/legal-policy')}
          style={{ marginTop: width * 0.04 }}
        >
          <Text
            style={{
              fontSize: width * 0.037,
              fontFamily: 'Poppins-Regular',
              color: '#555555',
            }}
          >
            {' '}
            <Text style={{ color: '#1565C0', fontFamily: 'Poppins-Medium' }}>
              Read our Legal & Compliance Policy
            </Text>
          </Text>
        </TouchableOpacity>

        {/* Checkbox */}
        <TouchableOpacity
          onPress={() => setChecked(!checked)}
          activeOpacity={0.7}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 'auto',
            marginBottom: width * 0.05,
          }}
        >
          <View
            style={{
              width: width * 0.08,
              height: width * 0.08,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: '#999999',
              backgroundColor: checked ? '#1E8E3E' : '#fff',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: width * 0.03,
            }}
          >
            {checked && (
              <Ionicons
                name="checkmark"
                size={width * 0.055}
                color="#fff"
                style={{}}
              />
            )}
          </View>

          <Text
            style={{
              flex: 1,
              fontSize: width * 0.035,
              fontFamily: 'Poppins-Regular',
              color: '#333333',
              alignContent: 'flex-end',
            }}
          >
            I here by declare that I have read and accepted the above.
          </Text>
        </TouchableOpacity>
      </View>

      {/* Submit button */}
      <View
        style={{
          paddingHorizontal: width * 0.06,
          paddingBottom: width * 0.06,
        }}
      >
        <Button
          title="Submit"
          disabled={!checked}
          onPress={() => navigation.navigate('Created2')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Legal;
