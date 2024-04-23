import { TouchableOpacity, Text } from "react-native";
import { OpenSans } from "../../theme";

export const BlueButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} className='items-center bg-[#3D5CFF] px-[40px] py-[16px] rounded-lg'>
        <Text className='text-xl font-opensans text-white font-bold '>{title}</Text>
        </TouchableOpacity>
    );
}