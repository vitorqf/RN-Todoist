import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import Home from './src/screens/Home';
import theme from './src/styles/theme';
import {  useFonts, Inter_400Regular, Inter_700Bold, Inter_500Medium } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { View } from 'react-native';

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

  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <StatusBar translucent style="light" />
        <Home />
      </View>
    </ThemeProvider>
  );
}
