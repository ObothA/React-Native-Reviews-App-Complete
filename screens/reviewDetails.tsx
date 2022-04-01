import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default () => {
  return (
    <View>
      <Text style={styles.container}>Review Details Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
