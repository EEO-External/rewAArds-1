import React, { useState, useCallback, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, TextInput, TouchableOpacity, Text, Image} from "react-native";
import styles from "./styles.js";


export function Screen_5() {
 
return(
    <View style={styles.container}>
        <Text style={{justifyContent:'center', textalign: 'center', color: 'black',fontSize: 20, fontWeight: 'bold',}}>Welcome to Flight Purchase!</Text>
        <KeyboardAwareScrollView>
        <View style={{borderWidth: 3.5, margin: 30, flex: 1, backgroundColor:'green', height:200, alignItems: 'center', justifyContent:'center', padding: 20, borderRadius: 2}}>
            <Image 
                style={{width: 50, height:50}} 
                source={require('../assets/airplane-icon.png')} />
            <Text style={styles.screen1_text}>Inflight entertainment!</Text>
        </View>
        <View style={{borderWidth: 3.5, margin: 30, flex: 1, backgroundColor:'green', height:200, alignItems: 'center', justifyContent:'center', padding: 20, borderRadius: 2}}>
            <Image 
                style={{width: 50, height:50}} 
                source={require('../assets/airplane-icon.png')} />
            <Text style={styles.screen1_text}>Inflight entertainment!</Text>
        </View> 
        </KeyboardAwareScrollView>
    </View>
)
    
}
    
export default Screen_5;
    