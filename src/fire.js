import { View, Text, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { db } from './../firebase-config';
import { ref, onValue } from 'firebase/database';

const FetchData = () => {
  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    const lettuces = ref(db, 'lettuce/'); //object with lettuce values
    onValue(lettuces, (snapshot) => {
      const data = snapshot.val();
      const newPosts = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));
      alert(newPosts);
      setTodoData(newPosts);
    });
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Realtime DB & Expo</Text>
      {
        todoData.map((item, index) => {
          return (
            <View style={styles.text} key={index}>
              <Text>{item.lett1}</Text>
              <Text>{item.lett2}</Text>
              <Text>{item.lett3}</Text>
              <Text>{item.lett4}</Text>
            </View>
          )
        })
      }
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 100,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default FetchData;