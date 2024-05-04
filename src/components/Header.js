import { Text, StyleSheet, Image, View } from "react-native";
import { Colors } from "../styles/GlobalStyles";

export const Header = () => {
  return (
      <View style={styles.Header}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/images/torch-logo.png')} className='h-16 w-16'/>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    backgroundColor: Colors.dark3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,
  },
  logoContainer: {
    flexDirection: 'row',
    gap: 8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderBottomColor: Colors.orange  ,
    borderBottomWidth: 4,
    paddingBottom: 8,
  }
});

