import React, { useState, useCallback, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, TextInput, TouchableOpacity, Text, Image} from "react-native";
import styles from "./styles.js";

export function Screen_4() {
 


return(
    <View style={styles.container}>
        <Text style={{justifyContent:'center', textalign: 'center', color: 'black',fontSize: 20, fontWeight: 'bold',}}>Welcome to AAdvantage Inflight!</Text>
        <KeyboardAwareScrollView>
        <View style={{borderWidth: 3.5, margin: 30, flex: 1, backgroundColor:'white', height:200, alignItems: 'center', justifyContent:'center', padding: 20}}>
            <Image 
                style={{width: 50, height:50}} 
                source={require('../assets/airplane-icon.png')} />
            <Text style={styles.screen1_text}>Inflight entertainment!</Text>
        </View>
        <View style={{borderWidth: 3.5, margin: 30, flex: 1, backgroundColor:'white', height:200, alignItems: 'center', justifyContent:'center', padding: 20}}>
            <Text style={styles.screen1_text}>Movies and Music</Text>
            <Image 
                style={{width: 50, height:50}} 
                source={require('../assets/movie.png')} />
            <Text style={styles.screen1_text}>Enjoy our complimentary music, and movies free for all</Text>
        </View>
        <View style={{borderWidth: 3.5, margin: 30, flex: 1, backgroundColor:'white', height:200, alignItems: 'center', justifyContent:'center', padding: 20}}>
            <Text style={styles.screen1_text}>One time Unlimited Wifi!</Text>
            <Image 
                style={{width: 50, height:50}} 
                source={require('../assets/wifi1.png')} />
            <Text style={styles.screen1_text}>Sign Up for AAdvantage and get free for this flight! </Text>
        </View>
        <View style={{borderWidth: 3.5, margin: 30, flex: 1, backgroundColor:'white', height:200, alignItems: 'center', justifyContent:'center', padding: 20}}>
            <Text style={styles.screen1_text}>Subscription Models!</Text>
            <Image 
                style={{width: 200, height:20, padding: 20}} 
                source={require('../assets/subscribe.png')} />
            <Text style={styles.screen1_text}>Don't know how to use your miles? Get wifi on this and every AA flight! </Text>
        </View>
        </KeyboardAwareScrollView>
    </View>
)    
     
}
    
export default Screen_4;
    