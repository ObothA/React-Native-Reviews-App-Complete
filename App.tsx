import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  Nunito_200ExtraLight,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';

import Home from './screens/home';

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
        <Home />
      </NavigationContainer>
      <StatusBar style='auto' />
    </>
  );
}
