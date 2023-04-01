import { StyleSheet, View } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { Card, Text } from 'react-native-paper';
// import Accordion from 'react-native-collapsible/Accordion';
import React,{useState} from 'react'

const Schedule = (state) => {
  const [day,setDay] = useState("Ess");
  const navigation = useNavigation();
    const dateday=(inp)=>{
        switch (inp) {
            case 1:
              return ( <Text>Monday</Text>);
            case 2:
              return ( <Text>Tuesday</Text>);
            case 3:
              return ( <Text>Wednesday</Text>);
            case 4:
              return ( <Text>Thursday</Text>);
            case 5:
              return ( <Text>Friday</Text>);
            case 6:
              return ( <Text>Saturday</Text>);
            case 7:
              return ( <Text>Sunday</Text>);
            }
          }
    const datemonth=(inpi)=>{
        switch (inpi) {
            case 1:
              return ( <Text>Jan</Text>);
            case 2:
              return ( <Text>Feb</Text>);
            case 3:
              return ( <Text>Mar</Text>);
            case 4:
              return ( <Text>Apr</Text>);
            case 5:
              return ( <Text>May</Text>);
            case 6:
              return ( <Text>June</Text>);
            case 7:
              return ( <Text>Jul</Text>);
            case 8:
              return ( <Text>Aug</Text>);
            case 9:
              return ( <Text>Sep</Text>);
            case 10:
              return ( <Text>Oct</Text>);
            case 11:
              return ( <Text>Nov</Text>);
            case 12:
              return ( <Text>Dec</Text>);
            }
    }
    const [selected, setSelected] = React.useState("");
  
  const data = [
      {key:'1', value:'Mobiles', disabled:true},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers', disabled:true},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
  ]   
        ;
      
  return (
    <View>
        {/* 1st line showing date time and day */}
        <Text style={styles.day}>{dateday(new Date().getDay())}, {new Date().getDate()} {datemonth(new Date().getMonth()+1)}</Text>
    <Card onPress={()=>{navigation.navigate("Ess",{ title:"Monday" })}}>
      <Card.Content>
        <Text variant="titleLarge">Monday</Text>
        <Text variant="bodyMedium"></Text>
      </Card.Content>
    </Card>
    <Card onPress={()=>{navigation.navigate("Ess",{ title:"Tuesday" })}}>
      <Card.Content>
        <Text variant="titleLarge">Tuesday</Text>
        <Text variant="bodyMedium"></Text>
      </Card.Content>
    </Card>
    <Card onPress={()=>{navigation.navigate("Ess",{ title:"Wednesday" })}}>
      <Card.Content>
        <Text variant="titleLarge">Wednesday</Text>
        <Text variant="bodyMedium"></Text>
      </Card.Content>
    </Card>
    <Card onPress={()=>{navigation.navigate("Ess",{ title:"Thursday" })}}>
      <Card.Content>
        <Text variant="titleLarge">Thursday</Text>
        <Text variant="bodyMedium"></Text>
      </Card.Content>
    </Card>
    <Card onPress={()=>{navigation.navigate("Ess",{ title:"Friday" })}}>
      <Card.Content>
        <Text variant="titleLarge">Friday</Text>
        <Text variant="bodyMedium"></Text>
      </Card.Content>
    </Card>
    <Card onPress={()=>{navigation.navigate("Ess",{ title:"Saturday" })}}>
      <Card.Content>
        <Text variant="titleLarge">Saturday</Text>
        <Text variant="bodyMedium"></Text>
      </Card.Content>
    </Card>
    <Card onPress={()=>{navigation.navigate("Ess",{ title:"Sunday" })}}>
      <Card.Content>
        <Text variant="titleLarge">Sunday</Text>
        <Text variant="bodyMedium"></Text>
      </Card.Content>
    </Card>
    </View>
  )
}

export default Schedule

const styles = StyleSheet.create({
    day:{
        marginLeft:"10%",
        marginTop:"20%",
        fontSize:35
    }
})



// var month = new Date().getMonth() + 1;
// var year = new Date().getFullYear();