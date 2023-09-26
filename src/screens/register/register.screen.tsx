import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { registerStyle } from './register.styles';
import { HeaderBackComponent } from '../../components/header/headerBack.component';

interface RegisterScreenProps {
  navigation: any;
}

export const RegisterScreen = (props: RegisterScreenProps) => {
  
  const register = () => props.navigation.navigate("Home");

  return (
    <SafeAreaView style={registerStyle.page}>
        <ScrollView>
          <HeaderBackComponent title="Register" navigation={props.navigation}/>
          <View style={registerStyle.content}>
            <TextInput 
              label="Name" 
              style={registerStyle.input} underlineColor="#40916C"
            />
            <TextInput 
              label="Email" keyboardType='email-address'
              style={registerStyle.input} underlineColor="#40916C" 
            />
            <TextInput 
              label="Password" secureTextEntry={true} 
              right={<TextInput.Icon icon="eye-off-outline" color={registerStyle.icon.color}/>}
              style={registerStyle.input} underlineColor="#40916C"
            />
            <TextInput 
              label="Confirm password" secureTextEntry={true} 
              right={<TextInput.Icon icon="eye-off-outline" color={registerStyle.icon.color}/>}
              style={registerStyle.input} underlineColor="#40916C"
            />
            <TextInput 
              label="Phone number" keyboardType="phone-pad" 
              style={registerStyle.input} underlineColor="#40916C"
            />
            <Button 
              mode="contained" style={registerStyle.button} onPress={register}>
              Register
            </Button>
          </View>
        </ScrollView>
    </SafeAreaView>
  );

}