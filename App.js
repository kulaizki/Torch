import { Text, View, SafeAreaView, Image } from 'react-native';
import { BlueButton } from './src/components/BlueButton';
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
    <SafeAreaView className='flex-1 justify-center items-center bg-[#212121]'>
      <View>
        <Image
          className='w-[200px] h-[200px]'
          source={require('./src/assets/images/torch-logo.png')}
        />
        <BlueButton title={'Start'} onPress={log}/>
      </View>
    </SafeAreaView>
  );
}