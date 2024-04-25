import { BlueButton } from '../components/BlueButton';
import { View, Image } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

const log = () => {
    console.log('Button pressed');
}

export default function Landing() {
    return (
        <View style={GlobalStyles.centerView}>
            <Image
                className='w-[200px] h-[200px]'
                source={require('../assets/images/torch-logo.png')}
            />
            <BlueButton title={'Start'} onPress={log}/>
        </View>
    );
}