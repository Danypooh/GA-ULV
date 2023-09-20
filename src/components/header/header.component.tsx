import React from 'react';
import { Appbar } from 'react-native-paper';


export const HeaderComponent = (props: HeaderComponentParams) => {

  const backgroundColor = "#FFFFFF";
  const textColor = "#40916C"
  
  return(
    <Appbar.Header theme={{ colors: { surface: backgroundColor} }} mode="center-aligned">
      <Appbar.Content title={props.title} color={textColor}/>
    </Appbar.Header>
  );

}

interface HeaderComponentParams {
  title: string;
}