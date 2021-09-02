import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const TitleScreen = () => {
  return (
    <View>
      <Text style={styles.titleSection}>Spoiler Alert</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleSection: {
    fontSize: 40,
    fontWeight: '600',
    color: 'green',
    textAlign: 'center',
  },
});

export default TitleScreen;
