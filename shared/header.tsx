import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default ({ navigation }: { navigation: any }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <MaterialIcons
        name='menu'
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require('../assets/heart_logo.png')}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>GameZone</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center', // alignment along the cross axis
    justifyContent: 'center', // alignment along the main axis
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 0,
  },
  headerTitle: {
    flexDirection: 'row',
    position: 'absolute', // push title to the center
    left: 110, // push title to the center
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});
