import * as React from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './src/screens/Landing';
import Explore from './src/screens/Explore';
import Roadmap from './src/screens/Roadmap';
import * as SQLite from 'expo-sqlite';
import { useState, useEffect } from 'react';
import { GlobalStyles } from './src/styles/GlobalStyles';

export default function App() {

  const db = SQLite.openDatabase('db.db');
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return (
      <View style={GlobalStyles.centerView}>
        <Text>Loading...</Text>
      </View>
    )
  }
  
  const [fontsLoaded] = useFonts({
    'OpenSans-Bold': require('./src/assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-Light': require('./src/assets/fonts/OpenSans-Light.ttf'),
    'OpenSans-Medium': require('./src/assets/fonts/OpenSans-Medium.ttf'),
    'OpenSans-Regular': require('./src/assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-SemiBold': require('./src/assets/fonts/OpenSans-SemiBold.ttf'),
  })

  if (!fontsLoaded) {
    return undefined;
  }

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Landing" component={Landing}/>
        <Stack.Screen name="Explore" component={Explore}/>
        <Stack.Screen name="Roadmap" component={Roadmap}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}