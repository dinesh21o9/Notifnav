import React from  'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import TasksScreen from './TasksScreen';
import AddScreen from './AddScreen';
import ScheduleScreen from './ScheduleScreen';
import SettingsScreen from './SettingsScreen';


const Tab = createBottomTabNavigator();

// Tasks button component
const CustomTabBarButton = ({children , onPress}) => (
    <TouchableOpacity
      style={{
        top: -30, //up
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow
      }}
      onPress={onPress}
      >
        <View style={{
            width: 75,
            height: 75,
            borderRadius: 37.5,
            backgroundColor: '#0892D0'
        }}>
          {children}
        </View>
      </TouchableOpacity>
);

// NavBar and its components
const Tabs = () => {
    return(
        <Tab.Navigator
          screenOptions={ ({ route }) => ({
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
              tabBarStyle: {
                position: 'relative',
                // bottom: 25,
                // left: 18,
                // right: 18,
                elevation: 0,//
                backgroundColor: '#ffffff',
                // borderRadius: 15,
                height: 70,
                ...styles.shadow
            },
        })}
        >
          <Tab.Screen name="Home" component={HomeScreen}
            options={{
            headerShown: false, //Only for home page
                tabBarIcon: ({focused}) =>(
                    <View style = {{alignItems: 'center', justifyContent: 'center', top: 10}}>
                       <Image 
                          source= {require('../assets/home.png')}
                          resizeMode='contain'
                          style={{
                            width:25,
                            height: 25,
                            tintColor: focused ? '#0892D0' : '#748c94',
                            marginBottom: focused ? 5 : 5,
                          }}
                          />
                          <Text style={{color: focused ? '#0892D0' : '#748c94', fontSize: 12}}>
                            Home
                          </Text>
                    </View>
                ),
            }}
          ></Tab.Screen> 
          <Tab.Screen name="Tasks" component={TasksScreen}
            screenOptions={{headerShown: false}}
            options={{
              headerShown: false,
                tabBarIcon: ({focused}) =>(
                    <View style = {{alignItems: 'center', justifyContent: 'center', top: 10}}>
                       <Image 
                          source= {require('../assets/tasks.png')}
                          resizeMode='contain'
                          style={{
                            width:25,
                            height: 25,
                            tintColor: focused ? '#0892D0' : '#748c94',
                            marginBottom: focused ? 5 : 5,
                          }}
                          />
                          <Text style={{color: focused ? '#0892d0' : '#748c94', fontSize: 12}}>
                            Tasks
                          </Text>
                    </View>
                ),
            }}
          />
          <Tab.Screen name="Add task" component={AddScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) =>(
                <Image
                  source = {require('../assets/plus.png')}
                  resizeMode = "contain"
                  style={{
                    width:30,
                    height:30,
                    tintColor: '#fff'
                    
                  }}
                />
              ),
              tabBarButton: (props) => (
                <CustomTabBarButton{...props}/>
              )
            }}
          />
          <Tab.Screen name="Schedule" component={ScheduleScreen}
            options={{
                tabBarIcon: ({focused}) =>(
                    <View style = {{alignItems: 'center', justifyContent: 'center', top: 10}}>
                       <Image 
                          source= {require('../assets/schedule.png')}
                          resizeMode='contain'
                          style={{
                            width:25,
                            height: 25,
                            tintColor: focused ? '#0892D0' : '#748c94',
                            marginBottom: focused ? 5 : 5,
                          }}
                          />
                          <Text style={{color: focused ? '#0892D0' : '#748c94', fontSize: 12}}>
                            Schedule
                          </Text>
                    </View>
                ),
            }}
          />
          <Tab.Screen name="Settings" component={SettingsScreen}
            options={{
                tabBarIcon: ({focused}) =>(
                    <View style = {{alignItems: 'center', justifyContent: 'center', top: 10}}>
                       <Image 
                          source= {require('../assets/settings.png')}
                          resizeMode='contain'
                          style={{
                            width:25,
                            height: 25,
                            tintColor: focused ? '#0892D0' : '#748c94',
                            marginBottom: focused ? 5 : 5,
                          }}
                          />
                          <Text style={{color: focused ? '#0892D0' : '#748c94', fontSize: 12}}>
                            Settings
                          </Text>
                    </View>
                ),
            }}
          />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow:{
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width:0,
            height: 10,
        },
        shadowOpacity: 0.125,
        shadowRadius: 4.5,
        elevation: 10
    }
});

export default Tabs;