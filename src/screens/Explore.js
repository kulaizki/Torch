import { View, Image, Text, ScrollView } from 'react-native';
import { GlobalStyles, Colors } from '../styles/GlobalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '../components/Card';
import { Header } from '../components/Header';

const log = () => {
    console.log('Button pressed');
}

export default function Explore({ navigation }) {
    return (
        <SafeAreaView style={GlobalStyles.centerTopView}>
        <View style={[GlobalStyles.centerView, styles.explore]} className='pb-4'>
            <Header />
            <Text className='font-[OpenSans-Bold] text-5xl color-white' >Explore</Text>
            <ScrollView style={styles.cardContainer}>
                <Card 
                    title={'Javascript Developer'} 
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.'}
                    img={require('../assets/images/js.png')}
                    onPress={log}
                />
                <Card 
                    title={'Python Developer'} 
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.'}
                    img={require('../assets/images/python.png')}
                    onPress={log}
                />
                <Card 
                    title={'React Developer'} 
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.'}
                    img={require('../assets/images/react.webp')}
                    onPress={log}
                />
            </ScrollView>
        </View>
        </SafeAreaView>
    );
}

const styles = {
    explore: {
        backgroundColor: Colors.dark1,
        width: '100%',
        gap: 80,
    },
    cardContainer: {
        width: '100%',
        padding: 8,
    },
};
