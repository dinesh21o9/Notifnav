import { StyleSheet, Text, View } from 'react-native';
import React, {useContext, useEffect,useRef,useState} from 'react'
import { Avatar, Card, IconButton } from 'react-native-paper';
import SchContext from '../context/schedules/schContext';
import AsyncStorage from '@react-native-community/async-storage';


const Essentials = ({navigation,route}) => {
  const context = useContext(SchContext);
  const {schs,getsch,editSch}=context;
  useEffect(()=>{
    // if(AsyncStorage.getItem('token')){
    //   getsch()
    //   } 
    // else{
    //    }
    getsch()
  },[])
    // const {title}=route.params
  return (
    <>
    {/* <NotesItems key={note._id} updateNote={updateNote} note={note} showmsg={props.showmsg}/> */}
  {schs.map((sch)=>{      {/*here note is one of the element of the array of data */}
    return <Card.Title
    title={sch.title}
    subtitle={sch.description}
    // left={(props) => <Avatar.Icon {...props} icon="folder" />}
    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
    style={{marginTop:'20%'}}
  />
  })}

  </>
  )
}

export default Essentials

const styles = StyleSheet.create({})



{/* <Card>
<Card.Title
    title="Card Title"
    subtitle="Card Subtitle"
    
    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
    style={{marginTop:'20%'}}
  />
<Card.Title
    title="Card Title"
    subtitle="Card Subtitle"
    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
    // style={{marginTop:'20%'}}
  />
  </Card> */}