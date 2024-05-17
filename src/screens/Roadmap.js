import { View, Image, Text, ScrollView } from 'react-native';
import { GlobalStyles, Colors } from '../styles/GlobalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { BackButton } from '../components/BackButton';
import { SubCardsContainer } from '../components/SubCardsContainer';

export default function Roadmap({ navigation }) {
    
    const route = useRoute(); 
    const card  = route.params; 

    return (
        <SafeAreaView style={GlobalStyles.centerView}>
            <View style={[GlobalStyles.centerView, styles.Roadmap]}>
                <BackButton className='absolute' onPress={() => navigation.goBack()} />
                <ScrollView style={styles.cardContainer}>
                    <View style={styles.cardContent}>
                        <Image
                            className='w-[120px] h-[120px]'
                            source={card?.img}
                        />
                        <Text className='font-[OpenSans-Bold] text-4xl color-white' >{card?.title}</Text>
                        <Text className='font-[OpenSans-Regular] text-lg color-[#d2d2d2]' >{card?.description}</Text>
                        <SubCardsContainer />
                    </View>
                </ScrollView> 
            </View> 
        </SafeAreaView>
    );
}

const styles = {
    Roadmap: {
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

