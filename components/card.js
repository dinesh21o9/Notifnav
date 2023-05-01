import { Spacer } from 'native-base';
import React from 'react';
import { StyleSheet,View, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Avatar, Button, Card, Text, IconButton } from 'react-native-paper';

export default function MyComp({ item , tabLabel}){
    // if(item.day == tabLabel)
    return(
        <Card style = {styles.card}>
            <Card.Content>
                <Text style={{fontWeight: 'bold',fontSize: 25}} variant="titleLarge">{item.title}</Text>
                
                <Card.Title color="coolGray.600" _dark={{color: "warmGray.200"}}
                    // title={item.title}
                    subtitle={item.description}
                    subtitleNumberOfLines={3}
                    left={(props) => <Avatar.Icon {...props} icon = {{URL: item.avatarUrl}} />}
                    leftStyle={{margin: 0}}
                    right={(props) => <IconButton {...props} icon="pencil" onPress={() => {}} />}
                />

                <Text style={{fontStyle: 'italic',fontSize: 15,fontWeight: 'bold' , marginBottom: 10}} variant="bodyMedium">{item.locationName}</Text>
                <Text variant="bodyMedium">{item.timestr} </Text>
            </Card.Content>
            <Card.Actions>
                {/* <Button>Done</Button> */}
                {/* <Button>Remove</Button> */}
            </Card.Actions>
        </Card>
    )
}

const styles =StyleSheet.create({
    leftStyle:{
        margin:10,

    },
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