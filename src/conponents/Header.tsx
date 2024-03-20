import { View,Text } from "react-native";

export const Header =()=>{
    console.log('re-Render Header');
    return(
        <View>
            <Image resizeMode='center' source={{uri:}}/>
            <View>
                <Text>Xin chao nagy moi</Text>
                <Text>HauGau</Text>
            </View>
            <Text>Header</Text>
        </View>
    )
}