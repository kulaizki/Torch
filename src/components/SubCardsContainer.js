import { StyleSheet, View } from "react-native";
import { Colors } from "../styles/GlobalStyles";
import { SubCard } from "./SubCard";

export const SubCardsContainer = ({ nav }) => {

  return (
    <View style={styles.SubCardsContainer}>
      <SubCard title='Fundamentals' img={require('../assets/images/js.png')} onPress={nav} />
      <SubCard title='Technology' img={require('../assets/images/js.png')} onPress={nav} />
      <SubCard title='Best Practices' img={require('../assets/images/js.png')} onPress={nav} />
      <SubCard title='Projects' img={require('../assets/images/js.png')} onPress={nav} />
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

