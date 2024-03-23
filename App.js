import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
// import Student from './components/Student';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Lab1Screen from './src/components/Home';
import Bai1 from './src/screens/Lab1/Bai1';
import Bai2 from './src/screens/Lab1/Bai2';
import Bai3Lab1 from './src/screens/Lab1/Bai3';
import Main from './src/componentss/Main';
import Lab2Screen from './src/screens/Lab2/lab2_home';
import Lab3Screen from './src/screens/Lab3/lab3_home';
import Move from './src/screens/Lab3/Move';
import Bai2Lab3 from './src/screens/Lab3/bai2';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Menu">
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Lab1"
        component={Lab1Screen}
        options={{ title: "Lab 1" }}
      />
      <Stack.Screen
        name="Lab2"
        component={Lab2Screen}
        options={{ title: "Lab 2" }}
      />
      <Stack.Screen
        name="Lab3"
        component={Lab3Screen}
        options={{ title: "Lab 3" }}
      />
      <Stack.Screen
        name="bai1lap1"
        component={Bai1}
        options={{ title: "Bài 1 Lab 1" }}
      />
      <Stack.Screen
        name="bai2lab1"
        component={Bai2}
        options={{ title: "Bài 2 Lab 1" }}
      />
      <Stack.Screen
        name="bai3lab1"
        component={Bai3Lab1}
        options={{ title: "Lab 3" }}
      />
        <Stack.Screen
          name="lab2React"
          component={Main}
          options={{ title: "lab2" }}
        />
        
        <Stack.Screen
          name="Lab3React"
          component={Move}
          options={{ title: "Bai1lab3" }}
        />
        <Stack.Screen
          name="LAb3Bai2React"
          component={Bai2Lab3}
          options={{ title: "Bai2lab3" }}
        />
        
        
      {/* Thêm các màn hình cho các lab khác tại đây */}
    </Stack.Navigator>
  </NavigationContainer>
);
};

const MenuScreen = ({ navigation }) => {
return (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.labMenuItem}
      onPress={() => navigation.navigate("Lab1")}
    >
      <Text style={styles.menuText}>Lab 1</Text>
    </TouchableOpacity>  
    <TouchableOpacity
      style={styles.labMenuItem}
      onPress={() => navigation.navigate("Lab2")}
    >
      <Text style={styles.menuText}>Lab 2</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.labMenuItem}
      onPress={() => navigation.navigate("Lab3")}
    >
      <Text style={styles.menuText}>Lab 3</Text>
    </TouchableOpacity>
    {/* Thêm các mục menu cho các lab khác tại đây */}
  </View>
);
};


// Thêm các màn hình cho các lab khác tại đây

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f0f0f0",
},
labMenuItem: {
  marginBottom: 10,
  paddingVertical: 15,
  paddingHorizontal: 20,
  backgroundColor: "#fff",
  borderRadius: 10,
  elevation: 3,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
},
menuText: {
  fontSize: 18,
  fontWeight: "bold",
},
labScreenContainer: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
},
screenText: {
  fontSize: 24,
  fontWeight: "bold",
},
});

    


export default App;
// import React from 'react';


// import Splash from './src/screens/auth/Splash';
// import SignUp from './src/screens/auth/SignUp';
// import SignIn from './src/screens/auth/SignIn';
// import {NavigationContainer} from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Image } from 'react-native-reanimated/lib/typescript/Animated';
// import Home from './src/screens/Lab7/Homescreen';
// const Stack=createNativeStackNavigator();
// const Tab= createBottomTabNavigator();
// const Tabs= () => (
//   <Tab.Navigator
//   screenOptions={({route}) => ({
//     tabBarIcon: ({focused})=>{
//       let icon;
//       if(route.name==="Home"){
//         icon= focused
//         ? require('./src/assets/clarity_home-solid(1).png')
//         : require('./src/assets/clarity_home-solid.png');
//       }else if(route.name ==='Profile') {
//         icon = focused
//         ? require('./src/assets/tabs/marker 1.png')
//         : require('./src/assets/tabs/Vector(1)png');

//       }else if (route.name === 'Favorites'){
//         icon =focused
//         ? require("./src/assets/tabs/bi-person-fill.png")
//         : require('./src/assets/tabs/bi-person-fill.png');
//       }
//       return <Image style={{width:24, height:24,}} source={icon}/>
//       },
//       headerShown: false,
//       tabBarShowLabel: false,
//       tabBarStyle: {borderTopColor:'#DADADA'},
//       })}>
//         <Tab.Screen name="Home" component={Home}/>
//         <Tab.Screen name="Favorites" component={Favorites}/>
//         <Tab.Screen name="Profile" component={Profile}/>
//       </Tab.Navigator>
// );
// const App = () => {
//   const isSignedIn =true;
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {isSignedIn? (
//           <>
//           <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
//           </>
//         ) : (
//           <>
//         <Stack.Screen 
//         name="Splash" 
//         component={Splash}
//         options={{headerShown: false}}
//         />
//         <Stack.Screen 
//         name="SignUp" 
//         component={SignUp} 
//         options={{headerShown:false}}
//         />
//         <Stack.Screen 
//         name="SignIn" 
//         component={SignIn}
//          options={{headerShown:false}}
//          />
//         </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//     // <Crud></Crud>
//   );
// };

// export default App;
