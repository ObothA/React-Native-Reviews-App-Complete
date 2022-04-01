import React from 'react';
// import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

type RootStackParamList = {
  Home: undefined;
  ReviewDetails: { title: string; rating: number; body: string; key: string };
};

// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator<RootStackParamList>();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
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
        name='Home'
        component={Home}
        options={{
          title: 'Game Zone',
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
