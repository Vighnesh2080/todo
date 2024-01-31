import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Task = (props) =>{

    return(
        <View style = {style.item}>
            <View style= {style.itemLeft}>
                <View style= {style.square}></View>
                <Text style= {style.itemText}>{props.text}</Text>
                <View style= {style.circular}></View>
            </View>
            
            
        </View>
    )
}

const style = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
        
        
    },
    itemLeft: {
        flexDirection:'row',
        alignItems: 'center',
        flexWrap: 'wrap',
       
    },
    square : {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.6,
        borderRadius: 5,
        marginRight: 15
    },
    itemText: {
        maxWidth: '80%',
        marginRight: '50%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
        
    },
});

export default Task;