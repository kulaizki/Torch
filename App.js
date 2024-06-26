import * as React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "./src/screens/Landing";
import Explore from "./src/screens/Explore";
import Roadmap from "./src/screens/Roadmap";
import Technology from "./src/screens/Technology";
import Projects from "./src/screens/Projects";
import BestPractices from "./src/screens/BestPractices";
import Fundamentals from "./src/screens/Fundamentals";
import * as SQLite from "expo-sqlite";
import { useState, useEffect } from "react";
import { GlobalStyles } from "./src/styles/GlobalStyles";
import { View, Text } from "react-native";
import { SubCard } from "./src/components/SubCard";
import { SubCardsContainer } from "./src/components/SubCardsContainer";

export default function App() {
  const db = SQLite.openDatabase("db.db");
  const [isLoading, setIsLoading] = useState(true);

  // if (isLoading) {
  //   return (
  //     <View style={GlobalStyles.centerView}>
  //       <Text>Loading...</Text>
  //     </View>
  //   )
  // }

  const [fontsLoaded] = useFonts({
    "OpenSans-Bold": require("./src/assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-Light": require("./src/assets/fonts/OpenSans-Light.ttf"),
    "OpenSans-Medium": require("./src/assets/fonts/OpenSans-Medium.ttf"),
    "OpenSans-Regular": require("./src/assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-SemiBold": require("./src/assets/fonts/OpenSans-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Roadmap" component={Roadmap} />
        <Stack.Screen name="Fundamentals" component={Fundamentals} />
        <Stack.Screen name="Best Practices" component={BestPractices} />
        <Stack.Screen name="Technology" component={Technology} />
        <Stack.Screen name="Projects" component={Projects} />
        <Stack.Screen name="SubCardsContainer" component={SubCardsContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
