import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View , FlatList, ScrollView, Span} from 'react-native';
import { ScrollableTabView, DefaultTabBar, ScrollableTabBar } from '@valdio/react-native-scrollable-tabview'
import MyComp from '../components/card';
import { NativeBaseProvider } from 'native-base';
import { Tab, TabView, ThemeContext } from 'react-native-elements';


const ScheduleScreen = ({navigation}) =>{

  const pTasks = [
    {user: 1, title: 'Get groceries', description: 'Buy Tomatoes and veggies', day: 'Monday', locationName: 'Market', timestr: "12:00:00", timeend: "13:00:00" },
    {user: 1, title: 'Go to Medical store', description: 'Take 2 Aspirin and a Vaseline', day: 'Wednesday', locationName: 'Hospital', timestr: "14:00:00", timeend: "17:00:00" },
    {user: 1, title: 'Library', description: 'Bring Rajavi and Adv Calculus', day: 'Thrusday', locationName: 'Library', timestr: "2:00:00", timeend: "5:00:00" },
    {user: 1, title: 'Freshsers discussion', description: 'Attend SPIC meet', day: 'Friday', locationName: 'AE laws', timestr: "15:00:00", timeend: "18:00:00" },
    {user: 1, title: 'Tech work', description: 'MicroBus Work for TechSpardha', day: 'Monday', locationName: 'L block', timestr: "18:00:00", timeend: "22:00:00" },
  ];

  const [tasks , setTasks] = useState(pTasks);
  
  // const [page, setPage] = useState([
  //   { day: 'Monday', key : 0},
  //   { day: 'Tuesday', key : 1},
  //   { day: 'Wednesday', key : 2},
  //   { day: 'Thrusday', key : 3},
  //   { day: 'Friday', key : 4},
  //   { day: 'Saturday', key : 5},
  //   { day: 'Sunday', key : 6},
  // ]);

  
  const [tabIndex, setTabIndex] = useState(0);


  _onRefresh = (callback) => {
    setTimeout(function(){test: 'Test1'} , 3000) ;
  }
  
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
  
  return <ScrollableTabView
    style={{marginTop: 10}}
    initialPage={tabIndex}
    refreshControlStyle={{backgroundColor: 'red'}}
    pullToRefresh={this._onRefresh}
    onChangeTab={(event) => {this.setStateForTab(event.i)}}
    renderTabBar={() => <ScrollableTabBar/>
  } 
  >

    <Text  tabLabel='Monday'>
      <View isActive = {tabIndex==0} style={styles.container}>
      {/* tabLabel = 'Monday'; */}
          <FlatList 
            data={tasks}
            renderItem={({ item , tabLabel}) => ( //if(item.day == tabLabel)
              <ScrollView>
                <MyComp item={item} />
              </ScrollView>
            )}
          />
          {/* {console.log(tabLabel)} */}
          {/* {console.log(isActive)} */}
      </View>
    </Text>
    
  <Text tabLabel='Tuesday'> 
    <View  isActive = {tabIndex==1} style={styles.container}>
          <FlatList
            data={tasks}
            // renderItem={({ item , tabLabel}) => ( //if(item.day == tabLabel)
            //   <Card item={item} />
            // )}
          />
    </View>
  </Text>
    
  <Text tabLabel='Wednesday'> 
    <View  isActive= {tabIndex==2 } style={styles.container}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => ( //if(item.day == tabLabel)
              <MyComp item={item} />
              )}
              />
    </View>
  </Text>
  <Text  tabLabel='Thursday'> 
    <View  isActive= {tabIndex==3 } style={styles.container}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => ( //if(item.day == tabLabel)
              <MyComp item={item} />
            )}
          />
    </View>
  </Text>

  <Text  tabLabel='Friday'> 
    <View  isActive= {tabIndex==4 } style={styles.container}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => ( //if(item.day == tabLabel)
              <MyComp item={item} />
            )}
          />
    </View>
  </Text>
  
  <Text  tabLabel='Saturday'> 
    <View  isActive= {tabIndex==5 } style={styles.container}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => ( //if(item.day == tabLabel)
              <MyComp item={item} />
            )}
          />
    </View>
  </Text>

  <Text  tabLabel='Sunday'> 
    <View  isActive= {tabIndex==6 } style={styles.container}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => ( //if(item.day == tabLabel)
              <MyComp item={item} />
            )}
          />
    </View>
  </Text>
    
  </ScrollableTabView>
    
  }

  const styles = StyleSheet.create({
    container: {
      flex: 2,
      position: 'absolute',
      // width: '50%' ,
      backgroundColor: 'skyblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleText: {
      fontSize: 25,
      marginVertical: 10,
    },

});

export default ScheduleScreen ;



      // <Card >
      //     {/* <CardImage 
      //       source={{uri: 'http://bit.ly/2GfzooV'}} 
      //       title="Go to beach and get tanned skin"
      //     /> */}
      //     <CardTitle
      //       title="Title"
      //       subtitle="This is context"
      //     />
      //     <CardContent text="Content" />
      //       <CardAction 
      //         separator={true} 
      //         inColumn={false}>
      //         <CardButton
      //           onPress={() => {}}
      //           title="Edit"
      //           color="#FEB557"
      //         />
      //         <CardButton
      //           onPress={() => {}}
      //           title="Delete"
      //           color="#FEB557"
      //         />
      //       </CardAction>
      // </Card>

      