import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button } from 'react-native-paper';
import { homeStyle } from './home.style';
import { HeaderComponent } from '../../components/header/header.component';
import { PlantComponent } from '../../components/header/plant.component';

const HomeScreen = () => {

  const plantArr = ["P1", "P2", "P3", "P4"];

  return (
    <SafeAreaView style={homeStyle.flex}>
      <HeaderComponent title="My Greenhouse"/>
      <View style={homeStyle.contentContainer}>
        {plantArr.map((plant, index) =>
          <PlantComponent
            key={index} 
            id={index}
            plant={plant}
          />
          )}
      </View>
      <View style={homeStyle.footer}>
        <Button 
          theme={{colors: {outline: "#40916C"}}} mode="outlined" style={homeStyle.button}> 
          Start 
        </Button>
        <Button 
          theme={{colors: {primary: "#D1001F", outline: "#D1001F"}}} mode="outlined" style={homeStyle.button}> 
          Stop 
        </Button>
      </View>
    </SafeAreaView>    
  );

}

export default HomeScreen;