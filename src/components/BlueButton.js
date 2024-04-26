import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors } from "../styles/GlobalStyles";

export const BlueButton = ({ title, onPress }) => {
  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: Colors.blue,  
      paddingHorizontal: 60,
      paddingVertical: 16,
      borderRadius: 8, 
    },
  });

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text className='text-2xl color-white font-[OpenSans-SemiBold]'>{title}</Text>
    </TouchableOpacity>
  );
};