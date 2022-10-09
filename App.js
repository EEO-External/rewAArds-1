import { TouchableOpacity, useWindowDimension } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import Screen_1 from './Screens/Screen_1';
import Screen_2 from './Screens/Screen_2';
import Screen_3 from './Screens/Screen_3';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  const Stack = createStackNavigator();
  const [data, setData] = useState([]);
  const [name, setName] = useState([]);
  const [flightNumbers, setFlightNumbers] = useState([]);
  
const getData = () =>{
  fetch("http://localhost:4000/flights?date=2021-01-01")
  .then(response => response.json())
  .then((result) => {
    setData(result)
    setFlightNumbers(Object.keys(data))
  }
  )
  .catch(error => console.log('error', error));
}

useEffect(()=>{
  getData()
}, [])

console.log("data", data)

// console.log(data[flightNumbers[1]].destination.city)

    return(
      <NavigationContainer>
        <Stack.Navigator>
          <>
          <Stack.Screen name="Screen_1" options={{
            headerShown: false
          }} component={Screen_1}/>
          <Stack.Screen name="Screen_2" options={{
            headerShown: false
          }} component={Screen_2}/>
          <Stack.Screen name="Screen_3" options={{
            headerShown: false
          }} component={Screen_3}/>
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

