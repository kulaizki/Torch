import { SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';


export default function App() {
  const [fontsLoaded] = useFonts({
    'OpenSans-Bold': require('./src/assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-Light': require('./src/assets/fonts/OpenSans-Light.ttf'),
    'OpenSans-Medium': require('./src/assets/fonts/OpenSans-Medium.ttf'),
    'OpenSans-Regular': require('./src/assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-SemiBold': require('./src/assets/fonts/OpenSans-SemiBold.ttf'),
  })

  const log = () => {
    console.log('Button pressed');
  }

  if (!fontsLoaded) {
    return undefined;
  }

  return (

  );
}