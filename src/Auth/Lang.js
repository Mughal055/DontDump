import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import Top from '../component/Top';
import Input from '../component/Input';
import Button from '../component/Button';

const { width } = Dimensions.get('window');

const LANGUAGES = [
  { id: '1', name: 'English', flag: '🇬🇧' },
  { id: '2', name: 'Japanese', flag: '🇯🇵' },
  { id: '3', name: 'Italian', flag: '🇮🇹' },
  { id: '4', name: 'German', flag: '🇩🇪' },
  { id: '5', name: 'Indian', flag: '🇮🇳' },
];

const Lang = () => {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState('1');

  const filteredLanguages = LANGUAGES.filter(lang =>
    lang.name.toLowerCase().includes(search.toLowerCase()),
  );

  const renderItem = ({ item }) => {
    const isSelected = item.id === selected;
    return (
      <TouchableOpacity
        style={[styles.langRow, isSelected && styles.langRowSelected]}
        onPress={() => setSelected(item.id)}
      >
        <View style={styles.langLeft}>
          <Text style={styles.flag}>{item.flag}</Text>
          <Text
            style={[styles.langName, isSelected && styles.langNameSelected]}
          >
            {item.name}
          </Text>
        </View>

        {isSelected && (
          <View style={styles.checkCircle}>
            <Text style={styles.checkMark}>✓</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Top title={'Language'} />

      <View style={styles.content}>
        <Text style={styles.title}>Select your preferred language</Text>
        <Text style={styles.subtitle}>
          You will use the same language throughout the app.
        </Text>

        <Input
          placeholder={'Search your language'}
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />

        <FlatList
          data={filteredLanguages}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View style={styles.bottomButton}>
        <Button title="Send" />
      </View>
    </View>
  );
};

export default Lang;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: width * 0.05,
    paddingTop: width * 0.04,
  },
  title: {
    fontSize: width * 0.045,
    fontWeight: '600',
    color: '#111',
    fontFamily: 'Poppins-Regular',
    marginBottom: width * 0.015,
  },
  subtitle: {
    fontSize: width * 0.033,
    color: '#777',
    fontFamily: 'Poppins-Regular',
    marginBottom: width * 0.05,
    lineHeight: width * 0.045,
  },
  searchInput: {
    marginBottom: width * 0.05,
  },
  list: {
    paddingBottom: width * 0.05,
  },
  langRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: width * 0.03,
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.035,
    marginBottom: width * 0.03,
  },
  langRowSelected: {
    borderColor: '#2e7d32',
    backgroundColor: '#2e7d32',
  },
  langLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    fontSize: width * 0.06,
    marginRight: width * 0.03,
  },
  langName: {
    fontSize: width * 0.038,
    color: '#111',
    fontFamily: 'Poppins-Regular',
  },
  langNameSelected: {
    color: '#fff',
    fontWeight: '600',
  },
  checkCircle: {
    width: width * 0.06,
    height: width * 0.06,
    borderRadius: width * 0.03,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkMark: {
    color: '#2e7d32',
    fontSize: width * 0.035,
    fontWeight: '700',
  },
  bottomButton: {
    paddingHorizontal: width * 0.05,
    paddingBottom: width * 0.06,
    paddingTop: width * 0.03,
  },
});
