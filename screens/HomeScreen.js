import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View , Image, SafeAreaView ,PermissionsAndroid, Linking} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MapView, { Callout } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import {NavigationContainer} from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const GOOGLE_PLACES_API_KEY = secrets.key;
// import Geolocation from 'react-native-geolocation-service';
import * as Location from 'expo-location';
import { TextInput } from 'react-native-paper';


const HomeScreen = ({navigation}) =>{
  const [ drop , setdrop ] = React.useState({
    longitude: 76.80944809690118,
    latitude: 29.955731570270117,
  })
  
  const [ pin , setpin ] = React.useState({
      longitude: 76.81944809690118,
      latitude: 29.995731570270117,
  })

  // "latitude": 29.952856657211285, "longitude": 76.80810246616602
  const [ region , setRegion ] = React.useState({
    longitude: 76.80944809690118,
    latitude: 29.955731570270117,
    latitudeDelta: 0.11452653243126676, 
    longitudeDelta: 0.059483014047145844,
  })

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);

      setpin({
        latitude : location.coords.latitude,
        longitude : location.coords.longitude,
      })
    })();
  }, []);

  
    return (
      <View style={styles.container}>
        
        <GooglePlacesAutocomplete
          placeholder="Search"
          minLength={5}
          fetchDetails={true}
          GooglePlacesSearchQuery={{
            rankby: "distance"
          }}
          onPress={(data, details = null) => {
            //details are provided when fetchDetails==true
            console.log(details.geometry.location.lat)
            console.log(details.geometry.location.lng)

            setRegion({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.11452653243126676, 
              longitudeDelta: 0.059483014047145844,
            })
          }}

          query={{
            key: GOOGLE_PLACES_API_KEY, //AIzaSyCarWhgsJP7Twj21wshCzWWS3uwXSqOHbw
            language: 'en', // language of the results
            components: "country:in",
            types: "establishment",
            radius: 30000,
            location: `${region.latitude}, ${region.longitude}`
          }}
          onFail={(error) => console.error(error)}
          
          styles={{
            container: { 
              flex:0,
              position: "absolute", 
              width: "90%", 
              height: "85%",
              zIndex:1,

            },
            listView: { backgroundColor: "white"}
          }}

        />
        
        <MapView 
          style={styles.map}
            initialRegion={{
              latitude: 29.955731570270117,
              latitudeDelta: 0.11452653243126676, 
              longitude: 76.80944809690118, 
              longitudeDelta: 0.059483014047145844
            }}
          >
            
            <Marker coordinate={{
              latitude: region.latitude, 
              longitude: region.longitude
              }}/>

            {/* Live location Marker */}
            <Marker
              coordinate={pin}
              pinColor='dodgerblue'
              draggable={false}
              >
              <Callout>
                <Text>Live location</Text>
              </Callout>
              </Marker>

            {/* Saved Location marker */}
            <Marker
              coordinate={drop}
              pinColor='yellow'
              draggable={true}
              onDragStart={(e)=>{
                console.log("Drag start", e.nativeEvent.coordinate)
              }}
              onDragEnd={(e)=>{
                setdrop({
                  latitude: e.nativeEvent.coordinate.latitude,
                  longitude: e.nativeEvent.coordinate.longitude
                })
                console.log("Drag end", e.nativeEvent.coordinate)//Gives it out in console
              }}
              >
              <Callout>
                <Text>K.U Market</Text>
              </Callout>
            </Marker>
        </MapView>
      </View>
      
    );
}

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map:{
    width:'100%',
    height:'100%'
  }
})

