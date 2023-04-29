import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { extendTheme, NativeBaseProvider } from "native-base";
import { Searchbar,Drawer,Menu } from 'react-native-paper';
import React from 'react'

const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
const theme = extendTheme({ colors: newColorTheme });

function Home(){
  return (
<NativeBaseProvider theme={theme}>
      <Home />
    </NativeBaseProvider>
  )
};

export default Home

const styles = StyleSheet.create({
    Searchbar:{
        marginTop:"12%"
    }
})