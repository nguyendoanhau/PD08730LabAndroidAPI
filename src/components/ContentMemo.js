import { View,Text } from "react-native";
import { memo } from "react";

function ContentMemo({count}) {
    console.log("Content Memo Rendered");
    return(
        <View>
            <Text style={{fontSize:20,fontWeight:'bold',color:'red'}}>DemoReactMemo</Text>
        </View>
    )
}
export default memo (ContentMemo);//Se usa para