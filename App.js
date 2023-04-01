import React from "react";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NativeBaseProvider, Box } from "native-base";
import {Text,StyleSheet,View} from "react-native";
import Schedule from "./src/screens/Schedule";
import Essentials from "./src/components/Essentials";


const App=()=>{
  const Stack = createNativeStackNavigator();
  return(
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Sch">
        
        {/* Login Page */}
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
        
        {/* Home Page */}
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false}}/>

        {/* Home Page */}
        <Stack.Screen name="Sch" component={Schedule} options={{ headerShown: false}}/>

        <Stack.Screen name="Ess" component={Essentials} options={{ headerShown: false}}/>


      </Stack.Navigator>
    </NavigationContainer>
  )
};

const styles=StyleSheet.create({
}) 

export default App;

