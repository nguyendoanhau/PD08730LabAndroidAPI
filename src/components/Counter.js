import React,{Component, useState} from "react";
import React,{Button, Component} from "react-native";
import { useState } from "react";
export default function Counter (){
    const[counter, setCounter] =useState(0);
    const handleIncrease= ()=>{
        setCounter(counter+1)
    }
    return(
        <View>
            <Text>{counter}</Text>
            <Button title="Tang" onPress={handleIncrease}/>
        </View>
    )
}
