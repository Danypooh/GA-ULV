import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button } from 'react-native-paper';
import { homeStyle } from './home.style';
import { HeaderComponent } from '../../components/header/header.component';

const HomeScreen = () => {

  return (
    <SafeAreaView style={homeStyle.flex}>
      <HeaderComponent title="My Greenhouse"/>
      <View style={homeStyle.contentContainer}>

      </View>
      <View style={homeStyle.footer}>
        <Button theme={{colors: {outline: "#40916C"}}} mode="outlined"> Start </Button>
        <Button theme={{colors: {primary: "#D1001F", outline: "#D1001F"}}} mode="outlined"> Stop </Button>
      </View>
    </SafeAreaView>    
  );

}

export default HomeScreen;