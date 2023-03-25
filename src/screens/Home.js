import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { Pressable,Box,NativeBaseProvider } from 'native-base';
import { Searchbar,Drawer,Menu } from 'react-native-paper';
import React from 'react'

const Home = () => {
    const [active, setActive] = React.useState('');
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

  return (
    <View>
    <Searchbar 
    style={styles.Searchbar}
    placeholder="Search"
    onChangeText={onChangeSearch}
    value={searchQuery}
    />
    <Drawer.CollapsedItem
     focusedIcon="inbox"
     unfocusedIcon="inbox-outline"
     label="Inbox"
   />
  </View>
  )
  };

export default Home

const styles = StyleSheet.create({
    Searchbar:{
        marginTop:"12%"
    }
})