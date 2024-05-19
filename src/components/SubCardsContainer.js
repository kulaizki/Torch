import { StyleSheet, View } from "react-native";
import { Colors } from "../styles/GlobalStyles";
import { SubCard } from "./SubCard";
import { SubCards } from "../../data";

export const SubCardsContainer = ({ navigation }) => {
  // function navigate(name, subcard) {
  //   navigation.navigate(name, subcard);
  // }

  const pressHandler = (title) => {
    navigation.navigate(title);
  }

  return (
    <View style={styles.SubCardsContainer}>
      {SubCards.map((subcard) => (
        <SubCard 
          key={subcard.title} 
          title={subcard.title} 
          img={subcard.img} 
          onPress={() => pressHandler(subcard.title)}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  SubCardsContainer: {
    marginTop: 16,
    marginBottom: 60,
    backgroundColor: Colors.dark2,
    paddingHorizontal: 12,
    paddingVertical: 20,
    borderRadius: 8,
    gap: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
