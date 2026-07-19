import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ArmChair from '../Main/ArmChair';
import Notification from '../Main/Notification';
import Events2 from '../Main/Events2';
import Donation from '../Main/Donation';

const Main = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ArmChair" component={ArmChair} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Events2" component={Events2} />
      <Stack.Screen name="Donation" component={Donation} />
    </Stack.Navigator>
  );
};

export default Main;
