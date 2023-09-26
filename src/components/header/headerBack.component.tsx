import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface HeaderBackComponentParams {
  title: string;
  navigation?: any;
}

export const HeaderBackComponent = (props: HeaderBackComponentParams) => {
  
  const goBack = () => props.navigation.navigate("Login");

  return(
    <Appbar.Header theme={{ colors: { surface: "#FFFFFF"}}}>
      <Appbar.BackAction onPress={goBack}/>
      <Appbar.Content title={props.title}/>
    </Appbar.Header>
  );

}
