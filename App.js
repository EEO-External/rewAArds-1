import { TouchableOpacity, useWindowDimension } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


const App = () => {

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

console.log(data[flightNumbers[1]].destination.city)

    return(
      <View style={{ justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      backgroundColor: 'white'}}>
        <Text style={{textAlign:'center'}}>Hey</Text>

      </View>
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

