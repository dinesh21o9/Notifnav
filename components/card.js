import React from 'react';
import { StyleSheet,View, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Avatar, Button, Card, Text, IconButton } from 'react-native-paper';

export default function MyComp({ item , tabLabel}){
    // if(item.day == tabLabel)
    return(
        <Card style = {styles.card}>
            <Card.Content>
                <Text variant="titleLarge">{item.title}</Text>
                
                    <Card.Title
                        // title={item.title}
                        subtitle={item.description}
                        // left={(props) => <Avatar.Icon {...props} icon="file" />}
                        right={(props) => <IconButton {...props} icon="pencil" onPress={() => {}} />}
                    />
                <Text variant="bodyMedium">{item.description}</Text>
                <Text variant="bodyMedium">Time : {item.timestr} - {item.timeend}</Text>
            </Card.Content>
            <Card.Actions>
                <Button>Done</Button>
                <Button>Remove</Button>
            </Card.Actions>
        </Card>
    )
}

const styles =StyleSheet.create({
    // container: { //For MOTO G60 change this into % for responsiveness
    //     width: "100%",
    //     marginLeft: 20,
    //     marginRight: 20,
    //     backgroundColor: 'black',
    // },
    card: {
        justifyContent: 'center',
        // width: "100%",
        // height: "50%",
        marginVertical: 10,
        marginHorizontal: 25,
        padding: 5,
        borderRadius: 6,
        elevation: 4,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        textAlign: 'center',
    },
    cardContent: {
        // width: "90%",
        marginHorizontal: 20,
        marginVertical: 60,
    }
});









// <View style={styles.card}>
            //     <Text style={styles.titleText}>{ 
            //         item.title
            //     }</Text>
            //     <Text style={styles.descText}>{
            //     item.description
            //     }</Text>
            //     {/* <Text style={styles.descText}>{
            //     tabLabel
            //     }</Text> */}
            //     <Text style={styles.day}>{
            //         item.timestr
            //     }</Text>
            //     <Text style={styles.day}>{
            //         item.timeend
            //     }</Text>

            //     {/* <View style={styles.cardContent}>
            //         { item.children }
            //     </View> */}

            // </View>