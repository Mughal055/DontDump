import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Modal,
} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Match from '../Main/Match';
import MyListing from '../Main/MyListing';
import Events from '../Main/Events';
import Home from '../Main/Home';

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window');

const BottomTab = () => {
  const [disclaimerVisible, setDisclaimerVisible] = React.useState(false);
  const insets = useSafeAreaInsets(); // 👈 device ka bottom safe-area (gesture bar) inset

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#2e7d32',
          tabBarInactiveTintColor: '#9e9e9e',
          tabBarStyle: [
            styles.tabBar,
            {
              height: width * 0.15 + insets.bottom,
              paddingBottom: insets.bottom + width * 0.02,
            },
          ],
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={width * 0.06} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="MyListing"
          component={MyListing}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons
                name="document-text"
                size={width * 0.06}
                color={color}
              />
            ),
          }}
        />

        {/* Center green button */}
        <Tab.Screen
          name="Add"
          component={Home} // dummy component — tabPress prevent hone ki wajah se ye kabhi render nahi hoga
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <View style={styles.centerButton}>
                <Ionicons name="add" size={width * 0.075} color="#fff" />
              </View>
            ),
            tabBarButton: props => (
              <TouchableOpacity
                {...props}
                activeOpacity={0.8}
                style={[
                  styles.centerButtonWrapper,
                  { top: -(width * 0.05) - insets.bottom / 2 },
                ]}
              />
            ),
          }}
          listeners={{
            tabPress: e => {
              e.preventDefault();
              setDisclaimerVisible(true);
            },
          }}
        />

        <Tab.Screen
          name="Match"
          component={Match}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="people" size={width * 0.06} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Events"
          component={Events}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="calendar" size={width * 0.06} color={color} />
            ),
          }}
        />
      </Tab.Navigator>

      {/* ---- Disclaimer Modal ---- */}
      <Modal
        visible={disclaimerVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setDisclaimerVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Disclaimer</Text>
              <TouchableOpacity
                onPress={() => setDisclaimerVisible(false)}
                style={styles.closeButton}
              >
                <Ionicons name="close" size={width * 0.055} color="#333" />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalBody}>
              Please only give away items that you would be comfortable
              receiving yourself. Broken items are acceptable as long as they
              are safe and not hazardous. Do not offer anything illegal,
              dangerous, or regulated, including weapons, drugs, alcohol,
              explosives, flammable items, toxic chemicals, counterfeit goods,
              stolen property, or any other prohibited materials.
            </Text>

            <TouchableOpacity
              style={styles.agreeButton}
              activeOpacity={0.85}
              onPress={() => {
                setDisclaimerVisible(false);
                // yahan apni "Add Listing" navigation/logic daal do agree ke baad
                // navigation.navigate('AddListingModal');
              }}
            >
              <Text style={styles.agreeButtonText}>I Agree</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  tabBar: {
    paddingTop: width * 0.015,
    width: width,
    backgroundColor: '#fff',
  },
  tabBarLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: width * 0.028,
  },
  centerButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerButton: {
    width: width * 0.14,
    height: width * 0.14,
    borderRadius: (width * 0.14) / 2,
    backgroundColor: '#2e7d32',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: width * 0.008 },
    shadowOpacity: 0.3,
    shadowRadius: width * 0.01,
    elevation: 6,
  },

  // ---- Modal ----
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width * 0.06,
  },
  modalCard: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: width * 0.03,
    padding: width * 0.05,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: width * 0.04,
  },
  modalTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: width * 0.05,
    color: '#1a1a1a',
  },
  closeButton: {
    width: width * 0.08,
    height: width * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBody: {
    fontFamily: 'Poppins-Regular',
    fontSize: width * 0.038,
    color: '#444',
    lineHeight: width * 0.058,
    marginBottom: width * 0.05,
  },
  agreeButton: {
    backgroundColor: '#2e7d32',
    borderRadius: width * 0.02,
    paddingVertical: width * 0.035,
    justifyContent: 'center',
    alignItems: 'center',
  },
  agreeButtonText: {
    fontFamily: 'Poppins-Regular',
    fontSize: width * 0.04,
    fontWeight: '600',
    color: '#fff',
  },
});
