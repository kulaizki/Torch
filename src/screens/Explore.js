import { View, Image, Text, ScrollView } from 'react-native';
import { GlobalStyles, Colors } from '../styles/GlobalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '../components/Card';
import { Header } from '../components/Header';

const cards = [ 
    { title: 'Javascript Developer', description: 'Master the fundamentals then delve into frameworks and libraries to become a well-rounded JavaScript developer.', img: require('../assets/images/js.png') },
    { title: 'Python Developer', description: 'Build a strong foundation in Python syntax, data structures, and algorithms before exploring specialized libraries and frameworks for your desired development path.', img: require('../assets/images/python.png') },
    { title: 'React Developer', description: 'Grasp core React concepts, hooks, and state management, then conquer popular libraries and tools to become a proficient React developer.', img: require('../assets/images/react.webp') },
  ];

const log = () => {
    console.log('Button pressed');
}

export default function Explore({ navigation }) {
    return (
        <SafeAreaView style={GlobalStyles.centerTopView}>
            <View style={[GlobalStyles.centerView, styles.explore]}>
                <Header className='absolute'/>
                <ScrollView style={styles.cardContainer}>
                    <Text className='font-[OpenSans-Bold] text-5xl color-white pt-16 pb-4' >Explore</Text>
                    <Text className='font-[OpenSans-Light] text-2xl color-[#d2d2d2] pb-8' >Choose your path.</Text>
                    {cards.map((card) => (
                        <Card
                        key={card.title} 
                        title={card.title}
                        description={card.description}
                        img={card.img}
                        onPress={() => navigation.navigate('Roadmap', card)} 
                        />
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = {
    explore: {
        backgroundColor: Colors.dark1,
        width: '100%',
    },
    cardContainer: {
        width: '100%',
        paddingHorizontal: 24,
    },
};
