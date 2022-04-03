import { StyleSheet, View, Text, Image } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import Card from '../shared/Card';
import { globalStyles, images } from '../styles/global';

type RootStackParamList = {
  Home: undefined;
  ReviewDetails: { title: string; rating: number; body: string; key: string };
};

type Props = NativeStackScreenProps<RootStackParamList, 'ReviewDetails'>;

export default function ReviewDetails({ route, navigation }: Props) {
  const { title, body, rating } = route.params;

  // @ts-ignore
  const index = images.ratings[rating];

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.rating}>
          <Text>GameZone Rating: </Text>

          <Image source={index} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});
