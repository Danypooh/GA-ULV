import React from 'react';
import { db } from '../firebase-config';
import { ref, set } from 'firebase/database';
import { Pressable, StyleSheet, Text } from 'react-native';

const PostData = ({value, handlePress}) => {

  const startBot = () => {
    set(ref(db, 'control/' ), {
      locobot: true,
    });
  }

  const stopBot = () => {
    set(ref(db, 'control/' ), {
      locobot: false,
    });
  }

  return(
    <Pressable
      style={({ pressed }) => [
        styles.wrapper
      ]}
      onPress={() => {
          handlePress(!value);
          value ? startBot() : stopBot();
        }
      }>

      {({pressed}) => (
        <Text style={value ? styles.start : styles.stop}>
          {value ? "Start" : "Stop"}
        </Text>
      )}
      
    </Pressable>
  );

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
});

export default PostData;