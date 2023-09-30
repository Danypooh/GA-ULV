import React from 'react';
import { SafeAreaView, View, Image } from 'react-native';
import { Card, TextInput, Button, Text } from 'react-native-paper';
import { loginStyle } from './login.styles';
import { Formik } from 'formik';
import { loginForm } from './login.form';
import { LoadingState } from '../../components/store/loading/LoadingState';

import { hide, show } from './../../components/store/loading/loading.actions';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

interface LoginScreenProps {
  navigation: any;
  loadingState: LoadingState;
  hideLoading: Function;
  showLoading: Function;
}

const LoginScreen = (props: LoginScreenProps) => {

  const login = () => props.navigation.navigate("Home");
  const register = () => props.navigation.navigate("Register");
  const forgotEmailPassword = () => {
    props.showLoading();
    setTimeout(() => {
      props.hideLoading();
    }, 3000)
  }

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
                onSubmit={login}
                validationSchema={loginForm}>
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
                      uppercase={false} style={loginStyle.cardButton}
                      onPress={forgotEmailPassword} >
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

const mapStateToProps = (store: {loading: LoadingState}) => ({
  loadingState: store.loading
});
const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({
    hideLoading: hide,
    showLoading: show,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);