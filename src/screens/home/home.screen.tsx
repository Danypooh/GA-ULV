import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, FAB } from 'react-native-paper';
import { homeStyle } from './home.style';
import { HeaderComponent } from './../../components/header/header.component';
import { PlantComponent } from './../../components/plant.component';
import { DropDown } from '../../components/dropDown.component';
import { BotBtn } from '../../components/botBtn.component';

interface HomeScreenProps {
  navigation?: any;
}

export const HomeScreen = (props: HomeScreenProps) => {

  const [botBtn, setBotBtn] = useState(true);

  const plantArr = ["P1", "P2", "P3", "P4"];

  return (
    <SafeAreaView style={homeStyle.flex}>
      <HeaderComponent title="My Greenhouse" navigation={props.navigation}/>
      <DropDown/>
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
        <View style={[homeStyle.content, {borderColor: botBtn ? "#40916C" : "red"}]}>
          <BotBtn value={botBtn} handlePress={(botBtn: boolean) => setBotBtn(botBtn)}/>
        </View>
        <FAB icon="plus" style={homeStyle.fab} color="#FFFFFF"/>
      </View>
    </SafeAreaView>    
  );

}
