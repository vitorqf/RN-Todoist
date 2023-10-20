import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme'
import Home from './src/screens/Home';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
          <StatusBar translucent style='light' />
          <Home />

    </ThemeProvider>
  );
}

