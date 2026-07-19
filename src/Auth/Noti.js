import { View, Text, Switch, Dimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Top from '../component/Top';

const Noti = () => {
  const { width } = Dimensions.get('window');

  const [allowNotifications, setAllowNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [textMessage, setTextMessage] = useState(false);
  const [paymentNotifications, setPaymentNotifications] = useState(false);

  const settings = [
    {
      key: 'push',
      title: 'Push notifications',
      description: 'Tincidunt integer fringilla orci in non sed.',
      value: pushNotifications,
      onChange: setPushNotifications,
    },
    {
      key: 'text',
      title: 'Text Message',
      description: 'Tincidunt integer fringilla orci in non sed.',
      value: textMessage,
      onChange: setTextMessage,
    },
    {
      key: 'payment',
      title: 'Payment notifications',
      description:
        'Facilisis facilisis velit metus ipsum, vestibulum ipsum arcu, sem lectus.',
      value: paymentNotifications,
      onChange: setPaymentNotifications,
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Top title="Notification Settings" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: width * 0.05 }}
      >
        {/* Allow Notifications - master toggle */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: width * 0.04,
            borderBottomWidth: 1,
            borderBottomColor: '#F0F0F0',
          }}
        >
          <Text
            style={{
              fontSize: width * 0.038,
              fontFamily: 'Poppins-Medium',
              color: '#111111',
            }}
          >
            Allow Notifications
          </Text>
          <Switch
            value={allowNotifications}
            onValueChange={setAllowNotifications}
            trackColor={{ false: '#E0E0E0', true: '#1E8E3E' }}
            thumbColor="#fff"
          />
        </View>

        {/* Sub notification settings */}
        {settings.map(item => (
          <View
            key={item.key}
            style={{
              paddingVertical: width * 0.04,
              borderBottomWidth: 1,
              borderBottomColor: '#F0F0F0',
              opacity: allowNotifications ? 1 : 0.4,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text
                style={{
                  fontSize: width * 0.038,
                  fontFamily: 'Poppins-Medium',
                  color: '#111111',
                }}
              >
                {item.title}
              </Text>
              <Switch
                value={item.value}
                onValueChange={item.onChange}
                disabled={!allowNotifications}
                trackColor={{ false: '#E0E0E0', true: '#1E8E3E' }}
                thumbColor="#fff"
              />
            </View>

            <Text
              style={{
                fontSize: width * 0.032,
                fontFamily: 'Poppins-Regular',
                color: '#999999',
                marginTop: width * 0.015,
                paddingRight: width * 0.15,
              }}
            >
              {item.description}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Noti;
