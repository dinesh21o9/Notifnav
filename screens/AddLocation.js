
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View , Image ,TouchableOpacity,Button} from 'react-native';
// import { Button } from 'native-base';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const GOOGLE_PLACES_API_KEY = 'AIzaSyCarWhgsJP7Twj21wshCzWWS3uwXSqOHbw';
import * as Location from 'expo-location';
import { Marker } from 'react-native-maps';
import MapView, { Callout } from 'react-native-maps';
import { width } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import { NavigationContainer } from '@react-navigation/native';
import { Center } from 'native-base';

const TaskScreen = ({navigation}) =>{

  const [ dropLa , setdropLa ] = React.useState({
    latitude: 29.955731570270117,
  })
  const [ dropLo , setdropLo ] = React.useState({
    longitude: 76.8144809690118,
  })
  
  const [ pin , setpin ] = React.useState({
    latitude: 29.95731570270117,
    longitude: 76.8144809690118,
  })

  const [ region , setRegion ] = React.useState({
    latitude: 29.955731570270117,
    longitude: 76.80944809690118,
    latitudeDelta: 0.11452653243126676, 
    longitudeDelta: 0.059483014047145844,
  })

  // Live location
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      // console.log(location);

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
            console.log("Search of desired location","Latitude :",details.geometry.location.lat,"Longitude :",details.geometry.location.lng)
            // console.log(details.geometry.location.lng)

            setRegion({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.11452653243126676,
              longitudeDelta: 0.059483014047145844,
            })
            setdropLa({
              latitude: details.geometry.location.lat,
            })
            setdropLo({
              longitude: details.geometry.location.lng,
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
        
        <MapView style={styles.map} initialRegion={region}>
            
            <Marker 
              coordinate={{
                latitude: region.latitude, 
                longitude: region.longitude
              }}
              draggable={true}
              onDragEnd={(e)=>{
                setdropLa({
                  latitude: e.nativeEvent.coordinate.latitude,
                })
                setdropLo({
                  longitude: e.nativeEvent.coordinate.longitude
                })
                console.log("Drag end of desired location", e.nativeEvent.coordinate)
              }}
            >
              <Callout>
                <Text>Desired location</Text>  
              </Callout>

            </Marker>           
            
            {/* Saved locations */}
            {/* <Marker
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

            </Marker> */}

            {/* Live location Marker */}
            <Marker
              coordinate={pin}
              pinColor='dodgerblue'
              draggable={false}
              >
              <Callout>
                <Text>You are here</Text>
              </Callout>
              </Marker>
              {/* <Button style={styles.getlocation}
              title = "Get location"
              onPress={()=> console.log("Latitude :",drop.latitude, "Longitude :",drop.longitude)}
            /> */}
              
        </MapView>

          <Button 
              title = "Get location"
              onPress={() => console.log("Latitude :",dropLa.latitude, "Longitude :",dropLo.longitude)}
          />
          {/* <TouchableOpacity
              style={styles.getlocation}
              
              onPress={() =>
                console.log("Latitude :",drop.latitude, "Longitude :",drop.longitude)}
                >
              <Text>Get Location</Text>
          </TouchableOpacity> */}
        </View>
        
    );
}

export default TaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map:{
    width:'100%',
    height: '95%'
  },
  getlocation: {
    postion: 'absolute',
    color: '#FF3D00',
    width: '100%',
    height: '10%',
    padding: '10%',
    // zIndex: 1,
    borderRadius: 5,
    // marginBottom: '10',
  },
});
