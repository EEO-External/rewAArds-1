
import React, { useState, useCallback, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from "./styles";


function Checkin() {
    const navigation = useNavigation();
    const [setLastName, lastName] =  useState("")
    const [setRecordLocator, recordLocator] =  useState("")
    const [setPassword, password] =  useState("")
 
return(
    <View style={styles.container}>
        <KeyboardAwareScrollView style={{ flex: 1, width: "100%" }}
          keyboardShouldPersistTaps="always">
          
            <Text style={{color: 'black', marginLeft: 20, marginRight: 20,paddingLeft: 12,fontWeight: '400'}}>Hi Gerald,</Text>
            <Text style={styles.heading}>It's time to check in</Text>
            
            <TouchableOpacity
            style={styles.button}
            
          >
            <View style={styles.itemFlex1}>
            <Text style={styles.buttonTitle}>Add Bag</Text>
            <Ionicons name="add-circle-outline" size={24} color="white" style={{marginLeft:25, paddingTop:-25}} />
            <Text style={{textAlign: 'center', paddingTop: 5,color: 'white',fontSize: 16, }}> 1 </Text>
            <Ionicons name="remove-circle-outline" size={24} color="white" style={{paddingTop:-25, marginLeft: 5}} />
            </View>
            
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box}
          >
            <View style={styles.itemFlex1}>
            <Text style={styles.boxTitle}>Amount Due</Text>
            <Text style={styles.boxTitle1}>$30.00</Text>
            </View>
            
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box}
          >
            <View style={styles.itemFlex1}>
            <Text style={styles.boxTitle}>Due with rewAArds</Text>
            <Text style={styles.boxTitle2}>$0.00</Text>
            </View>
            
          </TouchableOpacity>
          <Text style={styles.heading}>Select Seats</Text>
    <View style={styles.itemFlex}>
    <TouchableOpacity style={styles.itemCard} >
     <View style={styles.infoContainer}>
        <Text style={styles.name}>A10</Text>
     </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.itemCard} >
     <View style={styles.infoContainer}>
        <Text style={styles.name}>A12</Text>
     </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.itemCard} >
     <View style={styles.infoContainer}>
        <Text style={styles.name}>A14</Text>
     </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.itemCard} >
     <View style={styles.infoContainer}>
        <Text style={styles.name}>A15</Text>
        <Text style={styles.price1}>Upgrade for $10/1000 miles</Text>
     </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.itemCard} >
     <View style={styles.infoContainer}>
        <Text style={styles.name}>A16</Text>
     </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.itemCard} >
     <View style={styles.infoContainer}>
        <Text style={styles.name}>A17</Text>
     </View>
    </TouchableOpacity>
    </View>
    <TouchableOpacity style={styles.button}
     onPress={() => navigation.navigate("SignUp")}
    >
        <Text style={styles.buttonTitle}>Check In</Text> 
    </TouchableOpacity>
   
  </KeyboardAwareScrollView>
</View>
)


}

export default Checkin;
