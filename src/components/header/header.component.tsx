import React from 'react';
import { Appbar } from 'react-native-paper';


export const HeaderComponent = (props: HeaderComponentParams) => {
  
  return(
    <Appbar.Header>
      <Appbar.BackAction/>
      <Appbar.Content title={props.title}/>
    </Appbar.Header>
  );

}

interface HeaderComponentParams {
  title: string;
}