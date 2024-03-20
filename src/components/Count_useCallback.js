import { Button,Text,View } from "react-native";
import { useCallback, useState } from "react";
import ContentCallBack from "./ContentCallBack";
export default function Count_useCallback(){
    const [counter,setCounter]=useState(1)
    const [count,setCount]=useState(1)
    const handleIncrease=useCallback(()=>{
        setCounter(prevCounter =>prevCounter +1)
        
    },[count])
    const handleIncrease1=()=>{
        setCount(prevCount =>prevCount +1)
    }
    return(
        <View>
            <ContentCallBack onIncrease={handleIncrease}/>
            <Text>{counter}</Text>
            <Text>{count}</Text>
            <Button title="Click" onPress={handleIncrease1}/>
        </View>
    )
    
}