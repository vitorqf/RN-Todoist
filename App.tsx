import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import Home from './src/screens/Home';
import theme from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent style="light" />
      <Home />
    </ThemeProvider>
  );
}
