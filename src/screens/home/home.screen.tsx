import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, View, ScrollView } from 'react-native';
import { FAB } from 'react-native-paper';
import { homeStyle } from './home.style';
import { HeaderComponent } from './../../components/header/header.component';
import { DropDown } from '../../components/dropDown.component';
import { BotBtn } from '../../components/botBtn.component';
import FetchData from '../../FetchData';

interface HomeScreenProps {
  navigation?: any;
}

export const HomeScreen = (props: HomeScreenProps) => {

  const [botBtn, setBotBtn] = useState(true);
  const scrollViewRef = useRef<ScrollView | null>(null);

  // const addPlant = () => {
  //   setPlants([...plants, "P" + (plants.length + 1)]);

  //   // Scroll to the bottom of the ScrollView
  //   if (scrollViewRef.current) {
  //     scrollViewRef.current.scrollToEnd({ animated: true });
  //   }
  // }

  return (
    <SafeAreaView style={homeStyle.flex}>
      <HeaderComponent title="My Greenhouse" navigation={props.navigation}/>
      <DropDown/>

      <ScrollView contentContainerStyle={homeStyle.contentContainer} ref={scrollViewRef}>
        <FetchData/>
      </ScrollView>
      
      <View style={homeStyle.footer}>
        <View style={[homeStyle.content, {borderColor: botBtn ? "#40916C" : "#BA0000"}]}>
          <BotBtn value={botBtn} handlePress={(botBtn: boolean) => setBotBtn(botBtn)}/>
        </View>
        {/* <FAB icon="plus" style={homeStyle.fab} color="#FFFFFF" onPress={addPlant}/> */}
      </View>
    </SafeAreaView>    
  );

}
