import { View, Image, Text } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

const log = () => {
    console.log('Button pressed');
}

export default function Landing() {
    return (
        <View style={[GlobalStyles.centerView, styles.container]}>
            <Text className='font-[OpenSans-Bold] text-5xl color-white' >Explore</Text>
        </View>
    );
}

const styles = {
    container: {
        gap: 100,
    },
};
