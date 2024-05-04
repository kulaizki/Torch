import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { Colors } from "../styles/GlobalStyles";

export const BackButton = ({ onPress }) => {

  return (
    <TouchableOpacity onPress={onPress} style={styles.BackButton}>
      <Image source={require('../assets/icons/arrow-left.png')}/>
      <Text className='text-2xl color-white font-[OpenSans-Regular]'>Back</Text>
    </TouchableOpacity>
  );
};

  const styles = StyleSheet.create({
    BackButton: {
        flexDirection: 'row',
        backgroundColor: Colors.dark3,
        width: '100%',
        alignItems: 'center',
        gap: 16,
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderRadius: 8, 
        borderBottomColor: Colors.orange,
        borderBottomWidth: 4,
    },
  });