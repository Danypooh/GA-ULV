import React from 'react';
import { StyleSheet, Image } from 'react-native';

export const PlantComponent = (props: PlantComponentParams) => {
  
  const HEALTHY_LETTUCE = require("./../../assets/healthyLetucce.png");
  const SICK_LETTUCE = require("./../../assets/sickLetucce.png");

  let icon = props.plant == "P4" ? SICK_LETTUCE : HEALTHY_LETTUCE;

  return(
      <Image
        style={styles.plant} 
        source={icon}/>
  );

}

interface PlantComponentParams {
  key: number;
  id: number;
  plant: string;
}

const styles = StyleSheet.create({
  plant: {
    width: 150,
    height: 150,
    marginHorizontal: 20,
    marginVertical: 40,
  },
})