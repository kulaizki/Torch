import { BlueButton } from '../components/BlueButton';

const log = () => {
    console.log('Button pressed');
}

export default function Landing() {
    return (
        <SafeAreaView className='flex-1 justify-center items-center bg-[#212121]'>
            <View className=''>
                <Image
                    className='w-[200px] h-[200px]'
                    source={require('../assets/images/torch-logo.png')}
                />
                <BlueButton title={'Start'} onPress={log}/>
            </View>
        </SafeAreaView>
    );
}