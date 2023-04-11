import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View , Image,TextInput } from 'react-native';
import { Formik } from 'formik';

const AddScreen = ({navigation}) =>{
    return (
      <View style={styles.container}>
      <Formik
        initialValues={{ title: '', description: '', day: '' ,locationName: '', timestr: '', timeend: ''}}
        onSubmit={(tasks) => {
          console.log(tasks);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder='Review title'
              onChangeText={props.handleChange('title')}
              tasks={props.tasks.title}
            />

            <TextInput
              style={styles.input}
              multiline
              placeholder='Review details'
              onChangeText={props.handleChange('description')}
              tasks={props.tasks.description}
            />

            <TextInput 
              style={styles.input}
              placeholder='Date'
              onChangeText={props.handleChange('day')}
              tasks={props.tasks.day}
              keyboardType='numeric'
            />
            
            <Button color='maroon' title="Submit" onPress={props.handleSubmit} /> 
          </View>
        )}
      </Formik>
      </View>
    );
}

export default AddScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
