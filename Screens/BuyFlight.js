import React, { useState, useCallback, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { View, TextInput, TouchableOpacity, Text, Image} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from "./styles.js";


export function BuyFlight() {
    const navigation = useNavigation();

    const [data, setData] = useState([]);
    const [pressed, setPressed] = useState(false)
  
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
    
    console.log()
 
return(
    <View style={styles.container}>
        <Text style={{justifyContent:'center', textalign: 'center', color: 'black',fontSize: 20, fontWeight: 'bold',}}>Welcome to Flight Purchase!</Text>
        <KeyboardAwareScrollView>
        <TouchableOpacity
        onPress={()=>{setPressed(true)}}
        >
            <View style = {{ backgroundColor: pressed ? 'black' : '#1f7cb1' , borderWidth: 3.5, margin: 30, flex: 1, height:400, alignItems: 'center', justifyContent:'center', padding: 20, borderRadius: 20 }}>
                {/* <Image 
                    style={{width: 50, height:50}} 
                    source={require('../assets/airplane-icon.png')} /> */}
                    <Ionicons name="airplane-outline" size={54} color="white" style = {{marginTop: 20, alignContent: 'center'}} />
                <View style={{ marginTop: 10,flexDirection: "row",flexWrap: "wrap",flexBasis: "auto",flexGrow: 1, alignContent:'center', justifyContent: 'center'}}>
                    <Text style={styles.screen2_text}> {data[0]?.origin?.code} - {data[0]?.destination?.code} </Text>
                </View>
                <Text style={{fontSize: 15, textAlign: 'center', color: 'white'}}>Jan 16 2021 - NK{data[0]?.aircraft?.model}</Text> 
                <View style={{ marginTop: 10,marginLeft: 0,flexDirection: "row",flexWrap: "wrap",flexBasis: "auto",flexGrow: 1, alignContent:'flex-start', justifyContent: 'flex-start'}}>
                    <Text style={styles.screen2_text}> Departs {'\n'} 7:00am </Text>
                    <View>
                    <Ionicons name="alarm-outline" size={24} color="white" style={{marginLeft: 19, marginTop: 10}}/>
                        <Text style={{fontSize: 15, textAlign: 'center', color: 'white', marginRight: 2}}>2h 50min</Text>
                    </View>
                    <Text style={styles.screen2_text}>Arrives {'\n'}9:50am</Text>
                </View> 
                <View style={{ marginTop: 10,marginLeft: 15,flexDirection: "row",flexWrap: "wrap",flexBasis: "auto",flexGrow: 1, alignContent:'flex-start', justifyContent: 'flex-start'}}>
                    <Text style={styles.gate_text}> GATE {'\n'} A </Text>
                    <Text style={styles.gate_text}> Term {'\n'} A 20 </Text>
                    <Text style={styles.gate_text}> GATE {'\n'} C</Text>
                    <Text style={styles.gate_text}> Term {'\n'} C 20 </Text>
                </View> 
                <Text style={styles.screen2_text}>Ticket price   -----   $490</Text>
            </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
            <View style={{ borderWidth: 3.5, margin: 30, flex: 1, backgroundColor:'#1f7cb1', height:400, alignItems: 'center', justifyContent:'center', padding: 20, borderRadius: 20}}>
                {/* <Image 
                    style={{width: 50, height:50}} 
                    source={require('../assets/airplane-icon.png')} /> */}
                    <Ionicons name="airplane-outline" size={54} color="white" style = {{marginTop: 20, alignContent: 'center'}} />
                <View style={{ marginTop: 10,flexDirection: "row",flexWrap: "wrap",flexBasis: "auto",flexGrow: 1, alignContent:'center', justifyContent: 'center'}}>
                    <Text style={styles.screen2_text}> {data[0]?.origin?.code} - {data[0]?.destination?.code} </Text>
                </View>
                <Text style={{fontSize: 15, textAlign: 'center', color: 'white'}}>Jan 16 2021 - NK{data[0]?.aircraft?.model}</Text> 
                <View style={{ marginTop: 10,marginLeft: 0,flexDirection: "row",flexWrap: "wrap",flexBasis: "auto",flexGrow: 1, alignContent:'flex-start', justifyContent: 'flex-start'}}>
                    <Text style={styles.screen2_text}> Departs {'\n'} 6:00am </Text>
                    <View>
                    <Ionicons name="alarm-outline" size={24} color="white" style={{marginLeft: 19, marginTop: 10}}/>
                        <Text style={{fontSize: 15, textAlign: 'center', color: 'white', marginRight: 2}}>2h 50min</Text>
                    </View>
                    <Text style={styles.screen2_text}>Arrives {'\n'}8:50am</Text>
                </View> 
                <View style={{ marginTop: 10,marginLeft: 15,flexDirection: "row",flexWrap: "wrap",flexBasis: "auto",flexGrow: 1, alignContent:'flex-start', justifyContent: 'flex-start'}}>
                    <Text style={styles.gate_text}> GATE {'\n'} A </Text>
                    <Text style={styles.gate_text}> Term {'\n'} A 20 </Text>
                    <Text style={styles.gate_text}> GATE {'\n'} C</Text>
                    <Text style={styles.gate_text}> Term {'\n'} C 20 </Text>
                </View> 
                <Text style={styles.screen2_text}>Ticket price   -----   $300</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Welcome")}
          >
            <Text style={styles.buttonTitle}>Join AAdvantage in One Click</Text>
        </TouchableOpacity>
        <Text style={styles.screen4_text}>Get 20% off this flight</Text>

        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Checkin")}
          >
            <Text style={styles.buttonTitle}>Proceed with Initial Cost</Text>
        </TouchableOpacity>
        </KeyboardAwareScrollView>
    </View>
)
    
}
    
export default BuyFlight;
    