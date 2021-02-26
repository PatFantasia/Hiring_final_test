import React, {useState, useEffect} from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as Font from 'expo-font';

import * as Permissions from 'expo-permissions';
import {AppLoading} from 'expo';
import RestoScreen from './screens/RestoScreen'

const {Navigator, Screen} = createStackNavigator();


const App = (props) => {

  const [loading, setLoading] = useState(true);
  // const [fetchFont, setFetchFont] = useState(false);

  // fetchFont = () => {
  //   return Font.loadAsync({
  //     Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
  //     Roboto: require("./assets/fonts/Roboto-Black.ttf"),

  //   })
  // }

  const loadRessources = async() => {
    try {
      const result = await new Promise.all([
        await Font.loadAsync({
          Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
         Roboto: require("./assets/fonts/Roboto-Black.ttf"),
        }),
        // askAsync : permissions returns only for location permissions
        Permissions.askAsync(Permissions.LOCATION),
      ])
      const status = result[1].status;
      
      if(status === 'granted') {
        setLoading(false);
      } else {
        props.navigation.push('Onboarding');
      }
    } catch(e) {
        console.error(" load ressources error : ", e);
    }
  }
  useEffect(()=> {
    loadRessources();
  }, []);

  // if(!fetchFont) {
  //   return(
  //     <AppLoading
  //       startAsync={fetchFont}
  //       onError = {()=>console.log('error')}
  //       onFinish = {()=> {setFetchFont(true)} }
  //     />
  //   )
  // }

  if (loading) {
    <View style={styles.container}>
      <ActivityIndicator/>
    </View>
  } 
  
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={options =>{
          return {
            headerShown: false
          }
        }}
      >
        
        <Screen 
          name="Resto" 
          component={RestoScreen} 
        />
        
        {/* <Screen 
          name="Login" 
          component={LoginScreen} 
        /> */}
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;

