import { StyleSheet, View, Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { globalStyles } from '../styles/global';

type RootStackParamList = {
  Home: undefined;
  ReviewDetails: { title: string; rating: number; body: string; key: string };
};

type Props = NativeStackScreenProps<RootStackParamList, 'ReviewDetails'>;

export default function ReviewDetails({ route, navigation }: Props) {
  const { title, body, rating } = route.params;

  return (
    <View style={globalStyles.container}>
      <Text>{title}</Text>
      <Text>{body}</Text>
      <Text>{rating}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
