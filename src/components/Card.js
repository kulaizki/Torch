import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors } from "../styles/GlobalStyles";
import { Image } from "react-native";

export const Card = ({ title, description, img, onPress }) => {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: Colors.orange,  
      paddingHorizontal: 12,
      paddingVertical: 20,
      borderRadius: 8, 
      gap: 8,
    },
  });

  return (
    <TouchableOpacity onPress={onPress} style={styles.card} className=''>
      <Image source={img} className='w-[120px] h-[120px] rounded-md' />
      <Text className='text-2xl color-black font-[OpenSans-SemiBold]'>{title}</Text>
      <Text className='color-black font-[OpenSans-SemiBold]'>{description}</Text>
    </TouchableOpacity>
  );
};
