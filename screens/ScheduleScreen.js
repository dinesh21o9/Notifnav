import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View , FlatList, ScrollView, Span} from 'react-native';
import { ScrollableTabView, DefaultTabBar, ScrollableTabBar } from '@valdio/react-native-scrollable-tabview'
import Card from '../components/card';
import { onChange } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';
// import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
// import Card from '../components/card';
// import ParallaxScrollView from 'react-native-scroll-view';


const ScheduleScreen = ({navigation}) =>{
  const tabLabel = useState([
    {tabLabel: 'Monday', key: 1},
    {tabLabel: 'Tuesday', key: 2},
    {tabLabel: 'Wednesday', key: 3},
    {tabLabel: 'Thursday', key: 4},
    {tabLabel: 'Friday', key: 5},
    {tabLabel: 'Saturday', key: 6},
    {tabLabel: 'Sunday', key: 7},


  ]);

  const pTasks = [
    {user: 1, title: 'Get groceries', description: 'Buy Tomatoes and veggies', day: 'Monday', locationName: 'Market', timestr: "12:00:00", timeend: "13:00:00" },
    {user: 1, title: 'Go to Medical store', description: 'Take 2 Aspirin and a Vaseline', day: 'Wednesday', locationName: 'Hospital', timestr: "14:00:00", timeend: "17:00:00" },
    {user: 1, title: 'Library', description: 'Bring Rajavi and Adv Calculus', day: 'Thrusday', locationName: 'Library', timestr: "2:00:00", timeend: "5:00:00" },
    {user: 1, title: 'Freshsers discussion', description: 'Attend SPIC meet', day: 'Friday', locationName: 'AE laws', timestr: "15:00:00", timeend: "18:00:00" },
    {user: 1, title: 'Tech work', description: 'MicroBus Work for TechSpardha', day: 'Monday', locationName: 'L block', timestr: "18:00:00", timeend: "22:00:00" },
  ];

  const [tasks , setTasks] = useState(pTasks);
  const [day, setDay] = useState('Monday');
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
        <ScrollView>
          <FlatList
            data={tasks}
            renderItem={({ item }) => ( //if(item.day == tabLabel)
              <Card>
                <Text style={styles.titleText}>{ 
                  item.title
                }</Text>
                <Text style={styles.descText}>{
                  item.description 
                }</Text>
                <Text style={styles.day}>{
                  item.timestr 
                }</Text>
                <Text style={styles.day}>{
                  item.timeend 
                }</Text>
                {/* <Span style={styles.titleText}>
                  item.timeend
                </Span> */}
              </Card> 
            )}
          />
        </ScrollView>
      </View>
    </Text>
    
  <Text  tabLabel='Tuesday'> 
    <View  isActive= {tabIndex==1 } style={styles.container}>
      <Text>Add tasks on Tuesday</Text> 
    </View>
  </Text>
    
    {/* <Text tabLabel='Wednesday'>
      <View style={styles.container}>
        <ScrollView>
          <FlatList
            data={tasks}
            renderItem={({ item }) => ( //if(item.day == tabLabel)
              <Card>
                <Text style={styles.titleText}>{ 
                  item.title
                }</Text>
                <Text style={styles.descText}>{
                  item.description 
                }</Text>
              </Card> 
            )}
          />
        </ScrollView>
      </View>
    </Text>

    <Text tabLabel='Thrusday'>
      <View style={styles.container}>
        <ScrollView>
          <FlatList
            data={tasks}
            renderItem={({ item }) => ( //if(item.day == tabLabel)
              <Card>
                <Text style={styles.titleText}>{ 
                  item.title
                }</Text>
                <Text style={styles.descText}>{
                  item.description 
                }</Text>
              </Card> 
            )}
          />
        </ScrollView>
      </View>
    </Text>

    <Text tabLabel='Friday'>
      Add tasks on {tabLabel.key}
    </Text>

    <Text tabLabel='Saturday'>hehe</Text>

    <Text tabLabel='Sunday'>ofc</Text> */}
    
  </ScrollableTabView>
    
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'absolute',
      // width: "200%",
      backgroundColor: '#fff',
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

      