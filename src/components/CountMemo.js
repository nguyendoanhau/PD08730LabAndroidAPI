import React,{Button,Text,View} from "react-native";
import { useState } from "react";
import ContentMemo from "./ContentMemo";
export default function Counter (){
    const[counter, setCounter] =useState(1);
    const[count, setCount] =useState(1);
    const handleIncrease= ()=>{
        setCounter(counter+1)
    }
    const handleIncrease2= ()=>{
        setCount(count+1)
    }
    return(
        <View>
            <ContentMemo count={count}/>
            <Text style={{fontSize:30,fontWeight:'bold'}}>{counter}</Text>
            <Button title="Tang" onPress={handleIncrease}/>
            <Button title="Tang2" onPress={handleIncrease2}/>
        </View>
    )
}
