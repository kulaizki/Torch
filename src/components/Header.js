import { Text, StyleSheet, Image, View } from "react-native";
import { Colors } from "../styles/GlobalStyles";

export const Header = () => {
  const styles = StyleSheet.create({
    Header: {
      backgroundColor: Colors.orange,
      height: 68,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
      <View style={styles.Header}>
        <Text className='text-2xl color-black font-[OpenSans-SemiBold]'>Torch</Text>
      </View>
  );
};

