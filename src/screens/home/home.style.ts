import { StyleSheet } from 'react-native';

export  const homeStyle = StyleSheet.create({
  flex: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 50,
  },
  button: {
    width: 120,
  }
});