import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { Colors } from "../styles/GlobalStyles";

export const SubCard = ({ title, img, navigation }) => {
  // const pressHandler = () => {
  //   navigation.navigate("Fundamentals");
  // }

  return (
    <TouchableOpacity style={styles.SubCard} >
      <Image source={img} className="w-[80px] h-[80px] rounded-md" />
      <Text className="text-base color-white font-[OpenSans-SemiBold]">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  SubCard: {
    width: 140,
    backgroundColor: Colors.dark1,
    paddingHorizontal: 12,
    paddingVertical: 20,
    borderRadius: 8,
    alignItems: "center",
    gap: 8,
  },
});
