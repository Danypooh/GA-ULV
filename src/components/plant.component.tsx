import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const PlantComponent = (props: PlantComponentParams) => {
  
  return(
      <Text style={styles.plant}>{props.plant}</Text>
  );

}

interface PlantComponentParams {
  key: number;
  id: number;
  plant: string;
}

const styles = StyleSheet.create({
  plant: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginHorizontal: 20,
    marginVertical: 40,
    fontSize: 35,
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#40916C",
    color: "#FFFFFF"
  },
})