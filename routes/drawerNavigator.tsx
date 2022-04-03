/** Follow the docs on setting up react native drawer */
/** Follow the expo guide on installing reanimated */
/** Or Else, you are in for it */
import { createDrawerNavigator } from '@react-navigation/drawer'; // Set up reanimated for expo, a must

import ReviewsStack from '../routes/reviewsStack';
import About from '../screens/about';

export default () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: { backgroundColor: 'green' },
      }}
    >
      <Drawer.Screen
        name='Home'
        component={ReviewsStack}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name='About' component={About} />
    </Drawer.Navigator>
  );
};
