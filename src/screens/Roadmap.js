import { View, Image, Text, ScrollView, Button } from "react-native";
import { GlobalStyles, Colors } from "../styles/GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { BackButton } from "../components/BackButton";
import { DescriptionCards, SubCards } from "../../data";
import { TouchableOpacity } from "react-native";

export default function Roadmap({ navigation }) {
  const route = useRoute();
  const card = route.params;

  function nav(name) {
    navigation.navigate(name, card.title);
  }

  return (
    <SafeAreaView style={GlobalStyles.centerView}>
      <View style={[GlobalStyles.centerView, styles.Roadmap]}>
        <BackButton className="absolute" onPress={() => navigation.goBack()} />
        <ScrollView style={styles.cardContainer}>
          <View style={styles.cardContent}>
            <Image className="w-[120px] h-[120px]" source={card?.img} />
            <Text className="font-[OpenSans-Bold] text-4xl color-white">
              {card?.title}
            </Text>
            <Text className="font-[OpenSans-Regular] text-lg color-[#d2d2d2]">
              {card?.description}
            </Text>
            {/* <SubCardsContainer navigation={navigation} /> */}
            <View style={styles.SubCardsContainer}>
              {SubCards.map((subcard) => (
                <TouchableOpacity
                  key={subcard.title}
                  style={styles.subCardButton} // Define styles for button appearance
                  onPress={() => nav(subcard.title, subcard)}
                >
                  <View style={styles.buttonContent}>
                    <Image source={subcard.img} style={styles.buttonImage} />
                    <Text className="font-[OpenSans-Regular] text-lg color-[#FFFFFF]">{subcard.title}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  Roadmap: {
    backgroundColor: Colors.dark1,
    width: "100%",
  },
  cardContainer: {
    width: "100%",
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  cardContent: {
    gap: 16,
  },
  SubCardsContainer: {
    marginBottom: 60,
    backgroundColor: Colors.dark2,
    paddingVertical: 20,
    borderRadius: 8,
    gap: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  buttonImage: {
    width: 100,
    height: 100,
    borderRadius: 4,
  },
  buttonText: {
    color: "white",
  },
  buttonContent: {
    alignItems: "center",
    backgroundColor: Colors.dark1,
    width: 150,
    height: 160,
    justifyContent: "center",
    borderRadius: 8,
    gap: 4,
  },
};
