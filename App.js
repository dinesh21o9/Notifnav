import React from "react";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NativeBaseProvider, Box } from "native-base";
import {Text,StyleSheet,View} from "react-native";
import Schedule from "./src/screens/Schedule";
import Essentials from "./src/components/Essentials";
import AddSch from "./src/screens/AddSch"
import SchState from "./src/context/schedules/SchState";
import EditSch from "./src/components/EditSch";
import Cntrbtn from "./src/screens/Cntrbtn";
import TaskScreen from "./src/screens/TaskScreen";


const App=()=>{
  const Stack = createNativeStackNavigator();
  return(
    <SchState>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="TS">
        
        {/* Login Page */}
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
        
        {/* Home Page */}
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false}}/>

        {/* Schedule Page */}
        <Stack.Screen name="Sch" component={Schedule} options={{ headerShown: false}}/>

        {/* Essnetials */}
        <Stack.Screen name="Ess" component={Essentials} options={{ headerShown: false}}/>
        {/* AddSch */}
        <Stack.Screen name="As" component={AddSch} options={{ headerShown: false}}/>
        {/* AddSch */}
        <Stack.Screen name="Es" component={EditSch} options={{ headerShown: false}}/>

        <Stack.Screen name="Cntrbtn" component={Cntrbtn} options={{ headerShown: false}}/>

        <Stack.Screen name="TS" component={TaskScreen} options={{ headerShown: false}}/>


      </Stack.Navigator>
    </NavigationContainer>
    </SchState>
  )
};

const styles=StyleSheet.create({
}) 

export default App;

