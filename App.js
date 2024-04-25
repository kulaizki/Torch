import { useFonts } from 'expo-font';
import { SafeAreaView, Text } from 'react-native';
import Landing from './src/screens/Landing';

export default function App() {
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

  return (
    <SafeAreaView>
      <Landing />
      <Text style={{ fontFamily: 'OpenSans-Bold' }}>OpenSans-Bold</Text>
      <Text style={{ fontFamily: 'OpenSans-Light' }}>OpenSans-Light</Text>
      <Text style={{ fontFamily: 'OpenSans-Medium' }}>OpenSans-Medium</Text>
      <Text style={{ fontFamily: 'OpenSans-Regular' }}>OpenSans-Regular</Text>
      <Text style={{ fontFamily: 'OpenSans-SemiBold' }}>OpenSans-SemiBold</Text>
    </SafeAreaView>
  );
}