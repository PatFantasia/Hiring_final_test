import React from 'react';
import {  View, StyleSheet, Text, ImageBackground, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import {prefix} from '../utils/helpers';


const {width: WIDTH} = Dimensions.get("window");

const RestoBox = ({dummy_data, size, box1, box2, box3, box4}) =>{
    const { 
            first, second, third, fourth, 
            imageStyle, customText, customText_1, 
            customText_2, background, iconStyle
    } = styles; 
    
    const {picture, name, ville, menu, price} = dummy_data;
   
    const getContainerStyle= () => {
        switch (size) {
            case "first":
                return first;
            case "second":
                return second;
            case "third":
                return third;
            case "fourth":
                return fourth
        }
    }
    const star = (
        <Ionicons 
            name={`${prefix}-star`} 
            style={iconStyle} 
        />
    )

    // const separator = (
    //     <Text style={styles.separator}> . </Text>
    // )
    
    return (
    
        <View style={getContainerStyle()} >
            { box1 && (
                    <>
                        <ImageBackground 
                            style={imageStyle} source={picture}
                            imageStyle={{ borderRadius: 8}}
                        />
                        <LinearGradient
                            colors={['transparent', 'rgba(0,0,0,0.8)']}
                            style={background}
                        />
                        <Text style={customText_1} >{name}</Text>
                        <Text style={customText_2} >{ville}</Text>
                    </>
                )
            }
            { box2 && (
                    <>
                        <ImageBackground 
                            style={styles.imageStyle2} source={picture}
                            imageStyle={{ borderRadius: 8}}
                        />
                         
                        <Text style={customText} >{name}</Text>
                      
                    </>
                )
            }
            { box3 && (
                    <>
                        <ImageBackground 
                            style={imageStyle} source={picture}
                            imageStyle={{ borderRadius: 8}}
                        />
                        <LinearGradient
                            colors={['transparent', 'rgba(0,0,0,0.8)']}
                            style={background}
                        />
                        <Text style={customText_1} >{menu}</Text>
                        <Text style={customText_2} >{price}</Text>
                    </>
                )
            }
            { box4 && (
                    <>
                        <ImageBackground 
                            style={imageStyle} source={picture}
                            imageStyle={{ borderRadius: 8}}
                        />
                        <LinearGradient
                            colors={['transparent', 'rgba(0,0,0,0.8)']}
                            style={background}
                        />
                        <Text style={customText_1} > Chez Aladja</Text>
                        <Text style={customText_2} >
                            Cotonou à 3,5Km . Africain . {star} 4.5
                        </Text>
                    </>
                )
            }
          
        </View>
    )
}
const styles = StyleSheet.create({
    first: {
        width:150,
        height: 110,
        paddingHorizontal: 5,
        marginVertical: 5
    },
    second: {
        width:100,
        height: 150,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor:"#000",
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 10,
    },
    third: {
        width:110,
        height: 110,
        paddingHorizontal: 5,
        marginVertical: 5
    },
    fourth: {
        width: WIDTH - 50,
        height: 150,
        paddingHorizontal: 5,
        marginVertical: 10
    },
    imageStyle: {
        width: "100%",
        height: "100%",
        borderRadius: 10
    },
    imageStyle2: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
    },
    customText: {
        position: 'absolute',
        left: 15,
        bottom: 15,
        fontWeight:'bold',
        alignContent: 'center',
        justifyContent: 'center',
        // alignSelf: 'center',
        fontSize: 15,
        color: '#000'
    },
    customText_1: {
        position: 'absolute',
        left: 15,
        bottom: 22,
        fontWeight:'bold',
        fontSize: 15,
        color: '#fff',
        fontFamily: 'Roboto',
    },
    customText_2: {
        left: 10,
        bottom: 22,
        fontWeight:'300',
        color: '#fff',
        fontSize: 12,
    },
    background: {
        position: 'absolute',
        right: 4,
        left: 4,
        bottom: 0,
        height: 60,
        borderRadius: 8
        
      },
      iconStyle: {
          color: '#fff'
      },
      separator: {
          fontSize : 50,
          top: 5,
          color: '#fff'
      }

});
export default RestoBox;
