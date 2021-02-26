import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {prefix} from '../utils/helpers';

const {width: WIDTH} = Dimensions.get("window");


const SearchBar = ({getDummy_data}) => {
    const {container, inputContainer, inputStyle, iconStyle} = styles;
    const [state, setState] = useState({name: ""});
    const { name } = state;

    const handleChangeText = (value) => {
        // setState(name= value)
        setState(prevState => ({
            ...prevState,
            name: value
        }))
    }
    return  (
        <View style= {container} >
            <View style={inputContainer} >
                <TouchableOpacity>
                    <Ionicons 
                        name={`${prefix}-search`} 
                        style={iconStyle} 
                    />
                </TouchableOpacity>
               
                <TextInput 
                    style= {inputStyle} 
                    value= {name}
                    onChangeText={handleChangeText} 
                    placeholder= "Rechercher un plat ou catégorie"
                    placeholderTextColor={"rgba(0, 0, 0, 0.35)"}
                />
{/*               
                <TouchableOpacity>
                    <Ionicons 
                        name={`${prefix}-options`} 
                        style={iconStyle} 
                    />
                </TouchableOpacity> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        top: 20,
        borderRadius: 8,
        width : WIDTH - 50,
        backgroundColor: 'rgba(229, 237, 244, 0.75)',
        marginBottom:30
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10
    },
    iconStyle: {
        fontSize: 25,
        color: "#000",
        paddingHorizontal: 5
        // alignSelf: "flex-start"

    },
    // input: {
    //     fontSize: 16,
    //     color: '#303030',
    //     maxWidth: '70%',
    //     minWidth: '30%',
    //     fontFamily: 'Poppins'
    // },
    inputStyle: {
        paddingHorizontal: 15,


    }
});

export default SearchBar;
