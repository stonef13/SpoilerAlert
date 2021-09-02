import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';

const dummyData = [
  {
    key: 'Bananas',
    key: 'Apples',
    key: 'Steak',
    key: 'Jalapenos',
  },
];

const List = () => {
  return (
    <ScrollView>
      {dummyData.map(el => {
        return <Text>{el.key}</Text>;
      })}
    </ScrollView>
  );
};

export default List;
