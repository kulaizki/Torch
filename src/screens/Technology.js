import { View, Image, Text, ScrollView, Button } from 'react-native';
import { GlobalStyles, Colors } from '../styles/GlobalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { BackButton } from '../components/BackButton';

export default function Technology({ navigation }) {
    
    const route = useRoute(); 
    const card  = route.params; 

    return (
        <SafeAreaView style={GlobalStyles.centerView}>
            <View style={[GlobalStyles.centerView, styles.Technology]}>
                <BackButton className='absolute' onPress={() => navigation.goBack()} />
                <ScrollView style={styles.Container}>
                    <View style={styles.Content}>

                    </View>
                </ScrollView> 
            </View> 
        </SafeAreaView>
    );
}

const styles = {
    Technology: {
        backgroundColor: Colors.dark1,
        width: '100%',
    },
    Container: {
        width: '100%',
        paddingHorizontal: 24,
        paddingTop: 32,
    },
    Content: {
        gap: 16,
    }
};



