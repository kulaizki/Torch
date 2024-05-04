import { SafeAreaView } from 'react-native-safe-area-context';
import { BlueButton } from '../components/BlueButton';
import { View, Image, Text } from 'react-native';
import { GlobalStyles, Colors } from '../styles/GlobalStyles';

export default function Landing({ navigation }) {
    return (
        <SafeAreaView style={GlobalStyles.centerView}>
            <View style={[GlobalStyles.centerView, styles.landing]}>
            <Image
                className='w-[240px] h-[240px]'
                source={require('../assets/images/torch-logo.png')}
            />
            <Text className='font-[OpenSans-Bold] text-5xl color-white' >Torch</Text>
            <BlueButton title={'Start'} onPress={() => navigation.navigate('Explore')}/>

            </View>
        </SafeAreaView>
    );
}

const styles = {
    landing: {
        backgroundColor: Colors.dark3,
        width: '100%', 
        gap: 100,
    },
};