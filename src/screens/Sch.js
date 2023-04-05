// import { StyleSheet, Text, View } from 'react-native';
// import React, {useContext, useEffect,useRef,useState} from 'react'
// import { Avatar, Card, IconButton } from 'react-native-paper';
// import SchContext from '../context/schedules/schContext';


// const Essentials = ({navigation,route}) => {
//   const context = useContext(SchContext);
//   const {schs,getsch,editSch}=context;
//   useEffect(()=>{
//     if(localStorage.getItem('token')){
//       getsch()
//       } 
//     else{
//        }
//   },[])
//     // const {title}=route.params
//   return (
//     <>
//     {/* <NotesItems key={note._id} updateNote={updateNote} note={note} showmsg={props.showmsg}/> */}
//   {schs.map((sch)=>{      {/*here note is one of the element of the array of data */}
//     return <Card.Title
//     title={sch.title}
//     subtitle={sch.description}
//     // left={(props) => <Avatar.Icon {...props} icon="folder" />}
//     right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
//     style={{marginTop:'20%'}}
//   />
//   })}

//   </>
//   )
// }

// export default Essentials

// const styles = StyleSheet.create({})