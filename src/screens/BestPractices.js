import { View, Image, Text, ScrollView, Button } from "react-native";
import { GlobalStyles, Colors } from "../styles/GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { BackButton } from "../components/BackButton";
import { DescriptionCards } from "../../data";
import { TouchableOpacity } from "react-native";
import { BulletList } from "../components/BulletList";

export default function Fundamentals({ navigation }) {
  const route = useRoute();
  const cardTitle = route.params;
  const matchingCard = DescriptionCards.find(
    (card) => card.title === cardTitle
  );

  return (
    <SafeAreaView style={GlobalStyles.centerView}>
      <View style={[GlobalStyles.centerView, styles.Fundamentals]}>
        <BackButton className="absolute" onPress={() => navigation.goBack()} />
        <ScrollView style={styles.Container}>
          <View style={styles.Content}>
            <Image
              source={matchingCard.bestPractices.image}
              style={GlobalStyles.articleImage}
            />
            <Text className="text-4xl color-white font-[OpenSans-SemiBold]">
              {matchingCard.bestPractices.descTitle}
            </Text>
            <Text className="font-[OpenSans-Light] text-2xl color-[#d2d2d2] pb-8">
              {matchingCard.bestPractices.body.introduction}
            </Text>
            <Text className="text-4xl color-white font-[OpenSans-SemiBold]">
              {matchingCard.bestPractices.body.subTitle}
            </Text>
            {matchingCard.bestPractices.body.practices.map((bestPractices) => (
              <View style={styles.Content} key={bestPractices.subTitle}>
                <Text className="text-2xl color-white font-[OpenSans-SemiBold]">
                  {bestPractices.subTitle}
                </Text>
                <View style={styles.BulletList}>
                  <BulletList bulletList={bestPractices.bullets} />
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  Fundamentals: {
    backgroundColor: Colors.dark1,
    width: "100%",
  },
  Container: {
    width: "100%",
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  Content: {
    gap: 16,
  },
};
