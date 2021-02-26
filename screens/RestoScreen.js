import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import RestoBoxList from '../components/RestoBoxList';
import {dummy_data} from '../dummy_restaurant';
import { ScrollView } from 'react-native-gesture-handler';

const {width: WIDTH, height: HEIGHT} = Dimensions.get("window");


const RestoScreen = (props) => {
    const {container, boxContainerStyle} = styles;
    
    return  (
        <SafeAreaView style={container} >
            <Header/>
            
            <SearchBar getDummy_data= {dummy_data} />
                <ScrollView style={boxContainerStyle} contentContainerStyle={{ flexGrow: 1 }} >
                    <RestoBoxList  dummy_data= {dummy_data} />
                </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
         flexDirection: "column",
         alignItems: "center",
         justifyContent: "flex-start",
         paddingTop: 20,
    },
    mapStyle: {
        width: WIDTH,
        height: (HEIGHT * 2.5) / 4,
    },
    boxContainerStyle: {
        alignSelf: 'flex-start',
    }
});

export default RestoScreen;