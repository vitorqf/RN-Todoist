import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
        <View>
          <StatusBar style="auto" />
          <Text>Hello World</Text>
        </View>
    </ThemeProvider>
  );
}

