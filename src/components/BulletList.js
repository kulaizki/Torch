import { Text, StyleSheet, Image, View } from "react-native";
import { Colors } from "../styles/GlobalStyles";

export const BulletList = ({ bulletList }) => {
  return (
    <View style={styles.ul}>
      {bulletList.map((item, index) => (
        <View style={styles.li} key={index}>
          <View style={styles.liContent}>
            <Text className="text-2xl color-white font-[OpenSans-SemiBold]">
              {item.bTitle}
            </Text>
            <Text className="font-[OpenSans-Light] color-[#d2d2d2] pb-8">
              {item.bBody}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  ul: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 16,
  },
  li: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  Content: {
    gap: 16,
  },
});
