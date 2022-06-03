import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import DATA from '../../../data'
import { IProduct } from '../../../typescript/interfaces';
import { Ionicons } from '@expo/vector-icons';


interface DataLike {
    data: IProduct;
}



const LikeBnt: React.FC<DataLike> = ({data}) => {
    const heartIcon: object = <Ionicons name="heart-outline" color="blue" size={25}></Ionicons>
    const heartLikeIcon: object = <Ionicons name="heart" size={25} color="blue"></Ionicons>

    const nombre = parseInt(data.likes)
    /* result = data.likes = data.likes + 1;//data.likes = data.likes !== undefined ? data.likes = data.likes + 1 : data.likes
    console.log(" le result"+result) */

    const [heart, setHeart] = useState<boolean>(true)
    const [number, setNumber] = useState<number>(nombre)

    const ToggleHeart = () => {
        setHeart(!heart)
        if(heart) {
            setNumber(number + 1)
        }else{
            setNumber(number - 1)
        }
    }

    return (
        <View style={styles.likeStyle}>
            <View style={styles.btnStyle}>
                <Text style={{fontSize: 15, color: 'gray'}}>Taille {data.size}</Text>
            </View>
        
            <View style={styles.heartStyle}>
                <TouchableOpacity onPress={() => ToggleHeart()}>
                    <Text>{heart ? heartIcon : heartLikeIcon}</Text>
                </TouchableOpacity>
                <Text style={{fontSize: 15, color: 'gray'}}>{number}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    likeStyle: {
        marginHorizontal: 4,
        flexDirection: "row",
        justifyContent: "space-between",
        
    },
    btnStyle: {
        flexDirection: "row",

    },
    heartStyle: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        
    }
})

export default LikeBnt;