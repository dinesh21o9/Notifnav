import React, {useContext} from 'react'
import { useState } from 'react';
import { Text,TextInput,Button } from 'react-native-paper';
import schContext from '../context/schedules/schContext';

const AddNote = (props) => {
    const context = useContext(schContext);
    const {addSch}=context;

    // const[sch,setSch]=useState({title:"", description:"",day:"",locationName:"",locationStats:"",timestr:"",timeend:""})
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

    // const onChange=(e)=>{
    //     setSch({...sch,title : e.target.value})    //this is pretty much the shortcut for using only one function in tow places but if it is too complex fon you then made two functions it's your call
    // };


  return (
    // here i am reusing the home webpage 
    <>
    <Text>Title</Text>
     <TextInput type='outlined' name='title' label="title" value={title} onChangeText={title=> setTitle(title)}/>

  <Text>Description</Text>
  <TextInput type='outlined' name='description' label="description" value={desc} onChangeText={desc => setDesc(desc)} /> 
  
  <Text>Day</Text>
  <TextInput type='outlined' name='day' label="Day" value={day} onChangeText={day => setDay(day)} /> 

  
  <Text>Starting time</Text>
  <TextInput type='outlined' name='timestr' label="time start" value={timestr} onChangeText={timestr => setTimestr(timestr)} /> 
  
  <Text>Ending time</Text>
  <TextInput type='outlined' name='timeend' label="time End " value={timeend} onChangeText={timeend => setTimeend(timeend)} /> 
  
  <Text>Location Name</Text>
  <TextInput type='outlined' name='locationName' label="Location name" value={ln} onChangeText={ln => setLn(ln)} /> 
  
  <Text>Starting Stats</Text>
  <TextInput type='outlined' name='locationStats' label="Location stats" value={ls} onChangeText={ls => setLs(ls)} /> 


 <Button onPress={handleClick}>Add Note</Button> 
    {/*disabled={sch.description.length<5 || note.title.length<5}*/}
</>
  )
}

export default AddNote
