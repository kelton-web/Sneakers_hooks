import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import DATA from '../../data';
import Card from '../../components/Cards/Card';
import {IProduct} from '../../typescript/interfaces'
import CardHeader from '../../components/Cards/CardHeader';

interface DataProduct {
    updateSearch: (search: string) => void;
}

/* console.log(DATA) */
const Home: React.FC<DataProduct> = ({}) => {
    const [search, setSearch] = useState("");


    const updateSearch = (search: string) => {
        setSearch(search);
        console.log(search);
      };
    



    const filtered = !search
    ? DATA
    : DATA.filter((person) =>
        person.title.toLowerCase().includes(search.toLowerCase())
      );

    return (
        <View style={styles.container}>
            <View style={{height: 100, width: "100%", justifyContent: "center", alignItems: "center"}}>
                <View style={styles.searchBar}>
                    <CardHeader updateSearch={updateSearch} search={search}/>
                </View>
                    <Text>{filtered.length} produit trouvé sur {DATA.length}</Text>
            </View>
            <ScrollView style={{ flex: 1,
        width: '100%'}}>
            <View style={styles.containerDATA}>
                <View style={styles.smallContainerDATA}>
                    {filtered.map((data: any, key: number) =>
                        <Card key={data.id} data={data} />
                    )}
                </View>
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    searchBar: {
        flex: 1,
        width: '100%',
        borderColor: 'blue',
        borderWidth: 1,
        marginBottom: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerDATA: {
        width: "100%",
        height: "100%",
       
        
    },
    smallContainerDATA: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'center',
        alignItems: 'center',

    }
})

export default Home;