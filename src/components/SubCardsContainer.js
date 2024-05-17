import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { Colors } from "../styles/GlobalStyles";

export const SubCardsContainer = ({ title, description, img, onPress }) => {

  return (
    <TouchableOpacity onPress={onPress} style={styles.SubCardsContainer}>
      <Image source={img} className='w-[120px] h-[120px] rounded-md' />
      <Text className='text-2xl color-white font-[OpenSans-SemiBold]'>{title}</Text>
      <Text className='color-[#d2d2d2] font-[OpenSans-SemiBold]'>{description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  SubCardsContainer: {
    backgroundColor: Colors.dark2,
    paddingHorizontal: 12,
    paddingVertical: 20,
    borderRadius: 8, 
    gap: 16,
    marginBottom: 8,
    borderWidth: 1,
  },
});

