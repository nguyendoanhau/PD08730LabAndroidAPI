import { Button,StyleSheet, TextInput, Text,View } from "react-native"
import { useState,useMemo } from "react"


export default function Product_useMemo(){
    const [name, setName]=useState('')
    const [price,setPrice] = useState('')
    const [products,setProducts]=useState([])
    const handleSubmit=()=>{
        setProducts ([...products,
            {name,
            price:parseInt(price)
        }])
    }
    const total=useMemo(()=>{
        const total=products?.reduce((result,prod)=>{
                console.log('Tinh tong..');
                return result + prod.price
    },0)
},[products])

    // const total=products?.reduce((result,prod)=>{
    //     console.log('Tinh tong..');
    //     return result + prod.price
    // },0)
    // console.log(products);
    return(
        <View>
            <TextInput value={name} onChangeText={setName} style={styles.input}placeholder="input name"/>
            <TextInput value={price} onChangeText={setPrice} style={styles.input}placeholder="input price"/>
            <Button title="Add"onPress={handleSubmit}/>
            <Text>Total:{total}</Text>
            <View>
                {products?.map((prod,index)=>(
                    <Text key={index}>{prod.name}-{prod.price}</Text>
                ))}
            </View>
        </View>
    )
}
const  styles = StyleSheet.create({
    input:{
        height:40,
        width:320,
        marginBottom:10,
        borderWidth:1,
        padding:10,
    },
});