import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import RestoBox from './RestoBox';
import {CheckDistance} from '../utils/mock_api';
import MiddleNav from './MiddleNav';
import {dummy_categorie} from '../dummy_categorie';


const RestoBoxList = ({dummy_data}) => {
    // filter the list of dummy data and paste it to flat list component 
    const checkedDummy_list = CheckDistance(dummy_data)
   
    const renderRestoBox = ({item}) => {
        return(
            <TouchableOpacity>
                <RestoBox  dummy_data={item} size="first" box1/>
            </TouchableOpacity>
        )
    }
    const renderRestoBox2 = ({item}) => {
        return(
            <TouchableOpacity>
                <RestoBox  dummy_data={item} size="second" box2 />
            </TouchableOpacity>
        )
    }
    const renderRestoBox3 = ({item}) => {
        return(
            <TouchableOpacity>
                <RestoBox  dummy_data={item} size="third" box3 />
            </TouchableOpacity>
        )
    }
    const renderRestoBox4 = ({item}) => {
        return(
            <TouchableOpacity>
                <RestoBox  dummy_data={item} size="fourth" box4 />
            </TouchableOpacity>
        )
    }
    return (
        <>
            <MiddleNav contentLeft="Restaurants Vedettes" contentRight="Voir tout" />
            <FlatList
                style={styles.flex}
                contentContainerStyle={styles.padding}
                data={checkedDummy_list}
                horizontal={true}
                renderItem= {item => renderRestoBox(item)}
                keyExtractor={item => item.id}
            />

            <MiddleNav contentLeft="Categories" contentRight="Voir tout" customStyle={styles.addStyle} />
            <FlatList
                style={styles.flex}
                contentContainerStyle={styles.padding}
                data={dummy_categorie}
                horizontal={true}
                renderItem= {item => renderRestoBox2(item)}
                keyExtractor={item => item.id}
            />

            <MiddleNav contentLeft="Repas populaires" contentRight=""  />
            <FlatList
                style={styles.flex}
                contentContainerStyle={styles.padding}
                data={checkedDummy_list}
                horizontal={true}
                renderItem= {item => renderRestoBox3(item)}
                keyExtractor={item => item.id}
            />

            <FlatList
                style={styles.flex}
                contentContainerStyle={styles.padding}
                data={checkedDummy_list}
                // horizontal={true}
                renderItem= {item => renderRestoBox4(item)}
                keyExtractor={item => item.id}
            />
        </>
);}

const styles = StyleSheet.create({
    flex: {
        // flex: 1,
    },
    padding: {
        paddingHorizontal: 25
    },
    addStyle:{
        paddingRight: 100
    }
   
});

export default RestoBoxList;
 