import { StyleSheet } from 'react-native';

export const loginStyle = StyleSheet.create({
  content: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#1E8C45",
  },
  view: {
    width: "80%",
  },
  cardTitle: {
    color: "#1E8C45",
  },
  cardInput: {
    backgroundColor: 'transparent',
  },
  cardButton: {
    margin: 2,
    marginLeft: 0,
    marginRight: 0,
  }
})