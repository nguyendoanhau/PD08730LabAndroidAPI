import { View,Text, Button } from "react-native";
import { memo } from "react";

function ContentCallBack({onIncrease}) {
    console.log("ContentCallBack Rendered");
    return(
        <View>
            <Text style={{fontSize:20,fontWeight:'bold',color:'red'}}>DemoReactCallBack</Text>
            <Button title="Click" onPress={onIncrease}/>
        </View>
    )
}
export default memo (ContentCallBack);