import React from 'react';
// import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

import Reviews from '../screens/reviews';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

type RootStackParamList = {
  Reviews: undefined;
  ReviewDetails: { title: string; rating: number; body: string; key: string };
};

// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator<RootStackParamList>();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName='Reviews'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#eee',
          height: 60,
        },
        headerTintColor: '#444', // color of the text
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name='Reviews'
        component={Reviews}
        // options={{
        //   headerTitle: (props) => <Header {...props} />,
        // }}
        options={({ navigation }) => {
          return {
            headerTitle: () => <Header navigation={navigation} />,
          };
        }}
      />
      <Stack.Screen
        name='ReviewDetails'
        component={ReviewDetails}
        options={{
          title: 'Review Details',
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
