import React from 'react';
import { StyleSheet, Image } from 'react-native';

export const PlantComponent = (props: PlantComponentParams) => {
  
  const HEALTHY_LETTUCE = require("./../../assets/healthyLetucce.png");
  const SICK_LETTUCE = require("./../../assets/sickLetucce.png");

  let icon = props.state ? HEALTHY_LETTUCE : SICK_LETTUCE;

  return(
      <Image
        style={styles.plant} 
        source={icon}/>
  );

}

interface PlantComponentParams {
  key: string;
  id: string;
  state: boolean;
}

const styles = StyleSheet.create({
  plant: {
    width: 150,
    height: 150,
    marginHorizontal: 20,
    marginVertical: 40,
  },
})