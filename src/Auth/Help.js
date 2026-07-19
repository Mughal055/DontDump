import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import Top from '../component/Top';
import Input from '../component/Input';
import Button from '../component/Button';

const { width } = Dimensions.get('window');

const Help = () => {
  return (
    <View style={styles.container}>
      <Top title={'Help Needed?'} />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.subtitle}>
          Let us know how we may be able to help you.
        </Text>

        <View style={styles.fieldBlock}>
          <Text style={styles.label}>Name</Text>
          <Input placeholder={'Name'} />
        </View>

        <View style={styles.fieldBlock}>
          <Text style={styles.label}>E-Mail</Text>
          <Input placeholder={'E-Mail'} keyboardType="email-address" />
        </View>

        <View style={styles.fieldBlock}>
          <Text style={styles.label}>Message</Text>
          <Input
            placeholder={'Message'}
            multiline
            numberOfLines={5}
            style={styles.messageInput}
          />
        </View>
      </ScrollView>

      <View style={styles.bottomButton}>
        <Button title="Send" />
      </View>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: width * 0.05,
    paddingTop: width * 0.04,
  },
  subtitle: {
    fontSize: width * 0.04,
    color: '#000',
    fontFamily: 'Poppins-Medium',
    marginBottom: width * 0.04,
    lineHeight: width * 0.05,
  },
  fieldBlock: {
    marginBottom: width * 0.01,
  },
  label: {
    color: '#1E1E1E',
    fontFamily: 'Poppins-Regular',
    fontSize: width * 0.035,
  },
  messageInput: {
    textAlignVertical: 'top',
  },
  bottomButton: {
    paddingTop: 'auto',
  },
});
