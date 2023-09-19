import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { registerStyle } from './register.styles';
import { HeaderComponent } from '../../components/header/header.component';

export const RegisterScreen = () => {
  
  return (
    <SafeAreaView>
        <ScrollView>
          <HeaderComponent title="Register"/>
          <View style={registerStyle.content}>
            <TextInput 
              label="Name" 
              style={registerStyle.input} underlineColor="#1E8C45"
            />
            <TextInput 
              label="Email" keyboardType='email-address'
              style={registerStyle.input} underlineColor="#1E8C45" 
            />
            <TextInput 
              label="Password" secureTextEntry={true} 
              right={<TextInput.Icon icon="eye-off-outline" color={registerStyle.icon.color}/>}
              style={registerStyle.input} underlineColor="#1E8C45"
            />
            <TextInput 
              label="Confirm password" secureTextEntry={true} 
              right={<TextInput.Icon icon="eye-off-outline" color={registerStyle.icon.color}/>}
              style={registerStyle.input} underlineColor="#1E8C45"
            />
            <TextInput 
              label="Phone number" keyboardType="phone-pad" 
              style={registerStyle.input} underlineColor="#1E8C45"
            />
            <Button mode="contained" style={registerStyle.button}>Register</Button>
          </View>
        </ScrollView>
    </SafeAreaView>
  );

}