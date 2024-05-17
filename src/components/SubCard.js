import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { Colors } from "../styles/GlobalStyles";

export const SubCard = ({ title, img, onPress }) => {

  return (
    <TouchableOpacity onPress={onPress} style={styles.SubCard}>
        <Image source={img} className='w-[80px] h-[80px] rounded-md' />
        <Text className='text-xl color-white font-[OpenSans-SemiBold]'>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  SubCard: {
    alignItems: 'center',
    gap: 8,
  },
});

