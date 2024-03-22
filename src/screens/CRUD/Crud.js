import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ListUser from "./../CRUD/listuser";
import AddUser from "./../CRUD/adduser";

const Crud = ()=>{
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="ListUser" component={ListUser}></Stack.Screen>
                <Stack.Screen name="AddUser" component={AddUser}/>        
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Crud;