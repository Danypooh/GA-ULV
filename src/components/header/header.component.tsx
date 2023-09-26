import React, { useState } from 'react';
import { Appbar, Menu } from 'react-native-paper';

interface HeaderComponentParams {
  navigation?: any;
  title: string;
}

export const HeaderComponent = (props: HeaderComponentParams) => {

  const [visible, setVisible] = useState(false);

  const backgroundColor = "#FFFFFF";
  const textColor = "#40916C"

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const logout = () => props.navigation?.navigate("Login");
  
  return(
    <Appbar.Header theme={{ colors: { surface: backgroundColor} }} mode="center-aligned">
      <Menu
        visible={visible} 
        onDismiss={closeMenu} 
        contentStyle={{ backgroundColor: "#FFFFFF" }}
        anchor={<Appbar.Action icon="menu" color="#40916C" onPress={openMenu}/>}>
        <Menu.Item 
          title="Logout" 
          style={{ backgroundColor: "#FFFFFF" }} 
          onPress={logout}/>
      </Menu>
      <Appbar.Content title={props.title} color={textColor}/>
    </Appbar.Header>
  );

}
