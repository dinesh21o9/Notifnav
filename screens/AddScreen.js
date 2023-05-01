
import { StyleSheet, Text, View ,SafeAreaView, ScrollView } from 'react-native'
  import { NativeBaseProvider, Button,Center,VStack,FormControl,Input,Heading,Box } from "native-base";
  import React, {useContext,useState} from 'react'
  import schContext from '../context/schedules/schContext';
  import {useNavigation} from "@react-navigation/native";

  const AddScreen = () => {
      const context = useContext(schContext);
      const navigation = useNavigation();
      const {addSch}=context;
  
      const [title, setTitle] = React.useState("");
      const [desc, setDesc] = React.useState("");
      const [day, setDay] = React.useState("");
      const [ln, setLn] = React.useState("");
      const [ls, setLs] = React.useState("");
      const [timestr, setTimestr] = React.useState("");
      const [timeend, setTimeend] = React.useState("");
  
      const handleClick=(e)=>{
          // e.preventDefault();               // to stop reloading of page on clicking the button
          addSch(title,desc,day,ln,ls,timestr,timeend);   //function called by the SchState
          setTitle("");
          setDesc("")
          setDay("")
          setLn("")
          setLs("")
          setTimestr("")
          setTimeend("")
      };
      const [formData, setData] = React.useState({});
    return (
      <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Center flex={0.9} style = {styles.container}>
      <Heading>Add your task </Heading>
      <VStack width="90%" mx="3" my="6" maxW="300px">
              <FormControl >
  
              <FormControl.Label _text={{bold: true}}>Title</FormControl.Label>
              <Input placeholder="Work to do" name='title' value={title} onChangeText={title=> setTitle(title)} />
  
              <FormControl.Label _text={{bold: true}}>Description</FormControl.Label>
              <Input placeholder="Work to do" name='description' value={desc} onChangeText={desc=> setTitle(desc)} />
  
              <FormControl.Label _text={{bold: true}}>Place name</FormControl.Label>
              <Input placeholder="e.g.:Market" name='locationName' value={ln} onChangeText={ln => setDesc(ln)} />
  
              <FormControl.Label _text={{bold: true}}>Time</FormControl.Label>
              <Input placeholder="Any specific time?" value={timestr} name='timestr' onChangeText={timestr => setTimestr(timestr)} />
  
              <FormControl.Label _text={{bold: true}}>Day</FormControl.Label>
              <Input placeholder="Scroller will come here" onChangeText={value => setData({ ...formData,name: value})} />
                {/* <FormControl.HelperText _text={{
                fontSize: 'xs'
              }}>
                  Name should contain atleast 3 character.
                </FormControl.HelperText> */}

              <FormControl.Label _text={{bold: true}}>Location</FormControl.Label>
              <Box alignItems="center">
                <Button onPress={() => navigation.navigate("AddLocation")}>Add Location</Button>
              </Box>
              {/* <Input placeholder="will be automatically filled" value={ls} name='locationStats' onChangeText={ls => setLs(ls)} /> */}
                
                <FormControl.ErrorMessage _text={{
                fontSize: 'xs'
              }}>
                  Error Name
                </FormControl.ErrorMessage>
              </FormControl>
            </VStack>
            <Button onPress={handleClick}>Add Task</Button> 
      </Center>
      </ScrollView>
      </SafeAreaView>
      </NativeBaseProvider>
    )
  }
  
  export default AddScreen
  
  const styles = StyleSheet.create({
    container: {
      marginTop: 50,
    }
  })