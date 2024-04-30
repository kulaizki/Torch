import { View, Image, Text } from 'react-native';
import { GlobalStyles, Colors } from '../styles/GlobalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '../components/Card';

const log = () => {
    console.log('Button pressed');
}

export default function Explore({ navigation }) {
    return (
        <SafeAreaView style={GlobalStyles.centerTopView}>
        <View style={[GlobalStyles.centerView, styles.explore]}>
            <Text className='font-[OpenSans-Bold] text-5xl color-white' >Explore</Text>
            <Card 
                title={'Javascript'} 
                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.'}
                img={require('../assets/images/js.png')}
                onPress={log}
            />
        </View>
        </SafeAreaView>
    );
}

const styles = {
    explore: {
        backgroundColor: Colors.dark1,
        width: '100%',
        gap: 100,
    },
};
