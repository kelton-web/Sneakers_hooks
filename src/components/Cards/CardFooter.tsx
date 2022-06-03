import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import DATA from '../../data'
import { IProduct } from '../../typescript/interfaces';

interface DataFooter {
    data: IProduct;
}

const CardFooter: React.FC<DataFooter> = ({data}) => {
    return (
        <View style={{height: 150}}>
            <View style={styles.footerStyle}>
                <Text>{data.title.toUpperCase()}</Text>
            </View>

            <View>
                <Text numberOfLines={4}>{data.desc}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footerStyle: {
        marginVertical: 6
    }
})

export default CardFooter;