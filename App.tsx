import 'react-native-gesture-handler'; // for drawer navigator
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  Nunito_200ExtraLight,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';

import DrawerNavigator from './routes/drawerNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_200ExtraLight,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
      <StatusBar style='auto' />
    </>
  );
}
