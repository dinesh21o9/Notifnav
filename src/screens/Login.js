import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { NativeBaseProvider, Input, Button, Box, Center , Heading , VStack, FormControl } from "native-base";
import React,{useState} from 'react'
import AsyncStorage from '@react-native-community/async-storage';

const Login = () => {
  // const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigation = useNavigation();

  const handleSubmit= async(e) => {
    // e.preventDefault();
    // console.log(email,password);
    //the below code is taken from NoteState
    const response = await fetch("http:192.168.29.86:8001/api/auth/login", {        // here the ip address of your computer will come ivp4
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        },
        body:JSON.stringify({email,password}) //this is that same body as we do in thunderclient
      });
      const json= await response.json();       // in this case which is auth token 
      console.log(json);
        // Save the auth token and redirect
        if(json.success){
        await AsyncStorage.setItem('token',json.authtoken);
        navigation.navigate("Home");       //this is redirecting me to the home page after I login
        console.log("Logged IN SUCCESSFULLY","success")
      }
      else{console.log("Invalid Credentials","danger")}
    }


  return (
    <NativeBaseProvider>
      <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="xs">
          Login up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input type='email' onChangeText={(mail)=>setEmail(mail)}/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" onChangeText={(pass)=>setPassword(pass)} />
          </FormControl>
          {/* <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type="password" />
          </FormControl> */}
          <Button mt="2" colorScheme="indigo" onPress={handleSubmit}>
            Login 
          </Button>
        </VStack>
      </Box>
    </Center>
    </NativeBaseProvider>

  )
}

export default Login

const styles = StyleSheet.create({})