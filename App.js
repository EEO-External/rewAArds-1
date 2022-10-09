import { TouchableOpacity, useWindowDimension } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import Screen_1 from './Screens/Screen_1';
import Screen_2 from './Screens/Screen_2';
import Screen_3 from './Screens/Screen_3';
import Screen_4 from './Screens/Screen_4';
import Screen_5 from './Screens/Screen_5';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  const Stack = createStackNavigator();
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [flightLocation, setFlightLocation] = useState([]);
  const [flightNumbers, setFlightNumbers] = useState([]);

  const getLocationData = () =>{
    fetch("https://rewaards.herokuapp.com/airports/all")
    .then(response => response.json())
    .then((result) => {
      setData(result)
      setFlightLocation(Object.keys(data))
    })
    .catch(error => console.log('error', error));
  }

  const getFlightNo = () =>{
    fetch("https://rewaards.herokuapp.com/flights?date=2017-08-29&destination=DFW")
    .then(response => response.json())
    .then((result) => {
      setData1(result)
      setFlightNumbers(Object.keys(data1))
    })
    .catch(error => console.log('error', error));
    
  }

  useEffect(()=>{
    getLocationData()
    getFlightNo()
  }, [])

  //console.log("data", data)

  // var origin_location = data[flightLocation[0]]['code']
  // var destination_location = data[flightLocation[1]]['code']
  // var origin_city = data[flightLocation[0]]['city']
  // var destination_city = data[flightLocation[1]]['city']
  // var duration = data1[flightNumbers[0]]['duration']
  // var distance = data1[flightNumbers[0]]['distance']
  // var flight = data1[flightNumbers[0]]['flightNumber']
  //console.log("data1", data1)
  //console.log("data", data1[flightNumbers[0]]['flightNumber'])

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <>
        <Stack.Screen name="Screen_5" options={{
          headerShown: false
        }} component={Screen_5}/>
        <Stack.Screen name="Screen_1" options={{
          headerShown: false
        }} component={Screen_1}/>
        <Stack.Screen name="Screen_2" options={{
          headerShown: false
        }} component={Screen_2}/>
        <Stack.Screen name="Screen_3" options={{
          headerShown: false
        }} component={Screen_3}/>
        <Stack.Screen name="Screen_4" options={{
          headerShown: false
        }} component={Screen_4}/>
       
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

