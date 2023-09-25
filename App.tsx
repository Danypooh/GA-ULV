import React from 'react';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';
import { LoginScreen } from './src/screens/login/login.screen';
import { theme } from './App.style';
import { RegisterScreen } from './src/screens/register/register.screen';
import HomeScreen from './src/screens/home/home.screen';

export default function App() {
  
  return (
    <PaperProvider theme={theme}>
      <HomeScreen/>  
    </PaperProvider>
  );
  
}
