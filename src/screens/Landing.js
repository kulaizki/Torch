import { BlueButton } from '../components/BlueButton';
import { View, Image, Text } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

const log = () => {
    console.log('Button pressed');
}

export default function Landing() {
    return (
        <View style={[GlobalStyles.centerView, styles.container]}>
            <Image
                className='w-[240px] h-[240px]'
                source={require('../assets/images/torch-logo.png')}
            />
            <Text className='font-[OpenSans-Bold] text-5xl color-white' >Torch</Text>
            <BlueButton title={'Start'} onPress={() => navigation.navigate('Explore')}/>
        </View>
    );
}

const styles = {
    container: {
        gap: 100,
    },
};