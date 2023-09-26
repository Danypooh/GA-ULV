import React from 'react';
import { SafeAreaView, View, Alert } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';
import { loginStyle } from './login.styles';

interface LoginScreenProps {
  navigation: any;
}

export const LoginScreen = (props: LoginScreenProps) => {

  const login = () => props.navigation.navigate("Home");
  const register = () => props.navigation.navigate("Register");

  return (
    <SafeAreaView style={loginStyle.content}>
        <View style={loginStyle.view}>
          <Card>
            <Card.Title title="GA-ULV App" titleStyle={loginStyle.cardTitle}></Card.Title>
            <Card.Content>
                <TextInput 
                  label="Email" keyboardType='email-address' style={loginStyle.cardInput}>
                </TextInput>
                <TextInput 
                  label="Password" secureTextEntry={true} style={loginStyle.cardInput}> 
                </TextInput>
                <Button 
                  uppercase={false} style={loginStyle.cardButton}>
                  Forgot email/password
                </Button>
                <Button 
                  mode="contained" style={loginStyle.cardButton} onPress={login}>
                  Login
                </Button>
                <Button 
                  style={loginStyle.cardButton} onPress={register}>
                  Register
                </Button>
            </Card.Content>
          </Card>
        </View>
       
    </SafeAreaView>
  );
  
}