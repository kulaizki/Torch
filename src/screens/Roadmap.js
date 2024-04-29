import { View, Image, Text } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

const log = () => {
    console.log('Button pressed');
}

export default function Roadmap() {
    return (
        <SafeAreaView style={GlobalStyles.centerView}>
            <View style={[GlobalStyles.centerView, styles.explore]}>
                <Text className='font-[OpenSans-Bold] text-5xl color-white'>Roadmap</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = {
    roadmap: {
        backgroundColor: '#212121',
        width: '100%',
        gap: 100,
    },
};

