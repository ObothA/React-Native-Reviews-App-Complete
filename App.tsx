import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';

/** Follow the docs on setting up react native drawer */
/** Follow the expo guide on installing reanimated */
/** Or Else, you are in for it */
import { createDrawerNavigator } from '@react-navigation/drawer'; // Set up reanimated for expo, a must
import {
  useFonts,
  Nunito_200ExtraLight,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';

import HomeStack from './routes/homeStack';
import About from './screens/about';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_200ExtraLight,
    Nunito_700Bold,
  });

  const Drawer = createDrawerNavigator();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name='Main' component={HomeStack} />
          <Drawer.Screen name='About' component={About} />
        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' />
    </>
  );
}
