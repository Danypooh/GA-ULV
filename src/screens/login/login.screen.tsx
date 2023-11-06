import React, { useState } from 'react';
import { SafeAreaView, View, Image, Alert} from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';
import { loginStyle } from './login.styles';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../../firebase-config'; 

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen = (props: LoginScreenProps) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        Alert.alert("Account created");
      })
      .catch(error => {
        Alert.alert(error.message);
      })
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        props.navigation.navigate("Home");
      })
      .catch(error => {
        Alert.alert(error.message);
      })
  };

  const handleForgotEmailPassword = () => {
    sendPasswordResetEmail(auth, email)
        .then(() => {
            Alert.alert("reset email sent to " + email);
        })
        .catch((error) => {
            Alert.alert(error.message);
        });
};

  const logo = require("./../../../assets/logo.png");

  return (
    <SafeAreaView style={loginStyle.content}>
      <Image style={loginStyle.logo} source={logo} />
        <View style={loginStyle.view}>
          <Card>
            <Card.Title title="GA-ULV App" titleStyle={loginStyle.cardTitle}></Card.Title>
            <Card.Content>
                <TextInput 
                  label="Email" keyboardType="email-address" style={loginStyle.cardInput} 
                  onChangeText={(text) => setEmail(text)} />
                <TextInput 
                  label="Password" secureTextEntry={true} style={loginStyle.cardInput}
                  onChangeText={(text) => setPassword(text)}/> 
                <Button 
                  uppercase={false} style={loginStyle.cardButton}
                  onPress={handleForgotEmailPassword} >
                  Forgot email/password
                </Button>
                <Button 
                  mode="contained" style={loginStyle.cardButton} 
                  onPress={handleSignIn}>
                  Login
                </Button>
                <Button 
                  style={loginStyle.cardButton} 
                  onPress={handleCreateAccount}>
                  Create Account
                </Button>
            </Card.Content>
          </Card>
        </View>
    </SafeAreaView>
  );

}

export default LoginScreen;