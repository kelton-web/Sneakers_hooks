import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import DATA from '../../data';
import {IProduct} from '../../typescript/interfaces'

interface DataBody {
    data: IProduct;
}

const CardBody: React.FC<DataBody> = ({data}) => {
    return (
        <View style={styles.BodyStyle}>
            <Text style={{fontSize: 20,color: 'gray'}}>{data.price} €</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    BodyStyle: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: 8,
        marginBottom: 4,
        overflow: 'hidden'
    }
})

export default CardBody;