import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {prefix} from '../utils/helpers';


const Header = ({customStyle, onPress, routes}) => {
    const {container, icoStyle, mainTextStyle, fakeBadge } = styles; 
    return  (
            <View style={container} >
                <TouchableOpacity>
                    <Ionicons 
                        name={`${prefix}-person`} 
                        style={[icoStyle, customStyle]} 
                        onPress ={routes}
                    />
                </TouchableOpacity>
               
                <Text style={mainTextStyle} > Salut, Fred </Text>   
               
                <TouchableOpacity>
                    <Ionicons 
                        name={`${prefix}-notifications`} 
                        style={icoStyle} 
                        onPress= {onPress}
                    />
                    {/* fakeBadge : style could be custom depending on event */}
                    <ImageBackground style={fakeBadge} />
                </TouchableOpacity>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        width: '100%',
        marginTop: 20 ,
        marginLeft: 30
    },
    icoStyle: {
        fontSize: 20,
        color: "#000"
    },
    mainTextStyle: {
        color: '#000',
        fontSize: 20
    },
    fakeBadge: {
        position: 'absolute',
        right: 1,
        bottom: 8,
        borderColor: '#fff',
        borderWidth: 1,
        height: 6,
        width: 6,
        backgroundColor: 'red',
        borderRadius: 28
    }
});

export default Header;