import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// FIX: Imported Ionicons from the correct library
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const Msg = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <View style={styles.container}>
        {/* Header Bar */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={width * 0.06} color="#333" />
          </TouchableOpacity>

          <View style={styles.avatarCircle}>
            <Image
              source={require('../../assets/Img/Gojek.png')}
              style={{
                position: 'relative',
                height: width * 0.05,
                width: width * 0.05,
                top: width * 0.02,
                left: width * 0.0225,
              }}
              resizeMode="center"
            />
          </View>

          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>Gojek Indonesia</Text>
            <Text style={styles.headerSubtitle}>Andy Jordan</Text>
          </View>

          <TouchableOpacity style={styles.moreButton}>
            <Text style={styles.moreDots}>•••</Text>
          </TouchableOpacity>
        </View>

        {/* Chat Messages Area */}
        <ScrollView
          style={styles.chatArea}
          contentContainerStyle={styles.chatContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Date Stamp */}
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>Today</Text>
          </View>

          {/* Left Message Bubble (Incoming) */}
          <View style={styles.incomingContainer}>
            <View style={styles.incomingBubble}>
              <Text style={styles.incomingText}>
                Hi, thank you for applying in our company.
              </Text>
              <Text style={styles.incomingTime}>08.15</Text>
            </View>
          </View>

          {/* Right Message Bubble 1 (Outgoing) */}
          <View style={styles.outgoingContainer}>
            <View style={styles.outgoingBubble}>
              <Text style={styles.outgoingText}>
                Hi Andy, thanks for considering me. That's wonderful to hear!
              </Text>
              <Text style={styles.outgoingTime}>10.00</Text>
            </View>
          </View>

          {/* Right Message Bubble 2 (Outgoing) */}
          <View style={styles.outgoingContainer}>
            <View style={styles.outgoingBubble}>
              <Text style={styles.outgoingText}>Sure!</Text>
              <Text style={styles.outgoingTime}>11.23</Text>
            </View>
          </View>
        </ScrollView>

        {/* Bottom Input Field Bar */}
        <View style={styles.inputBar}>
          <TextInput
            style={styles.textInput}
            placeholder="Type here..."
            placeholderTextColor="#999999"
          />
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.actionIcon}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.actionIcon}>☺</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sendButton}>
            <Ionicons name="send" size={width * 0.045} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Msg;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  container: {
    flex: 1,
    backgroundColor: '#F7F9FA',
  },

  header: {
    flexDirection: 'row',
    height: height * 0.075,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  backButton: {
    marginRight: width * 0.03,
  },

  avatarCircle: {
    width: width * 0.095,
    height: width * 0.095,
    borderRadius: width * 0.12,
    backgroundColor: '#E8F5E9',
    marginRight: width * 0.03,
    overflow: 'hidden',
  },

  headerTextContainer: {
    flex: 1,
  },

  headerTitle: {
    fontSize: width * 0.0375,
    marginTop: height * 0.006,
    color: '#333333',
    fontFamily: 'Poppins-SemiBold',
  },

  headerSubtitle: {
    fontSize: width * 0.03,
    color: '#666666',
    fontFamily: 'Poppins-Regular',
  },

  moreButton: {
    padding: width * 0.01,
  },

  moreDots: {
    fontSize: width * 0.04,
    color: '#999999',
  },

  chatArea: {
    flex: 1,
  },

  chatContent: {
    padding: width * 0.04,
  },

  dateContainer: {
    alignSelf: 'center',
    backgroundColor: '#EAEAEA',
    borderRadius: width * 0.03,
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.005,
    marginBottom: height * 0.025,
  },

  dateText: {
    fontSize: width * 0.03,
    color: '#666666',
    fontFamily: 'Poppins-Medium',
  },

  incomingContainer: {
    alignSelf: 'flex-start',
    maxWidth: '75%',
    marginBottom: height * 0.02,
  },

  incomingBubble: {
    backgroundColor: '#FFFFFF',
    borderRadius: width * 0.03,
    borderTopLeftRadius: width * 0.005,
    paddingHorizontal: width * 0.035,
    paddingVertical: height * 0.012,
    elevation: 1,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },

  incomingText: {
    fontSize: width * 0.035,
    color: '#333333',
    lineHeight: width * 0.05,
    fontFamily: 'Poppins-Regular',
  },

  incomingTime: {
    fontSize: width * 0.03,
    color: '#999999',
    textAlign: 'right',
    fontFamily: 'Poppins-Medium',
    marginTop: height * 0.005,
  },

  outgoingContainer: {
    alignSelf: 'flex-end',
    maxWidth: '75%',
    marginBottom: height * 0.02,
  },

  outgoingBubble: {
    backgroundColor: '#233973',
    borderRadius: width * 0.03,
    borderTopRightRadius: width * 0.005,
    paddingHorizontal: width * 0.035,
    paddingVertical: height * 0.012,
  },

  outgoingText: {
    fontSize: width * 0.035,
    color: '#FFFFFF',
    lineHeight: width * 0.05,
    fontFamily: 'Poppins-Regular',
  },

  outgoingTime: {
    fontSize: width * 0.025,
    color: '#B0C4DE',
    textAlign: 'right',
    marginTop: height * 0.005,
    fontFamily: 'Poppins-Medium',
  },

  inputBar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.015,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },

  textInput: {
    flex: 1,
    height: height * 0.055,
    backgroundColor: '#F5F5F5',
    borderRadius: width * 0.05,
    paddingHorizontal: width * 0.04,
    fontSize: width * 0.035,
    color: '#333333',
    fontFamily: 'Poppins-Regular',
  },

  iconButton: {
    marginLeft: width * 0.03,
    padding: width * 0.01,
  },

  actionIcon: {
    fontSize: width * 0.055,
    color: '#999999',
  },

  sendButton: {
    marginLeft: width * 0.03,
    width: width * 0.09,
    height: width * 0.09,
    borderRadius: width * 0.045,
    backgroundColor: '#233973',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
