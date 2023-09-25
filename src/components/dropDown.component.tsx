import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

export const DropDown = () => {
  const [open, setOpen] = useState(false);
  const [currentValue, setCurrenValue] = useState(null);
  const [items, setItems] = useState([
    {label: "Layout: A", value: "layoutA"},
    {label: "Layout: B", value: "layoutB"},
    {label: "Layout: C", value: "layoutC"},
  ])
  
  return (
    <View style={styles.view}>
      <DropDownPicker
        open={open}
        value={currentValue}
        items={items}
        setOpen={() => setOpen(!open)}
        setValue={(val) => setCurrenValue(val)}
        setItems={(item) => setItems(item)}

        placeholder="Greenhouse layout"
        placeholderStyle={styles.text}
        textStyle={styles.text}
        dropDownContainerStyle={styles.dropdown}
        showTickIcon={true}
        showArrowIcon={true}
        disableBorderRadius={true}
        style={styles.dropdown}

        onChangeValue={(value) => {console.log(value);}}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  view: {
    display: "flex",
    alignSelf: "center"
  },
  text: {
    color: "green",
  },
  dropdown: {
    width: "50%",
    borderColor: "green"
  }
})
