import { View, Image, Text, ScrollView } from 'react-native';
import { GlobalStyles, Colors } from '../styles/GlobalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '../components/Card';
import { Header } from '../components/Header';

const cards = [ 
    { title: 'Javascript Developer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum', img: require('../assets/images/js.png') },
    { title: 'Python Developer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum', img: require('../assets/images/python.png') },
    { title: 'React Developer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum', img: require('../assets/images/react.webp') },
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
