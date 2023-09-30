import 'react-native-gesture-handler';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from './src/components/store/store';
import { theme } from './App.style';
import AppNavigator from './src/app.navigator';
import LoadingComponent from './src/components/loading/loading.component';

// import { LoginScreen } from './src/screens/login/login.screen';
// import { RegisterScreen } from './src/screens/register/register.screen';
// import { HomeScreen } from './src/screens/home/home.screen';

export default function App() {
  
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <AppNavigator/>  
        <LoadingComponent />
      </PaperProvider>
    </Provider>
    
  );
  
}
