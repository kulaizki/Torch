import { StyleSheet } from 'react-native';

export const Colors = {
  dark: '#212121',
  orange: '#FFA800',
  blue: '#3D5CFF',
};

export const GlobalStyles = StyleSheet.create({
  centerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: Colors.dark,
  },
  centerTopView: {
    flex: 1,
    alignItems: 'center',
  },
  whiteDivider: {
    backgroundColor: Colors.light,
  },
});