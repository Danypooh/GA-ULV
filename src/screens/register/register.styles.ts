import { StyleSheet } from 'react-native';
import { theme } from '../../../App.style';

export const registerStyle = StyleSheet.create({
  content: {
    padding: 15,
    paddingTop: 0,
  },
  input: {
    backgroundColor: 'transparent',
  },
  icon: {
    color: theme.colors.primary,
  },
  button: {
    marginTop: 30,
  },
})