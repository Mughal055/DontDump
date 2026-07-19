import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import Top from '../component/Top';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const FAQS = [
  {
    id: '1',
    question: 'What is your return policy?',
    answer:
      'We accepts returns within 30 days of the delivery date. Items must be unused, in their original packaging, and accompanied by a receipt or proof of purchase.',
  },
  {
    id: '2',
    question: 'How do I reset my password?',
    answer:
      'Go to the login screen and tap "Forgot Password". Enter your registered email and follow the instructions sent to you to reset your password.',
  },
  {
    id: '3',
    question: 'Is my personal data safe?',
    answer:
      'Yes, we use industry-standard encryption and security practices to protect your personal data at all times.',
  },
  {
    id: '4',
    question: 'How can I contact customer support?',
    answer:
      'You can reach our customer support team via the Help section in the app, or by emailing support@yourapp.com.',
  },
  {
    id: '5',
    question: 'Do you ship internationally?',
    answer:
      'Yes, we ship to most countries worldwide. Shipping fees and delivery times vary depending on your location.',
  },
];

const Faq = () => {
  const [expandedId, setExpandedId] = useState('1');

  const toggleExpand = id => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <View style={styles.container}>
      <Top title={'FAQs'} />

      <ScrollView contentContainerStyle={styles.content}>
        {FAQS.map(item => {
          const isExpanded = item.id === expandedId;
          return (
            <View key={item.id} style={styles.card}>
              <TouchableOpacity
                style={styles.questionRow}
                onPress={() => toggleExpand(item.id)}
                activeOpacity={0.7}
              >
                <Text style={styles.question}>{item.question}</Text>
                <Ionicons
                  name={isExpanded ? 'chevron-up' : 'chevron-down'}
                  size={width * 0.05}
                  color="#555"
                />
              </TouchableOpacity>

              {isExpanded && <Text style={styles.answer}>{item.answer}</Text>}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Faq;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: width * 0.05,
    paddingTop: width * 0.04,
    paddingBottom: width * 0.06,
  },
  card: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: width * 0.03,
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.035,
    marginBottom: width * 0.03,
  },
  questionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  question: {
    flex: 1,
    fontSize: width * 0.038,
    fontWeight: '600',
    color: '#111',
    fontFamily: 'Poppins-Regular',
    marginRight: width * 0.03,
  },
  chevron: {
    fontSize: width * 0.045,
    color: '#555',
  },
  answer: {
    fontSize: width * 0.035,
    color: '#666',
    fontFamily: 'Poppins-Regular',
    lineHeight: width * 0.05,
    marginTop: width * 0.03,
  },
});
