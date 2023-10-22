import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  useFonts
} from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { ThemeProvider } from 'styled-components/native';
import Details from './src/screens/Details';
import Home from './src/screens/Home';
import theme from './src/styles/theme';

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {
  const fontsLoaded = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_500Medium
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  onLayoutRootView();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar style="light" translucent />
        <Stack.Navigator initialRouteName="Home" screenOptions={{animation: 'slide_from_right', navigationBarColor: "#000"}}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
