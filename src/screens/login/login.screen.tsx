import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Image} from 'react-native';
import { Card, TextInput, Button, Text, Snackbar } from 'react-native-paper';
import { loginStyle } from './login.styles';
import { Formik } from 'formik';
import { loginForm } from './login.form';

import { LoadingState } from '../../components/store/loading/LoadingState';
import { LoginState } from '../../components/store/login/LoginState';
import { MyAppState } from '../../components/store/MyAppState';
import AuthService from '../../services/AuthService';

import { hide, show } from './../../components/store/loading/loading.actions';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { recoverPassword, recoverPasswordReset, recoverPasswordSuccess, recoverPasswordFail } from '../../components/store/login/login.actions';

interface LoginScreenProps {
  navigation: any;

  loadingState: LoadingState;
  loginState: LoginState;

  recoverPassword: Function;
  recoverPasswordFail: Function;
  recoverPasswordReset: Function;
  recoverPasswordSuccess: Function;
  hideLoading: Function;
  showLoading: Function;
}

const LoginScreen = (props: LoginScreenProps) => {

  const [recoveryEmail, setRecoveryEmail] = useState("");

  useEffect(() => {
    if (props.loginState.isRecoveringPassword) {
      props.showLoading();

      AuthService.recoverPassword(recoveryEmail).then(() => {
        props.recoverPasswordSuccess();
      }).catch(error => {
        props.recoverPasswordFail(error);
      })
    } else {
      props.hideLoading();
    }
  }, [props.loginState.isRecoveringPassword])

  const forgotEmailPassword = (email: string) => {
    setRecoveryEmail(email);
    props.recoverPassword();
  };
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
                onSubmit={login}
                validationSchema={loginForm}>
                {({ handleSubmit, handleChange, setFieldTouched, touched, errors, values}) => (
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
                      onPress={() => forgotEmailPassword(values.email)} >
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
        {
          props.loginState.isRecoveredPassword ?
            <Snackbar
            duration={5000}
            visible={true}
            onDismiss={() => props.recoverPasswordReset()}>
            Recovery email sent
            </Snackbar>
            : null
        }
        {
          props.loginState.error ?
            <Snackbar
            duration={5000}
            visible={true}
            onDismiss={() => props.recoverPasswordReset()}>
            {props.loginState.error.message}
            </Snackbar>
            : null
        }
    </SafeAreaView>
  );
  
}

const mapStateToProps = (store: MyAppState) => ({
  loadingState: store.loading,
  loginState: store.login
});
const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({
    recoverPassword: recoverPassword,
    recoverPasswordFail: recoverPasswordFail,
    recoverPasswordReset: recoverPasswordReset,
    recoverPasswordSuccess: recoverPasswordSuccess,
    hideLoading: hide,
    showLoading: show,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);