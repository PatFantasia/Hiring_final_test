import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';


const MiddleNav = ({routes, contentLeft, contentRight, customStyle}) => {
    const {container, leftStyle, rightStyle} = styles;

    return  (
        <View style={container} >
            <TouchableOpacity onPress={routes}>
                <Text style={[leftStyle, customStyle]} > {contentLeft} </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={routes}>
                <Text style={rightStyle} >{contentRight}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 10, 
        marginLeft: 30
    },
    leftStyle: {
        fontSize: 17,
        fontWeight: "bold",
        color: "rgba(0,0,0,.5)",
        paddingRight: 15,
        fontFamily: "Poppins"
    },
    rightStyle: {
        fontSize: 15,
        fontWeight: "bold",
        fontFamily: "Poppins",
        color: "#5061ca",
        marginLeft: 30,
        justifyContent:"center"
    },
    
});

export default MiddleNav;