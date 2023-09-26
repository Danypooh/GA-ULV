import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';
import { loginStyle } from './login.styles';
import { Formik } from 'formik';
import { loginForm } from './login.form';

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
              <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={login}
                validationSchema={loginForm}>
                {({ handleSubmit, handleChange, setFieldTouched, touched, errors, values }) => (
                  <>
                    <TextInput 
                      label="Email" keyboardType="email-address" style={loginStyle.cardInput} 
                      onChangeText={handleChange("email")} 
                      onFocus={() => setFieldTouched("email")}/>
                    {
                      touched.email && errors.email ? 
                        <Text style={{ color: "white", backgroundColor: "red" }}>
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
                        <Text style={{ color: "white", backgroundColor: "red" }}>
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