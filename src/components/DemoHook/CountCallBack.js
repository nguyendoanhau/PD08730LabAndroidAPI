import React,{Button, Component} from "react-native";
import { useState } from "react";
import ContentCallBack from "./ContentCallBack";
export default function Count_useCallback(){
    const[counter, setCounter] =useState(1);
    const handleIncrease= ()=>{
        setCounter(prevCounter => prevCounter +1)
    }
    return(
        <View>
            <ContentCallBack  onIncrease={handleIncrease}/>
            <Text>{counter}</Text>
        </View>
    )
}