import React, { useState, useCallback, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { View, TextInput, TouchableOpacity, Text, Image} from "react-native";
import styles from "./styles.js";


export function BuyFlight() {
    const navigation = useNavigation();
 
return(
    <View style={styles.container}>
        <Text style={{justifyContent:'center', textalign: 'center', color: 'black',fontSize: 20, fontWeight: 'bold',}}>Welcome to Flight Purchase!</Text>
        <KeyboardAwareScrollView>
        <TouchableOpacity>
            <View style={{ borderWidth: 3.5, margin: 30, flex: 1, backgroundColor:'green', height:400, alignItems: 'center', justifyContent:'center', padding: 20, borderRadius: 20}}>
                <Image 
                    style={{width: 50, height:50}} 
                    source={require('../assets/airplane-icon.png')} />
                <View style={{ marginTop: 10,flexDirection: "row",flexWrap: "wrap",flexBasis: "auto",flexGrow: 1, alignContent:'center', justifyContent: 'center'}}>
                    <Text style={styles.screen2_text}>DFW </Text>
                    <Image 
                        style={{width: 50, height:50}} 
                        source={require('../assets/rightarrow.png')} />
                    <Text style={styles.screen2_text}>JFK </Text>
                </View>
                <Text style={{fontSize: 15, textAlign: 'center', }}>Jan 16 2021 - NK6622</Text> 
                <View style={{ marginTop: 10,marginLeft: 15,flexDirection: "row",flexWrap: "wrap",flexBasis: "auto",flexGrow: 1, alignContent:'flex-start', justifyContent: 'flex-start'}}>
                    <Text style={styles.screen2_text}> Departs {'\n'} 7:00am </Text>
                    <View>
                    <Image 
                        style={{width: 30, height:30, margin:20}} 
                        source={require('../assets/clock.png')} />
                        <Text style={{fontSize: 15, textAlign: 'center', }}>2h 50min</Text>
                    </View>
                    <Text style={styles.screen2_text}>Arrives {'\n'}9:50am</Text>
                </View> 
                <View style={{ marginTop: 10,marginLeft: 15,flexDirection: "row",flexWrap: "wrap",flexBasis: "auto",flexGrow: 1, alignContent:'flex-start', justifyContent: 'flex-start'}}>
                    <Text style={styles.screen3_text}> GATE {'\n'} A </Text>
                    <Text style={styles.screen3_text}> Term {'\n'} A 20 </Text>
                    <Text style={styles.screen3_text}> GATE {'\n'} C</Text>
                    <Text style={styles.screen3_text}> Term {'\n'} C 20 </Text>
                </View> 
                <Text style={styles.screen2_text}>Ticket price   -----   $490</Text>
            </View>

        </TouchableOpacity>
        
        <TouchableOpacity>
            <View style={{ borderWidth: 3.5, margin: 30, flex: 1, backgroundColor:'green', height:400, alignItems: 'center', justifyContent:'center', padding: 20, borderRadius: 20}}>
                <Image 
                    style={{width: 50, height:50}} 
                    source={require('../assets/airplane-icon.png')} />
                <View style={{ marginTop: 10,flexDirection: "row",flexWrap: "wrap",flexBasis: "auto",flexGrow: 1, alignContent:'center', justifyContent: 'center'}}>
                    <Text style={styles.screen2_text}>DFW </Text>
                    <Image 
                        style={{width: 50, height:50}} 
                        source={require('../assets/rightarrow.png')} />
                    <Text style={styles.screen2_text}>JFK </Text>
                </View>
                <Text style={{fontSize: 15, textAlign: 'center', }}>Jan 16 2021 - NK6622</Text> 
                <View style={{ marginTop: 10,marginLeft: 15,flexDirection: "row",flexWrap: "wrap",flexBasis: "auto",flexGrow: 1, alignContent:'flex-start', justifyContent: 'flex-start'}}>
                    <Text style={styles.screen2_text}> Departs {'\n'} 2:00pm </Text>
                    <View>
                    <Image 
                        style={{width: 30, height:30, margin:20}} 
                        source={require('../assets/clock.png')} />
                        <Text style={{fontSize: 15, textAlign: 'center', }}>2h 50min</Text>
                    </View>
                    <Text style={styles.screen2_text}>Arrives {'\n'}4:50am</Text>
                </View> 
                <View style={{ marginTop: 10,marginLeft: 15,flexDirection: "row",flexWrap: "wrap",flexBasis: "auto",flexGrow: 1, alignContent:'flex-start', justifyContent: 'flex-start'}}>
                    <Text style={styles.screen3_text}> GATE {'\n'} A </Text>
                    <Text style={styles.screen3_text}> Term {'\n'} A 20 </Text>
                    <Text style={styles.screen3_text}> GATE {'\n'} C</Text>
                    <Text style={styles.screen3_text}> Term {'\n'} C 20 </Text>
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
    