import { useState } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Modal,
  StyleSheet,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';

import Card from '../shared/Card';
import ReviewForm from '../screens/reviewForm';
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
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType='slide'>
        <View style={styles.modalContent}>
          <MaterialIcons
            name='close'
            size={24}
            onPress={() => setModalOpen(false)}
            style={{
              ...styles.modalToggle,
              ...styles.modalClose,
            }}
          />
          <ReviewForm />
        </View>
      </Modal>

      <MaterialIcons
        name='add'
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

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

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
});
