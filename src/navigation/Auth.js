import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Auth/Splash';
import onBoarding from '../Auth/onBoarding';
import Login from '../Auth/Login';
import ForgotPass from '../Auth/ForgotPass';
import ResetPass from '../Auth/ResetPass';
import created from '../Auth/created';
import SignUp from '../Auth/SignUp';
import Authentication from '../Auth/Authentication';
import Use from '../Auth/Use';
import Location from '../Auth/Location';
import Phone from '../Auth/Phone';
import Location2 from '../Auth/Location2';
import Profile from '../Auth/Profile';
import Hours from '../Auth/Hours';
import Legal from '../Auth/Legal';
import Created2 from '../Auth/Created2';
import Noti from '../Auth/Noti';
import Infor from '../Auth/Infor';
import EditProfile from '../Auth/EditProfile';
import Profile2 from '../Auth/Profile2';
import ChangePass from '../Auth/ChangePass';
import Privacy from '../Auth/Privacy';
import Msg from '../Auth/Msg';
import Faq from '../Auth/Faq';
import Help from '../Auth/Help';
import Lang from '../Auth/Lang';

const Auth = () => {
  setTimeout(() => {
    setsplash(false);
  }, 3000);

  const [splash, setsplash] = useState(true);
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {splash ? <Stack.Screen name="Splash" component={Splash} /> : null}
      <Stack.Screen name="onBoarding" component={onBoarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPass" component={ForgotPass} />
      <Stack.Screen name="ResetPass" component={ResetPass} />
      <Stack.Screen name="created" component={created} />
      <Stack.Screen name="Authentication" component={Authentication} />
      <Stack.Screen name="Use" component={Use} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="Location2" component={Location2} />
      <Stack.Screen name="Hours" component={Hours} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Phone" component={Phone} />
      <Stack.Screen name="Legal" component={Legal} />
      <Stack.Screen name="Created2" component={Created2} />
      <Stack.Screen name="Noti" component={Noti} />
      <Stack.Screen name="Infor" component={Infor} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Profile2" component={Profile2} />
      {/*  */}
      <Stack.Screen name="Lang" component={Lang} />
      <Stack.Screen name="Privacy" component={Privacy} />
      <Stack.Screen name="Msg" component={Msg} />
      <Stack.Screen name="ChangePass" component={ChangePass} />
      <Stack.Screen name="Faq" component={Faq} />
      <Stack.Screen name="Help" component={Help} />
    </Stack.Navigator>
  );
};

export default Auth;
