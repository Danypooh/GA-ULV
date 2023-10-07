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
import { recoverPassword, recoverPasswordReset, recoverPasswordSuccess, recoverPasswordFail, 
        login, loginFail, loginSuccess} from '../../components/store/login/login.actions';

interface LoginScreenProps {
  navigation: any;

  loadingState: LoadingState;
  loginState: LoginState;

  login: Function;
  loginFail: Function;
  loginSuccess: Function;
  recoverPassword: Function;
  recoverPasswordFail: Function;
  recoverPasswordReset: Function;
  recoverPasswordSuccess: Function;
  hideLoading: Function;
  showLoading: Function;
}

const LoginScreen = (props: LoginScreenProps) => {

  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [userLogin, setUserLogin] = useState({email: "", password: ""});

  useEffect(() => {  //show loading & recover password action
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
  }, [props.loginState.isRecoveringPassword]);

  useEffect(() => {  //show loading & send user info
    if (props.loginState.isLoggingIn) {
      props.showLoading();

      AuthService.login(userLogin.email, userLogin.password).then(user => {
        props.loginSuccess(user);
      }).catch(error => {
        props.loginFail(error);
      });
    } else {
      props.hideLoading();
    }
  }, [props.loginState.isLoggingIn]);

  useEffect(() => {  //hide loading & go to Home screen
    if (props.loginState.isLoggedIn) {
      props.hideLoading();
      props.navigation.navigate("Home");
    }
  }, [props.loginState.isLoggedIn]);

  const forgotEmailPassword = (email: string) => { 
    setRecoveryEmail(email);
    props.recoverPassword();
  };
  const login = (userLogin: {email: string, password: string}) => {
    setUserLogin(userLogin);
    props.login()
  };
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
    login: login,
    loginFail: loginFail,
    loginSuccess: loginSuccess,
    recoverPassword: recoverPassword,
    recoverPasswordFail: recoverPasswordFail,
    recoverPasswordReset: recoverPasswordReset,
    recoverPasswordSuccess: recoverPasswordSuccess,
    hideLoading: hide,
    showLoading: show,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);