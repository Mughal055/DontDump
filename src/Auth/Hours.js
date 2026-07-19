import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Head from '../component/Head';
import Button from '../component/Button';
import { useNavigation } from '@react-navigation/native';

const DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

// Keeps a value from growing/shrinking past sensible bounds on tablets/small phones
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const Hours = () => {
  const navigation = useNavigation();
  // useWindowDimensions re-renders on rotation, split-screen, or fold —
  // unlike Dimensions.get('window'), which only reads size once.
  const { width } = useWindowDimensions();

  const isTablet = width >= 768;
  const isSmallPhone = width <= 340;

  // Responsive tokens derived from current width
  const horizontalPadding = width * 0.05;
  const dayColumnWidth = clamp(width * 0.28, 90, 160);
  const timeFieldWidth = clamp(width * 0.22, 78, 120);
  const dayFontSize = isTablet ? 16 : isSmallPhone ? 13 : 14;
  const timeFontSize = isTablet ? 14 : isSmallPhone ? 11 : 12;

  const [hours, setHours] = useState(
    DAYS.reduce((acc, day) => {
      acc[day] = {
        open: day !== 'Sunday',
        from: '09:00 AM',
        to: '09:00 PM',
      };
      return acc;
    }, {}),
  );

  const toggleDay = day => {
    setHours(prev => ({
      ...prev,
      [day]: { ...prev[day], open: !prev[day].open },
    }));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Head
        title={'Opening Hours'}
        subtitle={
          'Manage your operating schedule & update your special opening time'
        }
      />

      <ScrollView
        style={{ paddingHorizontal: horizontalPadding, marginTop: 10 }}
        showsVerticalScrollIndicator={false}
      >
        {DAYS.map(day => (
          <View
            key={day}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              marginBottom: 18,
            }}
          >
            {/* Day label + toggle */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: dayColumnWidth,
              }}
            >
              <Switch
                value={hours[day].open}
                onValueChange={() => toggleDay(day)}
                trackColor={{ false: '#E0E0E0', true: '#2E7D32' }}
                thumbColor={'#fff'}
              />
              <Text
                style={{
                  marginLeft: 8,
                  fontSize: dayFontSize,
                  fontWeight: '600',
                  color: '#1B1B1B',
                  flexShrink: 1,
                }}
                numberOfLines={1}
                adjustsFontSizeToFit
              >
                {day}
              </Text>
            </View>

            {/* Time range or Closed */}
            {hours[day].open ? (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  flex: 1,
                  minWidth: timeFieldWidth * 2 + 40,
                  justifyContent: 'flex-end',
                }}
              >
                <TimeField
                  value={hours[day].from}
                  width={timeFieldWidth}
                  fontSize={timeFontSize}
                />
                <Text
                  style={{
                    marginHorizontal: 6,
                    color: '#8A8A8A',
                    fontSize: timeFontSize,
                  }}
                >
                  TO
                </Text>
                <TimeField
                  value={hours[day].to}
                  width={timeFieldWidth}
                  fontSize={timeFontSize}
                />
              </View>
            ) : (
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Text
                  style={{
                    color: '#2E7D32',
                    fontWeight: '600',
                    fontSize: dayFontSize,
                  }}
                >
                  Closed
                </Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>

      <View
        style={{
          marginTop: 'auto',
          marginHorizontal: horizontalPadding,
          marginBottom: width * 0.08,
        }}
      >
        <Button title="Continue" onPress={() => navigation.navigate('Legal')} />
      </View>
    </SafeAreaView>
  );
};

const TimeField = ({ value, width, fontSize }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#EDEDED',
        backgroundColor: '#FAFAFA',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 10,
        width,
      }}
    >
      <Text
        style={{ fontSize, color: '#1B1B1B', fontWeight: '500' }}
        numberOfLines={1}
      >
        {value}
      </Text>
      <Ionicons name="chevron-down" size={14} color="#8A8A8A" />
    </TouchableOpacity>
  );
};

export default Hours;
