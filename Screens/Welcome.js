
import React, { useState, useCallback, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";


function Welcome() {
    const navigation = useNavigation();
    const [setLastName, lastName] =  useState("")
    const [setRecordLocator, recordLocator] =  useState("")
    const [setPassword, password] =  useState("")

    const [data, setData] = useState([]);
  
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


 
return(
    <View style={styles.container}>
        <Text style={{justifyContent:'center', textalign: 'center', color: 'black',fontSize: 20, fontWeight: 'bold',}}>Welcome to AAdvantage rewAArds!</Text>
        <KeyboardAwareScrollView
          style={{ flex: 1, width: "100%", backgroundColor: "white" }}
          keyboardShouldPersistTaps="always"
        >
        <View style={{borderWidth: 3.5, margin: 30, flex: 1, backgroundColor:'white', height:200, alignItems: 'center', justifyContent:'center', padding: 20}}>
            <Image 
                style={{width: 50, height:50}} 
                source={require('../assets/airplane-icon.png')} />
            <Text style={styles.screen1_text}>Hello Jack!</Text>
            <Text style={styles.screen1_text}>You're all set for your trip</Text>
            <Text style={styles.screen1_text}>from {data[0]?.origin?.code}-{data[0]?.destination?.code}</Text>
        </View>
        <Text style={{color: 'black',fontSize: 18, fontWeight: 'bold', marginLeft: 30}}>Last Name</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter Last Name"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setLastName(text)}
            value={lastName}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
        <Text style={{color: 'black',fontSize: 18, fontWeight: 'bold', marginLeft: 30}}>Record Locator</Text>
        <TextInput
        style={styles.input}
        placeholder="Enter Record Locator"
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setRecordLocator(text)}
        value={recordLocator}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        />
        <Text style={{color: 'black',fontSize: 18, fontWeight: 'bold', marginLeft: 30}}>Password</Text>
        <TextInput
        style={styles.input}
        placeholder="Enter Password"
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setPassword(text)}
        value={password}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        />


        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("CardBoard")}
          >
            <Text style={styles.buttonTitle}>Join AAdvantage in One Click</Text>
        </TouchableOpacity>
        </KeyboardAwareScrollView>
    </View>
)

}

export default Welcome;
