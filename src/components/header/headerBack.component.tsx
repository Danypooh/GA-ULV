import React from 'react';
import { Appbar } from 'react-native-paper';


export const HeaderBackComponent = (props: HeaderBackComponentParams) => {
  
  return(
    <Appbar.Header>
      <Appbar.BackAction/>
      <Appbar.Content title={props.title}/>
    </Appbar.Header>
  );

}

interface HeaderBackComponentParams {
  title: string;
}