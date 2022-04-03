import React from 'react';
import { BackHandler, StyleSheet, Text, View } from 'react-native';

export default (props: { children: React.ReactNode }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3, // distance between the card and the back for the screen
    backgroundColor: '#fff',
    shadowOffset: {
      // give shadow, how much to the right and how much down
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2, // how it blends in further away from the card
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});
