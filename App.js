import React from "react";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NativeBaseProvider, Box } from "native-base";
import {Text,StyleSheet,View} from "react-native";

const App=()=>{
  const Stack = createNativeStackNavigator();
  return(
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        
        {/* Login Page */}
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
        
        {/* Home Page */}
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
};

const styles=StyleSheet.create({
}) 

export default App;

