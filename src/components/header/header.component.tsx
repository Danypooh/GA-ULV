import React from 'react';
import { Appbar, Menu } from 'react-native-paper';


export const HeaderComponent = (props: HeaderComponentParams) => {

  const backgroundColor = "#FFFFFF";
  const textColor = "#40916C"
  
  return(
    <Appbar.Header theme={{ colors: { surface: backgroundColor} }} mode="center-aligned">
      <Menu
        visible={true} onDismiss={() => {}} anchor={<Appbar.Action icon="menu" color="#40916C"/>}>
      </Menu>
      <Appbar.Content title={props.title} color={textColor}/>
    </Appbar.Header>
  );

}

interface HeaderComponentParams {
  title: string;
}