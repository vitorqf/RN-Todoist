import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme'
import { Input } from './src/components/Input';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
        <View style={{flex: 1, paddingTop: 60, marginLeft: 20}}>
          <StatusBar style="auto" />
          <Input placeholder='Adicione uma nova tarefa' />
          <Text>Hello World</Text>
        </View>
    </ThemeProvider>
  );
}

