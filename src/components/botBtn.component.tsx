import React from "react";
import { Pressable, StyleSheet, Text } from 'react-native';

export const BotBtn = (props: BotBtnParams) => {

  return(
    <Pressable
      style={({ pressed }) => [
        styles.wrapper
      ]}
      onPress={() => 
       props.handlePress(!props.value)
      }>
      {({pressed}) => (
        <Text style={props.value ? styles.start : styles.stop}>
          {props.value ? "Start" : "Stop"}
        </Text>
      )}
    </Pressable>
  );

}

interface BotBtnParams {
  value: boolean;
  handlePress: any;
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 10,
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  start: {
    color: "#40916C",
  },
  stop: {
    color: "#BA0000"
  },
})