import { Button,Text,View }from 'react-native'
import {useEffect, useRef, useState} from'react'

export default function Time(){
    const [count, setCount] = useState(30)
    const[counter, setCounter] =useState(0);
    const handleIncrease= ()=>{
        setCounter(counter+1)
    }
    let timerID=useRef()
    const handleStart =()=>{
        handleIncrease
         timerID.current=setInterval(() => { 
            setCount(prevCount=>prevCount-1)
        }, 1000);
        console.log('handleStart: =>'+timerID.current)
    }
    const handleStop= () =>{
        clearInterval(timerID.current)
        console.log('handleStop: =>'+timerID.current)
    }   
    useEffect(()=>{
        console.log("1.chay moi lan component re-render");
    })
    useEffect(()=>{
        console.log("1.chay 1 lan component render");
    },[])
    useEffect(()=>{
        console.log("1.chay moi lan khi state thay doi gia tri")
    },[counter])
    return (
        <View>
            <Text>{count}</Text>
            <Text>{counter}</Text>
            <Button title='Start' onPress={handleStart}/>
            <Button title='Stop' onPress={handleStop}/>
            <Button title="Tang" onPress={handleIncrease}/>
        </View>
    )
}