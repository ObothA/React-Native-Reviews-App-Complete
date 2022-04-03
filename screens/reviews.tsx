import { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import Card from '../shared/Card';
import { globalStyles } from '../styles/global';

type RootStackParamList = {
  Reviews: undefined;
  ReviewDetails: { title: string; rating: number; body: string; key: string };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Reviews'>;

export default function Reviews({ navigation }: Props) {
  const [reviews, setReviews] = useState([
    {
      title: 'Title 1',
      rating: 5,
      body: 'This is the body of review 1',
      key: '1',
    },
    {
      title: 'Title 2',
      rating: 4,
      body: 'This is the body of review 2',
      key: '2',
    },
    {
      title: 'Title 3',
      rating: 3,
      body: 'This is the body of review 3',
      key: '3',
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetails', item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
