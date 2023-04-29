


import React from "react";
import Login from './screens/Login';
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from 'native-base';
import {Text,StyleSheet,View} from "react-native";
// import Schedule from "./screens/Schedule";
// import Essentials from "./src/components/Essentials";
// import AddSch from "./src/screens/AddSch"
import SchState from "./context/schedules/SchState";
// import EditSch from "./src/components/EditSch";
import Tabs from './screens/tabs';
// import AddLocation from "./screens/AddLocation";


const App=()=>{
  const Stack = createNativeStackNavigator();
  return(
    <SchState>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        
        {/* Login Page */}
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
        
        {/* Home Page */}
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false}}/> */}

        {/* Schedule Page */}
        {/* <Stack.Screen name="Sch" component={Schedule} options={{ headerShown: false}}/> */}

        {/* Essnetials */}
        {/* <Stack.Screen name="Ess" component={Essentials} options={{ headerShown: false}}/> */}
        {/* AddSch */}
        {/* <Stack.Screen name="As" component={AddSch} options={{ headerShown: false}}/> */}
        {/* AddSch */}
        {/* <Stack.Screen name="Es" component={EditSch} options={{ headerShown: false}}/> */}

        {/* Tab */}
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false}}/>


      </Stack.Navigator>
    </NavigationContainer>
    </SchState>
  )
};

export default App;

