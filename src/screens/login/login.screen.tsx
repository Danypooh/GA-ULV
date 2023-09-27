import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';
import { loginStyle } from './login.styles';
import { Formik } from 'formik';

interface LoginScreenProps {
  navigation: any;
}

export const LoginScreen = (props: LoginScreenProps) => {

  const login = () => props.navigation.navigate("Home");
  const register = () => props.navigation.navigate("Register");

  const logo = require("./../../../assets/logo.png");

  return (
    <SafeAreaView style={loginStyle.content}>
      <Image style={loginStyle.logo} source={logo} />
        <View style={loginStyle.view}>
          <Card>
            <Card.Title title="GA-ULV App" titleStyle={loginStyle.cardTitle}></Card.Title>
            <Card.Content>
              <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={login}>
                {({ handleSubmit, handleChange, setFieldTouched, touched, errors}) => (
                  <>
                    <TextInput 
                      label="Email" keyboardType="email-address" style={loginStyle.cardInput} 
                      onChangeText={handleChange("email")} 
                      onFocus={() => setFieldTouched("email")}/>
                    {
                      touched.email && errors.email ? 
                        <Text style={{ color: "white", backgroundColor: "#BA0000" }}>
                          {errors.email}
                        </Text>
                        : null
                    }
                    <TextInput 
                      label="Password" secureTextEntry={true} style={loginStyle.cardInput}
                      onChangeText={handleChange("password")}
                      onFocus={() => setFieldTouched("password")}/> 
                    {
                      touched.password && errors.password ? 
                        <Text style={{ color: "white", backgroundColor: "#BA0000" }}>
                          {errors.password}
                        </Text>
                        : null
                    }
                    <Button 
                      uppercase={false} style={loginStyle.cardButton} >
                      Forgot email/password
                    </Button>
                    <Button 
                      mode="contained" style={loginStyle.cardButton} 
                      onPress={(e: any) => handleSubmit(e)}>
                      Login
                    </Button>
                    <Button 
                      style={loginStyle.cardButton} 
                      onPress={register}>
                      Register
                    </Button>
                  </>
                )}
              </Formik>
            </Card.Content>
          </Card>
        </View>
    </SafeAreaView>
  );
  
}