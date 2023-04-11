import React, {useContext} from 'react'
import { useState } from 'react';
import { Text,TextInput,Button } from 'react-native-paper';
import { Modal, Portal,Provider } from 'react-native-paper';
import {StyleSheet} from "react-native";
import schContext from '../context/schedules/schContext';

const EditSch = (props) => {
    const context = useContext(schContext);
    const {editSch}=context;

    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};

    const handleClick=(e)=>{
        // e.preventDefault();               // to stop reloading of page on clicking the button
        editSch(title,desc,day,ln,ls,timestr,timeend);   //function called by the SchState
        setTitle("");
        setDesc("")
        setDay("")
        setLn("")
        setLs("")
        setTimestr("")
        setTimeend("")
    };

  return (
    <>
        <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <Text>Title</Text>
      <TextInput type='outlined' name='title' label="title" value={props.title} onChangeText={title=> props.setTitle(...props.title,title)}/>

      <Text>De`scription</Text>
      <TextInput type='outlined' name='description' label="description" value={props.description} onChangeText={desc => props.setDesc(...props.description,desc)} /> 

      
      <Text>Starting time</Text>
      <TextInput type='outlined' name='timestr' label="time start" value={props.timestr} onChangeText={timestr => props.setTimestr(timestr)} /> 
      
      <Text>Ending time</Text>
      <TextInput type='outlined' name='timeend' label="time End " value={props.timeend} onChangeText={timeend => props.setTimeend(timeend)} /> 
      
      <Text>Location Name</Text>
      <TextInput type='outlined' name='locationName' label="Location name" value={props.locationName} onChangeText={ln => props.setLn(ln)} /> 
      
      <Text>Starting Stats</Text>
      <TextInput type='outlined' name='locationStats' label="Location stats" value={props.locationStats} onChangeText={ls => props.setLs(ls)} /> 


      <Button onPress={handleClick}>Add Note</Button> 
            </Modal>
          </Portal>
          <Button style={{marginTop: 30}} onPress={showModal}>
            Show
          </Button>
        </Provider>
`
</>
  )
}

export default EditSch

const styles = StyleSheet.create({})