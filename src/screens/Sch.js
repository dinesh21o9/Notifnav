// // import { StyleSheet, Text, View } from 'react-native';
// // import React, {useContext, useEffect,useRef,useState} from 'react'
// // import { Avatar, Card, IconButton } from 'react-native-paper';
// // import SchContext from '../context/schedules/schContext';


// // const Essentials = ({navigation,route}) => {
// //   const context = useContext(SchContext);
// //   const {schs,getsch,editSch}=context;
// //   useEffect(()=>{
// //     if(localStorage.getItem('token')){
// //       getsch()
// //       } 
// //     else{
// //        }
// //   },[])
// //     // const {title}=route.params
// //   return (
// //     <>
// //     {/* <NotesItems key={note._id} updateNote={updateNote} note={note} showmsg={props.showmsg}/> */}
// //   {schs.map((sch)=>{      {/*here note is one of the element of the array of data */}
// //     return <Card.Title
// //     title={sch.title}
// //     subtitle={sch.description}
// //     // left={(props) => <Avatar.Icon {...props} icon="folder" />}
// //     right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
// //     style={{marginTop:'20%'}}
// //   />
// //   })}

// //   </>
// //   )
// // }

// // export default Essentials

// // const styles = StyleSheet.create({})



// // import { StyleSheet, Text, View } from 'react-native'
// // import { Avatar, Card, IconButton,Button } from 'react-native-paper';
// // import React from 'react'

// // const Essentials = ({navigation,route}) => {
//     // const {title}=route.params
//     const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
//   return (
//     <Card style={{marginTop:"20%"}}>
//     <Card.Title title="Card Title" subtitle="Card Subtitle" />
//     <Card.Content>
//       <Text variant="titleLarge">Card title</Text>
//       <Text variant="titleLarge">Card content</Text>
//     </Card.Content>
//     <Card.Actions>
//     <Button>Edit</Button>
//       <Button>Delete</Button>
//     </Card.Actions>
//   </Card>
//   )
// // }


//edit sch
    
// <Text>Title</Text>
// <TextInput type='outlined' name='title' label="title" value={props.title} onChangeText={title=> props.setTitle(...props.title,title)}/>

// <Text>Description</Text>
// <TextInput type='outlined' name='description' label="description" value={props.description} onChangeText={desc => props.setDesc(...props.description,desc)} /> 


// <Text>Starting time</Text>
// <TextInput type='outlined' name='timestr' label="time start" value={props.timestr} onChangeText={timestr => props.setTimestr(timestr)} /> 

// <Text>Ending time</Text>
// <TextInput type='outlined' name='timeend' label="time End " value={props.timeend} onChangeText={timeend => props.setTimeend(timeend)} /> 

// <Text>Location Name</Text>
// <TextInput type='outlined' name='locationName' label="Location name" value={props.locationName} onChangeText={ln => props.setLn(ln)} /> 

// <Text>Starting Stats</Text>
// <TextInput type='outlined' name='locationStats' label="Location stats" value={props.locationStats} onChangeText={ls => props.setLs(ls)} /> 


// <Button onPress={handleClick}>Add Note</Button> 
// {/*disabled={sch.description.length<5 || note.title.length<5}*/}