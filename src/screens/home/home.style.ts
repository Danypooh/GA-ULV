import { StyleSheet } from 'react-native';

export  const homeStyle = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    zIndex: -5,
  },
  fab: {
    borderRadius: 50,
    backgroundColor: "#40916C",
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 20
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 5,
    borderRadius: 20,
    width: "50%",
    height: 60,
  },
  button: {
    width: 120,
  },
});