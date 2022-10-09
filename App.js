import { TouchableOpacity, useWindowDimension } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import Screen_1 from './Screens/SignUp';
import Screen_2 from './Screens/InFlight';
import Seat from './Screens/Seat';
import Screen_4 from './Screens/Screen_4';
import Screen_5 from './Screens/Screen_5';
import { NavigationContainer } from '@react-navigation/native';
import InFlight from './Screens/InFlight';
import SignUp from './Screens/SignUp';


const App = () => {
  const Stack = createStackNavigator();
  const [data, setData] = useState([]);
  const [name, setName] = useState([]);
  const [flightNumbers, setFlightNumbers] = useState([]);
  
const getFlightData = () =>{
  fetch("https://rewaards.herokuapp.com/flights?date=2021-01-01")
  .then(response => response.json())
  .then((result) => {
    setData(result)

  }
  )
  .catch(error => console.log('error', error));
}

useEffect(()=>{
  getFlightData()
}, [])

//console.log("data", data)
//console.log('1st city', data[flightNumbers][0].code)
//console.log(data) 

//console.log(data[flightNumbers[1]]?.destination?.city)

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <>
        <Stack.Screen name="Seat" options={{
          headerShown: false
        }} component={Seat}/>
        <Stack.Screen name="InFlight" options={{
          headerShown: false
        }} component={InFlight}/>
        <Stack.Screen name="SignUp" options={{
          headerShown: false
        }} component={SignUp}/>
        <Stack.Screen name="Screen_4" options={{
          headerShown: false
        }} component={Screen_4}/>
        <Stack.Screen name="Screen_5" options={{
          headerShown: false
        }} component={Screen_5}/>
        </>
      </Stack.Navigator>

    </NavigationContainer>
    
  
  )
};

const styles = StyleSheet.create({

  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
})

export default App;

