import React from 'react';
import { StyleSheet,View } from 'react-native';

export default function Card(props){
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    { props.children }
                </View>
            </View>
        </View>
    )
}

const styles =StyleSheet.create({
    container: { //For MOTO G60 change this into % for responsiveness
        width: 400,
        marginLeft: 20,
        marginRight: 20,
    },
    card: {
        justifyContent: 'center',
        width: "85%",
        // height: "50%",
        borderRadius: 6,
        elevation: 4,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        margin: 25,
        textAlign: 'center',
    },
    cardContent: {
        // width: "90%",
        marginHorizontal: 20,
        marginVertical: 60,
    }
});