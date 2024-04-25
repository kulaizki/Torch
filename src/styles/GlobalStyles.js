import { StyleSheet } from 'react-native';

export const Colors = {
  dark: '#212121',
  light: '#FFFFFF',
  orange: '#FFA800',
  blue: '#3D5CFF',
};

export const GlobalStyles = StyleSheet.create({
  centerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
  },
  centerTopView: {
    flex: 1,
    alignItems: 'center',
  },
  whiteDivider: {
    backgroundColor: Colors.light,
  },
});