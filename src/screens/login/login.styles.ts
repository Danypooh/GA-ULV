import { StyleSheet } from 'react-native';

export const loginStyle = StyleSheet.create({
  content: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#40916C",
  },
  logo: {
    width: 125,
    height: 125,
    margin: 30,
    backgroundColor: "#FFFFFF",
    borderRadius: 100,
    position: "absolute",
    top: 100
  },
  view: {
    width: "80%",
    bottom: -35,
  },
  cardTitle: {
    color: "#40916C",
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