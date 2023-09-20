import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';


export const HeaderBackComponent = (props: HeaderBackComponentParams) => {
  
  return(
    <Appbar.Header theme={{ colors: { surface: "#FFFFFF"}}}>
      <Appbar.BackAction/>
      <Appbar.Content title={props.title}/>
    </Appbar.Header>
  );

}

interface HeaderBackComponentParams {
  title: string;
}

const styles = StyleSheet.create({

})