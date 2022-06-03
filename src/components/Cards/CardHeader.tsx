import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import DATA from '../../data';
import {IProduct} from '../../typescript/interfaces';
import { Ionicons } from '@expo/vector-icons';


interface DataHeader {
    updateSearch: (search: string) => void;
    search: string;
}

const CardHeader: React.FC<DataHeader> = ({updateSearch, search }) => {


    return (
        <View style={styles.headerStyle}>
            <View style={styles.containerInput}>
                <TextInput style={styles.InputStyle} value={search}  placeholder="Rechercher" onChangeText={updateSearch}/>
                <View style={{position: 'absolute', right: 12, }}>
                    <Ionicons name="search" color="blue" size={25}></Ionicons>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
       
        
    },
    containerInput: {
        borderWidth: 1,
        borderColor: 'blue',
        width: '90%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 15   
    },
    InputStyle: {
        fontSize: 20, 
        color: 'blue',
        width: '85%',
    }
})

export default CardHeader;