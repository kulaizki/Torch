import { View, Image, Text, ScrollView, Button } from 'react-native';
import { GlobalStyles, Colors } from '../styles/GlobalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { BackButton } from '../components/BackButton';

export default function BestPractices({ navigation }) {
    
    const route = useRoute(); 
    const card  = route.params; 

    return (
        <SafeAreaView style={GlobalStyles.centerView}>
            <View style={[GlobalStyles.centerView, styles.BestPractices]}>
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
    BestPractices: {
        backgroundColor: Colors.dark1,
        width: '100%',
    },
    cardContainer: {
        width: '100%',
        paddingHorizontal: 24,
        paddingTop: 32,
    },
    cardContent: {
        gap: 16,
    }
};


