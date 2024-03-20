import { View } from "react-native";
import { Body } from "./Body";
import { Header } from "./Header";
import { Footer } from "./Footer";


export default function Main =()=>{
    return(
        <View>
            <Text style={styles.textStyle}>React Native Hooks</Text>
            <Header/>
            <Body/>
            <Footer/>
        </View>
    )
}
const styles = StyleSheet.creat({
    textStyle:{
        fontSize:25,
        fontWeight:'bold',
        color:'blue'
    }
})