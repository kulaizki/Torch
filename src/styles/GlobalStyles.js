import { StyleSheet } from 'react-native';

export const Colors = {
  dark1: '#212121',
  dark2: '#414141',
  orange: '#FFA800',
  blue: '#3D5CFF',
};

export const GlobalStyles = StyleSheet.create({
  centerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerTopView: {
    flex: 1,
    alignItems: 'center',
  },
  whiteDivider: {
    backgroundColor: Colors.light,
  },
});