import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import DATA from '../../data';
import {IProduct} from '../../typescript/interfaces'
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import LikeBtn from '../_Shared/LikeBtn/LikeBtn';

interface DataType {
    data: IProduct;
}
console.log(DATA)
const Card: React.FC<DataType> = ({data}) => {
    /* console.log(data); */
    return (
            <View style={styles.asideContainerLeft}>
                <View style={styles.headerStyle}>
                    <CardBody data={data}/>
                </View>
                <View style={styles.imgStyle}>
                    <Image style={{width: '100%', height: '100%', resizeMode: "contain"}} source={data.photo} />
                </View>
                <View style={styles.titleStyle}>
                    <CardFooter data={data}/>
                </View>
                <View style={styles.likeStyle}>
                    <LikeBtn data={data}/>
                </View>
            </View>      
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8
    },
    smallContainer: {
        height: 350,
        width: '100%',

    },

    formCard: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    asideContainerLeft: {
        width: "48%",
        borderWidth: 1,
        borderColor: 'blue',     
        marginHorizontal: 3, 
        marginVertical: 3, 
    },
  /*   asideContainerRight: {
        height: "100%",
        width: "48%",
        backgroundColor: 'purple'
    }, */
    /* Element dans la card asideContainerLeft */
    headerStyle: {
        height: 40,
        borderBottomWidth: 1,
        borderColor: 'blue'
    },
    imgStyle: {
        height: 200,
        borderBottomColor: 'blue',
        borderBottomWidth: 1,
    },
    titleStyle: {
        
    },
    likeStyle: {
        height: 40,
        justifyContent: 'center',
    }
})

export default Card;