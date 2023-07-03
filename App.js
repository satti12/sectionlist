import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

const App = () => {
  const data = [
    {
      title: 'Fruits',
      data: ['Apple', 'Mango', 'Banana'],
    },
    {
      title: 'Vegetables',
      data: ['Carrot', 'Tomato', 'Broccoli'],
    },
    {
      title: 'Colors',
      data: ['Red', 'Green', 'Blue'],
    },
  ];

  const renderSectionHeader = ({ section }) => {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{section.title}</Text>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SectionList
        sections={data}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 24,
  },
  sectionHeader: {
    backgroundColor: 'blue',
    padding: 16,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  item: {
    padding: 16,
    paddingLeft: 30, // Add left padding of 20 pixels
  },
  itemText: {
    fontSize: 16,
  },
});

export default App;
