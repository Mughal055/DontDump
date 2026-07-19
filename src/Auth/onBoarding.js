import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const OnBoarding = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.replace('Login')}
      bottomBarHighlight={false}
      controlStatusBar={false}
      containerStyles={styles.pageContainer}
      imageContainerStyles={styles.imageContainer}
      bottomBarHeight={height * 0.18}
      bottomBarColor="#fff"
      SkipButtonComponent={() => null}
      DotComponent={({ selected }) => (
        <View
          style={{
            width: selected ? width * 0.05 : width * 0.02,
            height: width * 0.02,
            borderRadius: 10,
            backgroundColor: selected ? '#1E7A2E' : '#D9D9D9',
            marginHorizontal: 1.5,
          }}
        />
      )}
      NextButtonComponent={({ ...props }) => (
        <TouchableOpacity
          {...props}
          style={styles.arrowBtn}
          activeOpacity={0.8}
        >
          <Ionicons name="arrow-forward" size={width * 0.07} color="#fff" />
        </TouchableOpacity>
      )}
      DoneButtonComponent={({ ...props }) => (
        <TouchableOpacity
          {...props}
          style={styles.arrowBtn}
          activeOpacity={0.8}
        >
          <Ionicons name="arrow-forward" size={width * 0.07} color="#fff" />
        </TouchableOpacity>
      )}
      pages={[
        {
          backgroundColor: '#E8F5E9',
          image: (
            <View style={styles.contentWrapper}>
              <Image
                source={require('../assets/Img/On1.png')}
                style={styles.image}
                resizeMode="contain"
              />
              <View style={styles.textWrapper}>
                <Text style={styles.title}>Welcome to Don't Dump</Text>
                <Text style={styles.description}>
                  Give old stuff a new chance. They deserve it.
                </Text>
              </View>
            </View>
          ),
          title: '',
          subtitle: '',
        },
        {
          backgroundColor: '#E8F5E9',
          image: (
            <View style={styles.contentWrapper}>
              <Image
                source={require('../assets/Img/On2.png')}
                style={styles.image}
                resizeMode="contain"
              />
              <View style={styles.textWrapper}>
                <Text style={styles.title}>
                  Give away what you no longer need
                </Text>
                <Text style={styles.description}>
                  List items you no longer use and let others benefit from them.
                </Text>
              </View>
            </View>
          ),
          title: '',
          subtitle: '',
        },
        {
          backgroundColor: '#E8F5E9',
          image: (
            <View style={styles.contentWrapper}>
              <Image
                source={require('../assets/Img/On3.png')}
                style={styles.image}
                resizeMode="contain"
              />
              <View style={styles.textWrapper}>
                <Text style={styles.title}>Track your sustainable impact</Text>
                <Text style={styles.description}>
                  Prevent waste, support local communities and promote reuse.
                </Text>
              </View>
            </View>
          ),
          title: '',
          subtitle: '',
        },
        {
          backgroundColor: '#E8F5E9',
          image: (
            <View style={styles.contentWrapper}>
              <Image
                source={require('../assets/Img/On4.png')}
                style={styles.image}
                resizeMode="contain"
              />
              <View style={styles.textWrapper}>
                <Text style={styles.title}>
                  You're not just giving you're empowering
                </Text>
                <Text style={styles.description}>
                  Sell your stuff for a donation to your favorite charity and
                  create an even bigger impact.
                </Text>
              </View>
            </View>
          ),
          title: '',
          subtitle: '',
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    // paddingTop: height * 0.05,
  },
  imageContainer: {
    paddingBottom: 0,
    flex: 1,
  },
  contentWrapper: {
    alignItems: 'center',
  },
  image: {
    width: width * 0.75,
    height: width * 0.73,
    backgroundColor: '#E8F5E9',
    marginTop: width * 0.25,
  },
  textWrapper: {
    paddingTop: width * 0.1,
    marginTop: width * 0.2,
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: width * 0.106,
    borderTopRightRadius: width * 0.106,
  },
  title: {
    fontSize: width * 0.06,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  description: {
    fontSize: width * 0.045,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    color: '#666',
    paddingHorizontal: 30,
    marginTop: 8,
  },
  arrowBtn: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: (width * 0.15) / 2,
    backgroundColor: '#1E7A2E',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: width * 0.04,
  },
});

export default OnBoarding;
