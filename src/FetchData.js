import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { ref, onValue } from 'firebase/database';
import { PlantComponent } from './components/plant.component';

const FetchData = () => {
  const [plantSate, setPlantSate] = useState([]);

  useEffect(() => {
    const lettuces = ref(db, 'lettuce/'); //object with lettuce values
    onValue(lettuces, (snapshot) => {
      const data = snapshot.val();
      console.log('Firebase Data: ', data);
      const newPlantState = Object.keys(data).map(key => ({
        id: key,
        state: data[key]
      }));
      console.log('New Posts: ', newPlantState);
      setPlantSate(newPlantState);
    });
  }, [])

  return (
    <>
      {
        plantSate.map((item) => 
          <PlantComponent key={item.id} id={item.id} state={item.state}/>
        )
      }
    </>
  );

}

export default FetchData;