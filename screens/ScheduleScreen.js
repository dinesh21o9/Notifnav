import { StyleSheet, Text, View} from 'react-native'
import React, {useContext, useEffect,useRef,useState} from 'react'
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollableTabView, DefaultTabBar, ScrollableTabBar } from '@valdio/react-native-scrollable-tabview'
import SchContext from '../context/schedules/schContext';
import {
  NativeBaseProvider,
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,Box,Heading,FlatList,HStack,Avatar,VStack,Spacer
} from 'native-base';
import MyComp from '../components/card';

const TaskScreen = () => {
  const [tabIndex, setTabIndex] = useState(0);
  setStateForTab = (i) => {
    // const day = tabLabel[i].tabLabel;
    // const tasks = [];
    // pTasks.forEach(e => {
    //   if(e.day === day) {
    //     tasks.push(e);
    //   }
    // })
    // setTasks(tasks);
    // setDay(day);
    setTabIndex(i);    
  }
  const context = useContext(SchContext);
  // const navigation = useNavigation();
  const {schs,getsch,editSch}=context;
  useEffect(()=>{
    // if(AsyncStorage.getItem('token')){
    //   getsch()
    //   } 
    // else{
    //    }
    getsch()
  },[])
  const data = [{
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    title: "Aniket Kumar",
    locationName: "Sujitha Mathur",
    timestr: "8:56 PM",
    description: "All the best",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
  },{
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Anci Barroco",
    locationName: "Sujitha Mathur",
    timestr: "6:22 PM",
    description: "Good Day!",
    avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
  }, {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Groceries",
    locationName: "Market",
    timestr: "11:11 PM",
    description: "Health",
    avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Eo_circle_teal_letter-t.svg/768px-Eo_circle_teal_letter-t.svg.png?20200417180559"
  },{
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    title: "Test 1",
    locationName: "Sujitha Mathur",
    timestr: "8:56 PM",
    description: "This is a really really long text, which is used",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
  },{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Meds",
    locationName: "Hospital",
    timestr: "12:47 PM",
    description: "Fever",
    avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Eo_circle_blue_letter-d.svg/768px-Eo_circle_blue_letter-d.svg.png?20200417110758"
  },{
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    title: "Kiara",
    locationName: "Sujitha Mathur",
    timestr: "12:47 PM",
    description: "I will call today.",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
  }];

  return (
    
   
    <NativeBaseProvider>
      
      <Box mt="20px">

      {/* <Heading fontSize="4xl" mx="auto" p="4" pb="3">
        Today's Task
      </Heading> */}

      <FlatList data={data} renderItem={({item}) => <Box borderBottomWidth="2" _light={{borderColor: "muted.50"}} 
        borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">

          {/* <HStack space={[2, 3]} justifyContent="space-between">
          <Avatar size="48px" style={{backgroundColor:'white'}} source={{
            uri: item.avatarUrl
          }} />

              <VStack>
              <Text style={{fontWeight: 'bold',fontSize: 20}}>
                {item.title}
              </Text>
              <Text style={{fontStyle: 'italic',fontSize: 15}}>
                {item.locationName}
              </Text>
              <Text color="coolGray.600" _dark={{color: "warmGray.200"}}>
                  {item.description}
              </Text>
              </VStack>

              <Spacer />

              <Text fontSize="xs" _dark={{color: "warmGray.50"}} 
                color="coolGray.800" alignSelf="flex-start">
                {item.timestr}
              </Text>

            </HStack> */}
            <MyComp item={item} />

          </Box>}
          keyExtractor={item => item.id} 
        />
    </Box>
    </NativeBaseProvider>
  )
}

export default TaskScreen

const styles = StyleSheet.create({})